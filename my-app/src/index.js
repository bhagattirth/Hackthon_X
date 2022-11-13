import React from 'react';
import { createRoot } from 'react-dom/client';
import Main from './components/main';


const container = document.getElementById('root');
console.log(container);
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Main></Main>);

