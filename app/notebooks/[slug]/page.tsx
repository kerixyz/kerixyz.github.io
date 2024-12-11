import { getNotebookPostBySlug } from '../utils';

export default async function NotebookPage({ params }: { params: { slug: string } }) {
  const notebook = getNotebookPostBySlug(params.slug);

  return (
    <div>
      <h1>{notebook.title}</h1>
      <p>{notebook.date}</p>
      <article dangerouslySetInnerHTML={{ __html: notebook.content }} />
    </div>
  );
}
