import React from 'react';
import Layout from '../templates/Layout';
import Seo from '../Components/Seo';
import '../styles/form.css';

import Map from '../Components/map/MapContainer';
import FormContact from '../Components/form/FormContact';

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