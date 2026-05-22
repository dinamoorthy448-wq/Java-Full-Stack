import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-500 text-white p-4 shadow">
      <div className="flex gap-6 justify-center text-lg font-semibold">
        <Link to="/">Home</Link>

        <Link to="/about">About</Link>

        <Link to="/users">Users</Link>
      </div>
    </nav>
  );
}