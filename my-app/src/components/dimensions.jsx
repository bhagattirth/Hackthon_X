import React, { Component } from 'react';
class Dimensions extends Component {
    state = {  } 

    toggleGridLines(){
        if(document.getElementById("flexCheckDefault").checked){
            document.getElementById("grid").style.background =  "none";
        }
        else{
            document.getElementById("grid").style.background =  "white";
        }
    }
        
    
    render() { 
        return (
            <div>
                <form className="p-2">
                    <div className="form-group" >
                        <label className="text-light" for="length">Room Type:</label>
                        <input type="number" disabled="true" className="form-control" id="" placeholder="Southwest Z Room"/>
                    </div>
                    <div className="form-group mt-5" >
                        <label className="text-light" for="length">Length</label>
                        <input type="number" disabled="true" className="form-control" id="" placeholder="100 in "/>
                    </div>
                    <div className="form-group mt-3" >
                        <label className="text-light" for="length">Width</label>
                        <input type="number" disabled="true" className="form-control" id="" placeholder="100 in "/>
                    </div>

                    <hr></hr>
                    <h5 className="text-light">Options</h5>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onClick={this.toggleGridLines}/>
                        <label className="form-check-label text-light" for="flexCheckDefault">
                            Toggle Gridlines
                        </label>
                    </div>
                </form>
            </div>
        );
    }
}
 
export default Dimensions;