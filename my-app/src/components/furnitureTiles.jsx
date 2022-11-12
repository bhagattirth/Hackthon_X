import React, { Component } from 'react';
import "../furniture/furniture.css"

class FurnitureCard extends Component {
    state = {  } 
    constructor(props){
      super(props);
      this.dropEnd = this.dropEnd.bind(this);
    }
    dropEnd(event){
      this.props.dropTriggerrer(event); 
      return true;
    }
    render() { 

        const styles = {
            aspectRatio: '1/1',
            width: 100,
            margin: 'auto',
            padding: 3,
            marginTop: 20,
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }
    

        return (
            <div>
                <div style={{display: "flex",flexDirection: "column", alignItems: "center"}}><div style={styles}><div className='bed' draggable onDragEnd={this.dropEnd}></div></div>bed</div>
                <div style={{display: "flex",flexDirection: "column", alignItems: "center"}}><div style={styles}><div className='desk' draggable></div></div>desk</div>
            </div>
        );
    }
}
 
export default FurnitureCard;

