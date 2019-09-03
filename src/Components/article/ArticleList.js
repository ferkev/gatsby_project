import React from 'react';
import Image from './Image';
import projectImage from '../../hooks/useImage';
import './article.css';

const ArticleList = () => {

  const { folhomee, mayak, benext } = projectImage();

  return (
    <>
      <h3 className="title_projects">Working companies</h3>
      <div className="projects">
        <div className="article_projects">
            <Image src={folhomee.childImageSharp.fluid} />
            <h4>Working at Folhomee</h4>
            <p>
              A project to create a modern app with a bot to purpose a new way to sell new apartment in Paris. According to some newspaper, it's the future How it works: Someone use folhomee app on facebook messenger, enter your prefernces and wait for notification. Behind we are looking for the best announce for him.
            </p>
            <a href="https://www.folhomee.fr/">visit website</a>
        </div>
        <div className="article_projects">
            <Image src={mayak.childImageSharp.fluid} />
            <h4>Working at Mayak</h4>
            <p>
              A project to create a formation program for newbies in code programming. Teaching javascript, css and Html for creating website.
              Teaching best practices for quality code.
              Teaching nodejs with express in order to prepare new programmers for backend programming
            </p>
            <a href="http://mayak-conseil.com/">visit website</a>
        </div>
        <div className="article_projects">
            <Image src={benext.childImageSharp.fluid} />
            <h4>Working at benext</h4>
            <p>
              Working for companies as a provider to participate in their development to improve their products
              I worked for eTF1, as a IPTV developer and i coded on Qt for cross plate-forme application on android boxes
            </p>
            <a href="http://www.benextcompany.com/">visit website</a>
        </div>
      </div>
    </>
  )
}

export default ArticleList;