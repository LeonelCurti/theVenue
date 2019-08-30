import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import MyButton from '../utils/MyButton'

export class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 30
  };

  percentage = () => {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1
      });
    } else {
    }
  };

  componentDidUpdate(){
    setTimeout(()=>{
      this.percentage()
    },30);
  }

  render() {
    const { discountStart } = this.state;
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade onReveal={() => this.percentage()}>
            <div className="discount_porcentage">
              <span>{discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>

          <Slide right>
            <div className="discount_description">
              <h3>Purchase tickets before 20th june</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis nisi
              </p>
              <MyButton 
                text='Purchase tickets' 
                bck='#ffa800' 
                color='#ffffff' 
                link='http://google.com'
                />
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discount;
