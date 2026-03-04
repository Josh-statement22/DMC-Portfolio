import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowUp, ChevronDown } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/img/dmc-logo.png";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [mobileAboutDropdown, setMobileAboutDropdown] = useState(false);
  const [projectsDropdown, setProjectsDropdown] = useState(false);
  const [mobileProjectsDropdown, setMobileProjectsDropdown] = useState(false);
  const location = useLocation();

  const dropdownTimeoutRef = useRef(null);
  const projectsTimeoutRef = useRef(null);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Products & Services", path: "/services" },
    { name: "Projects", path: "/projects" },
  ];

  const aboutSubLinks = [
    { name: "Core/Values", path: "/core-values" },
    { name: "Corporate Responsibility", path: "/corporate-responsibility" },
    { name: "Organizational Structure", path: "/organizational-structure" },
    { name: "Business Information", path: "/business-information" },
  ];

  const projectsSubLinks = [
    { name: "Finished Contracts", path: "/finished-contracts" },
    { name: "Valued Clients", path: "/valued-clients" },
  ];

  useEffect(() => {
    const handleScroll = () => setShowButton(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAboutMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setAboutDropdown(true);
  };

  const handleAboutMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setAboutDropdown(false);
    }, 300);
  };

  const handleProjectsMouseEnter = () => {
    if (projectsTimeoutRef.current) clearTimeout(projectsTimeoutRef.current);
    setProjectsDropdown(true);
  };

  const handleProjectsMouseLeave = () => {
    projectsTimeoutRef.current = setTimeout(() => {
      setProjectsDropdown(false);
    }, 300);
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const isAboutActive =
    location.pathname === "/about" || aboutSubLinks.some((link) => link.path === location.pathname);
  const isProjectsActive =
    location.pathname === "/projects" || projectsSubLinks.some((link) => link.path === location.pathname);

  const desktopLinkClass = ({ isActive }) =>
    `group relative pb-1 transition-colors duration-300 ${
      isActive ? "text-slate-900" : "text-slate-700 hover:text-slate-900"
    }`;

  return (
    <>
      <nav className="sticky top-0 bg-white/95 backdrop-blur border-b border-slate-200/80 text-black w-full z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="DMC logo" className="h-11 md:h-12 w-auto" />
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-9 font-medium text-[15px]">
            {navLinks.map((link) =>
              link.name === "About Us" ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={handleAboutMouseEnter}
                  onMouseLeave={handleAboutMouseLeave}
                >
                  <div
                    className={`group relative flex items-center gap-1 cursor-pointer transition-colors duration-300 pb-1 ${
                      isAboutActive ? "text-slate-900" : "text-slate-700 hover:text-slate-900"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${aboutDropdown ? "rotate-180" : ""}`}
                    />
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-blue-700 transition-all duration-300 ${
                        isAboutActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </div>

                  {aboutDropdown && (
                    <div className="absolute top-full left-0 mt-3 bg-white border border-slate-200 shadow-xl rounded-lg w-56 p-2 z-50">
                      {aboutSubLinks.map((subLink) => (
                        <Link
                          key={subLink.name}
                          to={subLink.path}
                          className="block rounded-md px-3 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-900 transition-all duration-200 hover:translate-x-1"
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : link.name === "Projects" ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={handleProjectsMouseEnter}
                  onMouseLeave={handleProjectsMouseLeave}
                >
                  <div
                    className={`group relative flex items-center gap-1 cursor-pointer transition-colors duration-300 pb-1 ${
                      isProjectsActive ? "text-slate-900" : "text-slate-700 hover:text-slate-900"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${projectsDropdown ? "rotate-180" : ""}`}
                    />
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-blue-700 transition-all duration-300 ${
                        isProjectsActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </div>

                  {projectsDropdown && (
                    <div className="absolute top-full left-0 mt-3 bg-white border border-slate-200 shadow-xl rounded-lg w-56 p-2 z-50">
                      {projectsSubLinks.map((subLink) => (
                        <Link
                          key={subLink.name}
                          to={subLink.path}
                          className="block rounded-md px-3 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-900 transition-all duration-200 hover:translate-x-1"
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink key={link.name} to={link.path} className={desktopLinkClass}>
                  {({ isActive }) => (
                    <>
                      {link.name}
                      <span
                        className={`absolute -bottom-1 left-0 h-0.5 bg-blue-700 transition-all duration-300 ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              )
            )}
            <Link
              to="/contact"
              className="ml-2 px-5 py-2.5 rounded-md bg-slate-900 text-white hover:bg-slate-800 hover:-translate-y-0.5 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Get in Touch
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setOpen(!open)} className="text-slate-900">
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden bg-white px-6 py-6 space-y-3 font-medium border-t border-slate-200">
            {navLinks.map((link) =>
              link.name === "About Us" ? (
                <div key={link.name}>
                  <button
                    className="w-full flex justify-between items-center text-slate-800 hover:text-blue-900 transition-colors duration-300"
                    onClick={() => setMobileAboutDropdown(!mobileAboutDropdown)}
                  >
                    {link.name}
                    <ChevronDown
                      size={20}
                      className={`transition-transform ${mobileAboutDropdown ? "rotate-180" : ""}`}
                    />
                  </button>

                  {mobileAboutDropdown && (
                    <div className="pl-4 mt-2 space-y-2">
                      {aboutSubLinks.map((subLink) => (
                        <Link
                          key={subLink.name}
                          to={subLink.path}
                          onClick={() => setOpen(false)}
                          className="block rounded-md px-3 py-2 text-slate-600 hover:text-blue-900 hover:bg-blue-50 transition-all duration-200"
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : link.name === "Projects" ? (
                <div key={link.name}>
                  <button
                    className="w-full flex justify-between items-center text-slate-800 hover:text-blue-900 transition-colors duration-300"
                    onClick={() => setMobileProjectsDropdown(!mobileProjectsDropdown)}
                  >
                    {link.name}
                    <ChevronDown
                      size={20}
                      className={`transition-transform ${mobileProjectsDropdown ? "rotate-180" : ""}`}
                    />
                  </button>

                  {mobileProjectsDropdown && (
                    <div className="pl-4 mt-2 space-y-2">
                      {projectsSubLinks.map((subLink) => (
                        <Link
                          key={subLink.name}
                          to={subLink.path}
                          onClick={() => setOpen(false)}
                          className="block rounded-md px-3 py-2 text-slate-600 hover:text-blue-900 hover:bg-blue-50 transition-all duration-200"
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-slate-800 hover:text-blue-900 hover:bg-blue-50 transition-all duration-200"
                >
                  {link.name}
                </Link>
              )
            )}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex px-5 py-2.5 rounded-md bg-slate-900 text-white hover:bg-slate-800 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Get in Touch
            </Link>
          </div>
        )}
      </nav>

      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed right-6 bottom-6 bg-blue-600 text-white p-4 rounded-full shadow-lg"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </>
  );
}

export default Navbar;
