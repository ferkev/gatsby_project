import React from 'react';
import Layout from '../templates/layout';
import Seo from '../components/seo';
import Map from '../components/mapContainer/mapContainer';
import FormContact from '../components/form/formContact';

const Contact = () => {
  return (
    <Layout>
      <Seo pageTitle="Contact" />
      <h1>Contact page</h1>
      <FormContact />
      <Map />
    </Layout>
  )
}

export default Contact;