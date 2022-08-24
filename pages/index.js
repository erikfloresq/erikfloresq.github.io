import Head from 'next/head'
import Image from 'next/image';
import Layout from '../components/layout';
import { getSortedPostsData } from '../libs/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  }; 
}

export default function Home({ allPostsData }) {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Image src="/images/profile.jpg" width={200} height={200}/>
        <h1 className="title">
          Welcome to Erik Blog!
        </h1>

        <div className="grid">
        <ul>
          {allPostsData.map(({ id, date, title}) => (
            <li key={id}>
                <h3>{title}</h3>
                <p>{date}</p>
            </li>
          ))}
        </ul>
        </div>
      </Layout>

      <footer>
        <p>
          Made with ❤️‍🔥 by <a href="#">@erikfloresq</a>
        </p>
      </footer>
    </div>
  )
}
