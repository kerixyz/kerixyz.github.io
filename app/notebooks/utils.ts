import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const notebooksDir = path.join(process.cwd(), 'app/notebooks/posts');

export function getNotebookPosts() {
  const files = fs.readdirSync(notebooksDir);

  return files.map((file) => {
    const fullPath = path.join(notebooksDir, file);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug: file.replace('.md', ''), // Remove `.md` extension
      ...data,
    };
  });
}

export function getNotebookPostBySlug(slug: string) {
  const fullPath = path.join(notebooksDir, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    ...data,
    content,
  };
}
