import React, { Component } from 'react';
import Item_SVG from './item_SVG';

class Floor_SVG extends Component {

    constructor(props) {
      super(props);
      this.handleDrop = this.handleDrop.bind(this);
      this.props.dropHandlerSetter(this.handleDrop);
      this.state = {svg_objects: [], x: this.props.x, y: this.props.y};
      this.canvasRef = React.createRef();
    }

    get_mouse_pos(svgWindow, event) {
        var CTM = svgWindow.getScreenCTM();
        if (event.touches) { event = event.touches[0]; }
        return {
            x: (event.clientX - CTM.e) / CTM.a,
            y: (event.clientY - CTM.f) / CTM.d
        };
    }

    handleDrop(obj){
        let evento = obj.event;
        console.log(obj.name);
        let mousePos = this.get_mouse_pos(this.canvasRef.current, evento)
        let newObjects = this.state.svg_objects;
        newObjects.push(<g transform-box="fill-box" transform-origin="center"><Item_SVG type={obj.name} parentRef={this.canvasRef} x={mousePos.x} y={mousePos.y}></Item_SVG></g>);
        this.setState((prevState, props)=>{
          return {svg_objects: newObjects};
        });
        console.log(this.state.svg_objects.length);
    }
      brettHall(props) {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 136.33 194.07"
            {...props}
          >
            <g>
                {this.state.svg_objects}
            </g>
            <defs>
              <style>
                {
                  ".cls-4{fill:none;stroke:#000;stroke-miterlimit:10}.cls-2{font-size:21.14px;font-family:MyriadPro-Regular,Myriad Pro}.cls-3{letter-spacing:-.09em}.cls-4{stroke-width:3px}"
                }
              </style>
            </defs>
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <path
                  strokeWidth="4px"
                  fill="none"
                  stroke="#000"
                  strokeMiterlimit={10}
                  d="M71.33 116.53L44.33 116.53 44.33 26.53 62.33 26.53 62.33 8.53 125.33 8.53 125.33 26.53 134.33 26.53 134.33 116.53 107.33 116.53 116.33 116.53 116.33 143.53 44.33 143.53 44.33 116.53"
                />
                <text className="cls-2" transform="matrix(.96 0 0 1 71.86 188.78)">
                  {"12"}
                  <tspan className="cls-3" x={21.69} y={0}>
                    {"\u2019"}
                  </tspan>
                </text>
                <path d="M134.33 161.03L44.33 161.03" />
                <path className="cls-4" d="M132.83 161.03L45.83 161.03" />
                <path d="M131.33 151.28H134.33V170.78H131.33z" />
                <path d="M44.33 151.28H47.33V170.78H44.33z" />
                <text className="cls-2" transform="matrix(0 -.96 1 0 17.7 81)">
                  {"16"}
                  <tspan className="cls-3" x={21.69} y={0}>
                    {"\u2019"}
                  </tspan>
                </text>
                <path d="M27.04 143.53L27.04 0" />
                <path className="cls-4" d="M27.04 142.03L27.04 1.5" />
                <path d="M17.29 140.53H36.79V143.53H17.29z" />
                <path d="M17.29 0H36.79V3H17.29z" />
              </g>
            </g>
          </svg>
        )
      }
      brookshall(props) {
          return (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 360.29 428.7"
              {...props}
            >
                <g>
                    {this.state.svg_objects}
                </g>
              <defs>
                <style>
                  {
                    ".cls-1,.cls-4{fill:none;stroke:#000;stroke-miterlimit:10}.cls-1{stroke-width:4px}.cls-2{font-size:40.71px;font-family:MyriadPro-Regular,Myriad Pro}.cls-3{letter-spacing:-.09em}.cls-4{stroke-width:3px}"
                  }
                </style>
              </defs>
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <path
                    className="cls-1"
                    d="M272 4.46v351H2v-351h27v72a96.42 96.42 0 0054-27 96.19 96.19 0 0025.25-45z"
                  />
                  <path
                    className="cls-1"
                    d="M29 4.46v72a96.42 96.42 0 0054-27 96.19 96.19 0 0025.25-45"
                  />
                  <text className="cls-2" transform="matrix(0 .96 -1 0 326.21 148.33)">
                    {"14\u20196"}
                    <tspan className="cls-3" x={71.08} y={0}>
                      {"\u201D"}
                    </tspan>
                  </text>
                  <path d="M307.71 355.46L307.71 0" />
                  <path className="cls-4" d="M307.71 353.96L307.71 1.5" />
                  <path d="M297.96 352.46H317.46V355.46H297.96z" />
                  <path d="M297.96 0H317.46V3H297.96z" />
                  <text className="cls-2" transform="matrix(.96 0 0 1 105.2 400.45)">
                    {"11"}
                    <tspan className="cls-3" x={41.77} y={0}>
                      {"\u2019"}
                    </tspan>
                  </text>
                  <path d="M272 418.95L2 418.95" />
                  <path className="cls-4" d="M270.5 418.95L3.5 418.95" />
                  <path d="M269 409.2H272V428.7H269z" />
                  <path d="M2 409.2H5V428.7H2z" />
                </g>
              </g>
            </svg>
          )
      }
      butterfield(props) {
          return (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 551.44 585.93"
              {...props}
            >
                <g>
                    {this.state.svg_objects}
                </g>
              <defs>
                <style>
                  {
                    ".cls-1{fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:4px}.cls-2{font-size:43.6px;font-family:MyriadPro-Regular,Myriad Pro}.cls-3{letter-spacing:-.09em}"
                  }
                </style>
              </defs>
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <path
                    className="cls-1"
                    d="M549.44 340.93v243h-108v-99a146.17 146.17 0 00-112.33 99H90.44v-495h378v252z"
                  />
                  <path className="cls-1" d="M466.44 52.93L92.44 52.93" />
                  <path d="M464.44 39.93H468.44V65.93H464.44z" />
                  <path d="M90.44 39.93H94.44V65.93H90.44z" />
                  <text className="cls-2" transform="translate(243.82 36.49)">
                    {"12"}
                    <tspan className="cls-3" x={44.73} y={0}>
                      {"\u2019"}
                    </tspan>
                  </text>
                  <path className="cls-1" d="M63.73 572.93L63.73 90.65" />
                  <path d="M50.73 570.93H76.72999999999999V574.93H50.73z" />
                  <path d="M50.74 88.65H76.74000000000001V92.65H50.74z" />
                  <text className="cls-2" transform="rotate(-90 202.21 165.72)">
                    {"15\u20195"}
                    <tspan className="cls-3" x={76.12} y={0}>
                      {"\u201D"}
                    </tspan>
                  </text>
                </g>
              </g>
            </svg>
          )
      }
      chadborne(props) {
          return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 398 527" {...props}>
                <g>
                    {this.state.svg_objects}
                </g>
              <defs>
                <style>
                  {
                    ".cls-1{fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:4px}"
                  }
                </style>
              </defs>
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <path
                    className="cls-1"
                    d="M308 92V2H191v63c-3.89.09-26.73.27-45-18S127.91 5.89 128 2H2v90"
                  />
                  <path
                    className="cls-1"
                    d="M254 2v18h-63a93.37 93.37 0 0027 36 93.15 93.15 0 0036 18v18h54v333h-27v18H47v-27H2V92h63V74c1.3.16 28.79 3.16 45-18 11.66-15.22 9.51-32.52 9-36H56V2"
                  />
                  <path className="cls-1" d="M335 441L335 4" />
                  <path d="M322 439H348V443H322z" />
                  <path d="M322 2H348V6H322z" />
                  <text
                    transform="matrix(0 .85 -1 0 355.06 173.91)"
                    fontFamily="MyriadPro-Regular,Myriad Pro"
                    fontSize="51.3px"
                  >
                    {"19\u20193"}
                    <tspan x={89.57} y={0} letterSpacing="-.09em">
                      {"\u201D"}
                    </tspan>
                  </text>
                  <path className="cls-1" d="M315 461L4 461" />
                  <path d="M313 448H317V474H313z" />
                  <path d="M2 448H6V474H2z" />
                  <text
                    transform="matrix(.91 0 0 1 145.91 515.04)"
                    fontSize="47.83px"
                    fontFamily="MyriadPro-Regular,Myriad Pro"
                  >
                    {"15"}
                    <tspan x={49.07} y={0} letterSpacing="-.09em">
                      {"\u2019"}
                    </tspan>
                  </text>
                </g>
              </g>
            </svg>
          )
      }
      gorman(props) {
          return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 328 392" {...props}>
                <g>
                    {this.state.svg_objects}
                </g>
              <defs>
                <style>
                  {
                    ".cls-1{fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:4px}.cls-2{font-size:47.83px;font-family:MyriadPro-Regular,Myriad Pro}.cls-3{letter-spacing:-.09em}"
                  }
                </style>
              </defs>
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <path
                    className="cls-1"
                    d="M130 308L301 308 301 290 319 290 319 20 301 20 301 2 238 2 238 20 157 20 157 2 112 2 112 29 94 29 94 308 130 308z"
                  />
                  <path className="cls-1" d="M94 245L166 245" />
                  <path className="cls-1" d="M319 245L238 245" />
                  <path className="cls-1" d="M326 335L96 335" />
                  <path d="M324 322H328V348H324z" />
                  <path d="M94 322H98V348H94z" />
                  <text className="cls-2" transform="matrix(.91 0 0 1 174.91 380.04)">
                    {"12\u20192"}
                    <tspan className="cls-3" x={83.51} y={0}>
                      {"\u201D"}
                    </tspan>
                  </text>
                  <path className="cls-1" d="M58 306L58 4" />
                  <path d="M45 304H71V308H45z" />
                  <path d="M45 2H71V6H45z" />
                  <text className="cls-2" transform="matrix(0 -.91 1 0 40.04 172.67)">
                    {"16"}
                    <tspan className="cls-3" x={49.07} y={0}>
                      {"\u2019"}
                    </tspan>
                  </text>
                </g>
              </g>
            </svg>
          )
      }
      greenough(props) {
          return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 606.99 509" {...props}>
                <g>
                    {this.state.svg_objects}
                </g>
              <defs>
                <style>
                  {
                    ".cls-1{fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:4px}.cls-2{font-size:47.83px;font-family:MyriadPro-Regular,Myriad Pro}.cls-3{letter-spacing:-.09em}"
                  }
                </style>
              </defs>
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <path
                    className="cls-1"
                    d="M598 254v135H409v-27h-36v27H229v-54H103V2h369v27h-54a64.24 64.24 0 0018 36 64.31 64.31 0 0036 18v72h-36a63.44 63.44 0 0036 48.59V254z"
                  />
                  <path className="cls-1" d="M543.99 254L543.99 245" />
                  <path className="cls-1" d="M543.99 137L543.99 119" />
                  <path
                    className="cls-1"
                    d="M580 389v-54a63.64 63.64 0 00-54 54M544 137v108h-54v-36a62.64 62.64 0 01-18-5.41A63.44 63.44 0 01436 155h54v-18zM544 29v90h-54v-18h-18V83a64.31 64.31 0 01-36-18 64.24 64.24 0 01-18-36h72V2h27v27z"
                  />
                  <path className="cls-1" d="M604.99 452L104.99 452" />
                  <path d="M602.99 439H606.99V465H602.99z" />
                  <path d="M102.99 439H106.99V465H102.99z" />
                  <text className="cls-2" transform="matrix(.91 0 0 1 345.9 497.04)">
                    {"17"}
                    <tspan className="cls-3" x={49.07} y={0}>
                      {"\u2019"}
                    </tspan>
                  </text>
                  <path className="cls-1" d="M66.99 4L66.99 405" />
                  <path d="M53.99 2H79.99000000000001V6H53.99z" />
                  <path d="M53.99 403H79.99000000000001V407H53.99z" />
                  <text className="cls-2" transform="matrix(0 -.91 1 0 40.04 263.09)">
                    {"14\u20192"}
                    <tspan className="cls-3" x={83.51} y={0}>
                      {"\u201D"}
                    </tspan>
                  </text>
                </g>
              </g>
            </svg>
          )
      }
      vanMeter(props) {
          return (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 353.16 459.16"
              {...props}
            >
                <g>
                    {this.state.svg_objects}
                </g>
              <defs>
                <style>
                  {
                    ".cls-1,.cls-4{fill:none;stroke:#000;stroke-miterlimit:10}.cls-1{stroke-width:4px}.cls-2{font-size:43.6px;font-family:MyriadPro-Regular,Myriad Pro}.cls-3{letter-spacing:-.09em}.cls-4{stroke-width:3px}"
                  }
                </style>
              </defs>
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <path
                    className="cls-1"
                    d="M351.16 72.16v378h-108a83.68 83.68 0 00-18-36 84.94 84.94 0 00-45-27v63h-99v-378z"
                  />
                  <path
                    className="cls-1"
                    d="M81.16 351.16L153.16 351.16 153.16 369.16"
                  />
                  <path
                    className="cls-1"
                    d="M153.16 432.16L153.16 450.16 81.16 450.16"
                  />
                  <path className="cls-1" d="M279.16 450.16L279.16 432.16" />
                  <path
                    className="cls-1"
                    d="M279.16 369.16L279.16 351.16 351.16 351.16"
                  />
                  <path
                    className="cls-1"
                    d="M180.16 450.16v-63a84.94 84.94 0 0145 27 83.68 83.68 0 0118 36"
                  />
                  <text className="cls-2" transform="matrix(0 -.96 1 0 36.49 279.1)">
                    {"16\u20192"}
                    <tspan className="cls-3" x={76.12} y={0}>
                      {"\u201D"}
                    </tspan>
                  </text>
                  <path d="M53.66 72.16L53.66 459.16" />
                  <path className="cls-4" d="M53.66 73.66L53.66 457.66" />
                  <path d="M43.91 72.16H63.41V75.16H43.91z" />
                  <path d="M43.91 456.16H63.41V459.16H43.91z" />
                  <text className="cls-2" transform="matrix(.96 0 0 1 189.22 36.49)">
                    {"11\u20192"}
                    <tspan className="cls-3" x={76.12} y={0}>
                      {"\u201D"}
                    </tspan>
                  </text>
                  <path d="M351.16 53.66L81.16 53.66" />
                  <path className="cls-4" d="M349.66 53.66L82.66 53.66" />
                  <path d="M348.16 43.91H351.16V63.41H348.16z" />
                  <path d="M81.16 43.91H84.16V63.41H81.16z" />
                </g>
              </g>
            </svg>
          )
      }
      wheeler(props) {
          return (
            <svg
              width={500}
              height={500.33301}
              viewBox="0 0 500 500.33301"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              {...props}
            >
                <g>
                    {this.state.svg_objects}
                </g>
              <g fill="none" stroke="#000">
                <path d="M195.818 281.96h-19.643v-7.433h19.113l-.531-5.309-1.593-4.247-3.185-3.716-3.717-3.186-3.185-1.061-3.716-1.062-3.717-.531h-1.592l.055-6.902h-17.044v32.916h16.458v-6.902l3.185.531v6.37zM195.818 281.96l1.593-6.37 1.593-3.717 2.123-4.247 2.124-2.655 4.778-3.716 3.716-1.593 3.717-1.062 3.716-.53v23.89h19.112v-7.433h2.655v6.371h9.556v-5.84h7.432l-.53-26.545h-16.458v7.433h-5.84l-2.655.53-1.592.532-3.186 1.592-2.947 2.362-2.362 2.947-1.592 2.124-1.062 2.654v4.778h18.05l.531 8.495h-19.112v-23.89l-3.716.53-5.31 2.124-4.247 1.593-3.716 3.716-3.185 3.716-1.593 3.186-1.593 4.247z" />
                <path d="M176.175 254.884v-9.025h-19.112l-.53-97.154h100.339l1.061 97.685H238.29v8.494" />
                <path
                  d="M256.65 125.817v15.948-8.15l-100.48.354v8.15-14.884"
                  strokeWidth={0.990466}
                />
                <path
                  d="M280.684 274.891h-15.948 8.151l-.354-126.045h-8.151 14.884"
                  strokeWidth={1.10933}
                />
                <text xmlSpace="preserve" x={196.07542} y={127.22647}>
                  <tspan x={196.07542} y={127.22647}>
                    {"12&apos;"}
                  </tspan>
                </text>
                <text
                  xmlSpace="preserve"
                  x={193.83493}
                  y={-281.95499}
                  transform="rotate(90)"
                >
                  <tspan x={193.83493} y={-281.95499}>
                    {"17&apos;-8&apos;&apos;"}
                  </tspan>
                </text>
                <path d="M191.617 148.934v7.305h29.648v-7.735z" />
              </g>
            </svg>
          )
      }
  
      birch(props) {
          return (
            <svg
              width={500}
              height={500.33301}
              viewBox="0 0 500 500.33301"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              {...props}
            >
                <g>
                    {this.state.svg_objects}
                </g>
              <g fill="none" stroke="#000">
                <path d="M253.925 285.416l-.115 63.986-3.928.917-2.668 1.04-2.547 1.503-3.119 2.652-2.198 2.199-1.154 2.193-1.386 3.238-.576 3.918 17.923-.229.115 15.943h20.788v43.31h3.465v-18.363l3.118.346 3.812 1.04 1.732 1.385 2.425 1.386 1.386 2.08 2.426 3.81 1.385 3.812 1.386 5.197h-.346 19.056v-59.94l17.74.11-.692-4.85-1.61-3.23-1.162-1.844-1.98-1.855-2.424-1.856-2.56-1.62-2.115-.794-2.237-.346-2.502-.335-.111-.088v-64.715z" />
                <path d="M253.815 349.334l.252-63.998h-61.731v98.014h60.975v-16.126h-16.882l.504-4.284 1.26-3.023 2.268-3.276 3.527-3.275 4.032-2.268 2.771-1.008z" />
                <path
                  d="M253.243 255.446v15.948-8.151l-60.765.354v8.151-14.885"
                  strokeWidth={0.770242}
                />
                <path d="M315.356 349.31l-.252-63.998h61.731v98.014H315.86V367.2h16.881l-.504-4.283-1.26-3.024-2.267-3.275-3.528-3.276-4.031-2.267-2.772-1.008z" />
                <path
                  d="M315.259 255.296v15.948-8.151l-62.043.354v8.152-14.885"
                  strokeWidth={0.778296}
                />
                <path
                  d="M376.063 254.973v15.948-8.152l-60.765.355v8.151-14.885"
                  strokeWidth={0.770242}
                />
                <path
                  d="M377.668 387.884v15.948-8.151l-62.681.354v8.151-14.885"
                  strokeWidth={0.782291}
                />
                <path
                  d="M177.394 383.54h-15.948 8.151l-.354-98.1h-8.151 14.885M404.28 383.641h-15.948 8.151l-.354-98.098h-8.152 14.885"
                  strokeWidth={0.978662}
                />
                <path
                  d="M253.177 387.56v15.948-8.15l-60.765.354v8.15-14.884"
                  strokeWidth={0.770242}
                />
                <text xmlSpace="preserve" x={205.00827} y={256.33276}>
                  <tspan x={205.00827} y={256.33276}>
                    {"10&apos;-3&apos;&apos;"}
                  </tspan>
                </text>
                <text xmlSpace="preserve" x={265.54831} y={256.91992}>
                  <tspan x={265.54831} y={256.91992}>
                    {"10&apos;-3&apos;&apos;"}
                  </tspan>
                </text>
                <text xmlSpace="preserve" x={325.69788} y={256.91992}>
                  <tspan x={325.69788} y={256.91992}>
                    {"10&apos;-3&apos;&apos;"}
                  </tspan>
                </text>
                <text xmlSpace="preserve" x={201.84157} y={411.17441}>
                  <tspan x={201.84157} y={411.17441}>
                    {"10&apos;-3&apos;&apos;"}
                  </tspan>
                </text>
                <text xmlSpace="preserve" x={324.72772} y={412.46799}>
                  <tspan x={324.72772} y={412.46799}>
                    {"10&apos;-3&apos;&apos;"}
                  </tspan>
                </text>
                <text
                  xmlSpace="preserve"
                  x={-340.93256}
                  y={162.45316}
                  transform="rotate(-90)"
                >
                  <tspan x={-340.93256} y={162.45316}>
                    {"17&apos;"}
                  </tspan>
                </text>
                <text
                  xmlSpace="preserve"
                  x={323.70007}
                  y={-404.63074}
                  transform="rotate(90)"
                >
                  <tspan x={323.70007} y={-404.63074}>
                    {"17&apos;"}
                  </tspan>
                </text>
              </g>
            </svg>
          )
      }
  
      elm(props) {
          return (
            <svg
              width={500}
              height={500.33301}
              viewBox="0 0 500 500.33301"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              {...props}
            >
                <g>
                    {this.state.svg_objects}
                </g>
              <g fill="none" stroke="#000">
                <path
                  d="M199.433 192.392l.252-63.645h-61.734l-.48 105.949 61.244-.03.214-7.552v-16.931h-16.882l.504-4.26 1.26-3.007 2.268-3.257 3.527-3.258 4.032-2.255 2.772-1.002z"
                  strokeWidth={0.997253}
                />
                <path
                  d="M198.86 98.859v15.948-8.151l-60.765.354v8.151-14.885"
                  strokeWidth={0.770242}
                />
                <path d="M260.973 192.724l-.252-63.999h61.731l1.302 106.702-62.106-.215-.171-24.598h16.881l-.504-4.284-1.26-3.023-2.267-3.276-3.528-3.275-4.031-2.268-2.772-1.008z" />
                <path
                  d="M260.876 98.71v15.947-8.151l-62.043.354v8.152-14.885"
                  strokeWidth={0.778296}
                />
                <path
                  d="M321.68 98.386v15.948-8.151l-60.765.354v8.151-14.885"
                  strokeWidth={0.770242}
                />
                <path
                  d="M323.574 247.714v15.948-8.151l-62.68.354v8.151-14.885"
                  strokeWidth={0.782291}
                />
                <path
                  d="M123.011 233.319h-15.948 8.151l-.354-104.427h-8.151 14.885"
                  strokeWidth={1.00973}
                />
                <path
                  d="M349.897 236.243h-15.948 8.151l-.354-107.237h-8.152 14.885"
                  strokeWidth={1.02323}
                />
                <path
                  d="M198.263 245.116v15.948-8.152l-60.765.355v8.151-14.885"
                  strokeWidth={0.770242}
                />
                <text xmlSpace="preserve" x={150.62534} y={99.745987}>
                  <tspan x={150.62534} y={99.745987}>
                    {"10&apos;-3&apos;&apos;"}
                  </tspan>
                </text>
                <text xmlSpace="preserve" x={211.16537} y={100.33315}>
                  <tspan x={211.16537} y={100.33315}>
                    {"10&apos;-3&apos;&apos;"}
                  </tspan>
                </text>
                <text xmlSpace="preserve" x={271.31494} y={100.33315}>
                  <tspan x={271.31494} y={100.33315}>
                    {"10&apos;-3&apos;&apos;"}
                  </tspan>
                </text>
                <text xmlSpace="preserve" x={148.25555} y={273.52316}>
                  <tspan x={148.25555} y={273.52316}>
                    {"10&apos;-3&apos;&apos;"}
                  </tspan>
                </text>
                <text xmlSpace="preserve" x={271.52737} y={275.42438}>
                  <tspan x={271.52737} y={275.42438}>
                    {"10&apos;-3&apos;&apos;"}
                  </tspan>
                </text>
                <text
                  xmlSpace="preserve"
                  x={-184.34578}
                  y={108.07021}
                  transform="rotate(-90)"
                >
                  <tspan x={-184.34578} y={108.07021}>
                    {"17&apos;"}
                  </tspan>
                </text>
                <text
                  xmlSpace="preserve"
                  x={167.1133}
                  y={-350.2478}
                  transform="rotate(90)"
                >
                  <tspan x={167.1133} y={-350.2478}>
                    {"17&apos;"}
                  </tspan>
                </text>
                <path d="M219.2 258.56c2.455.204 4.91 1.227 4.91 1.227l1.431 1.023 1.023 1.023 1.228 1.432 1.023 1.636.409.819.409 1.022.12 1.359-.076 2.021c4.11.11 9.106.09 14.724.052l-.08-10.112-.08-24.272 16.653.134-.22-9.096-.152-16.577 17.741.112-.693-4.85-1.61-3.23-1.162-1.845-1.979-1.855-2.425-1.856-2.56-1.62-2.114-.794-2.238-.346-2.502-.335-.111-.088V128.83h-61.327l-.115 63.986-3.928.917-2.668 1.04-2.547 1.503-3.119 2.652-2.198 2.199-1.154 2.193-1.386 3.238-.576 3.918 17.923-.229-.227 24.285 19.374.215.01 22.675.013 12.719" />
              </g>
            </svg>
          )
      }
  
      linden(props) {
          return (
            <svg
              width={500}
              height={500.33301}
              viewBox="0 0 500 500.33301"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              {...props}
            >
                <g>
                    {this.state.svg_objects}
                </g>
              <g fill="none" stroke="#000">
                <path d="M253.925 285.416l-.115 63.986-3.928.917-2.668 1.04-2.547 1.503-3.119 2.652-2.198 2.199-1.154 2.193-1.386 3.238-.576 3.918 17.923-.229-.227 19.36h19.374l.023 40.534c11.648.116 17.01.11 28.247.034l13.57-.056-.088-43.29-.15-16.577 17.74.112-.693-4.85-1.61-3.23-1.162-1.845-1.98-1.855-2.424-1.856-2.56-1.62-2.115-.794-2.237-.346-2.502-.335-.111-.088v-64.715z" />
                <path d="M253.815 349.334l.252-63.998h-61.731v101.43l60.975-.512V367.224h-16.882l.504-4.284 1.26-3.023 2.268-3.276 3.527-3.275 4.032-2.268 2.771-1.008z" />
                <path
                  d="M253.243 255.446v15.948-8.151l-60.765.354v8.151-14.885"
                  strokeWidth={0.770242}
                />
                <path d="M315.356 349.31l-.252-63.998h61.731l.342 100.919H316.03l-.171-19.03h16.881l-.504-4.284-1.26-3.024-2.267-3.275-3.528-3.276-4.031-2.267-2.772-1.008z" />
                <path
                  d="M315.259 255.296v15.948-8.151l-62.043.354v8.152-14.885"
                  strokeWidth={0.778296}
                />
                <path
                  d="M376.063 254.973v15.948-8.152l-60.765.355v8.151-14.885"
                  strokeWidth={0.770242}
                />
                <path
                  d="M377.957 393.966v15.948-8.15l-62.68.354v8.15-14.884"
                  strokeWidth={0.782291}
                />
                <path
                  d="M177.394 383.54h-15.948 8.151l-.354-98.1h-8.151 14.885M404.28 383.641h-15.948 8.151l-.354-98.098h-8.152 14.885"
                  strokeWidth={0.978662}
                />
                <path
                  d="M253.177 393.643v15.948-8.151l-60.765.354v8.151-14.885"
                  strokeWidth={0.770242}
                />
                <text xmlSpace="preserve" x={205.00827} y={256.33276}>
                  <tspan x={205.00827} y={256.33276}>
                    {"10&apos;-3&apos;&apos;"}
                  </tspan>
                </text>
                <text xmlSpace="preserve" x={265.54831} y={256.91992}>
                  <tspan x={265.54831} y={256.91992}>
                    {"10&apos;-3&apos;&apos;"}
                  </tspan>
                </text>
                <text xmlSpace="preserve" x={325.69788} y={256.91992}>
                  <tspan x={325.69788} y={256.91992}>
                    {"10&apos;-3&apos;&apos;"}
                  </tspan>
                </text>
                <text xmlSpace="preserve" x={201.84157} y={420.15353}>
                  <tspan x={201.84157} y={420.15353}>
                    {"10&apos;-3&apos;&apos;"}
                  </tspan>
                </text>
                <text xmlSpace="preserve" x={326.17596} y={418.26099}>
                  <tspan x={326.17596} y={418.26099}>
                    {"10&apos;-3&apos;&apos;"}
                  </tspan>
                </text>
                <text
                  xmlSpace="preserve"
                  x={-340.93256}
                  y={162.45316}
                  transform="rotate(-90)"
                >
                  <tspan x={-340.93256} y={162.45316}>
                    {"18&apos;"}
                  </tspan>
                </text>
                <text
                  xmlSpace="preserve"
                  x={323.70007}
                  y={-404.63074}
                  transform="rotate(90)"
                >
                  <tspan x={323.70007} y={-404.63074}>
                    {"18&apos;"}
                  </tspan>
                </text>
              </g>
            </svg>
          )
      }
  
      maple(props) {
          return (
            <svg
              width={500}
              height={500.33301}
              viewBox="0 0 500 500.33301"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              {...props}
            >
                <g>
                    {this.state.svg_objects}
                </g>
              <g fill="none" stroke="#000">
                <path
                  d="M253.816 348.979l.252-63.645h-61.734L192.07 404.8l61.243-.244V366.77H236.43l.504-4.26 1.26-3.006 2.268-3.257 3.527-3.258 4.032-2.255 2.772-1.002z"
                  strokeWidth={0.997253}
                />
                <path
                  d="M253.243 255.446v15.948-8.151l-60.765.354v8.151-14.885"
                  strokeWidth={0.770242}
                />
                <path d="M315.356 349.31l-.252-63.998h61.731l.873 118.717h-61.677l-.171-36.829h16.881l-.504-4.283-1.26-3.024-2.267-3.275-3.528-3.276-4.031-2.267-2.772-1.008z" />
                <path
                  d="M315.259 255.296v15.948-8.151l-62.043.354v8.152-14.885"
                  strokeWidth={0.778296}
                />
                <path
                  d="M376.063 254.973v15.948-8.152l-60.765.355v8.151-14.885"
                  strokeWidth={0.770242}
                />
                <path
                  d="M377.957 416.812v15.948-8.152l-62.68.355v8.151-14.885"
                  strokeWidth={0.782291}
                />
                <path
                  d="M177.394 404.059h-15.948 8.151l-.354-118.517h-8.151 14.885"
                  strokeWidth={1.07569}
                />
                <path
                  d="M404.28 404.152h-15.948 8.151l-.354-118.508h-8.152 14.885"
                  strokeWidth={1.07566}
                />
                <path
                  d="M252.646 416.488v15.948-8.15l-60.765.353v8.152-14.885"
                  strokeWidth={0.770242}
                />
                <text xmlSpace="preserve" x={205.00827} y={256.33276}>
                  <tspan x={205.00827} y={256.33276}>
                    {"10&apos;-3&apos;&apos;"}
                  </tspan>
                </text>
                <text xmlSpace="preserve" x={265.54831} y={256.91992}>
                  <tspan x={265.54831} y={256.91992}>
                    {"10&apos;-3&apos;&apos;"}
                  </tspan>
                </text>
                <text xmlSpace="preserve" x={325.69788} y={256.91992}>
                  <tspan x={325.69788} y={256.91992}>
                    {"10&apos;-3&apos;&apos;"}
                  </tspan>
                </text>
                <text xmlSpace="preserve" x={202.6385} y={444.32709}>
                  <tspan x={202.6385} y={444.32709}>
                    {"10&apos;-3&apos;&apos;"}
                  </tspan>
                </text>
                <text xmlSpace="preserve" x={325.91031} y={445.09097}>
                  <tspan x={325.91031} y={445.09097}>
                    {"10&apos;-3&apos;&apos;"}
                  </tspan>
                </text>
                <text
                  xmlSpace="preserve"
                  x={-340.93256}
                  y={162.45316}
                  transform="rotate(-90)"
                >
                  <tspan x={-340.93256} y={162.45316}>
                    {"21&apos;"}
                  </tspan>
                </text>
                <text
                  xmlSpace="preserve"
                  x={323.70007}
                  y={-404.63074}
                  transform="rotate(90)"
                >
                  <tspan x={323.70007} y={-404.63074}>
                    {"21&apos;"}
                  </tspan>
                </text>
                <path d="M273.583 415.146c2.455.205 4.91 1.228 4.91 1.228l1.431 1.023 1.023 1.023 1.228 1.432 1.023 1.636.409.818.409 1.023.12 1.359-.076 2.021c4.11.11 11.895.09 17.514.052l6.785-.028 6.786-.028-.082-22.394-.006-20.896-.152-16.577 17.74.112-.692-4.85-1.61-3.23-1.162-1.845-1.979-1.855-2.425-1.856-2.56-1.62-2.114-.794-2.238-.346-2.502-.335-.111-.088v-64.715h-61.327l-.115 63.986-3.928.917-2.668 1.04-2.547 1.503-3.119 2.652-2.198 2.199-1.154 2.193-1.386 3.238-.576 3.918 17.923-.229-.227 37.158h19.374l.01 10.017.013 12.719" />
              </g>
            </svg>
          )
      }
  
      oak(props) {
          return (
            <svg
              width={500}
              height={500.33301}
              viewBox="0 0 500 500.33301"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              {...props}
            >
                <g>
                    {this.state.svg_objects}
                </g>
              <g fill="none" stroke="#000">
                <path
                  d="M188.8 274.214l22.155-.022.236 17.966 5.757-1.074 4.153-2.094 3.296-3.242 2.751-4.45 1.187-4.157.733-3.087.197-.692 19.11.002.104 26.803 4.856.17-.333 95.138-61.289-.105-.065-6.915-2.688-.348z"
                  strokeWidth={0.99401}
                />
                <path
                  d="M253.436 399.516v15.948-8.151l-63.63.354v8.151-14.885"
                  strokeWidth={0.788195}
                />
                <path
                  d="M160.648 274.713h15.948-8.151l.354 120.19h8.152-14.885"
                  strokeWidth={1.08327}
                />
                <text xmlSpace="preserve" x={201.32352} y={423.67267}>
                  <tspan x={201.32352} y={423.67267}>
                    {"10&apos;-3&apos;&apos;"}
                  </tspan>
                </text>
                <text
                  xmlSpace="preserve"
                  x={-350.40491}
                  y={157.69156}
                  transform="rotate(-90)"
                >
                  <tspan x={-350.40491} y={157.69156}>
                    {"19&apos;-6&apos;&apos;"}
                  </tspan>
                </text>
              </g>
            </svg>
          )
      }
  
      sycamore(props) {
          return (
            <svg
              width={500}
              height={500.33301}
              viewBox="0 0 500 500.33301"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              {...props}
            >
                <g>
                    {this.state.svg_objects}
                </g>
              <g fill="none" stroke="#000">
                <path d="M249.302 319.637c.45-24.732-.22-24.583-.22-24.583l7.985 2.668 4.291 2.37 5.14 4.991 3.724 5.215 2.115 6.05.67 4.246 19.86-.087-.398-28.86 23.288.152-.654-124.156-14.274-.18-.237-9.715-77.432.02-.016 10.236-3.844-.254.43 126.868 5.885.521-.047 24.525z" />
                <path
                  d="M314.254 136.884v15.948-8.151l-95.232.354v8.152-14.885"
                  strokeWidth={0.964256}
                />
                <path
                  d="M204.89 319.512h-15.948 8.151l-.354-151.953h-8.151 14.884"
                  strokeWidth={1.21802}
                />
                <text xmlSpace="preserve" x={258.75525} y={138.58687}>
                  <tspan x={258.75525} y={138.58687}>
                    {"10&apos;"}
                  </tspan>
                </text>
                <text
                  xmlSpace="preserve"
                  x={-254.40736}
                  y={183.17184}
                  transform="rotate(-90)"
                >
                  <tspan x={-254.40736} y={183.17184}>
                    {"19&apos;-6&apos;&apos;"}
                  </tspan>
                </text>
              </g>
            </svg>
          )
      }
  
      crabtree(props) {
          return (
            <svg
              width={500}
              height={500}
              viewBox="0 0 500 499.99999"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              {...props}
            >
                <g>
                    {this.state.svg_objects}
                </g>
              <g display="inline" fill="none" stroke="#000" strokeOpacity={1}>
                <path d="M16.866 220.55h126.308l-.734 170.002H89.2l-7.711-.368-.734-32.678-5.049.642-3.764 1.194-6.241 2.845-5.508 3.764-4.406 4.498-1.102 1.744-2.386 4.222-1.285 4.957-1.102 8.445-33.78-.367zM156.76 221.651h17.257zM165.572 221.284l.734 168.533zM157.494 389.45l15.789-.367zM12.827 190.074l.368 15.055zM13.195 197.418l128.143.734zM141.338 189.707l.368 16.89zM87.558 390.47l-.26-34.79zM16.419 357.757l29.857-.26z" />
                <text xmlSpace="preserve" x={63.671631} y={192.37183}>
                  <tspan x={63.671631} y={192.37183}>
                    {"11&apos;-6&quot;"}
                  </tspan>
                </text>
                <text
                  xmlSpace="preserve"
                  style={{
                    whiteSpace: "pre",
                    inlineSize: 19.5255
                  }}
                  x={406.42081}
                  y={215.80777}
                  transform="rotate(90 254.16 137.818)"
                  display="inline"
                >
                  <tspan x={406.42081} y={215.80777}>
                    {"15&apos;"}
                  </tspan>
                </text>
              </g>
            </svg>
          )
      }
  
      dwight(props) {
          return (
            <svg
              width={500}
              height={500}
              viewBox="0 0 500 499.99999"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              {...props}
            >
                <g>
                    {this.state.svg_objects}
                </g>
              <g display="inline" fill="none" stroke="#000" strokeOpacity={1}>
                <path d="M151 148.05l-42.593-.367-.734 144.3 10.281-.735.367 5.508 100.973-.734-1.101-116.028V146.95l-42.225.734.367 26.437-5.14-1.102-2.57-.734-3.673-1.102-3.304-1.836-2.203-1.468-3.672-4.406-2.203-3.672-2.57-5.14v-3.305l-.3-1.254zM107.673 178.159l37.085.367M181.842 178.526h36.35M228.106 148.05l16.156-.367M236.184 147.683l.367 148.706M242.793 296.022h-13.952 13.952zM217.091 305.2l.734 17.258M105.837 306.302l.367 17.258M106.572 314.38h110.886" />
                <text xmlSpace="preserve" x={155.28061} y={328.49701}>
                  <tspan x={155.28061} y={328.49701}>
                    {"12&apos;"}
                  </tspan>
                </text>
                <text
                  xmlSpace="preserve"
                  x={209.45422}
                  y={-240.29916}
                  transform="rotate(90)"
                >
                  <tspan x={209.45422} y={-240.29916}>
                    {"15&apos;-6&quot;"}
                  </tspan>
                </text>
              </g>
            </svg>
          )
      }
  
      hamlin(props) {
          return (
            <svg
              width={500}
              height={500}
              viewBox="0 0 500 499.99999"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              {...props}
            >
                <g>
                    {this.state.svg_objects}
                </g>
              <g display="inline" fill="none" stroke="#000" strokeOpacity={1}>
                <path d="M95.983 193.912h116.834v137.085h-35.829l.52-25.963-3.651.271-3.12.918-2.388 1.285-5.324 3.305-4.773 3.488-4.039 5.691-2.02 5.692v6.058l-32.494-.367-.184-7.16-9.73.183v6.61l-13.953.183zM225.02 195.989h14.799zM231.51 195.47l.78 135.527zM225.28 330.737l14.539.26zM94.166 166.91l.26 15.838zM94.425 174.959l118.912-.26zM213.596 167.949v14.539z" />
                <text xmlSpace="preserve" x={146.87097} y={168.72746}>
                  <tspan x={146.87097} y={168.72746}>
                    {"13&apos;"}
                  </tspan>
                </text>
                <text
                  xmlSpace="preserve"
                  x={255.47531}
                  y={-237.46326}
                  transform="rotate(90)"
                >
                  <tspan x={255.47531} y={-237.46326}>
                    {"15&apos;"}
                  </tspan>
                </text>
              </g>
            </svg>
          )
      }
  
      johnson(props) {
          return (
            <svg
              width="210mm"
              height="297mm"
              viewBox="0 0 210 297"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              {...props}
            >
                <g>
                    {this.state.svg_objects}
                </g>
              <g fill="none" stroke="#000">
                <path
                  d="M237.072 157.734l3.77 48.62-30.718-39.197zM106.188 135.191l8.413.022-.033 2.238 1.413.006-.283 35.309-23.163.094-.027-1.506h-2.892v-36.251l10.48.022.193 1.822.748 1.662 1.318 1.506 1.413.848 1.34.431 1.096.1z"
                  strokeWidth={0.264583}
                />
                <path
                  d="M115.718 177.968l-.066-3.796v1.931l-26.038.266v-2.197 3.596l.065-3.33-.065-.266"
                  strokeWidth={0.261978}
                />
                <path
                  d="M119.622 172.886l3.777-.094h-1.921l-.265-37.437h2.186-3.578l3.313.094.265-.094"
                  strokeWidth={0.313347}
                />
                <text
                  xmlSpace="preserve"
                  x={100.60175}
                  y={180.03122}
                  fontSize="3.175px"
                  strokeWidth={0.264583}
                >
                  <tspan x={100.60175} y={180.03122} strokeWidth={0.264583}>
                    {"12&apos;"}
                  </tspan>
                </text>
                <text
                  xmlSpace="preserve"
                  x={151.4913}
                  y={-123.91578}
                  transform="rotate(90)"
                  fontSize="3.175px"
                  strokeWidth={0.264583}
                >
                  <tspan x={151.4913} y={-123.91578} strokeWidth={0.264583}>
                    {"17&apos;"}
                  </tspan>
                </text>
                <path
                  d="M89.522 143.436l9.04.047zM98.427 143.48l.005-1.224c.011.408-.003.816-.005 1.224zM98.467 135.056v1.883zM107.593 143.346l8.389.133zM107.699 143.483v-.999z"
                  strokeWidth={0.264583}
                />
              </g>
            </svg>
          )
      }
  
      knowlton(props) {
          return (
            <svg
              width={500}
              height={500}
              viewBox="0 0 500 499.99999"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              {...props}
            >
                <g>
                    {this.state.svg_objects}
                </g>
              <g display="inline" fill="none" stroke="#000" strokeOpacity={1}>
                <path d="M213.961 214.584l.382 159.705 117.872.26.152-7.33 8.676.06-.52-152.144-5.743-.063v-8.644l-42.732.336.04 4.178-.735 3.855-1.836 4.039-2.937 5.324-2.479 2.937-2.111 2.02-2.754 2.203-4.039 2.02-4.039 2.019-6.425 1.285-4.406.55-.735-.229-.367-29.879-34.055.184.091 7.252zM212.227 387.736l.367 18.726zM212.227 397.283l129.612-.735zM341.84 388.103l.734 16.89zM184.624 208.188l.368 166.697z" />
                <text
                  xmlSpace="preserve"
                  x={-303.36984}
                  y={177.62637}
                  transform="rotate(-90)"
                >
                  <tspan x={-303.36984} y={177.62637}>
                    {"15&apos;"}
                  </tspan>
                </text>
                <text xmlSpace="preserve" x={266.56851} y={415.2352}>
                  <tspan x={266.56851} y={415.2352}>
                    {"11-6&apos;"}
                  </tspan>
                </text>
                <path d="M173.673 208.188h22.398z" />
                <path d="M174.756 374.188h22.397z" display="inline" />
              </g>
            </svg>
          )
      }
  
      leach(props) {
          return (
            <svg
              width={500}
              height={500}
              viewBox="0 0 500 499.99999"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              {...props}
            >
                <g>
                    {this.state.svg_objects}
                </g>
              <g display="inline" fill="none" stroke="#000" strokeOpacity={1}>
                <path d="M128.575 186.77h126.308l-.734 170.002h-53.24l-7.711-.368-.734-32.678-5.049.642-3.764 1.194-6.241 2.845-5.508 3.764-4.406 4.498-1.102 1.744-2.386 4.222-1.285 4.957-1.102 8.445-33.78-.367zM268.469 187.871h17.257zM277.28 187.504l.735 168.533zM269.203 355.67l15.789-.367zM124.536 156.294l.368 15.055zM124.904 163.638l128.143.734zM253.047 155.927l.368 16.89zM199.267 356.69l-.26-34.79zM128.128 323.977l29.857-.26z" />
                <text xmlSpace="preserve" x={175.38063} y={158.59177}>
                  <tspan x={175.38063} y={158.59177}>
                    {"11&apos;-6&quot;"}
                  </tspan>
                </text>
                <text
                  xmlSpace="preserve"
                  style={{
                    whiteSpace: "pre",
                    inlineSize: 19.5255
                  }}
                  x={406.42081}
                  y={215.80777}
                  transform="rotate(90 326.904 176.782)"
                  display="inline"
                >
                  <tspan x={406.42081} y={215.80777}>
                    {"15&apos;"}
                  </tspan>
                </text>
              </g>
            </svg>
          )
      }
  
      lewis(props) {
          return (
            <svg
              width="210mm"
              height="297mm"
              viewBox="0 0 210 297"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              {...props}
            >
                <g>
                    {this.state.svg_objects}
                </g>
              <g fill="none" stroke="#000" strokeWidth={0.264583}>
                <path d="M98.304 160.993l13.316-.133.133-4.261h6.558l.034 4.46 36.685-.066-.133-52.598-60.588-.266v35.753l-7.456.067-.134 17.044 1.332.033.033-10.786 1.399.2.798.167 1.265.432 1.232.5.932.499.9.633 1.064 1.032 1 1.065.731 1.231.566 1.665.367 1.165.133 1.065z" />
                <path d="M94.376 124.973l8.256.067-.067-4.128h1.532l-.067 10.92v.332l8.855.133v1.065l-.254.913-.799 1.927-1.344 1.888-1.394 1.273-1.702.958-2.164.592-2.663.04-.066 1.597-8.323-.133z" />
                <path d="M94.376 109.993h8.256l-.067 2.264 10.029.038-.024.754-.094.918-.235.73-.424 1.059-.518.965-.659.918-.47.565-.777.659-.848.612-.612.4-.659.4-.706.236-.706.211-.848.095-2.377.094-.005.034.066 4.095-8.389-.033zM93.998 95.135v7.721zM93.81 99.09l61.202.565zM154.824 95.7v6.968zM159.908 109.07h7.345zM163.675 108.882l.188 52.917zM159.908 161.234h7.533z" />
                <text
                  xmlSpace="preserve"
                  x={118.13922}
                  y={97.521088}
                  fontSize="3.175px"
                >
                  <tspan x={118.13922} y={97.521088} strokeWidth={0.264583}>
                    {"13 &apos;- 11&quot;"}
                  </tspan>
                </text>
                <text
                  xmlSpace="preserve"
                  x={129.37878}
                  y={-166.70822}
                  transform="rotate(90)"
                  fontSize="3.175px"
                >
                  <tspan x={129.37878} y={-166.70822} strokeWidth={0.264583}>
                    {"14&apos;-2&quot;"}
                  </tspan>
                </text>
                <path d="M102.665 125.007l-.135 7.19h1.467l.133-11.352-1.531.067z" />
              </g>
            </svg>
          )
      }
  
      maryLyon(props) {
          return (
            <svg
              width={500}
              height={500}
              viewBox="0 0 500 499.99999"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              {...props}
            >
                <g>
                    {this.state.svg_objects}
                </g>
              <g display="inline" fill="none" stroke="#000" strokeOpacity={1}>
                <path d="M153.702 262.747l.52 141.24h3.894l-.13 7.14 39.594-.13-.13-26.093 3.245.13 4.154.778 4.154 2.207 3.505 2.077 3.505 2.986 3.895 5.582 1.038 1.298 1.169 3.635 1.038 3.505.13 3.245.13.52 35.05.649.13-7.4 7.53.13-.26-131.633-15.319.52.26-10.386zM153.702 379.322l37.127.519zM228.735 379.84h37.647zM125.402 264.564h14.28zM132.152 264.045l.26 148.51zM125.142 412.295l14.54-.26zM152.663 232.89l.26 15.577zM152.923 240.419l113.2.779zM265.863 233.409l.519 15.058z" />
                <text xmlSpace="preserve" x={201.99329} y={236.52423}>
                  <tspan x={201.99329} y={236.52423}>
                    {"12&apos;"}
                  </tspan>
                </text>
                <text
                  xmlSpace="preserve"
                  x={-346.6286}
                  y={124.86072}
                  transform="rotate(-90)"
                >
                  <tspan x={-346.6286} y={124.86072}>
                    {"16&apos;"}
                  </tspan>
                </text>
              </g>
            </svg>
          )
      }
  
      thatcher(props) {
          return (
            <svg
              width="210mm"
              height="297mm"
              viewBox="0 0 210 297"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              {...props}
            >
                <g>
                    {this.state.svg_objects}
                </g>
              <g fill="none" stroke="#000">
                <path
                  d="M40.756 108.377l.056 2.56 35.92.1-.067-22.67-9.587-.033.033-9.82H65.48l-.034 6.657h-.699l-.765-.2-.666-.266-.566-.2-.866-.499-.765-.732-.533-.566-.7-.999-.265-.666-.167-.666-.133-.466-.033-1.365-3.462-.033-.034 1.332h-2.064v-1.232l-12.883-.067-.033 16.446v.233h-.999v-1.099l-4.294-.033-.034 7.39 4.328-.1.033-.699h6.192l.034-.666v-.466l-.167-.4-.1-.399-.3-.599-.266-.433-.499-.499-.533-.533-.632-.466-1.265-.566-.932-.266-.633-.166h-.932l.033-1.132-4.36.033.033 7.324 4.36-.067-.033-.732.866.067v2.296h-.832v-.798l-4.361.033v.066l.1 7.524 4.227-.067.003-1.419z"
                  strokeWidth={0.264583}
                />
                <path
                  d="M40.697 103.033l.859.035.577.095.388.164.565.271.353.212.53.4.33.318.458.459.553.647.424.824.377.93.012.6v.283l-5.39-.024 5.437.035-.024-.87-.377-.895-.282-.612-.424-.589-1.177-1.13-.423-.353-.448-.282-.894-.377-.612-.094zM34.986 116.097l.133 4.395zM35.12 118.095l42.164.007z"
                  strokeWidth={0.264583}
                />
                <path d="M83.402 111.358l.09-34.32z" strokeWidth={0.262131} />
                <path d="M77.064 116.364l.146 2.322.12 1.939z" strokeWidth={0.264583} />
                <text
                  xmlSpace="preserve"
                  x={50.712887}
                  y={122.21575}
                  fontSize="3.175px"
                  strokeWidth={0.264583}
                >
                  <tspan x={50.712887} y={122.21575} strokeWidth={0.264583}>
                    {"16&apos;-5&quot;"}
                  </tspan>
                </text>
                <path
                  d="M80.187 76.894h6.41zM80.269 111.537h6.411z"
                  strokeWidth={0.264583}
                />
                <text
                  xmlSpace="preserve"
                  x={90.738007}
                  y={-86.395699}
                  transform="rotate(90)"
                  fontSize="3.175px"
                  strokeWidth={0.264583}
                >
                  <tspan x={90.738007} y={-86.395699} strokeWidth={0.264583}>
                    {"15&apos;-2&quot;"}
                  </tspan>
                </text>
              </g>
            </svg>
          )
      }
      dickinson(props) {
          return (
            <svg
              width={500}
              height={500.33301}
              viewBox="0 0 500 500.33301"
              xmlns="http://www.w3.org/2000/svg"
              {...props}
            >
                <g>
                    {this.state.svg_objects}
                </g>
              <g fill="none" stroke="#000">
                <path d="M107.142 107.792l.202 4.455 1.27 5.217 2.682 3.95 3.796 3.289 5.316 1.924 4.304.355-.051-19.089h25.517l.202 25.923-24.656-.051v-11.341 11.34l24.606.153.303 64.704-34.478-.354v9.923l34.732.354-.254-9.923.254 9.569H81.069l.051-9.67 34.68-.253v9.923l.102-9.822-34.833-.101.03-64.859 25.487.357v-11.341 11.34l-25.43-.283-.087-25.942z" />
                <path
                  d="M156.557 107.887h15.948-8.151l.354 101.019h8.152-14.885"
                  strokeWidth={0.993123}
                />
                <path
                  d="M150.557 211.989v15.948-8.151l-69.394.354v8.152-14.885"
                  strokeWidth={0.823117}
                />
                <text xmlSpace="preserve" x={97.01712} y={234.06139}>
                  <tspan x={97.01712} y={234.06139}>
                    {"11&apos;-8&apos;&apos;"}
                  </tspan>
                </text>
                <text
                  xmlSpace="preserve"
                  x={139.73964}
                  y={-170.77725}
                  transform="rotate(90)"
                >
                  <tspan x={139.73964} y={-170.77725}>
                    {"18&apos;-6&apos;&apos;"}
                  </tspan>
                </text>
              </g>
            </svg>
          )
      }
      field(props) {
          return (
            <svg
              width={500}
              height={500.33301}
              viewBox="0 0 500 500.33301"
              xmlns="http://www.w3.org/2000/svg"
              {...props}
            >
                <g>
                    {this.state.svg_objects}
                </g>
              <g fill="none" stroke="#000">
                <path d="M107.142 107.792l.202 4.455 1.27 5.217 2.682 3.95 3.796 3.289 5.316 1.924 4.304.355-.051-19.089h25.517l.202 25.923-24.656-.051v-11.341 11.34l24.606.153.303 64.704-34.478-.354v9.923l34.732.354-.254-9.923.254 9.569H81.069l.051-9.67 34.68-.253v9.923l.102-9.822-34.833-.101.03-64.859 25.487.357v-11.341 11.34l-25.43-.283-.087-25.942z" />
                <path
                  d="M156.557 107.887h15.948-8.151l.354 101.019h8.152-14.885"
                  strokeWidth={0.993123}
                />
                <path
                  d="M150.557 211.989v15.948-8.151l-69.394.354v8.152-14.885"
                  strokeWidth={0.823117}
                />
                <text xmlSpace="preserve" x={97.01712} y={234.06139}>
                  <tspan x={97.01712} y={234.06139}>
                    {"11&apos;-8&apos;&apos;"}
                  </tspan>
                </text>
                <text
                  xmlSpace="preserve"
                  x={139.73964}
                  y={-170.77725}
                  transform="rotate(90)"
                >
                  <tspan x={139.73964} y={-170.77725}>
                    {"18&apos;-6&apos;&apos;"}
                  </tspan>
                </text>
              </g>
            </svg>
          )
      }
      grayson(props) {
          return (
            <svg
              width={500}
              height={500.33301}
              viewBox="0 0 500 500.33301"
              xmlns="http://www.w3.org/2000/svg"
              {...props}
            >
                <g>
                    {this.state.svg_objects}
                </g>
              <g fill="none" stroke="#000">
                <path d="M107.142 107.792l.202 4.455 1.27 5.217 2.682 3.95 3.796 3.289 5.316 1.924 4.304.355-.051-19.089h25.517l.202 25.923-24.656-.051v-11.341 11.34l24.606.153.303 64.704-34.478-.354v9.923l34.732.354-.254-9.923.254 9.569H81.069l.051-9.67 34.68-.253v9.923l.102-9.822-34.833-.101.03-64.859 25.487.357v-11.341 11.34l-25.43-.283-.087-25.942z" />
                <path
                  d="M156.557 107.887h15.948-8.151l.354 101.019h8.152-14.885"
                  strokeWidth={0.993123}
                />
                <path
                  d="M150.557 211.989v15.948-8.151l-69.394.354v8.152-14.885"
                  strokeWidth={0.823117}
                />
                <text xmlSpace="preserve" x={97.01712} y={234.06139}>
                  <tspan x={97.01712} y={234.06139}>
                    {"11&apos;-8&apos;&apos;"}
                  </tspan>
                </text>
                <text
                  xmlSpace="preserve"
                  x={139.73964}
                  y={-170.77725}
                  transform="rotate(90)"
                >
                  <tspan x={139.73964} y={-170.77725}>
                    {"18&apos;-6&apos;&apos;"}
                  </tspan>
                </text>
              </g>
            </svg>
          )
      }
      webster(props) {
          return (
            <svg
              width={500}
              height={500.33301}
              viewBox="0 0 500 500.33301"
              xmlns="http://www.w3.org/2000/svg"
              {...props}
            >
                <g>
                    {this.state.svg_objects}
                </g>
              <g fill="none" stroke="#000">
                <path d="M107.142 107.792l.202 4.455 1.27 5.217 2.682 3.95 3.796 3.289 5.316 1.924 4.304.355-.051-19.089h25.517l.202 25.923-24.656-.051v-11.341 11.34l24.606.153.303 64.704-34.478-.354v9.923l34.732.354-.254-9.923.254 9.569H81.069l.051-9.67 34.68-.253v9.923l.102-9.822-34.833-.101.03-64.859 25.487.357v-11.341 11.34l-25.43-.283-.087-25.942z" />
                <path
                  d="M156.557 107.887h15.948-8.151l.354 101.019h8.152-14.885"
                  strokeWidth={0.993123}
                />
                <path
                  d="M150.557 211.989v15.948-8.151l-69.394.354v8.152-14.885"
                  strokeWidth={0.823117}
                />
                <text xmlSpace="preserve" x={97.01712} y={234.06139}>
                  <tspan x={97.01712} y={234.06139}>
                    {"11&apos;-8&apos;&apos;"}
                  </tspan>
                </text>
                <text
                  xmlSpace="preserve"
                  x={139.73964}
                  y={-170.77725}
                  transform="rotate(90)"
                >
                  <tspan x={139.73964} y={-170.77725}>
                    {"18&apos;-6&apos;&apos;"}
                  </tspan>
                </text>
              </g>
            </svg>
          )
      }
      cance(props) {
          return (
            <svg
              width={500}
              height={500.33301}
              viewBox="0 0 500 500.33301"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              {...props}
            >
                <g>
                    {this.state.svg_objects}
                </g>
              <g fill="none" stroke="#000">
                <path d="M214.002 208.462v41.484h5.095l-.141 44.032 59.091-.364-.252-32.862h-4.114l-.223-52.335-20.52.045v13.1l-4.366-.363-3.639-1.82-2.547-2.547-1.82-4.003-.727-4.337z" />
                <path
                  d="M202.548 294.118H176.62h13.253l-.577-85.61h-13.251 24.199"
                  strokeWidth={1.16572}
                />
                <path
                  d="M218.74 326.971v-25.928 13.252l59.478-.576v-13.252 24.2"
                  strokeWidth={0.971652}
                />
                <text
                  xmlSpace="preserve"
                  x={219.45662}
                  y={345.46902}
                  transform="scale(1.0356 .96562)"
                  fontSize="12.3841px"
                  strokeWidth={1.03201}
                >
                  <tspan x={219.45662} y={345.46902} strokeWidth={1.03201}>
                    {"11&apos;-6&apos;&apos;"}
                  </tspan>
                </text>
                <text
                  xmlSpace="preserve"
                  x={-267.17661}
                  y={173.49429}
                  transform="matrix(0 -.9658 1.03542 0 0 0)"
                  fontSize="13.2514px"
                  strokeWidth={1.10428}
                >
                  <tspan x={-267.17661} y={173.49429} strokeWidth={1.10428}>
                    {"17&apos;"}
                  </tspan>
                </text>
              </g>
            </svg>
          )
      }
      cooliage(props) {
          return (
            <svg
              width="210mm"
              height="297mm"
              viewBox="0 0 210 297"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              {...props}
            >
                <g>
                    {this.state.svg_objects}
                </g>
              <g fill="none" stroke="#000" strokeWidth={0.264583}>
                <path d="M37.809 172.134l41.919.165zM37.809 168.518l.164 8.055zM79.728 169.175v7.233z" />
                <text
                  xmlSpace="preserve"
                  x={56.876251}
                  y={176.57266}
                  fontSize="3.175px"
                >
                  <tspan x={56.876251} y={176.57266} strokeWidth={0.264583}>
                    {"12&apos;2&quot;"}
                  </tspan>
                </text>
                <path d="M78.495 178.692H70.03l.247 8.713-.987-.082-1.644-.493-1.89-1.069-1.15-1.233-1.234-1.48-.657-.986-.493-2.055-.083-1.315H38.713l.329 27.043 22.521-.165.082 8.384h-3.37l.082 19.891 41.427-.082-.083-19.973H98.14v-7.233l-23.097.328-.164-1.315h3.534zM39.617 205.488l7.48-.082zM43.48 179.103l.082 26.467zM100.03 206.639l7.562.082zM103.893 206.474l.247 27.043zM100.112 233.517h7.645zM58.11 244.284l41.92.164zM58.11 240.668l.165 8.055zM100.03 241.325v7.233z" />
                <text
                  xmlSpace="preserve"
                  x={77.178688}
                  y={248.72263}
                  fontSize="3.175px"
                >
                  <tspan x={77.178688} y={248.72263} strokeWidth={0.264583}>
                    {"12&apos;2&quot;"}
                  </tspan>
                </text>
                <text
                  xmlSpace="preserve"
                  x={219.63809}
                  y={-107.05801}
                  transform="rotate(90)"
                  fontSize="3.175px"
                >
                  <tspan x={219.63809} y={-107.05801} strokeWidth={0.264583}>
                    {"8&apos;8&quot;"}
                  </tspan>
                </text>
                <text
                  xmlSpace="preserve"
                  x={189.55325}
                  y={-45.949871}
                  transform="rotate(90)"
                  fontSize="3.175px"
                >
                  <tspan x={189.55325} y={-45.949871} strokeWidth={0.264583}>
                    {"8&apos;4&quot;"}
                  </tspan>
                </text>
              </g>
            </svg>
          )
      }
      crampton(props) {
          return (
            <svg
              width={500}
              height={500.33301}
              viewBox="0 0 500 500.33301"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              {...props}
            >
                <g>
                    {this.state.svg_objects}
                </g>
              <g fill="none" stroke="#000">
                <path d="M214.002 208.462v41.484h5.095l-.141 44.032 59.091-.364-.252-32.862h-4.114l-.223-52.335-20.52.045v13.1l-4.366-.363-3.639-1.82-2.547-2.547-1.82-4.003-.727-4.337z" />
                <path
                  d="M202.548 294.118H176.62h13.253l-.577-85.61h-13.251 24.199"
                  strokeWidth={1.16572}
                />
                <path
                  d="M218.74 326.971v-25.928 13.252l59.478-.576v-13.252 24.2"
                  strokeWidth={0.971652}
                />
                <text
                  xmlSpace="preserve"
                  x={220.88806}
                  y={345.08524}
                  transform="scale(1.0356 .96562)"
                  fontSize="12.3841px"
                  strokeWidth={1.03201}
                >
                  <tspan x={220.88806} y={345.08524} strokeWidth={1.03201}>
                    {"12&apos;-2&apos;&apos;"}
                  </tspan>
                </text>
                <text
                  xmlSpace="preserve"
                  x={-278.30469}
                  y={173.49429}
                  transform="matrix(0 -.9658 1.03542 0 0 0)"
                  fontSize="13.2514px"
                  strokeWidth={1.10428}
                >
                  <tspan x={-278.30469} y={173.49429} strokeWidth={1.10428}>
                    {"18&apos;-4&apos;&apos;"}
                  </tspan>
                </text>
              </g>
            </svg>
          )
      }
      emerson(props) {
          return (
            <svg
              width="210mm"
              height="297mm"
              viewBox="0 0 210 297"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              {...props}
            >
                <g>
                    {this.state.svg_objects}
                </g>
              <g fill="none" stroke="#000" strokeWidth={0.264583}>
                <path d="M37.809 172.134l41.919.165zM37.809 168.518l.164 8.055zM79.728 169.175v7.233z" />
                <text
                  xmlSpace="preserve"
                  x={56.876251}
                  y={176.57266}
                  fontSize="3.175px"
                >
                  <tspan x={56.876251} y={176.57266} strokeWidth={0.264583}>
                    {"12&apos;2&quot;"}
                  </tspan>
                </text>
                <path d="M78.495 178.692H70.03l.247 8.713-.987-.082-1.644-.493-1.89-1.069-1.15-1.233-1.234-1.48-.657-.986-.493-2.055-.083-1.315H38.713l.329 27.043 22.521-.165.082 8.384h-3.37l.413 18.9 41.096.115-.083-19.18H98.14v-7.232l-23.097.328-.164-1.315h3.534zM39.617 205.488l7.48-.082zM43.48 179.103l.082 26.467zM100.03 206.639l7.562.082zM103.893 206.474l.247 27.043zM100.112 233.517h7.645zM58.11 244.284l41.92.164zM58.11 240.668l.165 8.055zM100.03 241.325v7.233z" />
                <text
                  xmlSpace="preserve"
                  x={77.178688}
                  y={248.72263}
                  fontSize="3.175px"
                >
                  <tspan x={77.178688} y={248.72263} strokeWidth={0.264583}>
                    {"12&apos;2&quot;"}
                  </tspan>
                </text>
                <text
                  xmlSpace="preserve"
                  x={219.63809}
                  y={-107.05801}
                  transform="rotate(90)"
                  fontSize="3.175px"
                >
                  <tspan x={219.63809} y={-107.05801} strokeWidth={0.264583}>
                    {"8&apos;2&quot;"}
                  </tspan>
                </text>
                <text
                  xmlSpace="preserve"
                  x={189.55325}
                  y={-45.949871}
                  transform="rotate(90)"
                  fontSize="3.175px"
                >
                  <tspan x={189.55325} y={-45.949871} strokeWidth={0.264583}>
                    {"8&apos;4&quot;"}
                  </tspan>
                </text>
              </g>
            </svg>
          )
      }
  
      james(props) {
          return (
            <svg
              width="210mm"
              height="297mm"
              viewBox="0 0 210 297"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              {...props}
            >
                <g>
                    {this.state.svg_objects}
                </g>
              <g fill="none" stroke="#000" strokeWidth={0.264583}>
                <path d="M37.809 172.134l41.919.165zM37.809 168.518l.164 8.055zM79.728 169.175v7.233z" />
                <text
                  xmlSpace="preserve"
                  x={56.876251}
                  y={176.57266}
                  fontSize="3.175px"
                >
                  <tspan x={56.876251} y={176.57266} strokeWidth={0.264583}>
                    {"12&apos;2&quot;"}
                  </tspan>
                </text>
                <path d="M78.495 178.692H70.03l.247 8.713-.987-.082-1.644-.493-1.89-1.069-1.15-1.233-1.234-1.48-.657-.986-.493-2.055-.083-1.315H38.713l.329 27.043 22.521-.165.082 8.384h-3.37l.082 19.891 41.427-.082-.083-19.973H98.14v-7.233l-23.097.328-.164-1.315h3.534zM39.617 205.488l7.48-.082zM43.48 179.103l.082 26.467zM100.03 206.639l7.562.082zM103.893 206.474l.247 27.043zM100.112 233.517h7.645zM58.11 244.284l41.92.164zM58.11 240.668l.165 8.055zM100.03 241.325v7.233z" />
                <text
                  xmlSpace="preserve"
                  x={77.178688}
                  y={248.72263}
                  fontSize="3.175px"
                >
                  <tspan x={77.178688} y={248.72263} strokeWidth={0.264583}>
                    {"12&apos;2&quot;"}
                  </tspan>
                </text>
                <text
                  xmlSpace="preserve"
                  x={219.63809}
                  y={-107.05801}
                  transform="rotate(90)"
                  fontSize="3.175px"
                >
                  <tspan x={219.63809} y={-107.05801} strokeWidth={0.264583}>
                    {"8&apos;8&quot;"}
                  </tspan>
                </text>
                <text
                  xmlSpace="preserve"
                  x={189.55325}
                  y={-45.949871}
                  transform="rotate(90)"
                  fontSize="3.175px"
                >
                  <tspan x={189.55325} y={-45.949871} strokeWidth={0.264583}>
                    {"8&apos;4&quot;"}
                  </tspan>
                </text>
              </g>
            </svg>
          )
      }
  
      johnAdams(props) {
          return (
            <svg
              width="210mm"
              height="297mm"
              viewBox="0 0 210 297"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              {...props}
            >
                <g>
                    {this.state.svg_objects}
                </g>
              <g fill="none" stroke="#000" strokeWidth={0.264583}>
                <path d="M37.809 172.134l41.919.165zM37.809 168.518l.164 8.055zM79.728 169.175v7.233z" />
                <text
                  xmlSpace="preserve"
                  x={56.876251}
                  y={176.57266}
                  fontSize="3.175px"
                >
                  <tspan x={56.876251} y={176.57266} strokeWidth={0.264583}>
                    {"12&apos;2&quot;"}
                  </tspan>
                </text>
                <path d="M78.495 178.692H70.03l.247 8.713-.987-.082-1.644-.493-1.89-1.069-1.15-1.233-1.234-1.48-.657-.986-.493-2.055-.083-1.315H38.713l.329 27.043 22.521-.165.082 8.384h-3.37l.082 19.891 41.427-.082-.083-19.973H98.14v-7.233l-23.097.328-.164-1.315h3.534zM39.617 205.488l7.48-.082zM43.48 179.103l.082 26.467zM100.03 206.639l7.562.082zM103.893 206.474l.247 27.043zM100.112 233.517h7.645zM58.11 244.284l41.92.164zM58.11 240.668l.165 8.055zM100.03 241.325v7.233z" />
                <text
                  xmlSpace="preserve"
                  x={77.178688}
                  y={248.72263}
                  fontSize="3.175px"
                >
                  <tspan x={77.178688} y={248.72263} strokeWidth={0.264583}>
                    {"12&apos;2&quot;"}
                  </tspan>
                </text>
                <text
                  xmlSpace="preserve"
                  x={219.63809}
                  y={-107.05801}
                  transform="rotate(90)"
                  fontSize="3.175px"
                >
                  <tspan x={219.63809} y={-107.05801} strokeWidth={0.264583}>
                    {"8&apos;8&quot;"}
                  </tspan>
                </text>
                <text
                  xmlSpace="preserve"
                  x={189.55325}
                  y={-45.949871}
                  transform="rotate(90)"
                  fontSize="3.175px"
                >
                  <tspan x={189.55325} y={-45.949871} strokeWidth={0.264583}>
                    {"8&apos;4&quot;"}
                  </tspan>
                </text>
              </g>
            </svg>
          )
      }
  
      JQA(props) {
          return (
            <svg
              width="210mm"
              height="297mm"
              viewBox="0 0 210 297"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              {...props}
            >
                <g>
                    {this.state.svg_objects}
                </g>
              <g fill="none" stroke="#000" strokeWidth={0.264583}>
                <path d="M37.809 172.134l41.919.165zM37.809 168.518l.164 8.055zM79.728 169.175v7.233z" />
                <text
                  xmlSpace="preserve"
                  x={56.876251}
                  y={176.57266}
                  fontSize="3.175px"
                >
                  <tspan x={56.876251} y={176.57266} strokeWidth={0.264583}>
                    {"12&apos;2&quot;"}
                  </tspan>
                </text>
                <path d="M78.495 178.692H70.03l.247 8.713-.987-.082-1.644-.493-1.89-1.069-1.15-1.233-1.234-1.48-.657-.986-.493-2.055-.083-1.315H38.713l.329 27.043 22.521-.165.082 8.384h-3.37l.082 19.891 41.427-.082-.083-19.973H98.14v-7.233l-23.097.328-.164-1.315h3.534zM39.617 205.488l7.48-.082zM43.48 179.103l.082 26.467zM100.03 206.639l7.562.082zM103.893 206.474l.247 27.043zM100.112 233.517h7.645zM58.11 244.284l41.92.164zM58.11 240.668l.165 8.055zM100.03 241.325v7.233z" />
                <text
                  xmlSpace="preserve"
                  x={77.178688}
                  y={248.72263}
                  fontSize="3.175px"
                >
                  <tspan x={77.178688} y={248.72263} strokeWidth={0.264583}>
                    {"12&apos;2&quot;"}
                  </tspan>
                </text>
                <text
                  xmlSpace="preserve"
                  x={219.63809}
                  y={-107.05801}
                  transform="rotate(90)"
                  fontSize="3.175px"
                >
                  <tspan x={219.63809} y={-107.05801} strokeWidth={0.264583}>
                    {"8&apos;8&quot;"}
                  </tspan>
                </text>
                <text
                  xmlSpace="preserve"
                  x={189.55325}
                  y={-45.949871}
                  transform="rotate(90)"
                  fontSize="3.175px"
                >
                  <tspan x={189.55325} y={-45.949871} strokeWidth={0.264583}>
                    {"8&apos;4&quot;"}
                  </tspan>
                </text>
              </g>
            </svg>
          )
      }
  
      kennedy(props) {
          return (
            <svg
              width="210mm"
              height="297mm"
              viewBox="0 0 210 297"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              {...props}
            >
                <g>
                    {this.state.svg_objects}
                </g>
              <g fill="none" stroke="#000" strokeWidth={0.264583}>
                <path d="M37.809 172.134l41.919.165zM37.809 168.518l.164 8.055zM79.728 169.175v7.233z" />
                <text
                  xmlSpace="preserve"
                  x={56.876251}
                  y={176.57266}
                  fontSize="3.175px"
                >
                  <tspan x={56.876251} y={176.57266} strokeWidth={0.264583}>
                    {"12&apos;2&quot;"}
                  </tspan>
                </text>
                <path d="M78.495 178.692H70.03l.247 8.713-.987-.082-1.644-.493-1.89-1.069-1.15-1.233-1.234-1.48-.657-.986-.493-2.055-.083-1.315H38.713l.329 27.043 22.521-.165.082 8.384h-3.37l.082 19.891 41.427-.082-.083-19.973H98.14v-7.233l-23.097.328-.164-1.315h3.534zM39.617 205.488l7.48-.082zM43.48 179.103l.082 26.467zM100.03 206.639l7.562.082zM103.893 206.474l.247 27.043zM100.112 233.517h7.645zM58.11 244.284l41.92.164zM58.11 240.668l.165 8.055zM100.03 241.325v7.233z" />
                <text
                  xmlSpace="preserve"
                  x={77.178688}
                  y={248.72263}
                  fontSize="3.175px"
                >
                  <tspan x={77.178688} y={248.72263} strokeWidth={0.264583}>
                    {"12&apos;2&quot;"}
                  </tspan>
                </text>
                <text
                  xmlSpace="preserve"
                  x={219.63809}
                  y={-107.05801}
                  transform="rotate(90)"
                  fontSize="3.175px"
                >
                  <tspan x={219.63809} y={-107.05801} strokeWidth={0.264583}>
                    {"8&apos;8&quot;"}
                  </tspan>
                </text>
                <text
                  xmlSpace="preserve"
                  x={189.55325}
                  y={-45.949871}
                  transform="rotate(90)"
                  fontSize="3.175px"
                >
                  <tspan x={189.55325} y={-45.949871} strokeWidth={0.264583}>
                    {"8&apos;4&quot;"}
                  </tspan>
                </text>
              </g>
            </svg>
          )
      }
  
      macKimmie(props) {
        return (
          <svg
            width={500}
            height={500.33301}
            viewBox="0 0 500 500.33301"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
          >
            <g>
                    {this.state.svg_objects}
                </g>
            <g fill="none" stroke="#000">
              <path d="M214.002 208.462v41.484h5.095l-.141 44.032 59.091-.364-.252-32.862h-4.114l-.223-52.335-20.52.045v13.1l-4.366-.363-3.639-1.82-2.547-2.547-1.82-4.003-.727-4.337z" />
              <path
                d="M202.548 294.118H176.62h13.253l-.577-85.61h-13.251 24.199"
                strokeWidth={1.16572}
              />
              <path
                d="M218.74 326.971v-25.928 13.252l59.478-.576v-13.252 24.2"
                strokeWidth={0.971652}
              />
              <text
                xmlSpace="preserve"
                x={220.88806}
                y={345.08524}
                transform="scale(1.0356 .96562)"
                fontSize="12.3841px"
                strokeWidth={1.03201}
              >
                <tspan x={220.88806} y={345.08524} strokeWidth={1.03201}>
                  {"12&apos;-2&apos;&apos;"}
                </tspan>
              </text>
              <text
                xmlSpace="preserve"
                x={-278.30469}
                y={173.49429}
                transform="matrix(0 -.9658 1.03542 0 0 0)"
                fontSize="13.2514px"
                strokeWidth={1.10428}
              >
                <tspan x={-278.30469} y={173.49429} strokeWidth={1.10428}>
                  {"18&apos;-4&apos;&apos;"}
                </tspan>
              </text>
            </g>
          </svg>
        )
      }
  
      melville(props) {
          return (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 443.46 435.81"
              {...props}
            >
                <g>
                    {this.state.svg_objects}
                </g>
              <defs>
                <style>
                  {
                    ".cls-1,.cls-2{fill:none;stroke:#000;stroke-miterlimit:10}.cls-1{stroke-width:4px}.cls-2{stroke-width:3px}.cls-3{font-size:43.6px;font-family:MyriadPro-Regular,Myriad Pro}.cls-4{letter-spacing:-.09em}"
                  }
                </style>
              </defs>
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <path
                    className="cls-1"
                    d="M441.46 182L441.46 242 231.46 242 231.46 362 81.46 362 81.46 122 261.46 122 261.46 2 441.46 2 441.46 122"
                  />
                  <path
                    className="cls-1"
                    d="M441.46 182h-60c.6-5.26 3.82-28.29 24-45a67.92 67.92 0 0136-15"
                  />
                  <path d="M53.96 119L53.96 362" />
                  <path className="cls-2" d="M53.96 120.5L53.96 360.5" />
                  <path d="M44.21 119H63.71V122H44.21z" />
                  <path d="M44.21 359H63.71V362H44.21z" />
                  <text className="cls-3" transform="rotate(-90 154.15 117.66)">
                    {"12\u20192"}
                    <tspan className="cls-4" x={76.12} y={0}>
                      {"\u201D"}
                    </tspan>
                  </text>
                  <text className="cls-3" transform="translate(126.9 424.91)">
                    {"8\u20192"}
                    <tspan className="cls-4" x={53.76} y={0}>
                      {"\u201D"}
                    </tspan>
                  </text>
                  <path d="M81.46 379.5L234.46 379.5" />
                  <path className="cls-2" d="M82.96 379.5L232.96 379.5" />
                  <path d="M81.46 369.75H84.46V389.25H81.46z" />
                  <path d="M231.46 369.75H234.46V389.25H231.46z" />
                  <path d="M234.46 262.5L441.46 262.5" />
                  <path className="cls-2" d="M235.96 262.5L439.96 262.5" />
                  <path d="M234.46 252.75H237.46V272.25H234.46z" />
                  <path d="M438.46 252.75H441.46V272.25H438.46z" />
                  <text className="cls-3" transform="translate(315.1 299.39)">
                    {"8\u20194"}
                    <tspan className="cls-4" x={53.76} y={0}>
                      {"\u201D"}
                    </tspan>
                  </text>
                </g>
              </g>
            </svg>
          )
      }
  
      moore(props) {
          return (
            <svg
              width={500}
              height={500.33301}
              viewBox="0 0 500 500.33301"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              {...props}
            >
                <g>
                    {this.state.svg_objects}
                </g>
              <g fill="none" stroke="#000">
                <path d="M214.002 208.462v41.484h5.095l-.141 44.032 59.091-.364-.252-32.862h-4.114l-.223-52.335-20.52.045v13.1l-4.366-.363-3.639-1.82-2.547-2.547-1.82-4.003-.727-4.337z" />
                <path
                  d="M202.548 294.118H176.62h13.253l-.577-85.61h-13.251 24.199"
                  strokeWidth={1.16572}
                />
                <path
                  d="M218.74 326.971v-25.928 13.252l59.478-.576v-13.252 24.2"
                  strokeWidth={0.971652}
                />
                <text
                  xmlSpace="preserve"
                  x={219.45662}
                  y={345.46902}
                  transform="scale(1.0356 .96562)"
                  fontSize="12.3841px"
                  strokeWidth={1.03201}
                >
                  <tspan x={219.45662} y={345.46902} strokeWidth={1.03201}>
                    {"11&apos;-6&apos;&apos;"}
                  </tspan>
                </text>
                <text
                  xmlSpace="preserve"
                  x={-267.17661}
                  y={173.49429}
                  transform="matrix(0 -.9658 1.03542 0 0 0)"
                  fontSize="13.2514px"
                  strokeWidth={1.10428}
                >
                  <tspan x={-267.17661} y={173.49429} strokeWidth={1.10428}>
                    {"17&apos;"}
                  </tspan>
                </text>
              </g>
            </svg>
          )
      }
      patterson(props) {
          return (
            <svg
              width={500}
              height={500.33301}
              viewBox="0 0 500 500.33301"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              {...props}
            >
                <g>
                    {this.state.svg_objects}
                </g>
              <g fill="none" stroke="#000">
                <path d="M214.002 208.462v41.484h5.095l-.141 44.032 59.091-.364-.252-32.862h-4.114l-.223-52.335-20.52.045v13.1l-4.366-.363-3.639-1.82-2.547-2.547-1.82-4.003-.727-4.337z" />
                <path
                  d="M202.548 294.118H176.62h13.253l-.577-85.61h-13.251 24.199"
                  strokeWidth={1.16572}
                />
                <path
                  d="M218.74 326.971v-25.928 13.252l59.478-.576v-13.252 24.2"
                  strokeWidth={0.971652}
                />
                <text
                  xmlSpace="preserve"
                  x={220.88806}
                  y={345.08524}
                  transform="scale(1.0356 .96562)"
                  fontSize="12.3841px"
                  strokeWidth={1.03201}
                >
                  <tspan x={220.88806} y={345.08524} strokeWidth={1.03201}>
                    {"12&apos;-2&apos;&apos;"}
                  </tspan>
                </text>
                <text
                  xmlSpace="preserve"
                  x={-278.30469}
                  y={173.49429}
                  transform="matrix(0 -.9658 1.03542 0 0 0)"
                  fontSize="13.2514px"
                  strokeWidth={1.10428}
                >
                  <tspan x={-278.30469} y={173.49429} strokeWidth={1.10428}>
                    {"18&apos;-4&apos;&apos;"}
                  </tspan>
                </text>
              </g>
            </svg>
          )
      }
      pierpont(props) {
          return (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 308.63 470.63"
              {...props}
            >
                <g>
                    {this.state.svg_objects}
                </g>
              <defs>
                <style>
                  {
                    ".cls-1{fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:4px}.cls-2{font-size:43.6px;font-family:MyriadPro-Regular,Myriad Pro}.cls-3{letter-spacing:-.09em}"
                  }
                </style>
              </defs>
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <path
                    className="cls-1"
                    d="M226 76.63v392H2v-392h90v50c1.3.16 28.79 3.16 45-18 9.15-11.95 9.8-25.18 9.41-32z"
                  />
                  <path className="cls-1" d="M225 54.63L4 54.63" />
                  <path d="M223 41.63H227V67.63H223z" />
                  <path d="M2 41.63H6V67.63H2z" />
                  <text className="cls-2" transform="translate(82.91 36.49)">
                    {"11.3"}
                    <tspan className="cls-3" x={76.12} y={0}>
                      {"\u2019"}
                    </tspan>
                  </text>
                  <path className="cls-1" d="M254 466.63L254 83.63" />
                  <path d="M241 464.63H267V468.63H241z" />
                  <path d="M241 81.63H267V85.63H241z" />
                  <text className="cls-2" transform="rotate(90 23.3 248.84)">
                    {"16\u20194"}
                    <tspan className="cls-3" x={76.12} y={0}>
                      {"\u201D"}
                    </tspan>
                  </text>
                </g>
              </g>
            </svg>
          )
      }
      prince(props) {
          return (
            <svg
              width={500}
              height={500.33301}
              viewBox="0 0 500 500.33301"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              {...props}
            >
                <g>
                    {this.state.svg_objects}
                </g>
              <g fill="none" stroke="#000">
                <path d="M214.002 208.462v41.484h5.095l-.141 44.032 59.091-.364-.252-32.862h-4.114l-.223-52.335-20.52.045v13.1l-4.366-.363-3.639-1.82-2.547-2.547-1.82-4.003-.727-4.337z" />
                <path
                  d="M202.548 294.118H176.62h13.253l-.577-85.61h-13.251 24.199"
                  strokeWidth={1.16572}
                />
                <path
                  d="M218.74 326.971v-25.928 13.252l59.478-.576v-13.252 24.2"
                  strokeWidth={0.971652}
                />
                <text
                  xmlSpace="preserve"
                  x={220.88806}
                  y={345.08524}
                  transform="scale(1.0356 .96562)"
                  fontSize="12.3841px"
                  strokeWidth={1.03201}
                >
                  <tspan x={220.88806} y={345.08524} strokeWidth={1.03201}>
                    {"12&apos;-2&apos;&apos;"}
                  </tspan>
                </text>
                <text
                  xmlSpace="preserve"
                  x={-278.30469}
                  y={173.49429}
                  transform="matrix(0 -.9658 1.03542 0 0 0)"
                  fontSize="13.2514px"
                  strokeWidth={1.10428}
                >
                  <tspan x={-278.30469} y={173.49429} strokeWidth={1.10428}>
                    {"18&apos;-4&apos;&apos;"}
                  </tspan>
                </text>
              </g>
            </svg>
          )
      }
      thoreau(props) {
          return (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 425.46 440.63"
              {...props}
            >
                <g>
                    {this.state.svg_objects}
                </g>
              <defs>
                <style>
                  {
                    ".cls-1{fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:4px}.cls-2{font-size:43.6px;font-family:MyriadPro-Regular,Myriad Pro}.cls-3{letter-spacing:-.09em}"
                  }
                </style>
              </defs>
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <path
                    className="cls-1"
                    d="M423.46 232.43h-63a84.94 84.94 0 0027 45 83.68 83.68 0 0036 18v143.2h-182.4v-114H81.46V73.83h159.6v114h182.4z"
                  />
                  <path className="cls-1" d="M53.96 81.43L53.96 320.43" />
                  <path d="M40.96 79.43H66.96000000000001V83.43H40.96z" />
                  <path d="M40.96 318.43H66.96000000000001V322.43H40.96z" />
                  <text className="cls-2" transform="rotate(-90 134.365 97.875)">
                    {"12\u20192"}
                    <tspan className="cls-3" x={76.12} y={0}>
                      {"\u201D"}
                    </tspan>
                  </text>
                  <path className="cls-1" d="M241.46 52.93L83.46 52.93" />
                  <path d="M239.46 39.93H243.46V65.93H239.46z" />
                  <path d="M81.46 39.93H85.46V65.93H81.46z" />
                  <text className="cls-2" transform="translate(126.84 36.49)">
                    {"8\u20192"}
                    <tspan className="cls-3" x={53.76} y={0}>
                      {"\u201D"}
                    </tspan>
                  </text>
                  <path className="cls-1" d="M421.46 168.93L245.46 168.93" />
                  <path d="M419.46 155.93H423.46V181.93H419.46z" />
                  <path d="M243.46 155.93H247.46V181.93H243.46z" />
                  <text className="cls-2" transform="translate(306.84 160.49)">
                    {"8\u20194"}
                    <tspan className="cls-3" x={53.76} y={0}>
                      {"\u201D"}
                    </tspan>
                  </text>
                  <path
                    className="cls-1"
                    d="M423.46 295.43a83.68 83.68 0 01-36-18 84.94 84.94 0 01-27-45h63"
                  />
                </g>
              </g>
            </svg>
          )
      }
      washington(props) {
          return (
            <svg
              width="210mm"
              height="297mm"
              viewBox="0 0 210 297"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              {...props}
            >
                <g>
                    {this.state.svg_objects}
                </g>
              <g fill="none" stroke="#000" strokeWidth={0.264583}>
                <path d="M37.809 172.134l41.919.165zM37.809 168.518l.164 8.055zM79.728 169.175v7.233z" />
                <text
                  xmlSpace="preserve"
                  x={56.876251}
                  y={176.57266}
                  fontSize="3.175px"
                >
                  <tspan x={56.876251} y={176.57266} strokeWidth={0.264583}>
                    {"12&apos;2&quot;"}
                  </tspan>
                </text>
                <path d="M78.495 178.692H70.03l.247 8.713-.987-.082-1.644-.493-1.89-1.069-1.15-1.233-1.234-1.48-.657-.986-.493-2.055-.083-1.315H38.713l.329 27.043 22.521-.165.082 8.384h-3.37l.082 19.891 41.427-.082-.083-19.973H98.14v-7.233l-23.097.328-.164-1.315h3.534zM39.617 205.488l7.48-.082zM43.48 179.103l.082 26.467zM100.03 206.639l7.562.082zM103.893 206.474l.247 27.043zM100.112 233.517h7.645zM58.11 244.284l41.92.164zM58.11 240.668l.165 8.055zM100.03 241.325v7.233z" />
                <text
                  xmlSpace="preserve"
                  x={77.178688}
                  y={248.72263}
                  fontSize="3.175px"
                >
                  <tspan x={77.178688} y={248.72263} strokeWidth={0.264583}>
                    {"12&apos;2&quot;"}
                  </tspan>
                </text>
                <text
                  xmlSpace="preserve"
                  x={219.63809}
                  y={-107.05801}
                  transform="rotate(90)"
                  fontSize="3.175px"
                >
                  <tspan x={219.63809} y={-107.05801} strokeWidth={0.264583}>
                    {"8&apos;8&quot;"}
                  </tspan>
                </text>
                <text
                  xmlSpace="preserve"
                  x={189.55325}
                  y={-45.949871}
                  transform="rotate(90)"
                  fontSize="3.175px"
                >
                  <tspan x={189.55325} y={-45.949871} strokeWidth={0.264583}>
                    {"8&apos;4&quot;"}
                  </tspan>
                </text>
              </g>
            </svg>
          )
      }

    render() { 
        let args = 
        {ref: this.canvasRef, width: "1000", height: "1000", viewBox: "0 0 500 500"};

        switch(this.props.hall) {
                  case "Crabtree": return this.crabtree(args); break;
                  case 'Dwight': return this.dwight(args); break;
                  case 'Hamlin': return this.hamlin(args); break;
                  case 'Leach': return this.leach(args); break;
                  case 'Mary': return this.maryLyon(args); break;
                  case 'Lyon': return this.maryLyon(args); break;
                  case 'Knowlton': return this.knowlton(args); break;
                  case 'Johnson': return this.johnson(args); break;
                  case 'Lewis': return this.lewis(args); break;
                  case 'Thatcher': return this.thatcher(args); break;
                  case 'Butterfield': return this.butterfield(args); break;
                  case 'Gorman': return this.gorman(args); break;
                  case 'Van Meter': return this.vanMeter(args); break;
                  case 'Wheeler': return this.wheeler(args); break;
                  case 'Baker': return this.baker(args); break;
                  case 'Brett': return this.brettHall(args); break;
                  case 'Brooks': return this.brooks(args); break;
                  case 'Chadbourne': return this.chadbourne(args); break;
                  case 'Greenough': return this.greenough(args); break;
                  case 'Brown': return this.brown(args); break;
                  case 'Sylvan': return this.sylvan(args); break;
                  case 'McNamara': return this.mcNamara(args); break;
                  case 'Dickinson': return this.dickinson(args); break;
                  case 'Field': return this.field(args); break;
                  case 'Grayson': return this.grayson(args); break;
                  case 'Webster': return this.webster(args); break;
                  case 'Cance': return this.cance(args); break;
                  case 'Coolidge': return this.coolidge(args); break;
                  case 'Crampton': return this.crampton(args); break;
                  case 'Emerson': return this.cmerson(args); break;
                  case 'James': return this.cames(args); break;
                  case 'John Adams': return this.johnAdams(args); break;
                  case 'John Quincy Adam': return this.JQA(args); break;
                  case 'Kennedy': return this.kennedy(args); break;
                  case 'MacKimmie': return this.macKimmie(args); break;
                  case 'Melville': return this.melville(args); break;
                  case 'Moore': return this.moore(args); break;
                  case 'Patterson': return this.patterson(args); break;
                  case 'Pierpont': return this.pierpont(args); break;
                  case 'Prince': return this.prince(args); break;
                  case 'Thoreau': return this.thoreau(args); break;
                  case 'Washington': return this.washington(args); break;
                  }
    }
}
 
export default Floor_SVG;

