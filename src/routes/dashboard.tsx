import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard")({
  component: DashBoard,
});

function DashBoard() {
  return <div>Hello DashBoard!</div>;
}
