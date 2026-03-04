import { Link } from "react-router-dom";
import logo from "../assets/img/dmc-logo.png";

function Footer() {
  const year = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Products & Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const companyLinks = [
    { name: "Core Values", path: "/core-values" },
    { name: "Corporate Responsibility", path: "/corporate-responsibility" },
    { name: "Organizational Structure", path: "/organizational-structure" },
    { name: "Finished Contracts", path: "/finished-contracts" },
    { name: "Valued Clients", path: "/valued-clients" },
  ];

  return (
    <footer className="bg-slate-950 text-slate-200 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="inline-flex items-center mb-5">
              <img src={logo} alt="DMC logo" className="h-12 w-auto" />
            </Link>
            <p className="text-slate-300/90 text-sm leading-relaxed max-w-sm">
              D. Michael Co (DMC) Enterprises Corp. delivers disciplined engineering support, industrial solutions,
              and reliable project execution.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm text-slate-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400 mb-4">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm text-slate-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400 mb-4">Contact</h3>
            <div className="space-y-3 text-sm text-slate-300">
              <p>Taguig City, Metro Manila, Philippines</p>
              <p>+63 912 345 6789</p>
              <p>info@dmc-enterprises.com</p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center mt-5 px-4 py-2 rounded-md bg-blue-700 hover:bg-blue-600 text-white text-sm font-semibold transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <p className="text-xs text-slate-400">Copyright {year} D. Michael Co (DMC) Enterprises Corp. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link to="/contact" className="text-xs text-slate-400 hover:text-slate-200 transition-colors">
              Privacy
            </Link>
            <Link to="/contact" className="text-xs text-slate-400 hover:text-slate-200 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
