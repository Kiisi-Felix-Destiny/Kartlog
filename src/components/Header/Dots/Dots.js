import React,{Component} from 'react'
import './Dots.css'


class Dots extends Component{

    dotsClickHandler = () =>{
        
    }
    render(){

        return(

            <div className="dots">
                <div className='dots-wrapper'>
                    <div className='dots-children'onClick={this.dotsClickHandler}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
           
        )
    }
}

export default Dots 