import React from 'react';
import Layout from '../templates/layout';
import Seo from '../Components/seo';
import useSiteMetaData from '../hooks/useSiteMetaData';
import Carousel from '../Components/carousel/carousel';
import ArticleList from '../Components/article/articleList';


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
