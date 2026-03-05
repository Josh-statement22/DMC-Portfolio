import { Clock3, Mail, MapPin, Phone } from "lucide-react";

function Contact() {
  const contactCards = [
    {
      icon: <Phone size={18} />,
      title: "Call Us",
      detail: "+63 2 8123 4567",
      note: "Mon-Sat, 8:00 AM - 6:00 PM",
    },
    {
      icon: <Mail size={18} />,
      title: "Email",
      detail: "business@dmc-enterprises.com",
      note: "For proposals and technical inquiries",
    },
    {
      icon: <MapPin size={18} />,
      title: "Office",
      detail: "Makati City, Metro Manila",
      note: "Main corporate office",
    },
    {
      icon: <Clock3 size={18} />,
      title: "Response Time",
      detail: "Within 24 Hours",
      note: "For submitted inquiry forms",
    },
  ];

  return (
    <div className="bg-white text-blue-950">
      <section className="relative min-h-[52vh] flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <img
          src=""
          alt="Business consultation and planning"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-950/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/55 to-blue-950/25" />
        <div className="relative z-10 max-w-7xl mx-auto w-full py-20">
          <p className="uppercase tracking-[0.24em] text-xs sm:text-sm text-blue-100 font-semibold mb-4">
            Get in Touch
          </p>
          <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.96] max-w-4xl">
            Start Your Project Conversation Today.
          </h1>
          <p className="mt-5 text-blue-100 text-lg sm:text-xl max-w-3xl">
            Share your requirements and our team will prepare a tailored response for your project scope and timeline.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-50/40">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 rounded-2xl border border-blue-200 bg-white p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-black font-semibold mb-3">Inquiry Form</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Tell us what you need</h2>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-blue-900 mb-2" htmlFor="full-name">
                    Full Name
                  </label>
                  <input
                    id="full-name"
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-lg border border-blue-200 bg-white px-4 py-3 text-blue-950 placeholder:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-blue-900 mb-2" htmlFor="company">
                    Company
                  </label>
                  <input
                    id="company"
                    type="text"
                    placeholder="Company name"
                    className="w-full rounded-lg border border-blue-200 bg-white px-4 py-3 text-blue-950 placeholder:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-blue-900 mb-2" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    className="w-full rounded-lg border border-blue-200 bg-white px-4 py-3 text-blue-950 placeholder:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-blue-900 mb-2" htmlFor="phone">
                    Mobile Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+63"
                    className="w-full rounded-lg border border-blue-200 bg-white px-4 py-3 text-blue-950 placeholder:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-blue-900 mb-2" htmlFor="service">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    className="w-full rounded-lg border border-blue-200 bg-white px-4 py-3 text-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select service
                    </option>
                    <option value="products">Product Supply</option>
                    <option value="engineering">Engineering Support</option>
                    <option value="operations">Operations & Technical Services</option>
                    <option value="consulting">Strategic Consulting</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-blue-900 mb-2" htmlFor="timeline">
                    Project Timeline
                  </label>
                  <select
                    id="timeline"
                    className="w-full rounded-lg border border-blue-200 bg-white px-4 py-3 text-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select timeline
                    </option>
                    <option value="immediate">Immediate</option>
                    <option value="1-3-months">1-3 Months</option>
                    <option value="3-6-months">3-6 Months</option>
                    <option value="6plus-months">6+ Months</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-blue-900 mb-2" htmlFor="message">
                  Project Details
                </label>
                <textarea
                  id="message"
                  rows="6"
                  placeholder="Share your project requirements, site location, and technical needs..."
                  className="w-full rounded-lg border border-blue-200 bg-white px-4 py-3 text-blue-950 placeholder:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 bg-blue-800 text-white rounded-md font-semibold hover:bg-blue-900 transition-all duration-300"
              >
                Submit Inquiry
              </button>
            </form>
          </div>

          <div className="lg:col-span-5 space-y-4">
            {contactCards.map((item) => (
              <article key={item.title} className="rounded-2xl border border-blue-200 bg-white p-5 sm:p-6">
                <div className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-blue-100 text-blue-800 mb-3">
                  {item.icon}
                </div>
                <p className="text-sm uppercase tracking-[0.16em] text-black font-semibold mb-1">{item.title}</p>
                <p className="text-lg font-bold text-blue-950">{item.detail}</p>
                <p className="text-black/80 mt-1">{item.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;

