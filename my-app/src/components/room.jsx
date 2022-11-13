import React, { Component } from 'react';
import "../furniture/furniture.css"
import "../floorplans/floorplans.css"
import Floor_SVG from './floor_SVG';

class Room extends Component {

    constructor(props) {
      super(props);

      this.state = {svg_objects: [<Floor_SVG hall="crabtree" x="0" y="0" dropHandlerSetter={this.props.dropHandlerSetter}></Floor_SVG>]}


      console.log("hasd");
      this.changeHall = this.changeHall.bind(this);
      let hmm = this.changeHall;
      document.addEventListener("DOMContentLoaded", function(e) {
        const elems = document.getElementsByClassName("dropdown-item");
        console.log("hasd");
        console.log(elems);
        console.log(elems.length);
        for(let i = 0;i<elems.length;++i){
          console.log("hmmm");
            elems[i].addEventListener("click", () => {
                  console.log(this);
                  document.getElementById("dropdownMenuButton").innerHTML = elems[i].innerHTML;
                  hmm(elems[i].innerHTML);
                });
          }
      })
    }

    changeHall(name){
      this.setState((prevState, t)=>{
        return {svg_objects: [<Floor_SVG hall={name} x="0" y="0" dropHandlerSetter={this.props.dropHandlerSetter}></Floor_SVG>]}
      });
    }

    render() { 
        return (
          <div>
          {this.state.svg_objects}
          </div>
        );
    }
}
export default Room;