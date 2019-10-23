import React, { Component } from 'react';

import ReactDOM from 'react-dom'

export default function HourComp(){
    return (
        <div>
            <h2>time is {new Date().toLocaleTimeString()}</h2>
        </div>
    )
    ReactDOM.render(document.getElementById('time'));
}
  
setInterval(1000);