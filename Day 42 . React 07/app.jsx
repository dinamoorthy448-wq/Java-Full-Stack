import { Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Users from "./pages/Users";
import UserDetails from "./pages/UserDetails";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/users" element={<Users />} />

          <Route
            path="/users/:id"
            element={<UserDetails />}
          />
        </Routes>
      </div>
    </div>
  );
}