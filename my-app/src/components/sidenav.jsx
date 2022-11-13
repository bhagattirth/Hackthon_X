import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Dimensions from './dimensions';
import Furniture from './furniture';
import "../furniture/furniture.css"

class SideNavigation extends Component {
    state = { room: 'roomInfo' }; 
    constructor(props){
        super(props);
    }

    toggleButtons(toggle){
        Array.from(document.getElementsByClassName("navbutton")).forEach(e => {
            if(e.id === toggle){
                e.classList.add("txt-skyblue")
                e.classList.remove("text-muted") 
            }
            else{
                e.classList.add("text-muted")
                e.classList.remove("txt-skyblue")   
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
        minWidth: '300px',
        marginTop: '54px'
    }



    render() { 
        return (
            <nav style={this.styles} className='bg-1'>
                <div className='button-box col-lg-12 d-flex justify-content-around'>
                    <a onClick = {() => this.toggleButtons("roomInfo")} id="roomInfo" className="btn txt-skyblue navbutton">Room Info</a>
                    <a onClick = {() => this.toggleButtons("furniture")} className="btn text-muted navbutton" id="furniture">Furniture</a>
                </div>
                <hr
                    style={{
                        color: "grey",
                        height: 4
                    }}
                />

                    {this.state.room === "furniture" && <Furniture dropTriggerrer = {this.props.dropTriggerrer}></Furniture>}

                    {this.state.room === "roomInfo" && <Dimensions></Dimensions>}
                
            </nav>
        );
    }
}
 
export default SideNavigation;