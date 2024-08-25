import Link from 'next/link'
import { formatDate, getBlogPosts } from '@/app/blog/utils'
import { cn } from '@/lib/utils'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div className="grid grid-cols-1  md:grid-cols-2 gap-1 md:gap-4 ">
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className={cn(
              "w-full grid relative grid-cols-1 aspect-square rounded overflow-hidden",
            )}>
              <img src={post.metadata.image} className="h-full object-cover" alt={post.metadata.title} />
              <div className="p-4 absolute dark:bg-[#09090b] dark:bg-opacity-80 bg-white bg-opacity-70 bottom-0 right-0 left-0">
                <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                  {post.metadata.title}
                </p>
                <p className="text-neutral-600 text-sm font-light dark:text-neutral-500 w-[210px] tabular-nums">
                  {formatDate(post.metadata.publishedAt, false)}
                </p>
              </div>
            </div>
          </Link>
        ))}
    </div>
  )
}
