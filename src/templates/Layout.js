import React from "react";
import Helmet from 'react-helmet';
import PropsType from 'prop-types';
import useSiteMetadata from '../hooks/use-sitemetadata';

import Header from '../Components/Header';

const Layout = ( {children} ) => {

  const { title } = useSiteMetadata();

  return (
    <>
      <header>
        <Header sitetitle={title}/>
      </header>
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