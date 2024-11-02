import React from 'react'
import "./TODOList.css";
import { TodoItem } from '../models/Interface';
import Item from './ItemTODOList';


interface TODOListProps {
  todos: TodoItem[];
  setTodos: React.Dispatch<React.SetStateAction<TodoItem[]>>;
}




function TODOList({ todos , setTodos }: TODOListProps) {
  return (
    <ol className="todo_list">
      {todos && todos.length > 0 ? (todos?.map((item, index) => <Item key={index} item={item}   setTodos={setTodos} />)) : (
        <p>Seems lonely in here, what are you up to?</p>
      )}
    </ol>
  );
}


export default TODOList;












