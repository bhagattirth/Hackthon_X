import React, { Component } from 'react';
import Interactive from "https://vectorjs.org/interactive.js";

class InteractRoot extends Component {
    state = {  } 

    interact(){
        let myInteractive = new Interactive("my-interactive");
            myInteractive.border = true;

            // Construct a control point at the the location (100, 100)
            let control = myInteractive.control(100, 100);

            // Print the two objects to the console
            console.log( control, myInteractive);
    }
    render() { 
        return (
            <div id="my-interactive">{this.interact()}</div>    
        );
    }
}
 
export default InteractRoot;