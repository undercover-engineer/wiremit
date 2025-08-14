import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-2">
      <h1 className="mt-20 flex justify-center text-4xl font-extrabold">
        Custom React Template
      </h1>
      <h3>Welcome Home!</h3>
    </div>
  );
}
