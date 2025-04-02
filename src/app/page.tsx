import Head from 'next/head';
import HeroSection from './components/Navbar';
import Product from './components/Product';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Online Education</title>
      </Head>
      <HeroSection />
      <Product />   {/* Add Products Section */}
      <Reviews />    {/* Add Reviews Section */}
      <Footer />     {/* Add Footer Section */}
    </div>
  );
}
