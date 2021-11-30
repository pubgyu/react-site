import { useState } from "react";
import {createStore} from 'redux';

function Redux() {
    const [todo,setTodo] = useState([]);
    // const [value,setValue] = useState('');

    const ADD_TODO = 'ADD_TODO';
    const DELETE_TODO = 'DELETE_TODO';
    const initState = [];
    
    const reducer = (state = initState ,action) => {
        switch(action.type) {
            case ADD_TODO : 
            return [...state, {id: action.id, arr: action.newItem}]

            case DELETE_TODO : 
                return state = [];
            
            default :
                return state;
        }
    }
    const store = createStore(reducer);

    store.subscribe(()=>console.log('data : ', store.getState()));
    store.subscribe(()=>paintsToDos());

    const paintsToDos = () => {
        // const todos = store.getState();
        // setTodo(todos);
    }
    
    const addTodoFunc = (item,id) => {
        store.dispatch({
            type : ADD_TODO, 
            newItem : item,
            id : id
        });
    }
    const onSubmit = e => {
        e.preventDefault();
        // store.dispatch({type : ADD_TODO, newItem : value});
        // setValue('');
        if(document.querySelector('input').value !== '') {
            addTodoFunc(document.querySelector('input').value, Date.now());
        }

        document.querySelector('input').value = '';
    }
    const onChange = e => {
        // setValue(e.target.value);
    }
    return (
        <>
            <div>
                <h2>Reduce State : {}</h2>
            </div>
            <form onSubmit={onSubmit}>
                <input type="text" onChange={onChange} placeholder="todo"/>
                <button>add</button>
            </form>
            <ul>
                {/* {todo.map((i)=>{
                    return <li key={i}>{i}</li>
                })} */}
            </ul>
        </>
    )
}
export default Redux;