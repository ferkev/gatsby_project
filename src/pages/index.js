import React from 'react';
import Layout from '../templates/layout';
import Seo from '../Components/Seo';
import useSiteMetaData from '../hooks/useSiteMetaData';
import Carousel from '../Components/Carousel/Carousel';
import ArticleList from '../Components/Article/articleList';


export default () => {

  const { title } = useSiteMetaData();

  return (
    <Layout>
      <Seo pageTitle={title} />
      <div>
        <Carousel />
      </div>
      <div style={{ display: "flex", flexDirection: "column", flexWrap: "wrap", justifyContent: "center", alignItems: "center"}}>
        <ArticleList />
      </div>
    </Layout>
  )
}
