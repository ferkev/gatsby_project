import React from 'react';
import Layout from '../templates/layout';
import Seo from '../Components/Seo';
import Map from '../Components/MapContainer/mapContainer';
import FormContact from '../Components/Form/FormContact';

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