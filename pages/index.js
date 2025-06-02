import Head from 'next/head';
import HomePage from '../components/HomePage';

export default function Home() {
  return (
    <>
      <Head>
        <title>文興國中科技實驗課程</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <HomePage />
    </>
  );
}

