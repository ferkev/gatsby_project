import React from 'react';
import "./carousel.css";
import { StaticQuery, graphql } from 'gatsby';


import chevron from '../../svg/chevron.svg'


class Carousel extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      imagesList: [],
      first: 0,
      allText : ["Business", "Agile methods", "Best practices"],
      className: {
        active: "active"
      },
    },
    this.handleClickNext = this.handleClickNext.bind(this);
    this.handleClickPrev = this.handleClickPrev.bind(this)
  }

  componentDidMount() {
    this.setState((prevState, props) => {

      console.log(props.images.carousel1.childImageSharp.fluid)
       return {
        imagesList : [...prevState.imagesList, props.images.carousel1.childImageSharp.fluid.src, props.images.carousel2.childImageSharp.fluid.src, props.images.carousel3.childImageSharp.fluid.src]
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
      this.setState( {first: 2 });
    }

    this.changeImage()
  }


  changeImage() {
    const image = document.querySelector("#imageslide");
    image.src = this.state.imagesList[this.state.first];
  }

  componentWillUnmount() {
    const next = document.querySelector('#next');
    const prev = document.querySelector('#prev');
    next.removeEventListener('click', this.handleClickNext);
    prev.removeEventListener('click', this.handleClickNext);
  }

  render(){
    console.log(this.state.imagesList)
    return (
      <>
        <div style={{textAlign: "center"}}>
          <div className={this.state.className.active}>
            <h1 className="carousel_title">{this.state.allText[this.state.first]}</h1>
            <span id="prev" onClick={() => this.handleClickPrev()}>
              <img src={chevron} alt="right chevron"/>
            </span>
            <img id="imageslide" src={this.state.imagesList[this.state.first]} alt="background"/>
            <span id="next" onClick={() => this.handleClickNext()}>
              <img src={chevron} alt="left chevron"/>
            </span>
          </div>
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
        carousel2: file(relativePath: {eq: "carousel2.jpg"}){
          ...frgImage
        },
        carousel3: file(relativePath: {eq: "carousel3.png"}){
          ...frgImage
        }
      }
    `}
    render={({ carousel1, carousel2, carousel3 }) => <Carousel images={{ carousel1, carousel2, carousel3 }} {...props}/>}
  />
);