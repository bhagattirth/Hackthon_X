import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Counters from './components/counters'
import SideNavigation from './components/sidenav';
import Modal from './components/chooseRoom';

const element = <h1>Hello World</h1>
console.log(element);

ReactDOM.render(
    <div><Modal></Modal><SideNavigation /></div>, 

    document.getElementById('root')
);

