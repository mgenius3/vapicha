import { NextResponse } from 'next/server';

export async function POST(request: Request) {
 const origin = request.headers.get('origin');
 if (origin && origin !== new URL(request.url).origin) return NextResponse.json({error:'Invalid request origin.'},{status:403});
 let data: Record<string, unknown>;
 try {
  const raw = await request.text();
  if (raw.length > 12000) return NextResponse.json({error:'Your message is too long.'},{status:413});
  data = JSON.parse(raw);
  if (!data || typeof data !== 'object' || Array.isArray(data)) throw new Error();
 } catch { return NextResponse.json({error:'Please check your form and try again.'},{status:400}); }
 if (data.website) return NextResponse.json({error:'Please check your form and try again.'},{status:400});
 const limits: Record<string, number> = {name:150,email:254,institution:200,type:100,message:5000};
 const fields: Record<string,string> = {};
 for (const [key, limit] of Object.entries(limits)) {
  if (typeof data[key] !== 'string' || (data[key] as string).length > limit) return NextResponse.json({error:'Please check your form fields.'},{status:400});
  fields[key] = (data[key] as string).trim();
 }
 if (!fields.name || !fields.institution || !fields.type || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) return NextResponse.json({error:'Please provide your name, institution and a valid email address.'},{status:400});
 const key = process.env.RESEND_API_KEY;
 const from = process.env.CONTACT_FROM_EMAIL;
 if (!key || !from) return NextResponse.json({error:'Online requests are temporarily unavailable.'},{status:503});
 try {
  const result = await fetch('https://api.resend.com/emails', {
   method:'POST', headers:{Authorization:`Bearer ${key}`,'Content-Type':'application/json'},
   body:JSON.stringify({from,to:['business@vapicha.africa'],reply_to:fields.email,subject:'VaPicha demo request',text:`Name: ${fields.name}\nEmail: ${fields.email}\nInstitution: ${fields.institution}\nType: ${fields.type}\n\nNeeds: ${fields.message || 'Please contact me to arrange a demo.'}`}),
   signal:AbortSignal.timeout(15000)
  });
  if (!result.ok) return NextResponse.json({error:'Your request could not be sent. Please try again shortly.'},{status:502});
  return NextResponse.json({ok:true});
 } catch { return NextResponse.json({error:'Your request could not be sent. Please try again shortly.'},{status:502}); }
}
