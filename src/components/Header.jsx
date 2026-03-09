import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaPhone, FaBars, FaTimes, FaCalendarCheck, FaMapMarkerAlt } from 'react-icons/fa';

const menuItems = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Heart Health Videos', path: '/heart-health-videos' },
  { label: 'Contact', path: '/contact' },
  { label: 'Reach Us', path: 'https://maps.app.goo.gl/tsKEg2pHUXZzp1STA' },
];

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => {
    setDrawerOpen(false);
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-[#30638E]/95 backdrop-blur-md shadow-lg'
          : 'bg-[#30638E] shadow-md'
          }`}
      >
        <div className="max-w-7xl !mx-auto !px-4 sm:!px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo + Title */}
            <Link to="/" className="flex items-center gap-2.5 flex-shrink-0 no-underline">
              <img src="/nc.png" alt="NHMC Logo" className="h-10 w-auto" />
              <div className="leading-tight">
                <span className="text-white font-bold text-sm sm:text-base block">
                  Narayan Heart
                </span>
                <span className="text-white/80 font-medium text-xs sm:text-sm block">
                  & Maternity Centre
                </span>
              </div>
            </Link>

            {/* Desktop: Phone Numbers */}
            <div className="hidden md:flex items-center gap-1.5 text-white/90 text-sm">
              <FaPhone className="text-xs" />
              <a href="tel:+919708441467" className="text-white/90 hover:text-white no-underline transition-colors">
                +91 97084 41467
              </a>
              <span className="text-white/40 !mx-1">|</span>
              <a href="tel:+919836197624" className="text-white/90 hover:text-white no-underline transition-colors">
                +91 98361 97624
              </a>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {menuItems.map(({ label, path }) => {
                const isExternal = path.startsWith('http');
                const active = !isExternal && isActive(path);
                const linkProps = isExternal
                  ? { href: path, target: '_blank', rel: 'noopener noreferrer' }
                  : {};

                const Comp = isExternal ? 'a' : Link;
                const toProps = isExternal ? {} : { to: path };

                return (
                  <Comp
                    key={label}
                    {...linkProps}
                    {...toProps}
                    className={`relative !px-3 !py-1.5 text-sm font-medium no-underline transition-colors rounded-lg group ${active ? 'text-[#3CAEA3]' : 'text-white/90 hover:text-white'
                      }`}
                  >
                    {label}
                    {/* Underline animation */}
                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-[#3CAEA3] rounded-full transition-all duration-300 ${active ? 'w-3/5' : 'w-0 group-hover:w-3/5'
                        }`}
                    />
                  </Comp>
                );
              })}
              <Link
                to="/book"
                className="!ml-2 flex items-center gap-1.5 bg-[#3CAEA3] hover:bg-[#2F9E94] text-white text-sm font-semibold !px-4 !py-2 rounded-full no-underline shadow-sm hover:shadow-md active:scale-[0.97] transition-all duration-200"
              >
                Book Appointment
              </Link>
            </nav>

            {/* Mobile: Hamburger */}
            <button
              onClick={() => setDrawerOpen(true)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-white hover:bg-white/10 transition-colors"
              aria-label="Open menu"
            >
              <FaBars className="text-xl" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {drawerOpen && (
        <div className="fixed inset-0 z-[60] md:hidden" onClick={() => setDrawerOpen(false)}>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        </div>
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white z-[70] shadow-2xl transform transition-transform duration-300 ease-out md:hidden ${drawerOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        {/* Drawer Header */}
        <div className="bg-gradient-to-r from-[#30638E] to-[#1a4a6e] !p-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <img src="/nc.webp" alt="NHMC" className="h-9 w-auto" />
            <div className="leading-tight">
              <span className="text-white font-bold text-sm block">Narayan Heart</span>
              <span className="text-white/70 text-xs block">& Maternity Centre</span>
            </div>
          </div>
          <button
            onClick={() => setDrawerOpen(false)}
            className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Close menu"
          >
            <FaTimes className="text-sm" />
          </button>
        </div>

        {/* Drawer Nav */}
        <nav className="!p-3 !space-y-1">
          {menuItems.map(({ label, path }) => {
            const isExternal = path.startsWith('http');
            const active = !isExternal && isActive(path);
            const Comp = isExternal ? 'a' : Link;
            const props = isExternal
              ? { href: path, target: '_blank', rel: 'noopener noreferrer' }
              : { to: path };

            return (
              <Comp
                key={label}
                {...props}
                onClick={() => setDrawerOpen(false)}
                className={`flex items-center gap-3 !px-4 !py-3 rounded-xl text-sm font-medium no-underline transition-all duration-200 ${active
                  ? 'bg-[#30638E] text-white shadow-sm'
                  : 'text-gray-700 hover:bg-gray-100'
                  }`}
              >
                {label === 'Reach Us' && <FaMapMarkerAlt className="text-xs text-gray-400" />}
                {label}
              </Comp>
            );
          })}
        </nav>

        <div className="!px-3 !mt-2">
          <div className="border-t border-gray-100 !pt-3">
            <Link
              to="/book"
              onClick={() => setDrawerOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#3CAEA3] to-[#2F9E94] text-white text-sm font-semibold !py-3 rounded-xl no-underline shadow-sm hover:shadow-md active:scale-[0.98] transition-all"
            >
              <FaCalendarCheck className="text-xs" />
              Book Appointment
            </Link>
          </div>
        </div>

        {/* Drawer Phone Numbers */}
        <div className="absolute bottom-0 left-0 right-0 !p-4 border-t border-gray-100 bg-gray-50">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider !mb-2">Call Us</p>
          <div className="!space-y-2">
            <a href="tel:+919708441467" className="flex items-center gap-2 text-sm text-gray-700 no-underline hover:text-[#30638E] transition-colors">
              <FaPhone className="text-xs text-[#3CAEA3]" /> +91 97084 41467
            </a>
            <a href="tel:+919836197624" className="flex items-center gap-2 text-sm text-gray-700 no-underline hover:text-[#30638E] transition-colors">
              <FaPhone className="text-xs text-[#3CAEA3]" /> +91 98361 97624
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
