import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import SideNavigation from '../components/sidenav';
import Room from '../components/room';
import InfoContainer from '../components/infoContainer';
import Interactive from './interactive';

class Main extends Component {
    state = {dropHandler: null}
    constructor(props){
        super(props);
        this.setDropHandler = this.setDropHandler.bind(this);
        this.triggerDrop= this.triggerDrop.bind(this);
    }

    triggerDrop(objectClass) {
        if (this.state.dropHandler == null) {
            console.log("handler not set, skipping");
        }
        this.state.dropHandler(objectClass)
    }

    setDropHandler(func){
        this.setState((prevState, props)=>{
            return {dropHandler: func};
            }
        );
    }

    render() { 
        return (
            <div>
            <InfoContainer></InfoContainer>
            {/* <DragAndDrop /> */}
            <Room dropHandlerSetter={this.setDropHandler}></Room><SideNavigation dropTriggerrer={this.triggerDrop}/>
            </div>
        );
    }
}
 
export default Main;