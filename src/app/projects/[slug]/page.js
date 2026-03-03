// src/app/projects/[slug]/page.js
import { getAllProjects, getProjectBySlug } from '../../../lib/markdown/parser';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function ProjectPage({ params }) {
  const { slug } = await params;

  let project;
  try {
    project = getProjectBySlug(slug);
  } catch {
    notFound();
  }

  if (!project) {
    notFound();
  }

  return (
    <article className="min-h-screen">
      {/* Cinematic Hero Image */}
      <section className="relative w-full h-[70vh] bg-brand-black overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover opacity-80 grayscale"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-end container-wide pb-12 lg:pb-18">
          <p className="text-white text-sm uppercase tracking-widest mb-4 opacity-70">
            {project.category} / {project.year}
          </p>
          <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-medium reveal-text">
            {project.title}
          </h1>
        </div>
      </section>

      {/* Project Metadata Bar */}
      <section className="border-b border-brand-gray-light bg-white py-8">
        <div className="container-wide grid-12 items-center">
          <div className="col-span-4 md:col-span-3">
            <span className="text-[10px] uppercase tracking-widest text-brand-gray-mid block mb-1">Client</span>
            <span className="text-sm font-medium">{project.client}</span>
          </div>
          <div className="col-span-4 md:col-span-3">
            <span className="text-[10px] uppercase tracking-widest text-brand-gray-mid block mb-1">Role</span>
            <span className="text-sm font-medium">{project.role}</span>
          </div>
          <div className="col-span-4 md:col-span-3">
            <span className="text-[10px] uppercase tracking-widest text-brand-gray-mid block mb-1">Sector</span>
            <span className="text-sm font-medium">{project.category}</span>
          </div>
          <div className="col-span-4 md:col-span-3 md:text-right">
             <Link href="/contact" className="text-xs uppercase tracking-widest font-bold border-b border-brand-black pb-1 hover:text-brand-gray-mid hover:border-brand-gray-mid transition-all">
                Start a similar project
             </Link>
          </div>
        </div>
      </section>

      {/* Narrative Sections */}
      <section className="cinematic-pacing container-wide">
        <div className="grid-12">
          {/* Challenge */}
          <div className="col-span-4 md:col-span-4 lg:col-span-5">
            <h2 className="text-xs uppercase tracking-widest text-brand-gray-mid mb-8">The Challenge</h2>
          </div>
          <div className="col-span-4 md:col-span-8 lg:col-span-7">
            <p className="text-xl md:text-2xl leading-relaxed text-brand-black mb-12">
              {project.challenge}
            </p>
          </div>

          {/* Spacer */}
          <div className="col-span-12 h-px bg-brand-gray-light my-12 opacity-50"></div>

          {/* Strategy */}
          <div className="col-span-4 md:col-span-4 lg:col-span-5">
            <h2 className="text-xs uppercase tracking-widest text-brand-gray-mid mb-8">The Strategy</h2>
          </div>
          <div className="col-span-4 md:col-span-8 lg:col-span-7">
            <p className="text-lg md:text-xl leading-relaxed text-brand-gray-dark mb-12">
              {project.strategy}
            </p>
          </div>

          {/* Spacer */}
          <div className="col-span-12 h-px bg-brand-gray-light my-12 opacity-50"></div>

          {/* Outcome — RENAMED from `result` to `outcome` to match Markdown frontmatter field */}
          <div className="col-span-4 md:col-span-4 lg:col-span-5">
            <h2 className="text-xs uppercase tracking-widest text-brand-gray-mid mb-8">Outcome & Assessment</h2>
          </div>
          <div className="col-span-4 md:col-span-8 lg:col-span-7">
            <p className="text-lg md:text-xl leading-relaxed font-serif italic text-brand-black">
              &quot;{project.outcome}&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <section className="bg-brand-gray-light py-24">
        <div className="container-wide text-center">
          <p className="text-xs uppercase tracking-widest text-brand-gray-mid mb-6">Ready to work together?</p>
          <Link href="/contact" className="text-4xl md:text-6xl font-medium hover:text-brand-gray-mid transition-all">
            Get in touch →
          </Link>
        </div>
      </section>
    </article>
  );
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}
