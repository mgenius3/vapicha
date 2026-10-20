# Direct contact email

The demo form posts all five fields to `/api/contact`, which sends to the fixed recipient `business@vapicha.africa` through Resend. The visitor's work email is the reply-to address. No email credentials are exposed to the browser.

1. Verify a sending domain in Resend and create a sending API key.
2. Set `RESEND_API_KEY` and `CONTACT_FROM_EMAIL` in `.env.local` locally or in the deployment's environment settings. See `.env.example`. Do not commit secrets.
3. Deploy to a host supporting Next.js route handlers (not static-only hosting). Run `npm run build` and `npm start` for a local production server.
4. Submit a real request after configuration and confirm receipt in the business inbox. Delivery has not been tested without credentials.

Without configuration, the endpoint returns an explicit unavailable message and the form offers the business email address. It never reports a failed send as successful. Configure provider/hosting rate limits before public traffic.

Reference: https://resend.com/docs/api-reference/emails/send-email
