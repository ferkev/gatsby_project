import React from 'react';
import Layout from '../templates/layout';
import Seo from '../components/seo';
import useSiteMetaData from '../hooks/useSiteMetaData';
import Slider from '../components/carousel/slider';
import ArticleList from '../components/article/articleList';


export default () => {

  const { title } = useSiteMetaData();

  return (
    <Layout>
      <Seo pageTitle={title} />
      <div>
        <Slider />
      </div>
      <div style={{ display: "flex", flexDirection: "column", flexWrap: "wrap", justifyContent: "center", alignItems: "center"}}>
        <ArticleList />
      </div>
    </Layout>
  )
}
