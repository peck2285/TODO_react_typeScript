import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import TODOHero from "./components/TODOHero";
import Form from "./components/Form";
import TODOList from "./components/TODOList";
import { TodoItem } from "./models/Interface";

let nextId = 1;

function App() {
  // Initialiser les todos à partir de localStorage
  const [todos, setTodos] = useState<TodoItem[]>(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // Utiliser useEffect pour sauvegarder les todos dans localStorage chaque fois qu'ils changent
  useEffect(() => {localStorage.setItem("todos", JSON.stringify(todos))},
    [todos]
  );

  // Nombre total de tâches
  const totalTasks = todos.length;

  // Nombre de tâches complétées
  const completedTasks = todos.filter(todo => todo.is_completed).length;

  return (
    <div className="App">
      <Header />
      <TODOHero totalTasks={totalTasks} completedTasks={completedTasks} />
      <Form setTodos={setTodos} />
      <TODOList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
