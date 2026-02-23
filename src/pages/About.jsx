function About() {
  return (
    <section className="bg-blue-800 text-white py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
          <p className="text-blue-300 mb-4">
            We are a leading industrial enterprise delivering large-scale
            infrastructure, engineering, and construction services with
            integrity and excellence.
          </p>
          <p className="text-blue-300">
            With proven expertise and commitment to safety, we partner with
            clients for sustainable growth and national impact.
          </p>
        </div>
        <div className="h-80 bg-blue-700 rounded-lg flex items-center justify-center">
          <span className="text-blue-200">Image / Graphic Here</span>
        </div>
      </div>
    </section>
  );
}
export default About;