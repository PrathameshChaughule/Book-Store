import React from 'react';
import Home from './home/Home';
import { Route, Routes } from 'react-router-dom';
import Course from './courses/Course';
import Signup from './components/Signup';
import Contacts from './Contact/Contacts';

function App() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Course />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
    </>
  );
}

export default App