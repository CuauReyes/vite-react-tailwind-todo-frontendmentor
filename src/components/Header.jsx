import MoonIcon from "./icons/MoonIcon";

const Header = () => {
  return (
    <header className=" container mx-auto px-4">
      <div className="flex justify-between pt-8">
        <h1 className="text-3xl font-semibold uppercase tracking-[0.3em] text-white">
          TODO
        </h1>
        <button>
          <MoonIcon className="text-white"></MoonIcon>
        </button>
      </div>
    </header>
  );
};

export default Header;
