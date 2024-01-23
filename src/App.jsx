import CrossIcon from "./components/icons/CrossIcon";
import MoonIcon from "./components/icons/MoonIcon";
const App = () => {
  return (
    <div className=" min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
      <header className=" container mx-auto px-4">
        <div className="flex justify-between pt-8">
          <h1 className="text-3xl font-semibold uppercase tracking-[0.3em] text-white">
            TODO
          </h1>
          <button>
            <MoonIcon className="text-white"></MoonIcon>
          </button>
        </div>
        <form
          action=""
          className=" mt-8 flex items-center gap-4 overflow-hidden rounded-md bg-white px-4 py-4"
        >
          <span className=" inline-block h-5 w-5 rounded-full border-2"></span>
          <input
            className="w-full text-gray-400 outline-none"
            type="text"
            name=""
            id=""
            placeholder="Create a new todo"
          />
        </form>
      </header>
      <main className="container mx-auto mt-8 px-4">
        <div className=" rounded-md bg-white">
          <article className="flex gap-4 border-b border-b-gray-400 px-4 py-4">
            <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
            <p className=" grow text-gray-600">Complete Online React Course</p>
            <button className="flex-none">
              <CrossIcon></CrossIcon>
            </button>
          </article>
          <article className="flex gap-4 border-b border-b-gray-400 px-4 py-4">
            <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
            <p className=" grow text-gray-600">Complete Online React Course</p>
            <button className="flex-none">
              <CrossIcon></CrossIcon>
            </button>
          </article>
          <article className="flex gap-4 border-b border-b-gray-400 px-4 py-4">
            <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
            <p className=" grow text-gray-600">Complete Online React Course</p>
            <button className="flex-none">
              <CrossIcon></CrossIcon>
            </button>
          </article>
          <section className="flex justify-between px-4 py-4">
            <span className=" text-gray-400">5 Items left</span>
            <button className=" text-gray-400">Clear Completed</button>
          </section>
        </div>
      </main>
      <section className="container mx-auto mt-8 px-4">
        <div className="flex justify-center gap-4 rounded-md bg-white p-4">
          <button className=" hover:text-blue-600">All</button>
          <button className=" hover:text-blue-600">Active</button>
          <button className=" hover:text-blue-600">Completed</button>
        </div>
      </section>
      <section className=" mt-8 text-center">
        Drag and Drop to redorder list
      </section>
    </div>
  );
};

export default App;
