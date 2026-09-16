import Link from '@/components/Link'
import publications from '@/data/publicationsData'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({
  title: 'Publications',
  description:
    'Research publications by Jiaqing (Vincent) Hu in computer animation and visual computing.',
})

export default function Publications() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-4 pt-6 pb-8">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-6xl">
          Publications
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400">
          Computer animation, generative motion models, and visual computing.
        </p>
        <p className="text-primary-500 flex flex-wrap gap-x-5 gap-y-2">
          <Link href="https://scholar.google.com/citations?user=8hGx2U4AAAAJ&hl=en">
            Google Scholar
          </Link>
          <Link href="https://dblp.org/pid/443/5097.html">DBLP</Link>
          <Link href="/cv">Academic CV</Link>
        </p>
      </div>
      <div className="py-10">
        <h2 className="mb-6 text-2xl font-bold">2026</h2>
        {publications.map((publication) => (
          <article
            key={publication.id}
            id={publication.id}
            className="space-y-4 rounded-xl border border-gray-200 p-6 sm:p-8 dark:border-gray-700"
          >
            <p className="text-primary-500 text-sm font-semibold">{publication.venue}</p>
            <h3 className="text-2xl leading-snug font-bold">
              <Link href={publication.doi}>{publication.title}</Link>
            </h3>
            <p className="leading-7 text-gray-600 dark:text-gray-300">
              {publication.authors.map((author, index) => (
                <span key={author}>
                  {index > 0 && ', '}
                  {author === 'Jiaqing Hu' ? (
                    <strong className="text-gray-900 dark:text-gray-100">{author}</strong>
                  ) : (
                    author
                  )}
                </span>
              ))}
            </p>
            <p className="leading-7 text-gray-600 dark:text-gray-300">{publication.summary}</p>
            <div className="text-primary-500 flex flex-wrap gap-4 pt-2 font-medium">
              <Link href={publication.paper}>Paper (PDF)</Link>
              <Link href={publication.doi}>DOI</Link>
              <Link href={publication.blog}>Project overview</Link>
              <a
                href={`${process.env.BASE_PATH || ''}${publication.bibtex}`}
                download
                className="hover:underline"
              >
                BibTeX
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
