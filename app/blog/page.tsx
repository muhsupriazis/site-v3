import { BlogPosts } from '@/app/components/posts'

export const metadata = {
  title: 'Blogs',
  description: 'In the midst of my busy schedule, I sometimes write about things I\'ve learned, share memorable moments in life, or even express my anxieties.'
}

export default function Page() {
  return (
    <section>
      <div>
        <h1 className="font-bold md:text-4xl text-3xl md:mb-6 mb-4 tracking-tighter">Blogs</h1>
        <p className="mb-6 font-light md:text-base text-[15px] leading-relaxed dark:text-[#a3a3a3] text-[#52525b]">
        Things I&apos;ve learned before, mostly in Indonesian.
        </p>
      </div>
        <BlogPosts />
    </section>
  )
}
