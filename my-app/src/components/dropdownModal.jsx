import React, { Component } from 'react';
class Modal extends Component {
    state = {  } 

    closeModal(){
        document.getElementById("myModal").style.opacity = '0';
        setTimeout(() => {document.getElementById("myModal").style.display = 'none'},500)
    }

    // halls = [Crabtree,Dwight,Hamlin,Leach,Mary,Lyon,Knowlton,Johnson,Lewis,Thatcher,Butterfield,Gorman,Van Meter,Wheeler,Baker,Brett,Brooks,Chadbourne,Greenough,Brown,Sylvan,McNamara,Dickinson,Field,Grayson,Webster,Cance,Coolidge,Crampton,Emerson,James,John Adams,John Quincy Adam,Kennedy,MacKimmie,Melville,Moore,Patterson,Pierpont,Prince,Thoreau,Washington]
    
    render() { 
        const transitionStyle = {
            transition: "0.25s all ease-in",
            top: '50%',
            margin: 'auto',
            translate: '0% -50%',
            margin: 'auto'
        }

        return (
                <div className="modal fade" id="myModal" style={{background: 'rgba(0,0,0,.4)'}} role="dialog">                    
                    <div style={transitionStyle} className="modal-content w-50 h-50">
                        <div className="modal-header">
                            <button type="button" data-dismiss="modal" onClick={this.closeModal}>&times;</button>
                            <h4 className="modal-title">Choose a Dorm Layout</h4>
                        </div>
                        <div className="modal-body">
                            <ul>
                                
                            </ul>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" onClick={this.closeModal}>Close</button>
                        </div>
                    </div>
                    
                    </div>
        );
    }
}
 
export default Modal;