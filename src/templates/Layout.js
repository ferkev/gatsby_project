import React from "react";
import { Link } from 'gatsby';

const Layout = ( {children} ) => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Logo</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <p>MAde with love by kevin lefranc</p>
      </footer>
    </>
  )
}

export default Layout;