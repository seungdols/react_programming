import React from 'react';
import './Box1.css';

function Box({size}) {
  if(size === 'big') {
    return <button className="button big">Big Box</button>;
  } else {
    return <button className="button small">small Box</button>;
  }
}

export default Box;