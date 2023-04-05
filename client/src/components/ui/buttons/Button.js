import React from 'react';
import styles from './Button.module.css'


const Button = ({children, size,  onClick, color}) => {
  return (
    <button 
    
        className={styles.button}
        style= {{
          backgroundColor: color,
          width: size,
        }}
        onClick = {onClick}
        
    >
        
        {children}

    </button>
  )
}

export default Button