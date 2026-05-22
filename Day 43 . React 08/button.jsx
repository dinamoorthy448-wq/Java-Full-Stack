export default function Button({
  children,
  variant = "primary",
}) {
  // Common Button Classes
  const baseClasses =
    "px-5 py-2 rounded-lg font-semibold transition duration-300 focus:outline-none focus:ring-2";

  // Variant Classes
  const variants = {
    primary:
      "bg-blue-500 text-white hover:bg-blue-600 active:scale-95 focus:ring-blue-300",

    success:
      "bg-green-500 text-white hover:bg-green-600 active:scale-95 focus:ring-green-300",

    danger:
      "bg-red-500 text-white hover:bg-red-600 active:scale-95 focus:ring-red-300",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]}`}
    >
      {children}
    </button>
  );
}