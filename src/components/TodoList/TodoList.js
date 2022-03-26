import React,{useState} from 'react'
import TodoItems from './TodoItems/TodoItems'
import './TodoList.css';

const TodoList = ()=> {


    const [state, setState] = useState({
        popUp:false
    })

    const [textContent, setTextContent] = useState({
        text:''
    })
    const doubleClickHandler = (e) =>{
        setState({
            popUp:!state.popUp
        })
    let db = e.target
    let dbTextContent = db.textContent
    
    setTextContent({
        text:dbTextContent
    })

    }
    const todoListHandler = () =>{
        if(state.popUp === true){
            setState({
                popUp:false
            })
        }
    }

        return(
            <div className="todolist"onClick={todoListHandler}>
                <form className="todolist-form">
                    <TodoItems handleDoubleClick={doubleClickHandler}
                    doubleClickBool={state.popUp} dbTextContent={textContent.text}/>
                </form>
            </div>

        )
    }


export default TodoList;