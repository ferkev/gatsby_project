import React from 'react';
import Layout from '../templates/Layout';
import Seo from '../Components/Seo';

const About = () => {
  return (
    <Layout>
      <Seo pageTitle="About"/>
      <h1>About page</h1>
      <div>
        <h2>My resume</h2>
        <div>
          <div>
            <h3>
              <u>Languages :</u>
            </h3>
            <ul>
              <li>HTML5</li>
              <li>Css</li>
              <li>Javascript</li>
              <li>React</li>
              <li>Nodejs</li>
              <li>PHP</li>
              <li>MongoDB</li>
              <li>Mysql</li>
            </ul>
          </div>
          <br></br>
          <div>
            <h3>Formations</h3>
            <p>2016: BTS Management</p>
            <p>2017: Web certification 3Wacademy</p>
            <p>2018: formation in Capsule Academy</p>
          </div>
          <div>
            <br></br>
            <h3>Experiences</h3>
            <ul>
              <li>
                <p>Folhomee, experience in station F, work on a js admin page with nodejs and worked on created web crawling server to get immo announces</p>
                <ul>
                  <li>time : from august 2018 to December 2018</li>
                  <li>React</li>
                  <li>Jquery</li>
                  <li>Nodejs</li>
                  <li>MongoDB</li>
                </ul>
              </li>
            </ul>
            <br></br>
            <ul>
              <li>
                <p>MayakConseil, formater for newbies on the web</p>
                <ul>
                  <li>time : from february 2019 to march 2019</li>
                  <li>Javascript</li>
                  <li>Jquery</li>
                  <li>Nodejs</li>
                  <li>MongoDB</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About;