import { allArticles } from ".contentlayer/generated";
import { pick } from "@contentlayer/client";
import Article from "components/article";

export default function Home({ articles }) {
  return (
    <div>
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
  const articles = allArticles.map((article) => pick(article, ["title", "date", "readingTime", "slug", "thumbnail"]));
  return { props: { articles } };
}
