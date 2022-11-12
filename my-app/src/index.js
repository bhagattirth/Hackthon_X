import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Counters from './components/counters'
const element = <h1>Hello World</h1>
console.log(element);

ReactDOM.render(<Counters />, document.getElementById('root'));

