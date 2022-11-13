import React, { Component } from 'react';
import "../furniture/furniture.css"
import "../floorplans/floorplans.css"
import Floor_SVG from './floor_SVG';

class Room extends Component {

    constructor(props) {
      super(props);
      this.state = {svg_objects: [<Floor_SVG x="0" y="0" dropHandlerSetter={this.props.dropHandlerSetter}></Floor_SVG>]}
    }

    render() { 
        return (
               this.state.svg_objects
        );
    }
}
 
export default Room;