export default function UserCard({ user }) {
  return (
    <div className="bg-gray-100 p-4 rounded-xl shadow">
      <h2 className="text-xl font-bold">
        {user.name}
      </h2>

      <p className="text-gray-700">
        {user.email}
      </p>

      <p className="text-gray-600">
        {user.company.name}
      </p>
    </div>
  );
}