const TodoFilter = ({ changeFilter, filter }) => {
  return (
    <section className="container mx-auto mt-8">
      <div className="flex justify-center gap-4 rounded-md bg-white p-4 transition-all duration-1000 dark:bg-gray-800">
        <button
          className={`${filter === "all" ? "hover:text-grey-400 text-blue-600" : "text-gray-400 hover:text-blue-400"}`}
          onClick={() => changeFilter("all")}
        >
          All
        </button>
        <button
          className={`${filter === "active" ? "hover:text-grey-400 text-blue-600" : "text-gray-400 hover:text-blue-400"}`}
          onClick={() => changeFilter("active")}
        >
          Active
        </button>
        <button
          className={`${filter === "completed" ? "hover:text-grey-400 text-blue-600" : "text-gray-400 hover:text-blue-400"}`}
          onClick={() => changeFilter("completed")}
        >
          Completed
        </button>
      </div>
    </section>
  );
};

export default TodoFilter;
