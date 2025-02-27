import Image from 'next/image';
/*
export default function HeroSection() {
  return (
    <section className="hero">
      <div className="background-image">
        <Image
          src="/images/deen-background-x.jpg"
          alt="Hero Image"
          width={800} // Adjust to your image width
          height={400} // Adjust to your image height
          layout="responsive" // Optional: makes the image responsive
        />
      </div>
      <div className="hero-content">
        <h1>Crafting Stories That Inspire, Engage, and Connect</h1>
        <p>Transforming brands and events into immersive visual experiences.</p>
        <a href="/portfolio" className="button">View My Work</a>
      </div>
    </section>
  );
}
  */

export default function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/deen-background-x.jpg"
          alt="Hero Image"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <div className="bg-black bg-opacity-50 p-4 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl mb-4">
            Crafting Stories That Inspire, Engage, and Connect
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-6">
            Transforming brands and events into immersive visual experiences.
          </p>
    
          {/* <a href="/portfolio"
            className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300"
          > View My Work
          </a> */}
          
        </div>
      </div>
    </section>
  );
}
