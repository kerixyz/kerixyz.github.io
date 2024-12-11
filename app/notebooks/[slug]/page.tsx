import { getNotebookPosts } from '../utils';
import path from 'path';
import fs from 'fs';

export default async function NotebookPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  // Fetch all notebook posts to find the current one
  const notebooks = getNotebookPosts();
  const notebook = notebooks.find((n) => n.slug === slug);

  if (!notebook) {
    return <div>Notebook not found.</div>;
  }

  return (
    <div>
      <h1>{notebook.metadata.title}</h1>
      <p>
        <em>{notebook.metadata.date}</em>
      </p>
      <p>{notebook.metadata.summary}</p>

      <hr />

      {/* Render content */}
      <div dangerouslySetInnerHTML={{ __html: notebook.content }} />
    </div>
  );
}

// Generate static paths for notebooks
export async function getStaticPaths() {
  const notebooks = getNotebookPosts();

  return {
    paths: notebooks.map((notebook) => ({
      params: { slug: notebook.slug },
    })),
    fallback: false,
  };
}

// Fetch notebook data dynamically
export async function getStaticProps({ params }: { params: { slug: string } }) {
  const notebooksDir = path.join(process.cwd(), 'app', 'notebooks', 'posts');
  const filePath = path.join(notebooksDir, `${params.slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return {
      notFound: true,
    };
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { metadata, content } = getNotebookPosts().find((notebook) => notebook.slug === params.slug) || {};

  return {
    props: {
      notebook: { metadata, content },
    },
  };
}
