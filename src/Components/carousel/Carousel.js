import React from 'react';
import "./carousel.css"

class Carousel extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      style1: "style1",
      style2: "style2",
      style3: "style3"
    }
  }


  handleClick(){
    switch(this.state.style1) {
      case "style1": 
        this.setState({ 
          style1: "style2",
          style2: "style3",
          style3: "style1"
        })
        break;
      case "style2": 
        this.setState({ 
          style1: "style3",
          style2: "style1",
          style3: "style2"
        })
        break;
      case "style3": 
        this.setState({ 
          style1: "style1",
          style2: "style2",
          style3: "style3"
        })
        break;
    }
  }

  render(){
    console.log(this.state.style1)


    return (
      <div>
        <h3>My carousel</h3>
        <span onClick={ () => this.handleClick() } style={{backgroundColor: "yellow", width: "100px"}}>Click</span>
        <div style={{textAlign: "center", position:"relative", top: "0", left:"0", height:"750px"}}>
          <div className={this.state.style1} style={{zIndex: "1000"}}>
            <p>200x001</p>
          </div>
          <div className={this.state.style2} style={{zIndex: "1000"}}>
            <p>200x002</p>
          </div>
          <div className={this.state.style3} style={{zIndex: "3000"}}>
            <p>200x003</p>
          </div>
        </div>
      </div>
    )
  }


}


export default Carousel;