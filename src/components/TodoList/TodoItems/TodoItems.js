import React,{Component} from 'react'
import * as Fa from 'react-icons/fa';
import './TodoItems.css';
import PopUp from '../PopUp/PopUp'


class TodoItems extends Component{
    state = {
        items: [],
        dis:true,
        editValue:'',
        checkValue:false
    }
    keyUpHandler = () =>{
        let inputVal = this.inputElem.value
    
        if(inputVal.trim() == ''){
            this.setState({
                items:this.state.items,
                dis:true
            })
        }else{
            this.setState({
                items:this.state.items,
                dis:false
            })
        }
    }
    inputClickHandler = (e) =>{

       let itemArray = this.state.items
       itemArray.push({
           text:this.inputElem.value,
           key:Date.now()
       })
       this.setState({
           items:itemArray
       })
       this.inputElem.value = ''
       e.preventDefault()
}
    trashHandler = (e)=>{
        let el = e.target.parentNode
        let getAttr = el.getAttribute("value")
        let getAtt = parseInt(getAttr)
        this.state.items.map(data=>{
            if(data.key === getAtt){
                let itemIndex = this.state.items.indexOf(data)
                let newItem = this.state.items.slice()
                newItem.splice(itemIndex,1)
                el.classList.add('trash-effect')
                el.addEventListener('transitionend',()=>{
                    el.style.display='none'
                })
                return this.setState({
                    items: newItem
                })
            }
            return false
        })
    }
    checkHandler = (e) =>{
        let fl = e.target
        let el = fl.parentNode
        fl.classList.toggle('checked')
        if(fl.className.includes('checked')){
            el.classList.add('data-effect')
        }else{
            el.classList.remove('data-effect')
        }
    }

    cancelHandler = (e) =>{
        e.preventDefault()
        console.log(`hi`)
    }

    render(){

        let displayBool = this.props.doubleClickBool ? "block" : "none";

        return(
            <>
                <div className="todo-head">
                    <input type="text"ref={(el)=> this.inputElem = el} className="input"onKeyUp={this.keyUpHandler}/>
                    <button type="submit"onClick={this.inputClickHandler} className='btn-add'disabled={this.state.dis}><Fa.FaPlus/></button>
                </div>
                <div className="todo-items">

                <PopUp displayBool={displayBool} cancelHandler={this.cancelHandler} dbTextContent={this.props.dbTextContent}/>
                    <ul className="todo-items-ul">
                        {
                            this.state.items.map(data=>{
                                return <li className="todo-items-data"
                                        ref={(el)=>this.li=el} 
                                        key={data.key} 
                                        value={data.key}>
                                        <div className="li-text"value={data.key}onDoubleClick={this.props.handleDoubleClick}>{data.text}</div>
                                        <div className="trash-wrapper" onClick={this.trashHandler}><Fa.FaTrash/></div>
                                        <div className="check-wrapper" onClick={this.checkHandler}><Fa.FaCheck/></div></li>
                            })
                        }
                    </ul>
                </div>
            </>
        )
    }
}
export default TodoItems