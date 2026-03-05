import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowUp, ChevronDown } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/img/dmc-logo.png";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [mobileAboutDropdown, setMobileAboutDropdown] = useState(false);
  const [productsDropdown, setProductsDropdown] = useState(false);
  const [mobileProductsDropdown, setMobileProductsDropdown] = useState(false);
  const [projectsDropdown, setProjectsDropdown] = useState(false);
  const [mobileProjectsDropdown, setMobileProjectsDropdown] = useState(false);
  const location = useLocation();

  const dropdownTimeoutRef = useRef(null);
  const productsTimeoutRef = useRef(null);
  const projectsTimeoutRef = useRef(null);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Products & Services", path: "/products" },
    { name: "Projects", path: "/projects" },
  ];

  const aboutSubLinks = [
    { name: "Core/Values", path: "/core-values" },
    { name: "Corporate Responsibility", path: "/corporate-responsibility" },
    { name: "Organizational Structure", path: "/organizational-structure" },
  ];

  const projectsSubLinks = [
    { name: "Finished Contracts", path: "/finished-contracts" },
    { name: "Valued Clients", path: "/valued-clients" },
  ];
  const productItemsSubLinks = [
    { name: "Automotive", path: "/products/items/automotive" },
    { name: "Construction", path: "/products/items/construction" },
    { name: "Industrial", path: "/products/items/industrial" },
    { name: "PPE", path: "/products/items/ppe" },
    { name: "Hardware", path: "/products/items/hardware" },
    { name: "Electrical & Industrial Tools", path: "/products/items/electrical-industrial-tools" },
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
  const handleProductsMouseEnter = () => {
    if (productsTimeoutRef.current) clearTimeout(productsTimeoutRef.current);
    setProductsDropdown(true);
  };

  const handleProductsMouseLeave = () => {
    productsTimeoutRef.current = setTimeout(() => {
      setProductsDropdown(false);
    }, 300);
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const isPathActive = (path) => location.pathname === path;
  const closeDesktopDropdowns = () => {
    setAboutDropdown(false);
    setProductsDropdown(false);
    setProjectsDropdown(false);
  };

  const isAboutActive =
    location.pathname === "/about" || aboutSubLinks.some((link) => link.path === location.pathname);
  const isProductsActive = location.pathname.startsWith("/products") || location.pathname.startsWith("/services");
  const isProjectsActive =
    location.pathname === "/projects" || projectsSubLinks.some((link) => link.path === location.pathname);
  const subLinkClass = (path) =>
    `block rounded-md px-3 py-2.5 text-[14px] normal-case tracking-normal transition-all duration-200 ${
      isPathActive(path)
        ? "bg-blue-50 text-blue-900 border border-blue-200"
        : "text-slate-700 hover:bg-slate-100 hover:text-slate-950 border border-transparent"
    }`;
  const mobileSubLinkClass = (path) =>
    `block rounded-md px-3 py-2.5 text-[15px] normal-case tracking-normal transition-all duration-200 ${
      isPathActive(path)
        ? "bg-blue-50 text-blue-900 border border-blue-200"
        : "text-slate-700 hover:text-slate-950 hover:bg-slate-100 border border-transparent"
    }`;

  const desktopLinkClass = ({ isActive }) =>
    `group relative pb-1.5 transition-colors duration-300 ${
      isActive ? "text-slate-950" : "text-slate-700 hover:text-slate-950"
    }`;

  return (
    <>
      <nav className="sticky top-0 bg-white border-b border-slate-300 text-black w-full z-50 [font-family:var(--font-heading)]">
        <div className="max-w-7xl mx-auto px-6 py-3.5 flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="DMC logo" className="h-14 md:h-16 w-auto" />
              <span className="hidden sm:block text-[14px] md:text-[15px] normal-case tracking-normal text-slate-900 leading-tight font-semibold">
                D. Michael Co (DMC) Enterprises Corp
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-8 ml-[20px] font-semibold text-[15px] uppercase tracking-[0.08em]">
            {navLinks.map((link) =>
              link.name === "About Us" ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={handleAboutMouseEnter}
                  onMouseLeave={handleAboutMouseLeave}
                >
                  <div
                    className={`group relative flex items-center gap-1 cursor-pointer transition-colors duration-300 pb-1.5 ${
                      isAboutActive ? "text-slate-950" : "text-slate-700 hover:text-slate-950"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${aboutDropdown ? "rotate-180" : ""}`}
                    />
                    <span
                      className={`absolute -bottom-0.5 left-0 h-0.5 bg-blue-700 transition-all duration-300 ${
                        isAboutActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </div>

                  {aboutDropdown && (
                    <div className="absolute top-full left-0 mt-2 bg-white border border-slate-300 shadow-xl rounded-md w-72 p-2 z-50">
                      <p className="px-3 pb-2 text-[11px] tracking-[0.16em] uppercase text-slate-500">About</p>
                      {aboutSubLinks.map((subLink) => (
                        <Link
                          key={subLink.name}
                          to={subLink.path}
                          onClick={closeDesktopDropdowns}
                          className={subLinkClass(subLink.path)}
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : link.name === "Products & Services" ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={handleProductsMouseEnter}
                  onMouseLeave={handleProductsMouseLeave}
                >
                  <div
                    className={`group relative flex items-center gap-1 cursor-pointer transition-colors duration-300 pb-1.5 ${
                      isProductsActive ? "text-slate-950" : "text-slate-700 hover:text-slate-950"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${productsDropdown ? "rotate-180" : ""}`}
                    />
                    <span
                      className={`absolute -bottom-0.5 left-0 h-0.5 bg-blue-700 transition-all duration-300 ${
                        isProductsActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </div>

                  {productsDropdown && (
                    <div className="absolute top-full left-0 mt-2 bg-white border border-slate-300 shadow-xl rounded-md w-80 p-2 z-50">
                      <p className="px-3 pb-2 text-[11px] tracking-[0.16em] uppercase text-slate-500">Products & Services</p>
                      <div className="space-y-1">
                        <Link to="/products" onClick={closeDesktopDropdowns} className={subLinkClass("/products")}>
                          Products
                        </Link>
                        <div className="pl-4 space-y-1 border-l border-slate-200 ml-3 my-2">
                          {productItemsSubLinks.map((subLink) => (
                            <Link
                              key={subLink.name}
                              to={subLink.path}
                              onClick={closeDesktopDropdowns}
                              className={subLinkClass(subLink.path)}
                            >
                              {subLink.name}
                            </Link>
                          ))}
                        </div>
                        <Link to="/services" onClick={closeDesktopDropdowns} className={subLinkClass("/services")}>
                          Services
                        </Link>
                      </div>
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
                    className={`group relative flex items-center gap-1 cursor-pointer transition-colors duration-300 pb-1.5 ${
                      isProjectsActive ? "text-slate-950" : "text-slate-700 hover:text-slate-950"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${projectsDropdown ? "rotate-180" : ""}`}
                    />
                    <span
                      className={`absolute -bottom-0.5 left-0 h-0.5 bg-blue-700 transition-all duration-300 ${
                        isProjectsActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </div>

                  {projectsDropdown && (
                    <div className="absolute top-full left-0 mt-2 bg-white border border-slate-300 shadow-xl rounded-md w-64 p-2 z-50">
                      <p className="px-3 pb-2 text-[11px] tracking-[0.16em] uppercase text-slate-500">Projects</p>
                      {projectsSubLinks.map((subLink) => (
                        <Link
                          key={subLink.name}
                          to={subLink.path}
                          onClick={closeDesktopDropdowns}
                          className={subLinkClass(subLink.path)}
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
                        className={`absolute -bottom-0.5 left-0 h-0.5 bg-blue-700 transition-all duration-300 ${
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
              className="ml-2 px-5 py-2.5 rounded-sm bg-blue-800 text-white hover:bg-blue-700 transition-all duration-300 border border-blue-900"
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
          <div className="md:hidden bg-white px-6 py-6 space-y-3 text-[16px] font-semibold uppercase tracking-[0.08em] border-t border-slate-300 [font-family:var(--font-heading)]">
            {navLinks.map((link) =>
              link.name === "About Us" ? (
                <div key={link.name}>
                  <button
                    className="w-full flex justify-between items-center text-slate-800 hover:text-slate-950 transition-colors duration-300"
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
                          className={mobileSubLinkClass(subLink.path)}
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : link.name === "Products & Services" ? (
                <div key={link.name}>
                  <button
                    className="w-full flex justify-between items-center text-slate-800 hover:text-slate-950 transition-colors duration-300"
                    onClick={() => setMobileProductsDropdown(!mobileProductsDropdown)}
                  >
                    {link.name}
                    <ChevronDown
                      size={20}
                      className={`transition-transform ${mobileProductsDropdown ? "rotate-180" : ""}`}
                    />
                  </button>

                  {mobileProductsDropdown && (
                    <div className="pl-4 mt-2 space-y-2">
                      <Link to="/products" onClick={() => setOpen(false)} className={mobileSubLinkClass("/products")}>
                        Products
                      </Link>
                      <div className="pl-4 space-y-1">
                        {productItemsSubLinks.map((subLink) => (
                          <Link
                            key={subLink.name}
                            to={subLink.path}
                            onClick={() => setOpen(false)}
                            className={mobileSubLinkClass(subLink.path)}
                          >
                            {subLink.name}
                          </Link>
                        ))}
                      </div>
                      <Link to="/services" onClick={() => setOpen(false)} className={mobileSubLinkClass("/services")}>
                        Services
                      </Link>
                    </div>
                  )}
                </div>
              ) : link.name === "Projects" ? (
                <div key={link.name}>
                  <button
                    className="w-full flex justify-between items-center text-slate-800 hover:text-slate-950 transition-colors duration-300"
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
                          className={mobileSubLinkClass(subLink.path)}
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
                  className="block rounded-sm px-3 py-2 text-slate-800 hover:text-slate-950 hover:bg-slate-100 transition-all duration-200"
                >
                  {link.name}
                </Link>
              )
            )}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex px-5 py-2.5 rounded-sm bg-blue-800 text-white hover:bg-blue-700 transition-all duration-300 border border-blue-900"
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
