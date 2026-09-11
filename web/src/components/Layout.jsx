import { Outlet, useLocation } from 'react-router-dom'
import Navigation from './Navigation.jsx'
import Footer from './Footer.jsx'
import CtaBanner from './CtaBanner.jsx'
import ScrollToTop from './ScrollToTop.jsx'

const NO_CTA_ROUTES = ['/', '/contact']

export default function Layout() {
  const { pathname } = useLocation()

  return (
    <div className="bg-ivory-50">
      <ScrollToTop />
      <Navigation />
      <main>
        <Outlet />
      </main>
      {!NO_CTA_ROUTES.includes(pathname) && <CtaBanner />}
      <Footer />
    </div>
  )
}
