import Navbar from "./navbar";
import Card from "./card";
import ButtonGroup from "./buttongroup";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="max-w-6xl mx-auto p-6">
        {/* Card Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <Card
            title="React"
            description="React is a JavaScript library for building UI."
          />

          <Card
            title="Tailwind CSS"
            description="Tailwind helps build responsive designs quickly."
          />

          <Card
            title="Vite"
            description="Vite provides fast frontend tooling."
          />
        </div>

        {/* Button Group */}
        <ButtonGroup />
      </div>
    </div>
  );
}