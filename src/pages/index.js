import React from 'react';
import Layout from '../templates/Layout';
import Seo from '../Components/Seo';
import useSiteMetaDate from '../hooks/use-siteMetadata';

const Hello = () => {

  const { title } = useSiteMetaDate();

  return (
    <Layout>
      <Seo pageTitle={title} />
      <h1>Hello from gatsby</h1>
    </Layout>
  )
}

export default Hello;
