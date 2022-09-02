import { allArticles } from '.contentlayer/generated'
export default function Article({ article }) {
  return (
    <article>
      <h1>{article.title}</h1>
      <div>{article.date}</div>
      <div dangerouslySetInnerHTML={{ __html: article.body.html }} />
    </article>
  )
}
export async function getStaticPaths() {
  return {
    paths: allArticles.map((a) => ({ params: { slug: a.slug } })),
    fallback: false,
  }
}
export async function getStaticProps({ params }) {
  const article = allArticles.find((article) => article.slug === params?.slug)
  return { props: { article } }
}