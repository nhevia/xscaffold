import React from 'react';
// import Navbar from '../../ui/Navbar';
// import Footer from '../../ui/Footer';
import { PropsWithChildren } from 'types/app';
// import s from './Layout.module.css';

const Layout = (props: PropsWithChildren) => {
  return (
    <>
      {/* <Navbar /> */}
      <main>{props.children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
