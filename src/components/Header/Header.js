import React,{Component} from 'react'
import './Header.css'
import Dots from './Dots/Dots'

class Header extends Component{

    render(){
        
        return(
            <div className="header">
                <div className="header-name">TodoList</div>
                <Dots/>
            </div>

        )
    }
}

export default Header