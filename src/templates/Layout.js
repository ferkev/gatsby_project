import React from "react";
import PropsType from 'prop-types';
import useSiteMetadata from '../hooks/useSiteMetaData';

import Header from '../Components/Header';
import '../styles/reset.css';
import '../styles/global.css';

const Layout = ( {children} ) => {

  const { title } = useSiteMetadata();

  return (
    <>
      <Header sitetitle={title}/>
      <main className="container">
        {children}
      </main>
      <footer>
        <p>Made with <strong style={{color: "red"}}>❤️</strong> by kevin Le Franc</p>
      </footer>
    </>
  )
}

Layout.PropsType = {
  children: PropsType.node.isRequired
}

export default Layout;