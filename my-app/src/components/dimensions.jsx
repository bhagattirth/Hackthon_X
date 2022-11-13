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
    
    setEventListeners(){
        const elems = document.getElementsByClassName("dropdown-item");

        for(let i = 0;i<elems.length;++i){
            elems[i].addEventListener("click",
            // TODO FINISH THIS PART
            )
        }
    }
    
    render() { 
        return (
            <div>
                <form className="p-2">
                    <div className="form-group" >
                        <label className="text-light" for="length">Room Type:</label>
                        <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={() => document.getElementById("dropdown-menu").style.display === "block"?document.getElementById("dropdown-menu").style.display = "none":document.getElementById("dropdown-menu").style.display = "block"}>
                            Choose a Room
                        </button>

                        <div id = "dropdown-menu" class="dropdown-menu" style={{height: "200px",overflowY: "scroll"}} aria-labelledby="dropdownMenuButton">
                        <a class='dropdown-item' href='#'>Crabtree</a>
                        <a class='dropdown-item' href='#'>Dwight</a>
                        <a class='dropdown-item' href='#'>Hamlin</a>
                        <a class='dropdown-item' href='#'>Leach</a>
                        <a class='dropdown-item' href='#'>Mary</a>
                        <a class='dropdown-item' href='#'>Lyon</a>
                        <a class='dropdown-item' href='#'>Knowlton</a>
                        <a class='dropdown-item' href='#'>Johnson</a>
                        <a class='dropdown-item' href='#'>Lewis</a>
                        <a class='dropdown-item' href='#'>Thatcher</a>
                        <a class='dropdown-item' href='#'>Butterfield</a>
                        <a class='dropdown-item' href='#'>Gorman</a>
                        <a class='dropdown-item' href='#'>Van Meter</a>
                        <a class='dropdown-item' href='#'>Wheeler</a>
                        <a class='dropdown-item' href='#'>Baker</a>
                        <a class='dropdown-item' href='#'>Brett</a>
                        <a class='dropdown-item' href='#'>Brooks</a>
                        <a class='dropdown-item' href='#'>Chadbourne</a>
                        <a class='dropdown-item' href='#'>Greenough</a>
                        <a class='dropdown-item' href='#'>Brown</a>
                        <a class='dropdown-item' href='#'>Sylvan</a>
                        <a class='dropdown-item' href='#'>McNamara</a>
                        <a class='dropdown-item' href='#'>Dickinson</a>
                        <a class='dropdown-item' href='#'>Field</a>
                        <a class='dropdown-item' href='#'>Grayson</a>
                        <a class='dropdown-item' href='#'>Webster</a>
                        <a class='dropdown-item' href='#'>Cance</a>
                        <a class='dropdown-item' href='#'>Coolidge</a>
                        <a class='dropdown-item' href='#'>Crampton</a>
                        <a class='dropdown-item' href='#'>Emerson</a>
                        <a class='dropdown-item' href='#'>James</a>
                        <a class='dropdown-item' href='#'>John Adams</a>
                        <a class='dropdown-item' href='#'>John Quincy Adam</a>
                        <a class='dropdown-item' href='#'>Kennedy</a>
                        <a class='dropdown-item' href='#'>MacKimmie</a>
                        <a class='dropdown-item' href='#'>Melville</a>
                        <a class='dropdown-item' href='#'>Moore</a>
                        <a class='dropdown-item' href='#'>Patterson</a>
                        <a class='dropdown-item' href='#'>Pierpont</a>
                        <a class='dropdown-item' href='#'>Prince</a>
                        <a class='dropdown-item' href='#'>Thoreau</a>
                        <a class='dropdown-item' href='#'>Washington</a>
                            
                        </div>

                        

                        </div>
                    </div>
                    {/* <div className="form-group mt-5" >
                        <label className="text-light" for="length">Length</label>
                        <input type="number" disabled="true" className="form-control" id="" placeholder="100 in "/>
                    </div>
                    <div className="form-group mt-3" >
                        <label className="text-light" for="length">Width</label>
                        <input type="number" disabled="true" className="form-control" id="" placeholder="100 in "/>
                    </div> */}

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