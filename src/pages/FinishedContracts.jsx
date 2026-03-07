import { useEffect, useState } from "react";

export default function FinishedContracts() {
  const projects = [
    {
      id: 1,
      client: "Department of Agiculture - Region XII",
      project: "Koronadal City, South Cotabato",
      year: "2021",
      description:
        "Supply and Delivery of Garden Tools.",
      cover: "src/assets/img/contracts/agriculture.jpg",
      dateAwarded: "December 31, 2021",
      contractEffectivity: "January 27, 2021",
      gallery: [
        "src/assets/img/contracts/agriculture.jpg",
        "src/assets/img/contracts/agriculture.jpg",
        "src/assets/img/contracts/agriculture.jpg",
      ],
    },
    {
      id: 2,
      client: "Provincial Government of Aurora",
      project: "Baler, Aurora",
      year: "2022",
      description:
        "P.O Number 2022-02-117",
      cover: "src/assets/img/contracts/aurora.jpg",
      dateAwarded: "February 2, 2022",
      contractEffectivity: "February 2, 2022",
      gallery: [
        "src/assets/img/contracts/aurora.jpg",
        "src/assets/img/contracts/aurora.jpg",
        "src/assets/img/contracts/aurora.jpg",
      ],
    },
    {
      id: 3,
      client: "Bicol Regional Training and Teaching Hospital",
      project: "Legazpi City",
      year: "2022",
      description:
        "Procurement of Janitorial Supplies",
      cover: "src/assets/img/contracts/hospital.jpg",
      dateAwarded: "February 10, 2022",
      contractEffectivity: "March 03, 2022",
      gallery: [
        "src/assets/img/contracts/hospital.jpg",
        "src/assets/img/contracts/hospital.jpg",
        "src/assets/img/contracts/hospital.jpg",
      ],
    },
    {
      id: 4,
      client: "Department of Trade and Industry - Region V",
      project: "Legazpi City",
      year: "2022",
      description:
        "Supply and Delivery of Livelihood Seeding Program - Negosyo Serbisyo Sa Barangay Kits in the Province of Camarines Sur",
      cover: "src/assets/img/contracts/livelihood.jpg",
      dateAwarded: "January 28, 2022",
      contractEffectivity: "February 21, 2022",
      gallery: [
        "src/assets/img/contracts/livelihood.jpg",
        "src/assets/img/contracts/livelihood.jpg",
        "src/assets/img/contracts/livelihood.jpg",
      ],
    },
    {
      id: 5,
      client: "Provincial Government ofAurora",
      project: "Baler, Aurora",
      year: "2022",
      description:
        "P.O Number 2022-05-1040",
      cover: "src/assets/img/contracts/aurora.jpg",
      dateAwarded: "May 2, 2022",
      contractEffectivity: "May 2, 2022",
      gallery: [
        "src/assets/img/contracts/aurora.jpg",
        "src/assets/img/contracts/aurora.jpg",
        "src/assets/img/contracts/aurora.jpg",
      ],
    },
    {
      id: 6,
      client: "Ministry of Agriculture, Fisheries, and Agrarian Reform",
      project: "Cotabato City",
      year: "2022",
      description:
        "Procurement of SFI Bottom Stake for Basilan Under GAAB 2021",
      cover: "src/assets/img/contracts/agriculture.jpg",
      dateAwarded: "March 21, 2022",
      contractEffectivity: "April 19, 2022",
      gallery: [
        "src/assets/img/contracts/agriculture.jpg",
        "src/assets/img/contracts/agriculture.jpg",
        "src/assets/img/contracts/agriculture.jpg",
      ],
    },
    {
      id: 7,
      client: "Municipality of Itbayat",
      project: "tbayat, Batanes",
      year: "2022",
      description:
        "Purchase and Delivery of Construction Materials",
      cover: "src/assets/img/contracts/livelihood.jpg",
      dateAwarded: "June 24, 2022",
      contractEffectivity: "July 06, 2022",
      gallery: [
        "src/assets/img/contracts/livelihood.jpg",
        "src/assets/img/contracts/livelihood.jpg",
        "src/assets/img/contracts/livelihood.jpg",
      ],
    },
    {
      id: 8,
      client: "Zamboanga City Medical Center",
      project: "Zamboanga City",
      year: "2022",
      description:
        "dSupply and Delivery of Office and Janitorial Supplies Under Common Use Supplies",
      cover: "src/assets/img/contracts/hospital.jpg",
      dateAwarded: "July 15, 2022",
      contractEffectivity: "July 19, 2022",
      gallery: [
        "src/assets/img/contracts/hospital.jpg",
        "src/assets/img/contracts/hospital.jpg",
        "src/assets/img/contracts/hospital.jpg",
      ],
    },
    {
      id: 9,
      client: "Department of Public Works and Highways",
      project: "Various Provinces",
      year: "2023",
      description:
        "Infrastructure Development and Maintenance Projects",
      cover: "",
      dateAwarded: "",
      contractEffectivity: "",
      gallery: [
        "",
        "",
        "",
      ],
    },
    {
      id: 10,
      client: "Bureau of Energy Development",
      project: "National Energy Projects",
      year: "2024",
      description:
        "Energy Sector Implementation and Support Services",
      cover: "",
      dateAwarded: "",
      contractEffectivity: "",
      gallery: [
        "",
        "",
        "",
      ],
    },
  ];
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const filters = ["All", ...new Set(projects.map((item) => item.year))];
  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((item) => item.year === activeFilter);
  const openProject = (project) => {
    setSelectedProject(project);
    setActiveSlide(0);
  };
  const closeProject = () => setSelectedProject(null);
  const nextSlide = () => {
    if (!selectedProject) return;
    setActiveSlide((prev) => (prev + 1) % selectedProject.gallery.length);
  };
  const prevSlide = () => {
    if (!selectedProject) return;
    setActiveSlide((prev) => (prev - 1 + selectedProject.gallery.length) % selectedProject.gallery.length);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!selectedProject) return;
      if (event.key === "Escape") closeProject();
      if (event.key === "ArrowRight") nextSlide();
      if (event.key === "ArrowLeft") prevSlide();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <div className="bg-white text-blue-950">
      <section className="relative min-h-[65vh] flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <img
          src=""
          alt="Completed industrial construction project"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-950/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/55 to-blue-950/25" />
        <div className="relative z-10 max-w-7xl mx-auto w-full py-24">
          <p className="uppercase tracking-[0.24em] text-xs sm:text-sm text-blue-100 font-semibold mb-4">
            Projects
          </p>
          <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.96] max-w-4xl">
            Finished Contracts
          </h1>
          <p className="mt-5 text-blue-100 text-lg sm:text-xl max-w-3xl">
            A visual gallery of completed client projects and delivered contracts.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 flex flex-wrap items-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full border text-sm font-semibold transition-all duration-200 ${
                  activeFilter === filter
                    ? "bg-blue-800 border-blue-800 text-white"
                    : "bg-white border-blue-200 text-blue-800 hover:bg-blue-50"
                }`}
              >
                {filter}
              </button>
            ))}
            <p className="text-sm text-black/85 ml-auto">{filteredProjects.length} projects shown</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredProjects.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => openProject(item)}
                className="group overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-left"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={item.cover}
                    alt={`${item.client} - ${item.project}`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/75 via-blue-950/10 to-transparent" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 text-blue-900 text-xs font-semibold">
                    {item.year}
                  </span>
                </div>
                <div className="p-4 sm:p-5">
                  <p className="text-lg font-bold text-blue-950">{item.client}</p>
                  <p className="text-blue-800 font-medium">{item.project}</p>
                  <p className="text-sm text-black/85 mt-2 line-clamp-2">{item.description}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <div
          className="fixed inset-0 z-[70] bg-blue-950/85 backdrop-blur-sm p-4 sm:p-8 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-6xl rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-white">
            <button
              type="button"
              onClick={closeProject}
              className="absolute top-4 right-4 z-10 px-3 py-1.5 rounded-md bg-white/90 text-blue-900 text-sm font-semibold hover:bg-white transition-colors"
            >
              Close
            </button>
            <div className="grid lg:grid-cols-12">
              <div className="lg:col-span-8 relative bg-blue-950">
                <img
                  src={selectedProject.gallery[activeSlide]}
                  alt={`${selectedProject.client} - slide ${activeSlide + 1}`}
                  className="w-full h-[52vh] sm:h-[62vh] object-cover"
                />
                <button
                  type="button"
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/90 text-blue-900 font-bold hover:bg-white transition-colors"
                  aria-label="Previous slide"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/90 text-blue-900 font-bold hover:bg-white transition-colors"
                  aria-label="Next slide"
                >
                  ›
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {selectedProject.gallery.map((_, index) => (
                    <button
                      key={`dot-${index}`}
                      type="button"
                      onClick={() => setActiveSlide(index)}
                      className={`h-2 rounded-full transition-all ${
                        activeSlide === index ? "w-7 bg-white" : "w-2 bg-white/60 hover:bg-white/90"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4 p-6 sm:p-7">
                <p className="text-xs uppercase tracking-[0.14em] text-black font-semibold mb-3">Year: {selectedProject.year}</p>
                <h2 className="text-2xl font-bold text-blue-950 mb-2">{selectedProject.client}</h2>
                <p className="text-blue-800 font-semibold mb-4">{selectedProject.project}</p>
                <p className="text-black/85 leading-relaxed mb-6">{selectedProject.description}</p>
                {(selectedProject.dateAwarded || selectedProject.contractEffectivity) && (
                  <div className="mb-6 pb-6 border-b border-blue-200">
                    {selectedProject.dateAwarded && (
                      <p className="text-sm text-black/85 mb-2">
                        <span className="font-semibold text-blue-950">Date Awarded:</span> {selectedProject.dateAwarded}
                      </p>
                    )}
                    {selectedProject.contractEffectivity && (
                      <p className="text-sm text-black/85">
                        <span className="font-semibold text-blue-950">Contract Effectivity:</span> {selectedProject.contractEffectivity}
                      </p>
                    )}
                  </div>
                )}
                <div className="grid grid-cols-3 gap-2">
                  {selectedProject.gallery.map((image, index) => (
                    <button
                      key={`thumb-${index}`}
                      type="button"
                      onClick={() => setActiveSlide(index)}
                      className={`overflow-hidden rounded-md border ${
                        activeSlide === index ? "border-blue-700" : "border-blue-200"
                      }`}
                    >
                      <img src={image} alt={`Thumbnail ${index + 1}`} className="h-16 w-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

