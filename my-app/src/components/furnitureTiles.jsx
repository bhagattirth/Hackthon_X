import React, { Component } from 'react';
import "../furniture/furniture.css"

class FurnitureCard extends Component {
    state = {  } 

    hhandleDragLeave = event => {
        event.stopPropogation()
        event.preventDefault()
        // Bring the endzone back to normal, maybe?
      };
      handleDragOver = event => {
        event.stopPropogation()
        event.preventDefault()
        // Turn the endzone red, perhaps?
      };
      handleDragEnter = event => {
        event.stopPropogation()
        event.preventDefault()
        // Play a little sound, possibly?
      };
      handleDrop = event => {
        event.stopPropogation()
        event.preventDefault()
        // Add a football image to the endzone, initiate a file upload,
        // steal the user's credit card
      };
    
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
                <div style={{display: "flex",flexDirection: "column", alignItems: "center"}}><div style={styles}><div className='bed' draggable onDragOver={this.handleDragOver} onDragEnter={this.handleDragEnter} onDragLeave={this.handleDragLeave} onDrop={this.handleDrop}></div></div>bed</div>
                <div style={{display: "flex",flexDirection: "column", alignItems: "center"}}><div style={styles}><div className='desk' draggable></div></div>desk</div>
            </div>
        );
    }
}
 
export default FurnitureCard;

