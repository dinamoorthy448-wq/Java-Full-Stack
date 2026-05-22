import { useState } from "react";
import TextInput from "./TextInput";

export default function App() {
  const initialForm = {
    name: "",
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialForm);
  const [submittedData, setSubmittedData] = useState(null);
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setSubmittedData(formData);
    }
  };

  const handleClear = () => {
    setFormData(initialForm);
    setErrors({});
    setSubmittedData(null);
  };

  const isFormValid =
    formData.name &&
    formData.email &&
    validateEmail(formData.email) &&
    formData.password;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">
          Signup Form
        </h1>

        <form onSubmit={handleSubmit}>
          <TextInput
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
          />

          <TextInput
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />

          <TextInput
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
          />

          <div className="flex gap-3 mt-5">
            <button
              type="submit"
              disabled={!isFormValid}
              className={`w-full py-2 rounded-lg text-white font-semibold ${
                isFormValid
                  ? "bg-blue-500 hover:bg-blue-600"
                  : "bg-gray-400"
              }`}
            >
              Submit
            </button>

            <button
              type="button"
              onClick={handleClear}
              className="w-full py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white font-semibold"
            >
              Clear
            </button>
          </div>
        </form>

        {submittedData && (
          <div className="mt-6 p-4 bg-gray-100 rounded-lg">
            <h2 className="text-xl font-bold mb-3">
              Preview Panel
            </h2>

            <p>
              <strong>Name:</strong> {submittedData.name}
            </p>

            <p>
              <strong>Email:</strong> {submittedData.email}
            </p>

            <p>
              <strong>Password:</strong> {submittedData.password}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}