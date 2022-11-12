import React, { Component } from 'react';
import FurnitureCard from './furnitureTiles';
class Furniture extends Component {
    state = {  }
    render() { 
        const styles = {
            
        }
        return (
            <div className="" style={styles}>
                <FurnitureCard></FurnitureCard>
                <FurnitureCard></FurnitureCard>
                <FurnitureCard></FurnitureCard>
                <FurnitureCard></FurnitureCard>
                <FurnitureCard></FurnitureCard>
            </div>
        );
    }
}
 
export default Furniture;