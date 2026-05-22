export default function Navbar() {
  return (
    <nav className="bg-blue-500 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold">
          Tailwind App
        </h1>

        {/* Nav Links */}
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-gray-200">
            Home
          </a>

          <a href="#" className="hover:text-gray-200">
            About
          </a>

          <a href="#" className="hover:text-gray-200">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}