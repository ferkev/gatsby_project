import React from "react";
import PropsType from 'prop-types';
import { Global, css } from '@emotion/core';
import useSiteMetadata from '../hooks/useSiteMetaData';
import Header from '../Components/Header/header';

import '../styles/reset.css';

const Layout = ( {children} ) => {

  const { title } = useSiteMetadata();
  
  return (
    <>
      <Global styles={css`
        * {
          box-sizing: border-box;
        }
        
        html,
        body {
          margin: 0;
          background-color: #ffffff;
          color: #000000;
          font-size: 100%;
          font-family: sans-serif, helvetica;
          line-height: 1.5;
        }
        
        h1 {
          font-size: 2rem;
          margin: 1rem 0;
        }
        
        h2 {
          font-size: 1.75rem;
        }

        h3 {
          font-size: 1.5rem;
        }

        h4 {
          font-size: 1.25rem;
        }
        
        footer {
          background-color: #005aa7;
          color: #ffffff;
          text-align: center;
          margin-top: 1rem;
        }
        
        &.container {
          width: 90%;
          margin-left: auto;
          margin-right: auto;
        }
      `} />
      <Header sitetitle={title}/>
      <main className="container">
        {children}
      </main>
      <footer>
        <p>Made with <strong style={{color: "red"}}>❤️</strong> by kevin Le Franc</p>
        <p>© Kevin Le Franc - All rights reserved</p>
      </footer>
    </>
  )
}

Layout.PropsType = {
  children: PropsType.node.isRequired
}

export default Layout;