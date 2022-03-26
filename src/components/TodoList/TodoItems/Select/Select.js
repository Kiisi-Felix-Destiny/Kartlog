import React,{Component} from 'react';
import './Select.css';
import optionList from './SelectData'

class Select extends Component{

      
    /*optionHandler = (e) =>{
        let el = e.target
        let fl = el.childNodes[0]
        let x = parseInt(fl.getAttribute('id'))

        optionList.map(data=>{
            if(x === data.key){
                return console.log(`${data.key} ==> true`)
            }else{
                return this.setState({display:'none'})
            }
        })
        
    }*/
render(){

    const myStyle = {
        display: this.state.display
    }
console.log(this.state)


    return(
            <div className="select"style={myStyle}>
                <div className="select-option">
                    {
                        optionList.map(data=>{
                            return <div className="option"key={data.key} onClick={this.optionHandler}>
                                    <input type="radio"name="radio"id={data.key} className={data.class}/><label htmlFor={data.key}>{data.option}</label>
                                   </div>
                        })
                    }
                </div>
            </div>
    )

}

}
export default Select;