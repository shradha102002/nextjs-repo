import Head from 'next/head';
import HeroSection from './components/Navbar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Online Education</title>
      </Head>
      <HeroSection />
    </div>
  );
}
