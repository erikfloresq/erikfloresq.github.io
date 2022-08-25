import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/layout';
import { getSortedPostsData } from '../libs/posts'

export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  }; 
}

const Home = ({ allPostsData }) => {
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
                <Link href={{
                  pathname: '/[id]',
                  query: { id: id }
                }}>
                  <a>
                    <h3>{title}</h3>
                    <p>{date}</p>
                  </a>
                </Link>
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

export default Home
