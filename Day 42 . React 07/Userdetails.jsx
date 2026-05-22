import {
  useParams,
  useNavigate,
} from "react-router-dom";

export default function UserDetails() {
  const { id } = useParams();

  const navigate = useNavigate();

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-6">
      <h1 className="text-3xl font-bold mb-4">
        User Details
      </h1>

      <p className="text-lg mb-6">
        User ID: {id}
      </p>

      <button
        onClick={() => navigate("/users")}
        className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg"
      >
        Back to Users
      </button>
    </div>
  );
}