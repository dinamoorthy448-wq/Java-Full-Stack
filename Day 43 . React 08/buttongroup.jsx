import Button from "./Button";

export default function ButtonGroup() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-5">
        Button Group
      </h2>

      <div className="flex flex-wrap gap-4">
        <Button variant="primary">
          Primary
        </Button>

        <Button variant="success">
          Success
        </Button>

        <Button variant="danger">
          Danger
        </Button>
      </div>
    </div>
  );
}