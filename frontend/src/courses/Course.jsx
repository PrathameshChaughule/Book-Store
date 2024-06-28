import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Courses from '../components/Courses';


function Course() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className='min-h-screen'>
        <Courses />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Course