import React from 'react';
import classNames from 'classnames';
import './Button.scss';

const Button = (props) =>  { 
return (
    <button {...props}  className = {classNames('button', props.className)}></button>);
}

export default Button