import {
  useEffect,
  useState,
  useCallback,
  useMemo,
} from "react";

import UserCard from "./UserCard";
import SearchBox from "./SearchBox";

export default function App() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch Users
  const fetchUsers = useCallback(async () => {
    const controller = new AbortController();

    try {
      setLoading(true);

      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users`,
        {
          signal: controller.signal,
        }
      );

      const data = await response.json();

      // Filter users
      const filteredUsers = data.filter((user) =>
        user.name
          .toLowerCase()
          .includes(filter.toLowerCase())
      );

      setUsers(filteredUsers);
    } catch (error) {
      if (error.name !== "AbortError") {
        console.log(error);
      }
    } finally {
      setLoading(false);
    }

    // Cleanup
    return () => {
      controller.abort();
      console.log("Fetch Aborted");
    };
  }, [filter]);

  // useEffect with dependency
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  // Expensive Derived Value using useMemo
  const averageNameLength = useMemo(() => {
    console.log("Calculating average name length...");

    if (users.length === 0) return 0;

    const total = users.reduce(
      (sum, user) => sum + user.name.length,
      0
    );

    return (total / users.length).toFixed(2);
  }, [users]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-3xl font-bold text-center mb-6">
          React Hooks Example
        </h1>

        {/* Search */}
        <SearchBox
          filter={filter}
          setFilter={setFilter}
        />

        {/* Refresh Button */}
        <div className="flex justify-center mb-6">
          <button
            onClick={fetchUsers}
            className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg"
          >
            Refresh
          </button>
        </div>

        {/* Derived Value */}
        <div className="mb-6 bg-gray-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold">
            Average Name Length:
          </h2>

          <p className="text-lg">
            {averageNameLength}
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <p className="text-center text-lg">
            Loading users...
          </p>
        )}

        {/* User List */}
        <div className="grid md:grid-cols-2 gap-4">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
}