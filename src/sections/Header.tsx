export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed top-3 w-full">
      <nav className="flex items-center gap-1 p-0.5 border-white/15 rounded-full border bg-white/10 backdrop-blur">
        <a className="nav-item" href="#">
          Home
        </a>
        <a className="nav-item" href="#">
          Projects
        </a>
        <a className="nav-item" href="#">
          About
        </a>
        <a className="nav-item bg-white text-gray-900" href="#">
          Contact
        </a>
      </nav>
    </div>
  );
};
