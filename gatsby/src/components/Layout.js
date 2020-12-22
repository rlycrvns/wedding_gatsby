import React from 'react';
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
      <main>{children}</main>
    </>
  );
}
