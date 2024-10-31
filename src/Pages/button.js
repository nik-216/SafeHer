import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';
//buttonStyle,buttonSize -> class name

//array of css styles
const STYLES=['btn--primary','btn--outline'];

const SIZES=['btn--medium','btn--large'];

export const Button=({children, type, onClick, buttonStyle, buttonSize})=>{
    const checkButtonStyle=STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    //if the component passed has a button style then that remains as its style
    //if it does not then the style is set to the first style in the styles array

    const checkButtonSize=SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return(
        <Link to='/login' className='btn--mobile'>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize} `} onClick={onClick} type={type}>
                {children}
                {/* whatever content that is present in the button tag */}
            </button>
        </Link>
    )
}