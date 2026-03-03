import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Home() {
  const ui = {
    section: 'py-24 px-4 sm:px-6 lg:px-8',
    container: 'max-w-7xl mx-auto',
    eyebrow: 'text-xs uppercase tracking-[0.24em] text-blue-700 mb-4',
    heading: 'text-4xl sm:text-5xl font-bold text-blue-950 tracking-tight',
    primaryBtn:
      'px-8 py-3 bg-blue-800 text-white hover:bg-blue-900 rounded-md font-semibold inline-flex items-center gap-2 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2',
    secondaryBtn:
      'px-6 py-3 border border-blue-200 text-blue-900 hover:bg-blue-50 rounded-md font-semibold inline-flex items-center gap-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2',
    card: 'rounded-2xl border border-blue-100 bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-300',
  };

  const heroSlides = [
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1800&q=80',
      alt: 'Industrial plant at sunset',
      eyebrow: 'Industrial and Infrastructure Leadership',
      heading: 'The Foundation of Industrial Progress.',
      description: 'We deliver large-scale engineering and construction solutions that keep critical industries moving.',
      glanceTitle: 'At a Glance',
      metrics: [
        { value: '500+', label: 'Major Projects Delivered' },
        { value: '98%', label: 'Client Satisfaction Rate' },
        { value: '15+', label: 'Years of Field Expertise' },
      ],
      panelNote: 'Built for mission-critical environments where safety, schedule, and performance matter.',
    },
    {
      type: 'video',
      src: 'https://cdn.coverr.co/videos/coverr-workers-walking-through-a-factory-1579/1080p.mp4',
      poster: 'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1600&q=80',
      eyebrow: 'Execution at Scale',
      heading: 'Complex Operations. One Reliable Partner.',
      description: 'From planning to field delivery, we align teams, systems, and schedules to keep projects on track.',
      glanceTitle: 'Operational Impact',
      metrics: [
        { value: '24/7', label: 'Field Operations Coverage' },
        { value: '120+', label: 'Specialized Engineers' },
        { value: '99.9%', label: 'Safety Compliance Focus' },
      ],
      panelNote: 'Disciplined execution standards for high-risk, high-value operations.',
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1800&q=80',
      alt: 'Engineer inspecting large-scale infrastructure',
      eyebrow: 'Engineering Precision',
      heading: 'Built With Certainty, Delivered With Speed.',
      description: 'Our teams combine deep technical expertise with practical site execution for measurable outcomes.',
      glanceTitle: 'Engineering Value',
      metrics: [
        { value: '90+', label: 'Certified Specialists' },
        { value: '40%', label: 'Faster Project Turnaround' },
        { value: '30%', label: 'Average Cost Optimization' },
      ],
      panelNote: 'Precision planning that reduces risk before it reaches the field.',
    },
    {
      type: 'video',
      src: 'https://cdn.coverr.co/videos/coverr-engineer-checking-the-gauges-1575/1080p.mp4',
      poster: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80',
      eyebrow: 'Long-Term Performance',
      heading: 'Infrastructure That Performs for Decades.',
      description: 'We build resilient systems designed for reliability, maintainability, and sustained business growth.',
      glanceTitle: 'Lifecycle Confidence',
      metrics: [
        { value: '25+', label: 'Years Asset Lifecycle Support' },
        { value: '85%', label: 'Repeat Enterprise Clients' },
        { value: '100%', label: 'Commitment to Quality Delivery' },
      ],
      panelNote: 'Partnerships focused on long-term value, not one-time delivery.',
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const marketSectors = [
    {
      key: 'building',
      title: 'Building',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
      p1: 'We deliver building programs with disciplined planning, strong site controls, and reliable schedule performance. Our teams coordinate design, procurement, and construction to reduce risk and maintain quality from groundbreaking to turnover.',
      p2: 'From commercial complexes to mission-critical facilities, we focus on constructability and long-term value. The result is safer execution, predictable delivery, and assets built to perform over time.',
    },
    {
      key: 'industrial',
      title: 'Industrial',
      image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1600&q=80',
      p1: 'Our industrial expertise supports manufacturing and process-heavy environments where precision and uptime are essential. We align technical scopes with practical field execution to keep production realities front and center.',
      p2: 'By combining engineering rigor with phased implementation strategies, we help clients modernize facilities while minimizing disruptions and preserving operational continuity.',
    },
    {
      key: 'infrastructure',
      title: 'Infrastructure',
      image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1600&q=80',
      p1: 'We build infrastructure systems that enable growth and resilience across transport, utility, and civil networks. Our delivery model emphasizes stakeholder alignment, safety discipline, and long-term durability.',
      p2: 'With strong project controls and sequencing expertise, we execute complex, multi-party programs with clarity and accountability at every milestone.',
    },
    {
      key: 'mining',
      title: 'Mining',
      image: 'https://images.unsplash.com/photo-1610024062303-e355e94c7a8f?auto=format&fit=crop&w=1600&q=80',
      p1: 'Mining projects require robust logistics, dependable equipment support, and strict safety standards. We deliver field-ready solutions tailored for high-intensity and remote operating conditions.',
      p2: 'Our teams manage critical scopes with schedule discipline and risk-first planning, helping clients improve throughput, reduce downtime, and protect long-term asset performance.',
    },
    {
      key: 'power',
      title: 'Power',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1600&q=80',
      p1: 'We execute power programs with a focus on reliability, commissioning readiness, and compliance. From generation assets to supporting systems, we ensure technical and operational alignment from day one.',
      p2: 'Our integrated approach improves coordination across disciplines, helping owners reduce delays and deliver stable, efficient energy infrastructure.',
    },
  ];
  const productCategories = [
    { name: 'Heavy Machinery', image: 'https://images.unsplash.com/photo-1580901368919-7738efb0f87e?auto=format&fit=crop&w=1200&q=80' },
    { name: 'Structural Steel', image: 'https://images.unsplash.com/photo-1590494165264-1ebe3602eb80?auto=format&fit=crop&w=1200&q=80' },
    { name: 'Industrial Valves', image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=1200&q=80' },
    { name: 'Process Piping', image: 'https://images.unsplash.com/photo-1624397640148-949b1732bb0a?auto=format&fit=crop&w=1200&q=80' },
  ];
  const specializedServices = [
    {
      title: 'Bulk Logistics & Delivery',
      text: 'Coordinated transport planning for large-volume and time-critical materials.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
      placeholder: 'Integrated Logistics',
    },
    {
      title: 'Technical Consultation',
      text: 'Application-focused guidance to ensure fit, compliance, and performance.',
      image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=80',
      placeholder: 'Engineering Advisory',
    },
    {
      title: 'Equipment Maintenance',
      text: 'Preventive and corrective support to maximize uptime and extend asset life.',
      image: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=1200&q=80',
      placeholder: 'Lifecycle Support',
    },
    {
      title: 'Custom Fabrication',
      text: 'Tailored fabrication solutions aligned to your project specifications.',
      image: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=1200&q=80',
      placeholder: 'Built-to-Spec Solutions',
    },
  ];
  const caseStudies = [
    {
      title: 'Visayas Bridge Expansion',
      supply: 'Supplied 5,000 tons of structural steel for a major transport corridor.',
      outcome: 'Delivered 5 days ahead of schedule.',
      image: 'https://images.unsplash.com/photo-1494522358652-f30e61a60313?auto=format&fit=crop&w=1400&q=80',
    },
    {
      title: 'Luzon Energy Upgrade',
      supply: 'Provided industrial valves and process lines for a utility modernization project.',
      outcome: 'Reduced commissioning delays by 18%.',
      image: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1400&q=80',
    },
    {
      title: 'Mindanao Mining Complex',
      supply: 'Delivered heavy equipment and on-site technical support for phase-one expansion.',
      outcome: 'Achieved zero critical delivery incidents.',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1400&q=80',
    },
  ];
  const partners = [
    {
      name: 'San Miguel',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=900&q=80',
    },
    {
      name: 'Ayala',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80',
    },
    {
      name: 'Megawide',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80',
    },
    {
      name: 'Aboitiz',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=900&q=80',
    },
    {
      name: 'DMCI',
      image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80',
    },
    {
      name: 'Meralco',
      image: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=900&q=80',
    },
    {
      name: 'JGC Philippines',
      image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=900&q=80',
    },
    {
      name: 'EEI',
      image: 'https://images.unsplash.com/photo-1610024062303-e355e94c7a8f?auto=format&fit=crop&w=900&q=80',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6500);

    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const [activeSector, setActiveSector] = useState(marketSectors[0].key);
  const [sectorVisible, setSectorVisible] = useState(true);
  const [activeService, setActiveService] = useState(null);

  useEffect(() => {
    setSectorVisible(false);
    const timer = setTimeout(() => setSectorVisible(true), 160);
    return () => clearTimeout(timer);
  }, [activeSector]);

  const currentSlide = heroSlides[activeSlide];
  const selectedSector = marketSectors.find((sector) => sector.key === activeSector) || marketSectors[0];
  const SectionDivider = () => (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent" />
      </div>
    </div>
  );

  return (
    <div className="bg-white text-blue-950 antialiased">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center text-white px-4 sm:px-6 lg:px-8 overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={`${slide.type}-${index}`}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === activeSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {slide.type === 'image' ? (
              <img src={slide.src} alt={slide.alt} className="h-full w-full object-cover" />
            ) : (
              <video
                className="h-full w-full object-cover"
                autoPlay={index === activeSlide}
                muted
                loop
                playsInline
                poster={slide.poster}
              >
                <source src={slide.src} type="video/mp4" />
              </video>
            )}
          </div>
        ))}
        <div className="absolute inset-0 bg-blue-950/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/65 to-blue-950/20" />

        <div className="relative z-10 max-w-7xl mx-auto w-full py-28 sm:py-32">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7 space-y-6 text-left">
              <p className="uppercase tracking-[0.24em] text-xs sm:text-sm text-slate-200 font-semibold">
                {currentSlide.eyebrow}
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.96] max-w-4xl">
                {currentSlide.heading}
              </h1>
              <p className="text-lg sm:text-xl text-slate-200 max-w-2xl leading-relaxed">
                {currentSlide.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="px-8 py-4 bg-white hover:bg-slate-100 text-slate-900 rounded-md font-semibold text-lg transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg shadow-slate-950/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70">
                  Explore Solutions <ArrowRight size={20} />
                </button>
                <button className="px-8 py-4 bg-transparent hover:bg-white/10 rounded-md font-semibold text-lg transition-all duration-300 border border-white/60 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70">
                  Request a Quote
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="w-full max-w-md ml-auto rounded-xl border border-white/20 bg-blue-950/35 backdrop-blur-md p-6 sm:p-7 shadow-2xl shadow-blue-950/50">
                <p className="text-xs uppercase tracking-[0.2em] text-blue-100/80 mb-5">
                  {currentSlide.glanceTitle}
                </p>
                <div className="space-y-5">
                  {currentSlide.metrics.map((item) => (
                    <div key={item.label} className="pb-4 border-b border-white/15 last:border-b-0 last:pb-0">
                      <p className="text-3xl sm:text-4xl font-bold text-white">{item.value}</p>
                      <p className="text-blue-100 mt-1">{item.label}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-sm text-blue-100/85">
                  {currentSlide.panelNote}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-3">
            {heroSlides.map((slide, index) => (
              <button
                key={`dot-${index}`}
                onClick={() => setActiveSlide(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === activeSlide ? 'w-10 bg-white' : 'w-5 bg-white/40 hover:bg-white/70'
                }`}
                aria-label={`Go to ${slide.type} slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
      <SectionDivider />

      {/* 3. Market Sectors */}
      <section className={`${ui.section} bg-blue-50/50`}>
        <div className={ui.container}>
          <div className="mb-10 pl-4 border-l-4 border-blue-500">
            <p className={ui.eyebrow}>Market Sectors / Industries We Serve</p>
            <h2 className={ui.heading}>Where we are built to deliver.</h2>
          </div>

          <div className="flex flex-wrap gap-6 border-b border-blue-200 mb-10">
            {marketSectors.map((sector) => (
              <button
                key={sector.key}
                type="button"
                onClick={() => setActiveSector(sector.key)}
                className={`pb-3 border-b-4 transition-colors ${
                  sector.key === activeSector
                    ? 'border-[#F57C00] font-bold text-blue-950'
                    : 'border-transparent font-medium text-blue-700 hover:text-blue-900'
                }`}
              >
                {sector.title}
              </button>
            ))}
          </div>

          <div
            className={`grid lg:grid-cols-2 gap-8 lg:gap-10 items-stretch transition-all duration-300 ${
              sectorVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'
            }`}
          >
            <div className="rounded-xl overflow-hidden border border-blue-200">
              <img
                src={selectedSector.image}
                alt={selectedSector.title}
                className={`w-full h-full min-h-[320px] object-cover transition-transform duration-700 ease-out ${
                  sectorVisible ? 'scale-100' : 'scale-105'
                }`}
              />
            </div>

            <div className="rounded-xl border border-blue-200 bg-white p-6 sm:p-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-blue-950 mb-4">{selectedSector.title}</h3>
              <p className="text-blue-800/85 leading-relaxed mb-4">{selectedSector.p1}</p>
              <p className="text-blue-800/85 leading-relaxed mb-8">{selectedSector.p2}</p>
              <button className={ui.primaryBtn}>
                View Projects <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
      <SectionDivider />

      {/* 4. Featured Product Categories */}
      <section className={`${ui.section} bg-white`}>
        <div className={ui.container}>
          <div className="mb-10 text-center">
            <p className={ui.eyebrow}>Featured Product Categories</p>
            <h2 className={ui.heading}>Bestseller product lines for critical operations.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productCategories.map((item) => (
              <article key={item.name} className={`${ui.card} overflow-hidden`}>
                <img src={item.image} alt={item.name} className="h-44 w-full object-cover" />
                <div className="p-5 min-h-[112px]">
                  <h3 className="text-xl font-semibold text-blue-950">{item.name}</h3>
                  <span className="mt-3 inline-flex items-center gap-2 text-sm text-blue-700">
                    View Category <ArrowRight size={14} />
                  </span>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <button className={ui.primaryBtn}>
              View Full Product Catalog <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
      <SectionDivider />

      {/* 5. Services & Specialization */}
      <section className={`${ui.section} bg-blue-50/50`}>
        <div className={ui.container}>
          <div className="mb-10 pl-4 border-l-4 border-blue-500">
            <p className={ui.eyebrow}>Services & Expertise</p>
            <h2 className={ui.heading}>More than supply. We provide total project support.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializedServices.map((service) => {
              const isActive = activeService === service.title;
              return (
              <article key={service.title} className={`${ui.card} overflow-hidden`}>
                <button
                  type="button"
                  onClick={() => setActiveService(isActive ? null : service.title)}
                  className="relative w-full h-[360px] overflow-hidden group text-left"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className={`h-full w-full object-cover transition-transform duration-700 ${
                      isActive ? 'scale-110' : 'scale-100 group-hover:scale-105'
                    }`}
                  />
                  <div
                    className={`absolute inset-0 transition-colors duration-300 ${
                      isActive ? 'bg-blue-950/72' : 'bg-blue-950/35 group-hover:bg-blue-950/60'
                    }`}
                  />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="text-blue-100 text-xs uppercase tracking-[0.14em] mb-2">{service.placeholder}</p>
                    <h3 className="text-2xl font-semibold text-white mb-3">{service.title}</h3>
                    <p
                      className={`text-blue-100/95 text-sm leading-relaxed transition-all duration-300 ${
                        isActive ? 'opacity-100 max-h-28 mb-4' : 'opacity-0 max-h-0 overflow-hidden'
                      }`}
                    >
                      {service.text}
                    </p>
                    <span
                      className={`inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                        isActive
                          ? 'bg-white text-blue-900'
                          : 'bg-white/15 text-white group-hover:bg-white group-hover:text-blue-900'
                      }`}
                    >
                      Read More <ArrowRight size={14} />
                    </span>
                  </div>
                </button>
              </article>
              );
            })}
          </div>
        </div>
      </section>
      <SectionDivider />

      {/* 6. Legacy Teaser */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto text-center rounded-2xl border border-blue-200 bg-blue-50/60 px-6 py-12 sm:px-10">
          <p className={ui.eyebrow}>The Legacy</p>
          <h2 className={`${ui.heading} mb-6`}>Built on Integrity, Driven by Innovation.</h2>
          <p className="text-lg text-blue-800/85 leading-relaxed max-w-4xl mx-auto">
            Our legacy is grounded in safe execution, reliable quality, and long-term partnerships.
            We commit to standards that protect people, projects, and performance from planning to delivery.
          </p>
          <div className="mt-7 flex items-center justify-center gap-3 text-sm flex-wrap">
            <Link to="/core-values" className="px-4 py-2 rounded-full bg-white border border-blue-200 text-blue-900 font-semibold hover:bg-blue-50">Core Values</Link>
            <Link to="/about" className="px-4 py-2 rounded-full bg-white border border-blue-200 text-blue-900 font-semibold hover:bg-blue-50">Corporate Responsibility</Link>
          </div>
        </div>
      </section>
      <SectionDivider />

      {/* 7. Featured Projects / Case Studies */}
      <section className={`${ui.section} bg-white`}>
        <div className={ui.container}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div className="pl-4 border-l-4 border-blue-500">
              <p className={ui.eyebrow}>Featured Projects / Case Studies</p>
              <h2 className={`${ui.heading} max-w-3xl`}>
                Proven results on complex, high-stakes programs.
              </h2>
            </div>
            <button className={`self-start md:self-auto ${ui.secondaryBtn}`}>
              View Project Portfolio <ArrowRight size={18} />
            </button>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {caseStudies.map((project) => (
              <article key={project.title} className={`${ui.card} overflow-hidden`}>
                <img src={project.image} alt={project.title} className="h-52 w-full object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-blue-950 mb-3">{project.title}</h3>
                  <p className="text-blue-800/85 mb-4">{project.supply}</p>
                  <p className="inline-flex items-center gap-2 text-emerald-700 font-semibold">
                    <CheckCircle2 size={16} />
                    {project.outcome}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <SectionDivider />

      {/* 8. Global/Local Partners */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50/50 border-y border-blue-200">
        <div className={ui.container}>
          <div className="text-center mb-8">
            <p className={ui.eyebrow}>Global / Local Partners</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-950">Trusted by leading organizations.</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {partners.map((partner) => (
              <div key={partner.name} className="group relative h-32 rounded-xl overflow-hidden border border-blue-200">
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="h-full w-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-blue-950/35 group-hover:bg-blue-950/20 transition-colors duration-300" />
                <div className="absolute inset-x-0 bottom-0 px-3 py-2">
                  <p className="text-white text-sm font-semibold tracking-wide">{partner.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SectionDivider />

      {/* 9. Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to start your next big project? Partner with the industry leader.</h2>
          <p className="text-blue-100 mb-8">Talk to our team and get a dedicated plan for your project requirements.</p>
          <button className="px-8 py-3 bg-white text-blue-900 hover:bg-blue-50 rounded-lg font-semibold transition-all duration-300 inline-flex items-center gap-2 shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80">
            Talk to an Expert Today <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
}
