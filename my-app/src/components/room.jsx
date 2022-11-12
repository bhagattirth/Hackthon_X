import React, { Component } from 'react';
import "../furniture/furniture.css"
import "../floorplans/floorplans.css"
class Room extends Component {
    state = {objects: []} 
    constructor(props) {
      super(props);
      this.handleDrop = this.handleDrop.bind(this);
      this.props.dropHandlerSetter(this.handleDrop);
    }

    handleDrop(event){
      let newObjects = this.state.objects;
      newObjects.push(<div className='bed' key = {"key" + this.state.objects.length}></div>);
      this.setState((prevState, props)=>{
        return {objects: newObjects};
      });
      console.log(this.state.objects.length);
    }

    render() { 
        return (
            <div className = {"grid"} > 
              <div className='floor'> </div> 
              <div>
              {this.state.objects}              
              </div>
            </div>
        );
    }
}
 
export default Room;