import { Link } from "react-router-dom";

const users = [
  { id: 1, name: "Dinesh" },
  { id: 2, name: "Kumar" },
  { id: 3, name: "Rahul" },
];

export default function Users() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Users Page
      </h1>

      <div className="space-y-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white shadow p-4 rounded-lg"
          >
            <h2 className="text-xl font-semibold">
              {user.name}
            </h2>

            <Link
              to={`/users/${user.id}`}
              className="text-blue-500"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}