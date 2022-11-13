import { allArticles } from '.contentlayer/generated'
import Image from "next/image";
import Link from "next/link";
import { useMDXComponent } from "next-contentlayer/hooks";
import { parseISO, format } from "date-fns";
const mdxComponents = {
  Image,
};

export default function Article({ article }) {
  const MDXContent = useMDXComponent(article.body.code);
  return (
    <main className="font-roboto flex flex-col justify-center pt-32 pb-40 p-10">
      <article className="flex flex-col justify-center items-start max-w-3xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4">
          {article.title}
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-2">
          <div className="flex items-center">
            <Image
              alt="Erik Flores"
              height={24}
              width={24}
              src="../erikfloresq.png"
              className="rounded-full"
            />
            <p className="text-sm ml-2 text-gray-500">
              {"Erik Flores / "}
              {format(parseISO(article.date), "MMMM dd, yyyy")}
            </p>
          </div>
          <p className="text-sm text-yellow-300 min-w-32 mt-2 md:mt-0">
            {article.readingTime.text}
          </p>
        </div>
        <div className="prose dark:prose-dark max-w-none w-full mt-5 mb-8 font-extralight">
          <MDXContent components={mdxComponents} />
        </div>
        <small>
          <Link href="/">
            <a>👈 Back to home</a>
          </Link>
        </small>
      </article>
    </main>
  );
}

export async function getStaticPaths() {
  let slugs = allArticles.map((a) => ({ params: { slug: a.slug } }))
  return {
    paths: slugs,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  console.log(`>>> params.slug - ${params.slug}`)
  console.log(`>>> params - ${ JSON.stringify(params)}`)
  const article = allArticles.find((article) => article.slug ===  params?.slug)
  return { props: { article } }
}