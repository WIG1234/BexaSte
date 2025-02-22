import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MainLayout = ({ children }) => (
  <div >
    <Header />
    <main className='bg-white'>{children}</main>
    <Footer />
  </div>
);

export default MainLayout;
