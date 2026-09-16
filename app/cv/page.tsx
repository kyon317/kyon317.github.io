import Link from '@/components/Link'
import Image from '@/components/Image'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({
  title: 'CV',
  description:
    'Academic curriculum vitae of Jiaqing (Vincent) Hu, M.Sc. in Visual Computing, Simon Fraser University.',
})

export default function CV() {
  const pdf = `${process.env.BASE_PATH || ''}/static/cv/Jiaqing_Vincent_Hu_CV.pdf`
  return (
    <div className="space-y-8 py-6">
      <div className="space-y-4">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-6xl">
          Curriculum Vitae
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400">
          Jiaqing (Vincent) Hu · M.Sc. in Visual Computing
        </p>
        <p className="max-w-2xl leading-7 text-gray-600 dark:text-gray-300">
          Research in computer animation, generative motion models, and computer vision, with
          experience in software engineering and university teaching.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            className="bg-primary-600 hover:bg-primary-700 rounded-lg px-5 py-3 font-semibold text-white"
            href={pdf}
            download
          >
            Download CV (PDF)
          </a>
          <a
            className="text-primary-500 font-medium"
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open PDF in a new tab
          </a>
          <Link className="text-primary-500 font-medium" href="/publications">
            Publications
          </Link>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400">Updated September 2026</p>
      </div>
      <div className="space-y-6" aria-label="CV page previews">
        {[1, 2].map((page) => (
          <a
            key={page}
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="block overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-gray-700"
            aria-label={`Open PDF, preview page ${page} of 2`}
          >
            <Image
              src={`/static/cv/cv-page-${page}.jpg`}
              alt={`Academic CV of Jiaqing (Vincent) Hu, page ${page} of 2. Download the PDF above for selectable text.`}
              width={1237}
              height={1600}
              className="h-auto w-full"
            />
          </a>
        ))}
      </div>
    </div>
  )
}
