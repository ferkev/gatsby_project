import React from 'react';
import { Link } from 'gatsby';
import Seo from '../Components/Seo';

const NotFoundPage = () => {
  return (
    <>
      <Seo pageTitle="error" />
      <p>Page not Found</p>
      <p>You can return on the home page with this link</p>
      <Link to ="/">back to home</Link>
    </>
  )
}

export default NotFoundPage;