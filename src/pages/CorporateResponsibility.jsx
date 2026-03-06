import { ArrowRight, HeartHandshake, Leaf, ShieldCheck } from 'lucide-react';
import sheFirstImage from "../assets/img/corporate-responsibility/sheFirst.jpg";
import voluntaryImage from "../assets/img/corporate-responsibility/voluntary.jpg";
import outstandingQualityImage from "../assets/img/corporate-responsibility/outstandingQuality.jpg";

export default function CorporateResponsibility() {
  return (
    <div className="bg-white text-blue-950">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center text-white px-4 sm:px-6 lg:px-8 overflow-hidden">
        <img
          src=""
          alt="Sustainable industrial site with green landscape"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-950/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/65 to-blue-950/20" />

        <div className="relative z-10 max-w-7xl mx-auto w-full py-28 sm:py-32">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7 space-y-6 text-left">
              <p className="uppercase tracking-[0.24em] text-xs sm:text-sm text-slate-200 font-semibold">
                Sustainability
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.96] max-w-4xl">
                Corporate Responsibility in Every Operation.
              </h1>
              <p className="text-lg sm:text-xl text-slate-200 max-w-3xl leading-relaxed">
                The greatest possible safety, optimal protection of health, and protection of the environment are at
                the heart of our activities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="px-8 py-4 bg-white hover:bg-slate-100 text-slate-900 rounded-md font-semibold text-lg transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg shadow-slate-950/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70">
                  View Responsibility Framework <ArrowRight size={20} />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="w-full max-w-md ml-auto rounded-xl border border-white/20 bg-blue-950/35 backdrop-blur-md p-6 sm:p-7 shadow-2xl shadow-blue-950/50">
                <p className="text-xs uppercase tracking-[0.2em] text-blue-100/80 mb-5">Focus Areas</p>
                <div className="space-y-5">
                  <div className="pb-4 border-b border-white/15">
                    <p className="text-2xl font-bold text-white">Safety & Health</p>
                    <p className="text-blue-100 mt-1">Highest safety standards and health protection across all activities.</p>
                  </div>
                  <div className="pb-4 border-b border-white/15">
                    <p className="text-2xl font-bold text-white">Environmental Care</p>
                    <p className="text-blue-100 mt-1">Sustainable practices that reduce impact and protect resources.</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">Social Commitment</p>
                    <p className="text-blue-100 mt-1">Voluntary staff involvement in meaningful social projects.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Responsibility Sections */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 max-w-4xl">
            <p className="uppercase tracking-[0.24em] text-xs sm:text-sm text-black font-semibold mb-4">
              Responsibility Framework
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-blue-950 tracking-tight leading-tight mb-5">
              One Integrated Policy for People and Planet
            </h2>
            <p className="text-lg text-black/85 leading-relaxed">
              Our approach is structured as one connected system: policy standards for safety, health, and the
              environment, followed by direct social participation through voluntary staff action.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-6 mb-10">
            <article className="lg:col-span-5 rounded-2xl border border-blue-100 overflow-hidden bg-blue-950 text-white">
              <img
                src={sheFirstImage}
                alt="Safety and health in industrial operations"
                className="h-64 sm:h-72 w-full object-cover"
              />
              <div className="p-6 sm:p-7">
                <p className="text-xs uppercase tracking-[0.2em] text-blue-100/80 mb-3">Company Policy</p>
                <h3 className="text-3xl font-bold mb-4">Safety, Health, and Environment First</h3>
                <p className="text-blue-100/95 leading-relaxed">
                  The greatest possible safety, optimal protection of health, and protection of the environment are at
                  the heart of our activities.
                </p>
              </div>
            </article>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              <article className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <ShieldCheck size={20} className="text-blue-700 mb-3" />
                <h4 className="text-2xl font-bold text-blue-950 mb-2">Safety</h4>
                <p className="text-black/85">Strict standards for safe operations, planning, and execution.</p>
              </article>
              <article className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <HeartHandshake size={20} className="text-blue-700 mb-3" />
                <h4 className="text-2xl font-bold text-blue-950 mb-2">Health</h4>
                <p className="text-black/85">Protection of employee and community well-being in all activities.</p>
              </article>
              <article className="rounded-2xl border border-blue-200 bg-blue-50 p-6 sm:col-span-2">
                <Leaf size={20} className="text-blue-700 mb-3" />
                <h4 className="text-2xl font-bold text-blue-950 mb-2">Environment</h4>
                <p className="text-black/85">
                  Operational discipline that minimizes impact and preserves environmental resources.
                </p>
              </article>
            </div>
          </div>

          <article className="rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-white p-6 sm:p-8 lg:p-10">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <p className="text-xs uppercase tracking-[0.2em] text-black font-semibold mb-3">Social Responsibility</p>
                <h3 className="text-3xl sm:text-4xl font-bold text-blue-950 mb-4">Voluntary Action That Creates Community Impact</h3>
                <p className="text-black/85 text-lg leading-relaxed mb-6">
                  Responsibility for social issues is an increasingly important subject. Our staff is involved on a
                  voluntary basis in various social projects.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 rounded-full border border-blue-200 bg-white text-blue-900 font-medium">
                    Volunteer Programs
                  </span>
                  <span className="px-4 py-2 rounded-full border border-blue-200 bg-white text-blue-900 font-medium">
                    Community Projects
                  </span>
                  <span className="px-4 py-2 rounded-full border border-blue-200 bg-white text-blue-900 font-medium">
                    Staff Participation
                  </span>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="rounded-xl overflow-hidden border border-blue-200">
                  <img
                    src={voluntaryImage}
                    alt="Community volunteer social responsibility programs"
                    className="h-72 w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Our Service Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-50/40">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-blue-200">
              <img
                src={outstandingQualityImage}
                alt="Industrial service planning and implementation"
                className="h-full min-h-[320px] w-full object-cover"
              />
            </div>
            <article className="lg:col-span-7 rounded-2xl border border-blue-200 bg-white p-6 sm:p-8 lg:p-10">
              <p className="uppercase tracking-[0.24em] text-xs sm:text-sm text-black font-semibold mb-4">
                Our Service
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-blue-950 tracking-tight leading-tight mb-5">
                Outstanding quality and greatest care.
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-black/85">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-700 shrink-0" />
                  <span className="text-lg leading-relaxed">Materials specifically selected for a long lifetime.</span>
                </li>
                <li className="flex items-start gap-3 text-black/85">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-700 shrink-0" />
                  <span className="text-lg leading-relaxed">Quick and flexible solutions for any market requirement.</span>
                </li>
                <li className="flex items-start gap-3 text-black/85">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-700 shrink-0" />
                  <span className="text-lg leading-relaxed">Local implementation.</span>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Final Summary Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <p className="uppercase tracking-[0.24em] text-xs sm:text-sm text-blue-100 font-semibold mb-4">
            Responsibility Summary
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6">
            Sustainable Practice, Shared Responsibility.
          </h2>
          <p className="text-blue-100 text-lg leading-relaxed max-w-4xl mx-auto">
            Our sustainability direction combines strict safety and health standards, protection of the environment,
            and active social participation. This is how DMC strengthens communities while delivering responsible,
            long-term business impact.
          </p>
        </div>
      </section>
    </div>
  );
}

