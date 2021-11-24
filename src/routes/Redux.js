import { useState } from "react";
import {createStore} from 'redux';

function Redux() {
    const ADD_TODO = 'ADD_TODO';
    const DELETE_TODO = 'DELETE_TODO';

    const reducer = (state = [] ,action) => {
        switch(action.type) {
            case ADD_TODO : 
                return state = [value];

            case DELETE_TODO : 
                return state = [];
            
            default :
                return state;
        }
    }
    const store = createStore(reducer);

    const [todo,setTodo] = useState([]);
    const [value,setValue] = useState('');

    const createTodo = t => {
        setTodo([t, ...todo]);
    }
    const onSubmit = e => {
        e.preventDefault();
        // createTodo(value);
        store.dispatch({type : ADD_TODO, text : value});
        setValue('');
    }
    const onChange = e => {
        setValue(e.target.value);
    }
    return (
        <>
            <form onSubmit={onSubmit}>
                <input type="text" value={value} onChange={onChange} placeholder="todo"/>
                <button>add</button>
            </form>
            <ul>
                {todo.map((i,idx)=>{
                    return <li key={idx}>{i}</li>
                })}
            </ul>
        </>
    )
}
export default Redux;