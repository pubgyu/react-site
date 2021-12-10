import {createStore} from 'redux';

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

const addToDo = (id,text) => {
    return {
        type : ADD_TODO,
        id,
        text
    }
}

const deleteToDo = id => {
    return {
        type : DELETE_TODO,
        id : parseInt(id)
    }
}

const reducer = (state = [] , action) => {
    switch (action.type) {
        case ADD_TODO:
            return [{id : action.id, text : action.text},...state];
        
        case DELETE_TODO:
            return state.filter(todo => todo.id !== action.id);

        default:
            break;
    }
}
const store = createStore(reducer);

export const actionCreater = {
    addToDo,
    deleteToDo
}

export default store;