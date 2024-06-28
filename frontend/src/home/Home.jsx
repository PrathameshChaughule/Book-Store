import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Freebook from '../components/Freebook';

function Home() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Banner />
      </div>
      <div>
        <Freebook />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Home