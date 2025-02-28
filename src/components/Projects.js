// src/components/Projects.js
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
            >
              <div className="relative h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-black mb-2">{project.title}</h3>
                <p className="text-lg text-gray-600 mb-2">{project.subtitle}</p>
                <p className="text-sm text-gray-500 mb-4">{project.label}</p>
                <Link
                  href={project.netlifyUrl} // Use the Netlify URL from the project data
                  className="inline-block bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition duration-300"
                  target="_blank" // Opens in a new tab to avoid leaving Next.js
                  rel="noopener noreferrer"
                >
                  Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}




/*
// src/components/Projects.js
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
            >
              <div className="relative h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-black mb-2">{project.title}</h3>
                <p className="text-lg text-gray-600 mb-2">{project.subtitle}</p>
                <p className="text-sm text-gray-500 mb-4">{project.label}</p>
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-block bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition duration-300"
                >
                  Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}*/
