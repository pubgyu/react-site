import { useState } from "react";
import { connect } from 'react-redux';
import { actionCreater } from '../components/Store';
import TodoList from '../components/TodoList';

function Redux(state) {
    const [text,setText] = useState('');

    const onChange = event => {
        setText(event.target.value);
    }
    const onSubmit = event => {
        event.preventDefault();
        state.addToDo(Date.now(),text);
        setText('');
    }
    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange} />
                <button>add</button>
            </form>
            <ul>{state.todos.map(_this => <TodoList key={_this.id} id={_this.id} text={_this.text} />)}</ul>
        </>
    )
}
const mapStateToProps = (state = []) => {
    return {todos : state}
}
const mapDispacthToProps = (dispacth) => {
    return {
        addToDo : (id,text) => dispacth(actionCreater.addToDo(id,text))
    };
}
export default connect(mapStateToProps,mapDispacthToProps)(Redux);