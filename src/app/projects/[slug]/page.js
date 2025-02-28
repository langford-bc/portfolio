



// app/projects/[slug]/page.js
'use client'; // Mark this as a Client Component

import { useParams } from 'next/navigation';
import { projects } from '../../../data/projects';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectPage() {
  const params = useParams(); // Use useParams to get params asynchronously

  // Ensure params and slug are defined
  if (!params || !params.slug || typeof params.slug !== 'string') {
    notFound();
  }

  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-16 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="relative h-96 mb-8 rounded-lg overflow-hidden shadow-md">
          <Image
            src={project.image}
            alt={project.title}
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <h1 className="text-3xl font-bold mb-4 text-black">{project.title}</h1>
        <p className="text-lg text-gray-600 mb-4">{project.subtitle}</p>
        <p className="text-sm text-gray-500 mb-4">{project.label}</p>
        <div 
          className="text-gray-700 prose prose-lg max-w-none" 
          dangerouslySetInnerHTML={{ __html: project.description }}
        />
        <Link
          href="/" // Points to homepage as per your request
          className="inline-block bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition duration-300 mt-6"
        >
          Back to Projects
        </Link>
      </div>
    </div>
  );
}





/*
// app/projects/[slug]/page.js
import { projects } from '../../../data/projects';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectPage({ params }) {
  // Ensure params is defined and slug is a string
  if (!params || !params.slug || typeof params.slug !== 'string') {
    notFound();
  }

  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-16 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="relative h-96 mb-8 rounded-lg overflow-hidden shadow-md">
          <Image
            src={project.image}
            alt={project.title}
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <h1 className="text-3xl font-bold mb-4 text-black">{project.title}</h1>
        <p className="text-lg text-gray-600 mb-4">{project.subtitle}</p>
        <p className="text-sm text-gray-500 mb-4">{project.label}</p>
        <div 
          className="text-gray-700 prose prose-lg max-w-none" 
          dangerouslySetInnerHTML={{ __html: project.description }}
        />
        <Link
          href="/" // Points to homepage as per your request
          className="inline-block bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition duration-300 mt-6"
        >
          Back to Projects
        </Link>
      </div>
    </div>
  );
}
*/


/*
// app/projects/[slug]/page.js
import { projects } from '../../../data/projects';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectPage({ params }) {
  // Ensure params.slug is accessed directly (synchronous in Server Components)
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-16 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="relative h-96 mb-8 rounded-lg overflow-hidden shadow-md">
          <Image
            src={project.image}
            alt={project.title}
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <h1 className="text-3xl font-bold mb-4 text-black">{project.title}</h1>
        <p className="text-lg text-gray-600 mb-4">{project.subtitle}</p>
        <p className="text-sm text-gray-500 mb-4">{project.label}</p>
        <div 
          className="text-gray-700 prose prose-lg max-w-none" 
          dangerouslySetInnerHTML={{ __html: project.description }}
        />
        <Link
          href="/" // Points to homepage as per your request
          className="inline-block bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition duration-300 mt-6"
        >
          Back to Projects
        </Link>
      </div>
    </div>
  );
}
*/









/*// app/projects/[slug]/page.js
import { projects } from '../../../data/projects';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectPage({ params }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-16 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="relative h-96 mb-8 rounded-lg overflow-hidden shadow-md">
          <Image
            src={project.image}
            alt={project.title}
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <h1 className="text-3xl font-bold mb-4 text-black">{project.title}</h1>
        <p className="text-lg text-gray-600 mb-4">{project.subtitle}</p>
        <p className="text-sm text-gray-500 mb-4">{project.label}</p>
        <div 
          className="text-gray-700 prose prose-lg max-w-none" 
          dangerouslySetInnerHTML={{ __html: project.description.replace(/\n/g, '<br />') }}
        />
        <Link
          href="/"
          className="inline-block bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition duration-300 mt-6"
        >
          Back to Projects
        </Link>
      </div>
    </div>
  );
}
  */