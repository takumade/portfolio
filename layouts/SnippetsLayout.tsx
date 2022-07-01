import Link from '@/components/Link'
import Tag from '@/components/Tag'
import { ComponentProps, useState } from 'react'
import Pagination from '@/components/Pagination'
import formatDate from '@/lib/utils/formatDate'
import { PostFrontMatter } from 'types/PostFrontMatter'
interface Props {
  posts: PostFrontMatter[]
  title: string
  initialDisplayPosts?: PostFrontMatter[]
  pagination?: ComponentProps<typeof Pagination>
}

export default function SnippetsLayout({
  posts,
  title,
  initialDisplayPosts = [],
  pagination,
}: Props) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts.filter((frontMatter) => {
    const searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

  return (
    <>
      <div className="divide-y">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {title}
          </h1>
          <div className="relative max-w-lg">
            <input
              aria-label="Search articles"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search snippets"
              className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
            />
            <svg
              className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 divide-y divide-gray-200 py-12 dark:divide-gray-700 md:grid-cols-2 lg:grid-cols-3">
          {!filteredBlogPosts.length && 'No posts found.'}
          {displayPosts.map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <a
                key={slug}
                href={`/snippets/${slug}`}
                className="bg-day dark:bg-night group relative flex transform cursor-pointer flex-wrap rounded border border-gray-200 bg-opacity-50 p-px py-px transition duration-500 hover:scale-105 dark:border-gray-700 dark:bg-opacity-50"
              >
                <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 transform bg-primary-500 duration-300 group-hover:scale-x-100" />
                <div className="absolute bottom-0 left-0 h-full w-1 origin-bottom scale-y-0 transform bg-primary-500 duration-300 group-hover:scale-y-100" />
                <div className="absolute top-0 left-0 h-1 w-full origin-right scale-x-0 transform bg-primary-500 duration-300 group-hover:scale-x-100" />
                <div className="absolute bottom-0 right-0 h-full w-1 origin-top scale-y-0 transform bg-primary-500 duration-300 group-hover:scale-y-100" />
                <div className="bg-day dark:bg-night relative space-y-2 p-4">
                  <article>
                    <div>
                      <h2 className="text-2xl font-bold leading-8 tracking-tight">
                        <Link
                          href={`/snippets/${slug}`}
                          className="text-gray-900 dark:text-gray-100"
                        >
                          {title}
                        </Link>
                      </h2>
                      <div className="prose prose-lg max-w-none text-gray-500 dark:text-gray-400 sm:prose-xl">
                        {summary}
                      </div>

                      <div className="flex flex-wrap pt-2">
                        {tags.map((tag) => (
                          <Tag key={tag} text={tag} />
                        ))}
                      </div>
                    </div>
                  </article>
                </div>
              </a>
            )
          })}
        </div>
      </div>
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  )
}
