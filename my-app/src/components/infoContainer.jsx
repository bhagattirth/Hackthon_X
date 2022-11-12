import React, { Component } from 'react';
import Modal from './dropdownModal';

class InfoContainer extends Component {
    state = {  } 

    openModal(){
        document.getElementById("myModal").style.display = 'block';
        document.getElementById("myModal").style.opacity = '1';
    }
    
    render() { 
        const styles = {
            width: '250px',
            aspectRatio: 1.5/1,
            background: "rgba(54,69,79,0.2)",
            position: "fixed",
            marginTop: 20,
            marginLeft: 20,
            borderRadius: 20,
            padding: 10,
            display: 'flex',
            flexDirection: 'column'
        }
        return (
            <div>
                <div style={styles}>
                    <h4>My Room</h4>
                    <hr></hr>
                    <button className='btn btn-primary btn-sm w-75 mx-auto'>Save My Creation</button>
                    <button className='mx-auto btn btn-secondary btn-sm txt-primary cursor-pointer mt-auto txt-sm' onClick={this.openModal}>Choose another floorplan</button>
                </div>
                <Modal/>
            </div>
        );
    }
}
 
export default InfoContainer;