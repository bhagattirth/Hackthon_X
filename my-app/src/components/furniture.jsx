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
                <FurnitureCard dropTriggerrer = {this.props.dropTriggerrer}></FurnitureCard>
                <FurnitureCard dropTriggerrer = {this.props.dropTriggerrer}></FurnitureCard>
            </div>
        );
    }
}
 
export default Furniture;