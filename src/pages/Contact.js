import React from 'react';
import Layout from '../templates/layout';
import Seo from '../Components/seo';
import Map from '../Components/map/mapContainer';
import FormContact from '../Components/form/formContact';

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