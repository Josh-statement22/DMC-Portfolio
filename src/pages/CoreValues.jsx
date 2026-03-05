import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function CoreValues() {
  const values = ['Quality', 'Customer Orientation', 'Flexibility', 'Transparency', 'Optimization'];
  const valueSections = [
    {
      key: 'quality',
      title: 'Quality',
      description:
        'We uphold rigorous standards in every phase of delivery to ensure reliable performance, safety, and long-term value for our clients.',
      image:
        '',
    },
    {
      key: 'customer-orientation',
      title: 'Customer Orientation',
      description:
        'Our planning and execution are shaped by client priorities, making sure solutions are aligned with business goals, timelines, and operational realities.',
      image:
        '',
    },
    {
      key: 'flexibility',
      title: 'Flexibility',
      description:
        'We adapt quickly to changing site conditions and project requirements while keeping quality, safety, and delivery outcomes fully controlled.',
      image:
        '',
    },
    {
      key: 'transparency',
      title: 'Transparency',
      description:
        'We maintain clear communication, visible reporting, and accountable processes so clients can make informed decisions at every stage.',
      image:
        '',
    },
    {
      key: 'optimization',
      title: 'Optimization',
      description:
        'We continuously improve workflows, resources, and technical approaches to maximize efficiency, reduce risk, and strengthen project outcomes.',
      image:
        '',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center text-white px-4 sm:px-6 lg:px-8 overflow-hidden">
        <img
          src=""
          alt="Engineer inspecting large-scale infrastructure"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-950/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/65 to-blue-950/20" />

        <div className="relative z-10 max-w-7xl mx-auto w-full py-28 sm:py-32">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7 space-y-6 text-left">
              <p className="uppercase tracking-[0.24em] text-xs sm:text-sm text-slate-200 font-semibold">
                Philosophy, Mission, and Responsibility
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.96] max-w-4xl">
                Customer-Driven Values That Guide Every Delivery.
              </h1>
              <p className="text-lg sm:text-xl text-slate-200 max-w-3xl leading-relaxed">
                D. Michael Co (DMC) Enterprises Corp. focuses on activities that are strictly oriented to customer needs and requirements.
              </p>
              <p className="text-base sm:text-lg text-blue-100 max-w-3xl leading-relaxed">
                From the analysis of customer needs, through to the development of solutions, products, training, and service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="px-8 py-4 bg-white hover:bg-slate-100 text-slate-900 rounded-md font-semibold text-lg transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg shadow-slate-950/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70">
                  Learn More About DMC <ArrowRight size={20} />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="w-full max-w-md ml-auto rounded-xl border border-white/20 bg-blue-950/35 backdrop-blur-md p-6 sm:p-7 shadow-2xl shadow-blue-950/50">
                <p className="text-xs uppercase tracking-[0.2em] text-blue-100/80 mb-5">
                  Core Values
                </p>
                <div className="space-y-3">
                  {values.map((value) => (
                    <div key={value} className="flex items-start gap-3 pb-3 border-b border-white/15 last:border-b-0 last:pb-0">
                      <CheckCircle2 size={18} className="text-blue-100 mt-0.5 shrink-0" />
                      <p className="text-white font-medium">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Detailed Sections */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mb-14">
            <p className="uppercase tracking-[0.24em] text-xs sm:text-sm text-black font-semibold mb-4">
              Values in Action
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-blue-950 tracking-tight leading-tight mb-6">
              Our Core Values in Every Engagement
            </h2>
            <p className="text-lg text-black/85 leading-relaxed">
              From the analysis of customer needs, through to the development of solutions, products, training and
              service, these values define how DMC delivers measurable and trusted results.
            </p>
          </div>

          <div className="space-y-10">
            {valueSections.map((item, index) => (
              <article
                key={item.key}
                className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-stretch rounded-2xl border border-blue-100 bg-blue-50/30 p-4 sm:p-6"
              >
                <div className={`lg:col-span-5 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <div className="h-full min-h-[260px] rounded-xl overflow-hidden border border-blue-200">
                    <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                  </div>
                </div>
                <div className={`lg:col-span-7 flex ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <div className="rounded-xl border border-blue-200 bg-white p-6 sm:p-8 w-full flex flex-col justify-center">
                    <p className="text-xs uppercase tracking-[0.2em] text-black font-semibold mb-3">Core Value</p>
                    <h3 className="text-3xl sm:text-4xl font-bold text-blue-950 mb-4">{item.title}</h3>
                    <p className="text-black/85 text-lg leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final Summary Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <p className="uppercase tracking-[0.24em] text-xs sm:text-sm text-blue-100 font-semibold mb-4">
            Core Values Summary
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6">
            One Value System. One Standard of Delivery.
          </h2>
          <p className="text-blue-100 text-lg leading-relaxed max-w-4xl mx-auto mb-8">
            Quality, Customer Orientation, Flexibility, Transparency, and Optimization work together as a single
            operating principle. These values guide DMC from the analysis of customer needs through the development
            of solutions, products, training, and service.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {values.map((value) => (
              <span
                key={`summary-${value}`}
                className="px-4 py-2 rounded-full border border-white/30 bg-white/10 text-sm sm:text-base font-medium"
              >
                {value}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

