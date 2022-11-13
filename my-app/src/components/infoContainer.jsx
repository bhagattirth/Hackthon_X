import React, { Component } from 'react';

class InfoContainer extends Component {
    state = {  } 
    render() { 
        const styles = {
            backgroundColor: '#212121',
            zIndex: 2,
            width: '100%',
            height: "54px",
            position: "fixed",
            padding: 10,
            display: 'flex',
            flexDirection: 'row',
            alignContent: 'center',
            justifyContent: 'space-around',
            boxShadow: 'rgba(255, 255, 255, 0.2) 0px 2px 3px -1px, rgba(244, 244, 244, 0.1) 0px 1px 3px 1px',
            flexWrap: 'wrap'
        }   
        return (
                <div style={styles}>
                    <div class="logo-top-header" style={{flex: '0 33%'}}></div>
                    <button onclick={this.renderDropdown} class=" bg-dark border-none text-light" style={{flex: '0 33%'}}>My Room 🠻</button>
                    <button className='btn btn-pink btn-sm ml-auto d-flex align-items-center p-3' style={{ height: '50%', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;'}}>Save</button>
                    {/* <button className='mx-auto btn btn-secondary btn-sm txt-primary cursor-pointer mt-auto txt-sm'>Choose another floorplan</button> */}
                </div>
        );
    }
}
 
export default InfoContainer;