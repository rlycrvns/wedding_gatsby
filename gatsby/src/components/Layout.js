import React from 'react';
import Footer from './Footer';
import Nav from './Nav';
import 'normalize.css';
import '../styles/fonts.css';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <header>
        <Nav />
      </header>
      {children}
      <Footer />
    </>
  );
}
