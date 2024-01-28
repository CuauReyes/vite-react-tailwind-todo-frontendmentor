import Header from "./components/Header";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import TodoComputed from "./components/TodoComputed";
import TodoFilter from "./components/TodoFilter";
import { useEffect, useState } from "react";

const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || []; /* [
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
]; */

const App = () => {
  const [todos, setTodos] = useState(initialStateTodos);

  useEffect(() => {
    console.log("todos");
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title.trim(),
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const [filter, setFilter] = useState("all");

  const changeFilter = (filter) => setFilter(filter);

  const filteredTodos = () => {
    switch (filter) {
      case "all":
        return todos;
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  };

  return (
    <div className=" min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat transition-all duration-1000 dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] md:bg-[url('./assets/images/bg-desktop-light.jpg')] md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')]">
      <Header></Header>
      <main className="container mx-auto mt-8 px-4 md:max-w-xl">
        {/* TodoCreate */}
        <TodoCreate createTodo={createTodo}></TodoCreate>
        {/* TodoList (TodoItem) TodoUpdate TodoDelete */}
        <TodoList
          todos={filteredTodos()}
          updateTodo={updateTodo}
          removeTodo={removeTodo}
        ></TodoList>
        {/* TodoComputed */}
        <TodoComputed
          computedItemsLeft={computedItemsLeft}
          clearCompleted={clearCompleted}
        ></TodoComputed>
        {/* TodoFilter */}
        <TodoFilter changeFilter={changeFilter} filter={filter}></TodoFilter>
      </main>

      <footer className="mt-8 text-center dark:text-gray-400">
        Drag and Drop to redorder list
      </footer>
    </div>
  );
};

export default App;
