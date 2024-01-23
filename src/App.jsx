import Header from "./components/Header";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import TodoComputed from "./components/TodoComputed";
import TodoFilter from "./components/TodoFilter";
import { useState } from "react";

const initialStateTodos = [
  {
    id: 1,
    title: "Go to Gym",
    completed: false,
  },
  {
    id: 2,
    title: "Complete C# Course",
    completed: true,
  },
  {
    id: 3,
    title: "Complete React Course",
    completed: false,
  },
];

const App = () => {
  const [todos, setTodos] = useState(initialStateTodos);
  return (
    <div className=" min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
      <Header></Header>
      <main className="container mx-auto mt-8 px-4">
        {/* TodoCreate */}
        <TodoCreate></TodoCreate>
        {/* TodoList (TodoItem) TodoUpdate TodoDelete */}
        <TodoList todos={todos}></TodoList>
        {/* TodoComputed */}
        <TodoComputed></TodoComputed>
        {/* TodoFilter */}
        <TodoFilter></TodoFilter>
      </main>

      <footer className="mt-8 text-center">
        Drag and Drop to redorder list
      </footer>
    </div>
  );
};

export default App;
