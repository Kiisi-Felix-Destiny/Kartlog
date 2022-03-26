import React from 'react';
import './ShowMore.css';
import * as Fa from 'react-icons/fa'

const ShowMore = () =>{
    


    return (
        <div className="show-more">
            <div className="show-more--wrapper">
                <header  className='show-more-title'>
                    <div class='show-more-title--header'>More Details</div>
                    <div class='show-more-title--close-btn'onClick={}><Fa.FaTimes/></div>
                </header>
                <div className="shore-more-details--wrapper">
                    <div class="show-more-details--content"></div>
                </div>
                
                <button className="show-more--close"onClick={}>Close</button>
            </div>
        </div>
    )

}

export default ShowMore