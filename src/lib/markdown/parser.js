import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const projectsDirectory = path.join(process.cwd(), 'content/projects');

// Returns all projects sorted by the `order` frontmatter field.
// Used by the home page project list.
export function getAllProjects() {
  const fileNames = fs.readdirSync(projectsDirectory);
  return fileNames
    .filter((f) => f.endsWith('.md'))
    .map((fileName) => {
      const filePath = path.join(projectsDirectory, fileName);
      const { data } = matter(fs.readFileSync(filePath, 'utf8'));
      return data;
    })
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}

// Returns a single project by slug.
// Used by the project detail page.
export function getProjectBySlug(slug) {
  const filePath = path.join(projectsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data } = matter(fileContents);
  return data;
}

// Renders the Markdown body of a project file to an HTML string.
// Reserved for Phase 2 gallery and video embed support.
export async function getProjectBodyHtml(slug) {
  const filePath = path.join(projectsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { content } = matter(fileContents);
  const result = await remark().use(html).process(content);
  return result.toString();
}
