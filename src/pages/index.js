import React from 'react';
import Layout from '../templates/Layout';
import Seo from '../Components/Seo';
import useSiteMetaData from '../hooks/useSiteMetaData';

const Hello = () => {

  const { title } = useSiteMetaData();

  return (
    <Layout>
      <Seo pageTitle={title} />
      <h1>Hello from gatsby</h1>
    </Layout>
  )
}

export default Hello;
