import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Writings</h1>
      <p>I hope to write a bit more about a mix of personal writings and thoughts.</p>
      <BlogPosts />
    </section>
  )
}
