import { getNotebookPosts } from './utils';
import Link from 'next/link';

export default async function NotebooksPage() {
  const notebooks = getNotebookPosts();

  return (
    <div>
      <h1>Mini Projects and Writings</h1>
      <p>A collection of my experiments, small coding projects, and technical writings.</p>
      <ul>
        {notebooks.map((notebook) => (
          <li key={notebook.slug}>
            <Link href={`/notebooks/${notebook.slug}`}>
              <a>{notebook.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
