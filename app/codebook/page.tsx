import { CodebookPosts } from "app/components/codes"

export const metadata = {
  title: 'codebook',
  description: 'Read my notes.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-4 tracking-tighter">more projects</h1>
      <p>Additional writeups on smaller tech and data projects adjacent to research</p>
      <br/>
      <CodebookPosts />
    </section>
  )
}
