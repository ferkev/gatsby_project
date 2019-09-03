import React from 'react';
import "./carousel.css";
import { StaticQuery, graphql, Link } from 'gatsby';

import chevron from '../../svg/chevron.svg'


class Carousel extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      imagesList: [],
      first: 0,
      legends: ["Welcome to my website", "Best practices"],
      className: {
        active: "active"
      },
    },
    this.handleClickNext = this.handleClickNext.bind(this);
    this.handleClickPrev = this.handleClickPrev.bind(this)
  }

  componentDidMount() {
    this.setState((prevState, props) => {
       return {
        imagesList : [...prevState.imagesList, props.images.carousel1.childImageSharp.fluid.src, props.images.carousel3.childImageSharp.fluid.src]
       };
    })
  }

  handleClickNext(){
    if (this.state.first < this.state.imagesList.length - 1) {
      this.setState({
        first:  this.state.first + 1
      })
    }
    else {
      this.setState({
        first: 0
      })
    }

    this.changeImage()
  }

  handleClickPrev(){
    if (this.state.first > 0) {
      this.setState({first: this.state.first - 1})
    }
    else if (this.state.first <= 0) {
      this.setState( {first:  this.state.imagesList.length - 1 });
    }

    this.changeImage()
  }


  changeImage() {
    const image = document.querySelector("#slide");
    image.style.backgroundImage = `url('${this.state.imagesList[this.state.first]}')`;
  }

  componentWillUnmount() {
    const next = document.querySelector('#next');
    const prev = document.querySelector('#prev');
    next.removeEventListener('click', this.handleClickNext);
    prev.removeEventListener('click', this.handleClickNext);
  }

  render(){

    const style = {
      backgroundImage: `url('${this.state.imagesList[this.state.first]}')`,
      backgroundRepeat: "no-repeat",
      backgroundCover: "cover",
      backgroundPosition: "center"
    }

    const ButtonStyle = {
      textDecoration: "none",
      color: "#fff",
      backgroundColor: "red"
    }
    
    return (
      <>
        <div id="carousel" style={{textAlign: "center"}}>
          <span id="prev" onClick={() => this.handleClickPrev()}>
            <img src={chevron} alt="right chevron"/>
          </span>
          <div id="slide" style={style} className={this.state.className.active}>
            <h1>{this.state.legends[this.state.first]}</h1>
            <p>A website created for create and test gatsby but it's my blog too, have great journey</p>
            <Link  
              to="/Contact"
            >
              Contact me
            </Link>
          </div>
          <span id="next" onClick={() => this.handleClickNext()}>
            <img src={chevron} alt="left chevron"/>
          </span>
        </div>
      </>
    )
  }


}


export default props => (
  <StaticQuery
    query={graphql`
      query {
        carousel1: file(relativePath: {eq: "carousel1.jpg"}){
          ...frgImage
        },
        carousel3: file(relativePath: {eq: "carousel3.jpg"}){
          ...frgImage
        }
      }
    `}
    render={({ carousel1, carousel3 }) => <Carousel images={{ carousel1, carousel3 }} {...props}/>}
  />
);