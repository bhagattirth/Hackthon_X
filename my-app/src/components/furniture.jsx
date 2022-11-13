import React, { Component } from 'react';
import FurnitureCard from './furnitureTiles';
class Furniture extends Component {
    state = {  }
    constructor(props){
        super(props);
    }
    render() { 
        const styles = {
            
        }
        return (
            <div style={styles}>
                <h5>Drag to Add</h5>
                <hr></hr>
                <FurnitureCard dropTriggerrer = {this.props.dropTriggerrer}></FurnitureCard>
                <FurnitureCard dropTriggerrer = {this.props.dropTriggerrer}></FurnitureCard>
            </div>
        );
    }
}
 
export default Furniture;