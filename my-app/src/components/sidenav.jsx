import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Dimensions from './dimensions';
import Furniture from './furniture';

class SideNavigation extends Component {
    state = { room: 'roomInfo' }; 


    toggleButtons(toggle){
        Array.from(document.getElementsByClassName("navbutton")).forEach(e => {
            if(e.id === toggle){
                e.classList.add("btn-primary")
                e.classList.remove("text-dark")  
                e.classList.add("text-light")  
            }
            else{
                e.classList.remove("btn-primary")
                e.classList.add("text-dark")  
            }

            this.setState({room: toggle});

            console.log(this.state)
        });
    }

    styles = {
        height: '100%',
        position: 'fixed',
        zIndex: 1,
        top: 0,
        right: 0,
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        padding: 10,
        minWidth: '300px'
    }



    render() { 
        return (
            <nav style={this.styles} className='bg-light'>
                <div className='button-box col-lg-12 d-flex justify-content-around'>
                    <a onClick = {() => this.toggleButtons("roomInfo")} id="roomInfo" className="btn text-light btn-primary navbutton">Room Info</a>
                    <a onClick = {() => this.toggleButtons("furniture")} className="btn text-dark navbutton" id="furniture">Furniture</a>
                </div>
                <hr
                    style={{
                        color: "grey",
                        height: 4
                    }}
                />

                    {this.state.room === "furniture" && <Furniture></Furniture>}
                    {this.state.room === "roomInfo" && <Dimensions></Dimensions>}
                
            </nav>
        );
    }
}
 
export default SideNavigation;