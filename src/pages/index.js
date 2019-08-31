import React from 'react';
import Layout from '../templates/Layout';
import Seo from '../Components/Seo';
import useSiteMetaData from '../hooks/useSiteMetaData';
import Carousel from '../Components/carousel/Carousel';
const Hello = () => {

  const { title } = useSiteMetaData();

  return (
    <Layout>
      <Seo pageTitle={title} />
      <h1>Hello from gatsby</h1>
      <div>
        <h2>Welcome to my websitet</h2>
        <Carousel />
      </div>
      <div>
        <h3>Projects</h3>
        <p>here all my projects</p>
      </div>
    </Layout>
  )
}

export default Hello;
