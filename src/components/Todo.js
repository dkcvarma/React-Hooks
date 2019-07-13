import React, { useState } from 'react';
import axios from 'axios';

const todo = props => {
    const [todoName, setTodoName] = useState('');
    const [todoList, SetTodoList] = useState([]);
    // const [todoState, setTodoState] = useState({ userInput: '', todoList: [] });

    const inputChangeHandler = (event) => {
        // setTodoState({
        //     userInput: event.target.value,
        //     todoList: todoState.todoList
        // });
        setTodoName(event.target.value);
    }

    const todoAddHandler = () => {
        // setTodoState({
        //     userInput: todoState.userInput,
        //     todoList: todoState.todoList.concat(todoState.userInput)
        // });
        SetTodoList(todoList.concat(todoName));
        axios
            .post('https://test-d7307.firebaseio.com/todos.json', {name: todoName})
            .then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err);
            });
    };

    return (
        <React.Fragment>
        <input 
                type="text" 
                placeholder="Todo" 
                onChange={inputChangeHandler} 
                value={todoName} 
            />
            <button type="button" onClick={todoAddHandler}>Add</button>
            <ul>
                {todoList.map(todo => (
                    <li key={todo}>{todo}</li>
                ))}
            </ul>
        </React.Fragment>
    );
}

export default todo;