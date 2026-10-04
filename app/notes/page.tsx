import { NotesList } from 'app/components/posts'

export const metadata = {
  title: 'Notes',
  description:
    'Projects, notes on what I am learning about AI and work, and the occasional essay.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-4 tracking-tighter">notes</h1>
      <p className="mb-8">
        Projects, things I'm learning about AI and work, and the occasional
        longer essay.
      </p>
      <NotesList />
    </section>
  )
}
