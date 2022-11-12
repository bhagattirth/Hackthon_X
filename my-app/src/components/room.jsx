import React, { Component } from 'react';
import "../furniture/furniture.css"
import "../floorplans/floorplans.css"
class Room extends Component {

    state = {objects: []} 
    constructor(props) {
      super(props);
      let newObjects = this.state.objects;
      newObjects.push( 
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 498.8 362.16">
        <defs>
          <style
            dangerouslySetInnerHTML={{
              __html:
                ".cls-1,.cls-2{fill:none;stroke:#000;stroke-miterlimit:10;}.cls-1{stroke-width:4px;}.cls-2{stroke-width:3px;}.cls-3{font-size:43.6px;font-family:MyriadPro-Regular, Myriad Pro;}.cls-4{letter-spacing:-0.09em;}"
            }}
          />
        </defs>
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              className="cls-1"
              d="M432,180.16l64.79-1V360.16H81.22V63.66H496.8v40.4a78,78,0,0,0-38.28,18C433.65,143.88,432.18,174.41,432,180.16Z"
            />
            <line x1="53.51" y1="63.16" x2="53.51" y2="360.16" />
            <line className="cls-2" x1="53.51" y1="64.66" x2="53.51" y2="358.66" />
            <rect x="43.76" y="63.16" width="19.5" height={3} />
            <rect x="43.76" y="357.16" width="19.5" height={3} />
            <text className="cls-3" transform="translate(36.49 252.65) rotate(-90)">
              12’2
              <tspan className="cls-4" x="76.12" y={0}>
                ”
              </tspan>
            </text>
            <text className="cls-3" transform="translate(242.07 36.49)">
              17’10
              <tspan className="cls-4" x="98.49" y={0}>
                ”
              </tspan>
            </text>
            <line x1="495.01" y1="45.66" x2="81.01" y2="45.66" />
            <line className="cls-2" x1="493.51" y1="45.66" x2="82.51" y2="45.66" />
            <rect x="492.01" y="35.91" width={3} height="19.5" />
            <rect x="81.01" y="35.91" width={3} height="19.5" />
          </g>
        </g>
      </svg>
      
      );
      this.setState((prevState, props)=>{
        return {objects: newObjects};
      });
      this.handleDrop = this.handleDrop.bind(this);
      this.props.dropHandlerSetter(this.handleDrop);
    }

    handleDrop(event){
      let newObjects = this.state.objects;
      newObjects.push(<div className='bed' style={{"position":'aboslute'}} key = {"key" + this.state.objects.length}></div>);
      this.setState((prevState, props)=>{
        return {objects: newObjects};
      });
      console.log(this.state.objects.length);
    }

    render() { 
        return (
            <div className = {"grid"} > 
               {this.state.objects}
            </div>
        );
    }
}
 
export default Room;