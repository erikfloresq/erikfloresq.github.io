import Link from "next/link";
import { allArticles } from ".contentlayer/generated";
import { pick } from "@contentlayer/client";
export default function Home({ articles }) {
  return (
    <section>
      <ul>
        {articles.map(({ slug, readingTime, date, title }) => (
          <li key={slug}>
            <Link href={`/blog/${slug}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small>{readingTime.text}</small>
            {" - "}
            <small>{date}</small>
          </li>
        ))}
      </ul>
    </section>
  );
}
export async function getStaticProps() {
  const articles = allArticles.map((article) => pick(article, ["title", "date", "readingTime", "slug"]));
  return { props: { articles } };
}
