import CrossIcon from "./icons/CrossIcon";
import CheckIcon from "./icons/CheckIcon";

const TodoItem = ({ todo, updateTodo, removeTodo }) => {
  const { id, title, completed } = todo;
  return (
    <article className=" flex gap-4 border-b border-b-gray-400 px-4 py-4  ">
      {/* <button className="inline-block h-5 w-5 flex-none rounded-full border-2">
        <CheckIcon></CheckIcon>
      </button> */}
      <button
        className={`${completed ? "flex h-5 w-5 flex-none items-center justify-center rounded-full border-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" : "inline-block h-5 w-5 flex-none rounded-full border-2"}`}
        onClick={() => updateTodo(id)}
      >
        {completed && <CheckIcon></CheckIcon>}
      </button>
      <p
        className={`${completed ? " grow text-gray-600 line-through" : " grow text-gray-400 dark:text-gray-500"}`}
      >
        {title}
      </p>
      <button className="flex-none" onClick={() => removeTodo(id)}>
        <CrossIcon></CrossIcon>
      </button>
    </article>
  );
};

export default TodoItem;
