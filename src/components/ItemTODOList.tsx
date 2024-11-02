import React, { useState } from "react";
import "./ItemTODOList.css";
import { TodoItem } from "../models/Interface";

interface ItemProps {
  item: TodoItem;
  setTodos: React.Dispatch<React.SetStateAction<TodoItem[]>>;
}

function Item({ item, setTodos }: ItemProps) {
  
  const [editing, setEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(item.title);


  const completeTodo = () => {
    setTodos(prevTodos =>
      prevTodos.map(todo => todo.id === item.id ? { ...todo, is_completed: !todo.is_completed } : todo)
    );
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setTodos(prevTodos =>
      prevTodos.map(
        todo => (todo.id === item.id ? { ...todo, title: editTitle } : todo)
      )
    );
    setEditing(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditTitle(e.target.value);
  };

  const handleDelete = () => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== item.id));
  };

  return (
    <li
      id={item?.id.toString()}
      className={`todo_item ${item.is_completed ? "completed" : ""}`}>
      {editing
        ? <form onSubmit={handleSave}>
            <input type="text" value={editTitle} onChange={handleInputChange} />
            <button type="submit">Save</button>
          </form>
        : <div className="todo_content">
            
            <button className="todo_items_left" onClick={completeTodo}>
              <i
                className={`far fa-circle ${item.is_completed
                  ? "completed-circle"
                  : ""}`}
              />
              <p className={item.is_completed ? "completed-text" : ""}>
                {item.title}
              </p>
            </button>

            <div className="todo_items_right">
              <button onClick={handleEdit} aria-label="Edit">
                <i className="fas fa-edit" />
              </button>
              <button onClick={handleDelete} aria-label="Delete">
                <i className="fas fa-trash" />
              </button>
            </div>
          </div>
          }
    </li>
  );
}

export default Item;
