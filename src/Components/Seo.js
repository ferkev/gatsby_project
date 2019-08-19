import React from 'react';
import Helmet from 'react-helmet';
import PropsType from 'prop-types';
import useSiteMetadata from '../hooks/use-sitemetadata';

const Seo = ({ pageTitle, pageDescription, pageLang }) => {

  let { title, description, lang } = useSiteMetadata(); 

  const dataTitle = pageTitle || title;
  const dataDescription = pageDescription || description;
  const dataLang = "en"

  return (
    <>
      <Helmet>
        <html lang={dataLang}></html>
        <title>{dataTitle}</title>
        <meta name="description" description={dataDescription} />
      </Helmet>
    </>
  )
}

Seo.PropsType = {
  pageTitle: PropsType.string.isRequired,
  pageDescription: PropsType.string.isRequired,
  lang: PropsType.string.isRequired,
}

export default Seo;