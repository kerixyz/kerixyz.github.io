import Link from 'next/link'
import { getNotes } from 'app/notes/utils'
import { Placeholder } from 'app/components/placeholder'

export function NotesList() {
  let notes = getNotes().sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
  )

  let byYear = new Map<string, typeof notes>()
  for (let note of notes) {
    let year = note.metadata.publishedAt.slice(0, 4)
    byYear.set(year, [...(byYear.get(year) ?? []), note])
  }

  return (
    <div className="space-y-10">
      {Array.from(byYear.entries()).map(([year, items]) => (
        <div key={year}>
          <h2 className="text-xs font-mono text-neutral-500 tabular-nums mb-3">
            {year}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
            {items.map((note) => (
              <Link
                key={note.slug}
                href={`/notes/${note.slug}`}
                className="group flex items-center gap-4"
              >
                <div
                  className="shrink-0 w-[100px] h-[50px] overflow-hidden border border-neutral-800 dark:border-neutral-300 bg-cover bg-center group-hover:border-b-2"
                  style={
                    note.metadata.image
                      ? { backgroundImage: `url(${note.metadata.image})` }
                      : undefined
                  }
                >
                  {!note.metadata.image && <Placeholder seed={note.slug} />}
                </div>
                <span className="font-mono text-sm text-neutral-800 dark:text-neutral-200 group-hover:underline">
                  {note.metadata.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
