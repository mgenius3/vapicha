// VaPicha corporate website (/site/*): separate shell and routes from the banking applications.
import { Navigate, Route, Routes } from 'react-router-dom'
import SiteLayout from './SiteLayout'
import SiteHome from './SiteHome'
import SiteSolutions from './SiteSolutions'
import SiteProduct from './SiteProduct'
import SiteAbout from './SiteAbout'
import SiteCareers from './SiteCareers'
import SiteContact from './SiteContact'
import SiteLegal from './SiteLegal'

export default function SiteApp() {
  return (
    <SiteLayout>
      <Routes>
        <Route index element={<SiteHome />} />
        <Route path="solutions" element={<SiteSolutions />} />
        <Route path="product" element={<SiteProduct />} />
        <Route path="about" element={<SiteAbout />} />
        <Route path="careers" element={<SiteCareers />} />
        <Route path="contact" element={<SiteContact />} />
        <Route path="legal/:slug" element={<SiteLegal />} />
        <Route path="privacy" element={<Navigate to="/site/legal/privacy" replace />} />
        <Route path="*" element={<Navigate to="/site" replace />} />
      </Routes>
    </SiteLayout>
  )
}
