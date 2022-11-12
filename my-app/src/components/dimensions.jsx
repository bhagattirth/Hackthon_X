import React, { Component } from 'react';
class Dimensions extends Component {
    state = {  } 

    render() { 
        return (
            <div>
                <form className="p-2">
                    <div className="form-group" >
                        <label for="length">Room Type:</label>
                        <input type="number" disabled="true" className="form-control" id="" placeholder="Southwest Z Room"/>
                    </div>
                    <div className="form-group mt-5" >
                        <label for="length">Length</label>
                        <input type="number" disabled="true" className="form-control" id="" placeholder="100 in "/>
                    </div>
                    <div className="form-group mt-3" >
                        <label for="length">Width</label>
                        <input type="number" disabled="true" className="form-control" id="" placeholder="100 in "/>
                    </div>
                </form>
            </div>
        );
    }
}
 
export default Dimensions;