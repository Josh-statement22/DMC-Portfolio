function Services() {
  return (
    <section className="bg-blue-900 text-white py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Our Core Services</h2>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-blue-800 p-8 rounded-lg hover:bg-blue-700 transition">
            <h4 className="text-2xl font-semibold mb-3 text-blue-400">
              Engineering
            </h4>
            <p className="text-blue-300">
              Advanced structural and industrial engineering solutions.
            </p>
          </div>

          <div className="bg-blue-800 p-8 rounded-lg hover:bg-blue-700 transition">
            <h4 className="text-2xl font-semibold mb-3 text-blue-400">
              Construction Management
            </h4>
            <p className="text-blue-300">
              End-to-end project execution with safety and quality.
            </p>
          </div>

          <div className="bg-blue-800 p-8 rounded-lg hover:bg-blue-700 transition">
            <h4 className="text-2xl font-semibold mb-3 text-blue-400">
              Project Development
            </h4>
            <p className="text-blue-300">
              Efficient planning and execution from concept to delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Services;