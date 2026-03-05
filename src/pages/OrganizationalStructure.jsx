function OrganizationalStructure() {
  const levelTwo = ["Operations Division", "Commercial Division", "Corporate Services"];
  const levelThree = [
    "Engineering & Technical",
    "Project Management",
    "Procurement & Supply",
    "Quality, HSE & Compliance",
    "Finance & Administration",
    "Human Resources",
  ];
  const legalCertifications = [
    {
      key: "sec-registration",
      title: "SEC Registration",
      image: "",
    },
    {
      key: "bir-certificate",
      title: "BIR Certificate",
      image: "",
    },
    {
      key: "business-permit",
      title: "Business Permit",
      image: "",
    },
  ];

  return (
    <div className="bg-white text-blue-950">
      <section className="relative min-h-[55vh] flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <img
          src=""
          alt="Organization leadership planning session"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-950/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/50 to-blue-950/20" />
        <div className="relative z-10 max-w-7xl mx-auto w-full py-20">
          <p className="uppercase tracking-[0.24em] text-xs sm:text-sm text-blue-100 font-semibold mb-4">
            Organization
          </p>
          <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.96] max-w-4xl">
            Organizational Structure
          </h1>
          <p className="mt-5 text-blue-100 text-lg sm:text-xl max-w-3xl">
            A clear management and operations structure that supports disciplined execution across all projects.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-50/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-950 mb-3">Organizational Chart</h2>
            <p className="text-blue-900/80 max-w-3xl mx-auto">
              Leadership alignment from executive level down to core technical and support functions.
            </p>
          </div>

          <div className="rounded-2xl border border-blue-200 bg-white p-6 sm:p-8">
            <div className="flex justify-center">
              <div className="rounded-xl border border-blue-700 bg-blue-700 text-white px-6 py-4 text-center min-w-[240px]">
                <p className="text-xs tracking-[0.14em] uppercase text-blue-100">Top Management</p>
                <p className="text-xl font-bold mt-1">Board & President</p>
              </div>
            </div>

            <div className="h-8 w-px bg-blue-300 mx-auto" />

            <div className="grid md:grid-cols-3 gap-4 relative">
              {levelTwo.map((item) => (
                <div key={item} className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-4 text-center">
                  <p className="font-semibold text-blue-950">{item}</p>
                </div>
              ))}
            </div>

            <div className="h-8 w-px bg-blue-300 mx-auto" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {levelThree.map((item) => (
                <div key={item} className="rounded-xl border border-blue-100 bg-white px-4 py-4 text-center shadow-sm">
                  <p className="text-blue-900 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-blue-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="uppercase tracking-[0.24em] text-xs sm:text-sm text-blue-700 font-semibold mb-4">
              Compliance
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-950 mb-3">Legal Certifications</h2>
            <p className="text-blue-900/80 max-w-3xl mx-auto">
              Ready section for your permits and legal certifications. Replace the placeholder images with your actual documents.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {legalCertifications.map((item) => (
              <article key={item.key} className="rounded-2xl border border-blue-200 bg-blue-50/40 overflow-hidden">
                <div className="aspect-[4/3] bg-blue-100">
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-blue-950">{item.title}</h3>
                  <p className="text-sm text-blue-900/70 mt-2">Upload your certification image for this slot.</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default OrganizationalStructure;
