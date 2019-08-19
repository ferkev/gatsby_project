import React from "react";
import Helmet from 'react-helmet';
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
      <main>
        {children}
      </main>
      <footer>
        <p>MAde with love by kevin lefranc</p>
      </footer>
    </>
  )
}

Layout.PropsType = {
  children: PropsType.node.isRequired
}

export default Layout;