import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useEffect, useState } from "react";

export function scrollToTopSlowly() {
    const scrollStep = -window.scrollY / 50; 
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
};

export default function Navbar() {
  const location = useLocation();
  const [showNav, setShowNav] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  
  useEffect(() => {
    if (location.pathname === "/") {
      setShowNav(false);

      const handleScroll = () => {
        if (window.scrollY > 0) {
          setShowNav(true);
        } else {
          setShowNav(false);
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setShowNav(true);
    }
  }, [location]);

  if (!showNav) return null;

  return (
    <nav className="fixed overflow-hidden z-50 w-full bg-gray-950/10 backdrop-blur-2xl">
      <div className="px-6 m-auto max-w-6xl 2xl:px-0">
        <div className="flex flex-wrap items-center justify-between py-2 sm:py-4">
          <div className="w-full items-center flex justify-between lg:w-auto">
            <Link to="/" className="text-2xl font-bold" onClick={scrollToTopSlowly}>
              <img src="logo.png" width={"100px"} alt="Logo" />
            </Link>
            <div className="flex lg:hidden">
              <button
                onClick={toggleMenu}
                id="menu-btn"
                aria-label="open menu"
                className="btn variant-ghost sz-md icon-only relative z-20 -mr-2.5 block cursor-pointer lg:hidden"
              >
                {/* Ícone de hamburguer */}
                <svg
                  className={`text-title m-auto size-6 transition duration-300 ${
                    isMenuOpen ? "opacity-0 rotate-180 scale-0" : "opacity-100 rotate-0 scale-100"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                </svg>
                <svg
                  className={`text-title absolute inset-0 m-auto size-6 transition duration-300 ${
                    isMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-180 scale-0"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          <div
            className={`
              w-full 
              overflow-hidden 
              lg:w-auto 
              flex-wrap justify-end items-center space-y-8 lg:space-y-0 
              lg:flex lg:h-fit md:flex-nowrap
              transition-all duration-300
              ${isMenuOpen ? "h-fit py-4" : "h-0"} 
            `}
          >
            <div className="mt-6 dark:text-body md:-ml-4 lg:pr-4 lg:mt-0">
              <ul className="space-y-6 tracking-wide text-base lg:text-sm lg:flex lg:space-y-0">
                <li>
                  <ScrollLink
                    className="cursor-pointer md:px-4 block"
                    to="produtos"
                    smooth={true}
                    duration={1500}
                    offset={-50}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span>Projects</span>
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    className="cursor-pointer md:px-4 block"
                    to="about-Jonas"
                    smooth={true}
                    duration={1500}
                    offset={-50}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span>About</span>
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    className="cursor-pointer md:px-4 block"
                    to="reuniao"
                    smooth={true}
                    duration={1500}
                    offset={-50}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span>agende já</span>
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    className="cursor-pointer md:px-4 block"
                    to="bob"
                    smooth={true}
                    duration={1500}
                    offset={-50}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span>Tire a sua dúvida</span>
                  </ScrollLink>
                </li>
              </ul>
            </div>
            
          </div>
        </div>
      </div>
    </nav>
  );
}
