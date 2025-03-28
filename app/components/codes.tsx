import Link from 'next/link';
import { formatDate, getCodebookPosts } from 'app/codebook/utils';

export function CodebookPosts() {
  let allNotes = getCodebookPosts();

  return (
    <div>
      {allNotes
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((note) => (
          <Link
            key={note.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/codebook/${note.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 w-[120px] tabular-nums">
                {formatDate(note.metadata.publishedAt, false)}
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {note.metadata.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
}
