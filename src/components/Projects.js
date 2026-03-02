// src/components/Projects.js
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section className="bg-white py-24 md:py-30 lg:py-40">
      <div className="container-wide">
        <header className="mb-12 flex flex-col md:flex-row justify-between items-baseline gap-6">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight">Case Studies.</h2>
          <p className="text-brand-gray-mid text-sm uppercase tracking-widest font-bold">
            Selected Strategic Narratives
          </p>
        </header>

        <div className="grid-12">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`col-span-4 md:col-span-6 lg:col-span-6 mb-16 lg:mb-24 group transition-all duration-700 hover:-translate-y-4`}
            >
              <Link href={`/projects/${project.slug}`} className="block">
                <div className="relative aspect-[4/5] md:aspect-[16/10] overflow-hidden bg-brand-gray-light mb-8">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-brand-black/0 transition-all duration-700"></div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline gap-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-brand-gray-mid mb-2 block">
                      {project.category} / {project.year}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-medium group-hover:text-brand-gray-mid transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex flex-col items-end">
                     <span className="text-xs uppercase tracking-widest font-bold border-b border-brand-black pb-1 hover:text-brand-gray-mid hover:border-brand-gray-mid transition-all">
                        View Story →
                     </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
