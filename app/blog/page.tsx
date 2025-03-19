import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-4 tracking-tighter">writings and thoughts</h1>
      <p>Personal thoughts about experiences related to life, school, and jobs</p>
      <br/>
      <BlogPosts />
    </section>
  )
}
