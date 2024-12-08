import React from 'react';
import styles from './Button.module.scss';

const Button = (props)=>{


    return(
        <button-item class={`${props.primary?styles.primary:''} ${props.className}`}>
            <a style={props.style} href={props.href} >
                {props.title}
            </a>
        </button-item>
    )
}

export default Button;