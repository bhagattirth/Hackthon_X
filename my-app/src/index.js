import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import SideNavigation from './components/sidenav';
import Room from './components/room';
import InfoContainer from './components/infoContainer';
// import {DndContext} from '@dnd-kit/core';
// import {Draggable} from './components/draggable';

ReactDOM.render(
    <div>
    <InfoContainer></InfoContainer>
    {/* <DragAndDrop /> */}
    <Room></Room><SideNavigation />
    </div>, 

    document.getElementById('root')
);

