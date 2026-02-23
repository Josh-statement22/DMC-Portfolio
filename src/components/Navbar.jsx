import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowUp, ChevronDown } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [mobileAboutDropdown, setMobileAboutDropdown] = useState(false);
  const [projectsDropdown, setProjectsDropdown] = useState(false);
  const [mobileProjectsDropdown, setMobileProjectsDropdown] = useState(false);
  const dropdownTimeoutRef = useRef(null);
  const projectsTimeoutRef = useRef(null);

  const navLinks = ["Home", "About Us", "Products & Services", "Projects", "Contact"];
  const aboutSubLinks = ["Core/Values", "Corporate Responsibility", "Business Information"];
  const projectsSubLinks = ["Major Clients"];

  useEffect(() => {
    const handleScroll = () => setShowButton(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAboutMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setAboutDropdown(true);
  };

  const handleAboutMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setAboutDropdown(false);
    }, 300);
  };

  const handleProjectsMouseEnter = () => {
    if (projectsTimeoutRef.current) {
      clearTimeout(projectsTimeoutRef.current);
    }
    setProjectsDropdown(true);
  };

  const handleProjectsMouseLeave = () => {
    projectsTimeoutRef.current = setTimeout(() => {
      setProjectsDropdown(false);
    }, 300);
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <nav className="bg-white text-black w-full z-50 shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          {/* Logo + Text Left */}
          <div className="flex items-center">
            <img src="./src/assets/img/dmc-logo.png"  className="h-10 md:h-20"/>
            <span className="text-2xl md:text-1xl font-extrabold tracking-wide"></span>
          </div>

          {/* Links Right (Desktop) */}
          <div className="hidden md:flex gap-10 font-medium">
            {navLinks.map((link) =>
              link === "About Us" ? (
                <div
                  key={link}
                  className="relative group cursor-pointer"
                  onMouseEnter={handleAboutMouseEnter}
                  onMouseLeave={handleAboutMouseLeave}
                >
                  <span className="relative group flex items-center gap-1">
                    About Us
                    <ChevronDown size={18} className={`transition-transform duration-3 ${aboutDropdown ? 'rotate-180' : ''}`} />
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                  </span>

                  {aboutDropdown && (
                    <div className="absolute top-full left-0 mt-2 bg-white border shadow-md rounded-md w-48 py-2 z-50">
                      {aboutSubLinks.map((subLink) => (
                        <a
                          key={subLink}
                          href="#"
                          className="block px-4 py-2 text-black hover:bg-blue-50 transition"
                        >
                          {subLink}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : link === "Projects" ? (
                <div
                  key={link}
                  className="relative group cursor-pointer"
                  onMouseEnter={handleProjectsMouseEnter}
                  onMouseLeave={handleProjectsMouseLeave}
                >
                  <span className="relative group flex items-center gap-1">
                    Projects
                    <ChevronDown size={18} className={`transition-transform duration-3 ${projectsDropdown ? 'rotate-180' : ''}`} />
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                  </span>

                  {projectsDropdown && (
                    <div className="absolute top-full left-0 mt-2 bg-white border shadow-md rounded-md w-48 py-2 z-50">
                      {projectsSubLinks.map((subLink) => (
                        <a
                          key={subLink}
                          href="#"
                          className="block px-4 py-2 text-black hover:bg-blue-50 transition"
                        >
                          {subLink}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={link}
                  href="#"
                  className="relative group"
                >
                  {link}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)}>
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {open && (
          <div className="md:hidden bg-white px-6 py-6 space-y-2 font-medium border-t">
            {navLinks.map((link) =>
              link === "About" ? (
                <div key={link}>
                  <button
                    className="w-full text-left flex justify-between items-center border-b pb-2 hover:text-blue-600 transition"
                    onClick={() => setMobileAboutDropdown(!mobileAboutDropdown)}
                  >
                    About
                    <ChevronDown size={20} className={`transition-transform duration-300 ${mobileAboutDropdown ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileAboutDropdown && (
                    <div className="pl-4 mt-2 space-y-1">
                      {aboutSubLinks.map((subLink) => (
                        <a
                          key={subLink}
                          href="#"
                          className="block hover:text-blue-600 transition"
                        >
                          {subLink}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : link === "Projects" ? (
                <div key={link}>
                  <button
                    className="w-full text-left flex justify-between items-center border-b pb-2 hover:text-blue-600 transition"
                    onClick={() => setMobileProjectsDropdown(!mobileProjectsDropdown)}
                  >
                    Projects
                    <ChevronDown size={20} className={`transition-transform duration-300 ${mobileProjectsDropdown ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileProjectsDropdown && (
                    <div className="pl-4 mt-2 space-y-1">
                      {projectsSubLinks.map((subLink) => (
                        <a
                          key={subLink}
                          href="#"
                          className="block hover:text-blue-600 transition"
                        >
                          {subLink}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={link}
                  href="#"
                  className="block border-b pb-2 hover:text-blue-600 transition"
                >
                  {link}
                </a>
              )
            )}
          </div>
        )}
      </nav>

      {/* Scroll Up Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed right-6 bottom-6 bg-blue-600 hover:bg-blue-500 text-white p-4 rounded-full shadow-lg transition"
          title="Scroll to Top"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </>
  );
}

export default Navbar;