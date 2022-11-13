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
        } else if (event.button == 2) {
            let r_transform = this.getRotationTransform(event.currentTarget, event.currentTarget.parentNode);
            this.rotation = (this.rotation + 45) % 360;
            r_transform.setRotate(this.rotation, 12.5, 25);
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
        if(this.props.type == "bed"){
            return (
                <svg width = "65" height="35" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 145 77.32" x={this.state.x} y={this.state.y}
                    onMouseDownCapture={this.startDrag} onMouseUpCapture={this.endDrag} onMouseMoveCapture={this.drag}>
                    <defs>
                        <style
                        dangerouslySetInnerHTML={{
                            __html:
                            ".cls-b1{fill:#c1272d;}.cls-b1,.cls-b2,.cls-b3{stroke:#000;stroke-miterlimit:10;}.cls-b1,.cls-b2{stroke-width:4px;}.cls-b2{fill:#ccc;}.cls-b3{fill:#e6e6e6;stroke-width:2px;}.cls-b4{opacity:0.2;}.cls-b5{opacity:0.3;}.cls-b6{fill:#fff;}"
                        }}
                        />
                    </defs>
                    <g id="Layer_b2" data-name="Layer b2">
                        <g id="Layer_b1-2" data-name="Layer b1">
                        <path
                            className="cls-b1"
                            d="M44,2h95.78A3.22,3.22,0,0,1,143,5.22V72.1a3.22,3.22,0,0,1-3.22,3.22H44Z"
                        />
                        <path
                            className="cls-b2"
                            d="M5.22,2H44V75.32H5.22A3.22,3.22,0,0,1,2,72.1V5.22A3.22,3.22,0,0,1,5.22,2Z"
                        />
                        <rect
                            className="cls-b3"
                            x="0.3"
                            y="25.74"
                            width="45.24"
                            height="25.84"
                            rx="5.05"
                            transform="translate(-15.74 61.58) rotate(-90)"
                        />
                        <path
                            className="cls-b4"
                            d="M2,24.1H143V5.22c0-.11,0-.22,0-.33C142.74,3.27,140.75,2,138.32,2H5.22Z"
                        />
                        <g className="cls-b5">
                            <path
                            className="cls-b6"
                            d="M26,69.1a81.59,81.59,0,0,1,13.5-2.35q6.75-.66,13.5-.65c4.5,0,9,.2,13.5.64A80.59,80.59,0,0,1,80,69.1a80.59,80.59,0,0,1-13.5,2.36c-4.5.44-9,.64-13.5.64s-9-.21-13.5-.65A81.59,81.59,0,0,1,26,69.1Z"
                            />
                        </g>
                        </g>
                    </g>
                </svg>
            );
        } else {
            return (
                <svg width ="50" height="25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 156.49 92" x={this.state.x} y={this.state.y}
                onMouseDownCapture={this.startDrag} onMouseUpCapture={this.endDrag} onMouseMoveCapture={this.drag}>
                    <defs>
                        <style
                        dangerouslySetInnerHTML={{
                            __html:
                            ".cls-d1,.cls-d3,.cls-d4{fill:#c69c6d;}.cls-d1{stroke:#c7b299;}.cls-d1,.cls-d4,.cls-d5,.cls-d6{stroke-miterlimit:10;}.cls-d1,.cls-d4{stroke-width:6px;}.cls-d2,.cls-d4{opacity:0.2;}.cls-d4,.cls-d5{stroke:#000;}.cls-d5,.cls-d6{fill:#fff;stroke-width:0.75px;}.cls-d6{stroke:red;}.cls-7{fill:#fbb03b;}.cls-8{fill:#8c6239;opacity:0.4;}.cls-9{fill:#c7b299;}"
                        }}
                        />
                    </defs>
                    <g id="Layer_d2" data-name="Layer d2">
                        <g id="Layer_d1-2" data-name="Layer d1">
                        <rect
                            className="cls-d1"
                            x="34.78"
                            y="-28.78"
                            width={86}
                            height="149.57"
                            rx="5.71"
                            transform="translate(123.78 -31.78) rotate(90)"
                        />
                        <g className="cls-d2">
                            <path
                            className="cls-d3"
                            d="M3.28,54.29C4.53,49.72,13.2,19.1,30.28,17c5.66-.69,12.77,2.54,27,9,9.83,4.46,11.44,6.21,19.56,9.56a112,112,0,0,0,24.8,7.15c24.66,3.44,48.85-17.82,54.64-23.14"
                            />
                            <path d="M3,54.21A66.19,66.19,0,0,1,5.47,42.68,67.09,67.09,0,0,1,9.88,31.62,42.87,42.87,0,0,1,16.8,21.54a26.19,26.19,0,0,1,4.92-4.11,17.8,17.8,0,0,1,6.13-2.51,16.52,16.52,0,0,1,3.39-.32,16,16,0,0,1,3.29.4,32.11,32.11,0,0,1,5.84,2C44,18.6,47.46,20.43,51,22.09S58,25.3,61.58,26.9l5.33,2.43c1.76.84,3.52,1.61,5.27,2.34,3.51,1.45,7.18,2.56,10.81,3.67s7.3,2.09,11,2.91c1.85.41,3.7.77,5.53,1.06a38.82,38.82,0,0,0,5.39.56A47.35,47.35,0,0,0,115.62,39a78.21,78.21,0,0,0,20.88-7.55,167.61,167.61,0,0,0,19.58-12.08l.41.44a85,85,0,0,1-17.58,15.7c-1.66,1.1-3.35,2.16-5.09,3.15s-3.53,1.89-5.37,2.72a55.11,55.11,0,0,1-11.55,3.9,42,42,0,0,1-12.37.87,61.3,61.3,0,0,1-11.94-2.38,94,94,0,0,1-21.86-9.13c-3.43-2-6.6-4.15-10-5.89s-6.94-3.38-10.51-4.87a81.4,81.4,0,0,0-10.89-3.73,29.29,29.29,0,0,0-5.38-.92,15.94,15.94,0,0,0-2.5,0,16.91,16.91,0,0,0-2.35.54,21.25,21.25,0,0,0-8.43,5.48,50.36,50.36,0,0,0-6.69,8.66c-4,6.34-7.19,13.34-10.37,20.44Z" />
                        </g>
                        <g className="cls-d2">
                            <path
                            className="cls-d3"
                            d="M3.28,89C12.54,80.62,23,77.37,31.1,76c10.24-1.77,15.08-.3,41.73,0,28,.32,30-1.21,41.73,0a108.15,108.15,0,0,1,41.72,13"
                            />
                            <path d="M3.08,88.78A41.36,41.36,0,0,1,19.39,76.67a53.18,53.18,0,0,1,9.84-3.07,50.81,50.81,0,0,1,5.11-.81,41,41,0,0,1,5.19-.15c3.43.12,6.74.59,10,1s6.58.86,9.87,1a137.94,137.94,0,0,0,19.81-.35l9.87-.83c3.29-.27,6.56-.48,9.86-.71s6.68-.46,10.14-.4a76.4,76.4,0,0,1,10.19.9,84.56,84.56,0,0,1,10,2.17q2.46.69,4.87,1.49t4.76,1.79a75.63,75.63,0,0,1,17.53,10l-.29.52C153,88.14,149.89,87,146.78,86c-1.56-.48-3.12-1-4.68-1.43s-3.14-.86-4.7-1.29a151.08,151.08,0,0,0-19-3.6c-3.19-.41-6.4-.74-9.55-1s-6.37-.19-9.69-.19-6.65,0-10-.15-6.65-.43-10-.69c-6.62-.59-13.23-1-19.86-1-3.31,0-6.63.14-9.94.32s-6.62.38-9.79.66A88.64,88.64,0,0,0,21,81.06,71.14,71.14,0,0,0,3.48,89.22Z" />
                        </g>
                        <g className="cls-d2">
                            <path
                            className="cls-d3"
                            d="M156.28,54.29c-40.43,12.46-66,7.62-82.38,0-11-5.11-21-12.95-35.31-11.58C23,44.21,11.1,55.77,3.28,65.86"
                            />
                            <path d="M156.37,54.57c-1.57.77-3.17,1.47-4.77,2.16l-2.42,1c-.82.32-1.64.58-2.47.87-1.65.58-3.29,1.17-5,1.65s-3.37,1-5.06,1.37c-.85.24-1.7.43-2.56.59l-2.58.52-2.59.49-2.6.36a66.12,66.12,0,0,1-10.52.72c-7.07-.08-14-1.36-20.88-2.66a138.17,138.17,0,0,1-20.3-5.23c-3.34-1.17-6.59-2.56-9.71-4s-6.17-2.88-9.25-4A40.61,40.61,0,0,0,46.4,46a35.77,35.77,0,0,0-9.36.12,40.32,40.32,0,0,0-9.16,2.45,39.71,39.71,0,0,0-4.4,2c-.71.4-1.46.75-2.16,1.18s-1.41.84-2.11,1.29A104.69,104.69,0,0,0,3.52,66l-.47-.37A61.63,61.63,0,0,1,9,57a55.46,55.46,0,0,1,7.45-7.65,41.36,41.36,0,0,1,19.66-9.49,33.2,33.2,0,0,1,11.25,0,43.44,43.44,0,0,1,10.54,3.31,83.76,83.76,0,0,1,9.34,5c3,1.78,5.79,3.68,8.78,5.25a55,55,0,0,0,19.29,6.33c6.78.92,13.65.26,20.36-.43,3.36-.36,6.72-.64,10.08-1l2.52-.25,2.52-.34c1.68-.23,3.37-.38,5-.66,6.77-.86,13.47-2.19,20.4-3Z" />
                        </g>
                        <path
                            className="cls-d4"
                            d="M74.85,9.13c4.53,9.27,19.25,14.75,32.79,13.21,10.42-1.19,19-6.41,21.86-13.21"
                        />
                        <rect className="cls-d5" x="102.28" y={17} width={36} height={54} />
                        <polyline className="cls-d5" points="138.28 17 111.28 17 102.28 17" />
                        <line className="cls-d5" x1="102.28" y1="25.5" x2="138.28" y2="25.5" />
                        <line className="cls-d5" x1="102.28" y1="35.5" x2="138.28" y2="35.5" />
                        <line className="cls-d5" x1="102.28" y1="44.5" x2="138.28" y2="44.5" />
                        <line className="cls-d5" x1="102.28" y1="53.5" x2="138.28" y2="53.5" />
                        <line className="cls-d5" x1="102.28" y1="62.5" x2="138.28" y2="62.5" />
                        <line className="cls-d6" x1="111.78" y1={71} x2="111.78" y2={17} />
                        <line className="cls-d3" x1="21.78" y1={71} x2="21.78" y2={26} />
                        <polygon
                            className="cls-7"
                            points="24.03 26 24.03 66.48 23.69 67.08 19.37 67.08 19.03 66.49 19.03 26 24.03 26"
                        />
                        <polygon
                            className="cls-8"
                            points="24.28 26 24.28 66.05 22.92 68.41 22.28 69.52 22.28 26 24.28 26"
                        />
                        <polygon
                            className="cls-9"
                            points="24.31 66 24.28 66.05 24.03 66.48 23.69 67.08 22.92 68.41 22.28 69.52 21.53 70.82 20.14 68.41 19.37 67.08 19.03 66.49 19.03 66 24.31 66"
                        />
                        </g>
                    </g>
                </svg>
            );
        }
    }
}
 
export default Item_SVG;