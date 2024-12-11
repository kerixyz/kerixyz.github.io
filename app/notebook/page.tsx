import { NotebookPosts } from "app/components/notes"

export const metadata = {
  title: 'Notebook',
  description: 'Read my notes.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Notes</h1>
      <p>I hope to write a bit more about small projects that I'm working on here adjacent to my research.</p>
      <br/>
      <NotebookPosts />
    </section>
  )
}
