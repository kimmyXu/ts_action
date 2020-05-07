// let hello : string = 'hello world'
// document.querySelectorAll('.app')[0].innerHTML=hello;


import React from 'react';
import ReactDOM from 'react-dom';

import Hello from './components/demo/Hello'

ReactDOM.render(
    <Hello name="TypeScript" />,
    document.querySelectorAll('.app')[0]
)

