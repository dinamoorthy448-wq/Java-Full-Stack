export default function Card({
  title,
  description,
}) {
  // Reusable Tailwind Classes
  const cardClasses =
    "bg-white border border-gray-200 rounded-2xl shadow-md p-6 hover:shadow-xl transition";

  const titleClasses =
    "text-2xl font-bold mb-3 text-gray-800";

  const descriptionClasses =
    "text-gray-600 leading-relaxed";

  return (
    <div className={cardClasses}>
      <h2 className={titleClasses}>
        {title}
      </h2>

      <p className={descriptionClasses}>
        {description}
      </p>
    </div>
  );
}