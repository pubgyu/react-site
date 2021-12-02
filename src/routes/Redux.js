import { useState } from "react";
import {createStore} from 'redux';

function Redux() {
    const [todo,setTodo] = useState([]);

    const ADD_TODO = 'ADD_TODO';
    const DELETE_TODO = 'DELETE_TODO';
    const addToDo = (item,id) => {
        return {
            type : ADD_TODO, 
            newItem : item,
            id : id
        }
    }
    const deleteToDo = id => {
        return {
            type : DELETE_TODO,
            id : id
        }
    }
    const DispatchAddTodo = (item,id) => store.dispatch(addToDo(item,id));
    const DispatchDeleteToDo = id => store.dispatch(deleteToDo(id));
    const initState = [];
    
    const reducer = (state = initState ,action) => {
        switch(action.type) {
            case ADD_TODO : 
            return [
                {
                    id: action.id, 
                    text: action.newItem
                },
                ...state
            ]

            case DELETE_TODO : 
                return state.filter(state.id !== action.id);
            
            default :
                return state;
        }
    }
    const store = createStore(reducer);

    store.subscribe(()=>console.log('data : ', store.getState()));
    
    const onSubmit = e => {
        e.preventDefault();
        if(document.querySelector('input').value !== '') {
            DispatchAddTodo(document.querySelector('input').value, Date.now());
        }

        document.querySelector('input').value = '';
    }
    return (
        <>
            <div>
                <h2>Reduce State : {}</h2>
            </div>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="todo"/>
                <button>add</button>
            </form>
            <ul>
                {/* {todo.map((i)=>{
                    return <li key={i.id}>{i.text}<button>del</button></li>
                })} */}
            </ul>
        </>
    )
}
export default Redux;