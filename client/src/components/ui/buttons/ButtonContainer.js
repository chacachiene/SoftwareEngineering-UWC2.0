import React from 'react'

const ButtonContainer = ({children,size, color}) => {
  return (
    <div 
    
        className='container' 
        style={
            {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: size,
                width: size,
                backgroundColor: color,
                borderRadius: size,
                cursor: 'pointer',

            }
        }
        
    >
        
        {children}

    </div>
  )
}

export default ButtonContainer