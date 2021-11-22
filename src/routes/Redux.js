import { useState } from "react";
import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

function Redux() {
    const ADD = 'ADD';
    const MINUS = 'MINUS';
    const [counter,setCounter] = useState(0);
    const modifyCounter = (state = counter, action) => {
        switch(action.type) {
            case ADD :
            return state + 1;
            
            case MINUS :
            return state - 1;

            default :
            return state;
        }
    };
    const counterStore = createStore(modifyCounter,composeWithDevTools());

    const AddClick = () => {
        counterStore.dispatch({type:ADD});
    }
    const MinusClick = () => {
        counterStore.dispatch({type:MINUS})
    };
    counterStore.subscribe(() => setCounter(counterStore.getState()) );
    
    return (
        <>
            <button onClick={AddClick}>ADD</button>
            <button onClick={MinusClick}>MINUS</button>
            <p>{counter}</p>
        </>
    )
}
export default Redux;