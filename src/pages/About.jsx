import { Link } from "react-router-dom";

function About() {

  return (
    <div className="bg-white text-blue-950">
      <section className="relative min-h-[55vh] flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=80"
          alt="Organization leadership planning session"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-950/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/50 to-blue-950/20" />
        <div className="relative z-10 max-w-7xl mx-auto w-full py-20">
          <p className="uppercase tracking-[0.24em] text-xs sm:text-sm text-blue-100 font-semibold mb-4">
            Organization
          </p>
          <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.96] max-w-4xl">About DMC</h1>
          <p className="mt-5 text-blue-100 text-lg sm:text-xl max-w-3xl">
            Learn more about our company profile, governance, and how we execute projects with discipline and accountability.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-50/40">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl border border-blue-200 bg-white p-8 sm:p-10 text-center">
            <p className="uppercase tracking-[0.24em] text-xs sm:text-sm text-blue-700 font-semibold mb-4">
              Company Overview
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-950 mb-4">Organizational Structure has its own page</h2>
            <p className="text-blue-900/80 max-w-2xl mx-auto mb-8">
              The full organizational chart is now separated so it is easier to view and manage as a dedicated page.
            </p>
            <Link
              to="/organizational-structure"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-blue-700 text-white font-semibold hover:bg-blue-800 transition-colors"
            >
              View Organizational Structure
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
