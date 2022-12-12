import { allArticles } from ".contentlayer/generated";
import { pick } from "@contentlayer/client";
import Article from "components/article";
import Head from "next/head";

export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title>Erik Flores</title>
      </Head>
      <main className="font-mono max-w-3xl mx-auto pt-10 pb-40">
        <h1 className="text-3xl px-5">Erik Flores</h1>
        <section className="pt-12">
          <div className="w-full">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
export async function getStaticProps() {
  const sortArticles = allArticles.sort((a, b) => new Date(b.date) - new Date(a.date))
  const articles = sortArticles.map((article) => pick(article, ["title", "date", "readingTime", "slug", "thumbnail"]));
  return { props: { articles } };
}
