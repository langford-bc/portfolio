export default function AboutMe() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Optional: Add your photo here */}
          {/* <div className="w-48 h-48 overflow-hidden rounded-full">
            <Image
              src="/images/your-photo.jpg" // Replace with your photo path in public/images
              alt="Deen Karim"
              width={192}
              height={192}
              className="object-cover"
            />
          </div> */}
          <div className="text-lg text-gray-700">
            <p>
              I’m Deen Karim, a passionate content director with over 20 years of experience crafting stories that inspire, engage, and connect. I specialize in transforming marketing events for large companies and brands into immersive visual experiences, amplifying thought leadership and fostering meaningful relationships with valuable audiences and stakeholders. My expertise spans storytelling, scripting, video production, and strategic communication. Based in Hamburg and Toronto, I’ve collaborated with notable clients across technology, healthcare, financial services, and sports to deliver impactful content that resonates with audiences. I approach my work with creativity and discipline, always prioritizing positive teamwork to achieve exceptional results.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <a
          href="/contact" // Replace with your contact page route or external link
          className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition duration-300"
        >
          Let’s Collaborate
        </a>
      </div>
    </section>
  );
}

