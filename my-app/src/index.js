import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import SideNavigation from './components/sidenav';
import Room from './components/room';
import InfoContainer from './components/infoContainer';
// import {DndContext} from '@dnd-kit/core';


ReactDOM.render(
    <div>
    <InfoContainer></InfoContainer>
    <Room></Room><SideNavigation />
    </div>, 

    document.getElementById('root')
);

