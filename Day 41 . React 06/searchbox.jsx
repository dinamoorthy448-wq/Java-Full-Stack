export default function SearchBox({
  filter,
  setFilter,
}) {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search user..."
        value={filter}
        onChange={(e) =>
          setFilter(e.target.value)
        }
        className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
}