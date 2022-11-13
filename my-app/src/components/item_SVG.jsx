import React, { Component } from 'react';
import * as ReactDOM from 'react-dom';

class Item_SVG extends Component {

    state = {x: 0, y:0};
    constructor(props) {
      super(props);
      console.log(this.props.x, this.props.y);
      this.state = {x: this.props.x, y: this.props.y, delta: 0};
      this.offset = null;
      this.transform = null;
      this.beingDragged = false;
      this.bedRef = React.createRef();
      this.getTranslationTransform = this.getTranslationTransform.bind(this);
      this.startDrag = this.startDrag.bind(this);
      this.drag = this.drag.bind(this);
      this.endDrag = this.endDrag.bind(this);
      this.rotation = 0;
      //this.mouseLeft = this.mouseLeft.bind(this);
    }

    getTranslationTransform(theElement, group){
        let transforms = group.transform.baseVal;
    
        if (transforms.length === 0 || transforms.getItem(0).type !== SVGTransform.SVG_TRANSFORM_TRANSLATE) {
            // Create an transform that translates by (0, 0)
            let translate = theElement.createSVGTransform();
            translate.setTranslate(0, 0);
            group.transform.baseVal.insertItemBefore(translate, 0);
        }
    
        return transforms.getItem(0);
    }

    getRotationTransform(theElement, group){
        let transforms = group.transform.baseVal;
        console.log(transforms);

        if(transforms.length === 0){
            let translate = theElement.createSVGTransform();
            translate.setTranslate(0, 0);
            group.transform.baseVal.insertItemBefore(translate, 0);
        }
        if (transforms.length === 1) {
            let rotate = theElement.createSVGTransform();
            rotate.setRotate(0, 0, 0);
            group.transform.baseVal.insertItemBefore(rotate, 1);
        }

    
        return transforms.getItem(1);
    }

    getMousePosition(svgWindow, event) {
        var CTM = svgWindow.getScreenCTM();
        if (event.touches) { event = event.touches[0]; }
        return {
            x: (event.clientX - CTM.e) / CTM.a,
            y: (event.clientY - CTM.f) / CTM.d
        };
    }

    startDrag(event){
        event.preventDefault();
        if(event.button == 0){
            this.beingDragged = true;

            this.offset = this.getMousePosition(event.currentTarget.parentNode.parentNode.parentNode, event);
            //console.log("INITIAL POS");
            //console.log(this.offset);
            // Get initial translation
            this.transform = this.getTranslationTransform(event.currentTarget, event.currentTarget.parentNode);
            this.offset.x -= this.transform.matrix.e;
            this.offset.y -= this.transform.matrix.f;
        } else if (event.button == 1) {
            let r_transform = this.getRotationTransform(event.currentTarget, event.currentTarget.parentNode);
            this.rotation = (this.rotation + 45) % 360;
            r_transform.setRotate(this.rotation, 38.66, 72.5);
        }
    }

    drag(event) {
        if (this.beingDragged) {
            event.preventDefault();
            let coordinates = this.getMousePosition(event.currentTarget.parentNode.parentNode.parentNode, event);
            //console.log("MOVE POS");
            //console.log(coordinates);
            this.transform.setTranslate(coordinates.x - this.offset.x, coordinates.y - this.offset.y);
            console.log("dragging");
        }
    }

    endDrag(event) {
        event.preventDefault();
        console.log("DRAG STOPPED");
        this.beingDragged = false;
    }

    mouseLeft(event){
        event.preventDefault();
        console.log("Mouse left");
    }

    render() { 
        return (
            <svg width = "50" height="25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 145 77.32" x={this.state.x} y={this.state.y}
                onMouseDownCapture={this.startDrag} onMouseUpCapture={this.endDrag} onMouseMoveCapture={this.drag} onMouseLeaveCapture={this.mouseLeft}>
                <defs>
                    <style
                    dangerouslySetInnerHTML={{
                        __html:
                        ".cls-1{fill:#c1272d;}.cls-1,.cls-2,.cls-3{stroke:#000;stroke-miterlimit:10;}.cls-1,.cls-2{stroke-width:4px;}.cls-2{fill:#ccc;}.cls-3{fill:#e6e6e6;stroke-width:2px;}.cls-4{opacity:0.2;}.cls-5{opacity:0.3;}.cls-6{fill:#fff;}"
                    }}
                    />
                </defs>
                <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                    <path
                        className="cls-1"
                        d="M44,2h95.78A3.22,3.22,0,0,1,143,5.22V72.1a3.22,3.22,0,0,1-3.22,3.22H44Z"
                    />
                    <path
                        className="cls-2"
                        d="M5.22,2H44V75.32H5.22A3.22,3.22,0,0,1,2,72.1V5.22A3.22,3.22,0,0,1,5.22,2Z"
                    />
                    <rect
                        className="cls-3"
                        x="0.3"
                        y="25.74"
                        width="45.24"
                        height="25.84"
                        rx="5.05"
                        transform="translate(-15.74 61.58) rotate(-90)"
                    />
                    <path
                        className="cls-4"
                        d="M2,24.1H143V5.22c0-.11,0-.22,0-.33C142.74,3.27,140.75,2,138.32,2H5.22Z"
                    />
                    <g className="cls-5">
                        <path
                        className="cls-6"
                        d="M26,69.1a81.59,81.59,0,0,1,13.5-2.35q6.75-.66,13.5-.65c4.5,0,9,.2,13.5.64A80.59,80.59,0,0,1,80,69.1a80.59,80.59,0,0,1-13.5,2.36c-4.5.44-9,.64-13.5.64s-9-.21-13.5-.65A81.59,81.59,0,0,1,26,69.1Z"
                        />
                    </g>
                    </g>
                </g>
            </svg>

        );
    }
}
 
export default Item_SVG;