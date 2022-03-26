import React from 'react';
import './PopUp.css'
import * as Fa from 'react-icons/fa'

const PopUp = (props) => {

    const myStyle = {
        display:props.displayBool,
    }
    
    return(
        <div className="pop-up"style={myStyle}>
            <div className="pop-up--wrapper">
                <div className="pop-up--header-wrapper">
                <header  className='pop-up--header'>Details</header>
                <button className="pop-up--cancel"onClick={props.cancelHandler}><Fa.FaTimes/></button>
                </div>
                <div className="pop-up-output-wrapper">
                    <div className='pop-up--output'>{props.dbTextContent}</div>
                </div>
            </div>
        </div>
    )

}
    

export default PopUp