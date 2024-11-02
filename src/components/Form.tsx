import React from "react";
import "./Form.css";
import { TodoItem } from "../models/Interface";

interface FormProps {
  setTodos: React.Dispatch<React.SetStateAction<TodoItem[]>>;
  
}

let nextId = 1;

function Form({ setTodos }: FormProps) {
  
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const input = form.elements.namedItem("todo") as HTMLInputElement;

    const value = input.value;

    // Ajoute la nouvelle tâche dans l'état interne
    setTodos(prevTodos => {
      const updatedTodos = [...prevTodos, { title: value, id: nextId++, is_completed: false }];

      // Sauvegarde les todos mis à jour dans localStorage
      localStorage.setItem("todos", JSON.stringify(updatedTodos));

      return updatedTodos;
    });

    form.reset();
  }


  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="todo">
        <input
          type="text"
          name="todo"
          id="todo"
          placeholder="Write your next task"
        />
      </label>
      <button type="submit">
        <span className="visually-hidden">Submit</span>
        <i className="fas fa-check-circle" />
      </button>
    </form>
  );
}

export default Form;
