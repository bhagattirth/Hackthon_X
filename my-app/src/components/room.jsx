import React, { Component } from 'react';
import "../furniture/furniture.css"
import "../floorplans/floorplans.css"
class Room extends Component {
    state = {  } 

    handleDragLeave = event => {
        event.stopPropogation()
        event.preventDefault()
      };
      handleDragOver = event => {
        event.stopPropogation()
        event.preventDefault()
      };
      handleDragEnter = event => {
        event.stopPropogation()
        event.preventDefault()
      };
      handleDrop = event => {
        event.preventDefault()
      };

    render() { 
        return (
            <div className = {"grid"} > 
                <div className='floor' onDragOver={this.handleDragOver} onDragEnter={this.handleDragEnter} onDragExit={this.handleDragExit}></div>               
            </div>
        );
    }
}
 
export default Room;