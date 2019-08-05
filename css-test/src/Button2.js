import React from 'react';
import style from './Button2.module.css'
import cn from 'classnames'

function Button({size}) {
  if(size === 'big') {
    return <button className={cn(style.button, style.big)}>Big button</button>;
  } else {
    return <button className={cn(style.button, style.small)}>small button</button>;
  }
}

export default Button;
console.log(style)