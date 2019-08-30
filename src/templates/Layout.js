import React from "react";
import PropsType from 'prop-types';
import { Global, css } from '@emotion/core'
import useSiteMetadata from '../hooks/useSiteMetaData';

import Header from '../Components/header/Header';
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
        }
        
        h2 {
          font-size: 1.75rem;
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
          height: 1500px;
        }
      `} />
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