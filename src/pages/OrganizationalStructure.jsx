function OrganizationalStructure() {
  const legalCertifications = [
    { key: "sec-registration", title: "SEC Registration", image: "" },
    { key: "bir-certificate", title: "BIR Certificate", image: "" },
    { key: "business-permit", title: "Business Permit", image: "" },
  ];

  const PersonBox = ({ name, title, image }) => (
    <div className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-4 text-center min-w-[180px] shadow-sm relative">
      {image && <img src={image} alt={name} className="h-16 w-16 mx-auto rounded-full mb-2 object-cover" />}
      <p className="font-semibold text-blue-950">{name}</p>
      <p className="text-sm text-blue-700">{title}</p>
    </div>
  );

  return (
    <div className="bg-white text-blue-950">
      {/* HEADER */}
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

      {/* ORGANIZATIONAL CHART */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-50/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-950 mb-3">Organizational Chart</h2>
            <p className="text-black/85 max-w-3xl mx-auto">
              Leadership alignment from executive level down to core technical and support functions.
            </p>
          </div>

          <div className="rounded-2xl border border-blue-200 bg-white p-6 sm:p-8 overflow-y-auto" style={{ minHeight: '800px', maxHeight: '1000px' }}>
            
            {/* CEO */}
            <div className="flex justify-center mb-12 relative">
              <PersonBox name="Marilou Adan Co" title="CEO/President" />
            </div>

            {/* Layer 2 */}
            <div className="flex justify-between mb-12 relative">
              <PersonBox name="Jennifer R. Mangao" title="Sales Supervisor" />
              <PersonBox name="Gerlie Dumayag" title="HR Consultant" />
              <PersonBox name="Princes A. Tenoso" title="Corporate Secretary / Sales Supervisor" />
              <PersonBox name="Atty. Kevin Escobar" title="Legal Counsel" />
              <PersonBox name="Alex B. Adan" title="Team Leader Logistic Support" />
              <PersonBox name="Esperanza C. Ricalde" title="Sales Supervisor" />
            </div>

            {/* Layer 3 */}
            <div className="flex justify-between mb-12 relative">
              <div className="flex-1 flex justify-center relative">
                {/* Jennifer's child - Gilbert */}
                <PersonBox name="Gilbert De Sagun" title="Logistic Support" />
                {/* Line to Gilbert */}
                <div className="absolute top-0 left-1/2 w-px h-full bg-blue-500 -translate-x-1/2" />
              </div>

              <div className="flex-1 flex justify-center relative">
                {/* Christine under Jennifer */}
                <PersonBox name="Christine M. Rodriguez" title="Senior Sales/ Admin Supervisor" />
                {/* Lines to Christine's children */}
              </div>

              <div className="flex-1"></div>

              <div className="flex-1 flex justify-center relative">
                {/* Maria under Princes */}
                <PersonBox name="Maria Janna Ivy A. Montejo" title="Accounting (AR-AP) OIC" />
              </div>

              <div className="flex-1"></div>

              <div className="flex-1 flex justify-center relative">
                {/* Joshua under Alex */}
                <PersonBox name="Joshua Rivera" title="Team Leader-Sales/Logistic" />
              </div>

              <div className="flex-1"></div>
            </div>

            {/* Layer 4 */}
            <div className="flex justify-between mb-12 relative">
              {/* Christine's children */}
              <div className="flex-1"></div>
              <div className="flex-1 flex justify-center gap-4">
                <PersonBox name="Jinky Anac-anac" title="Sales Support" />
                <PersonBox name="Grace Marasigan" title="Admin Support" />
              </div>

              <div className="flex-1"></div>

              {/* Maria's children */}
              <div className="flex-1 flex justify-center gap-4">
                <PersonBox name="Jennifer Adier" title="Accounting Support" />
                <PersonBox name="Paul Andrei Rivera" title="Admin Support" />
              </div>

              <div className="flex-1"></div>

              {/* Joshua's children */}
              <div className="flex-1 flex justify-center gap-4">
                <PersonBox name="Bryan Clanza" title="Logistic Support" />
                <PersonBox name="Allan Macariola" title="Logistic Support" />
              </div>

              <div className="flex-1"></div>

              {/* Esperanza's child */}
              <div className="flex-1 flex justify-center">
                <PersonBox name="Jemhierose Robles" title="Sales Support" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* LEGAL CERTIFICATIONS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-blue-100">
        <div className="max-w-7xl mx-auto text-center">
          <p className="uppercase tracking-[0.24em] text-xs sm:text-sm text-black font-semibold mb-4">
            Compliance
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-950 mb-3">Legal Certifications</h2>
          <p className="text-black/85 max-w-3xl mx-auto mb-10">
            Ready section for your permits and legal certifications. Replace the placeholder images with your actual documents.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {legalCertifications.map((item) => (
              <article key={item.key} className="rounded-2xl border border-blue-200 bg-blue-50/40 overflow-hidden">
                <div className="aspect-[4/3] bg-blue-100">
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-blue-950">{item.title}</h3>
                  <p className="text-sm text-black/75 mt-2">Upload your certification image for this slot.</p>
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