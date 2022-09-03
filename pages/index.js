import Link from "next/link";
import { allArticles } from ".contentlayer/generated";
import { pick } from "@contentlayer/client";
import Article from "components/article";

export default function Home({ articles }) {
  return (
    <div className="px-8">
      <main className="max-w-7xl mx-auto pt-32 pb-40">
        <h1 className="mb-0 text-6xl">Erik Flores</h1>
        <p className="font-bold">Software Engineer at PedidosYa</p>
        <section className="pt-16">
          <h2 className="text-4xl mb-4">Acerca de mi</h2>
          <p className="mb-5">
            Me gusta programar
          </p>
        </section>
        <section className="pt-16">
          <h2 className="text-4xl mb-4">Artículos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 w-full">
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
  const articles = allArticles.map((article) => pick(article, ["title", "date", "readingTime", "slug"]));
  return { props: { articles } };
}
