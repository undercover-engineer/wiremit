// routes/dashboard.tsx
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard")({
  beforeLoad: ({ context }) => {
    if (!context.auth?.isAuthenticated) {
      throw redirect({ to: "/login" });
    }
  },
  component: Dashboard,
});

function Dashboard() {
  const { user } = Route.useRouteContext().auth;
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Welcome, {user?.name} 🎉</h1>
      <p>You are now logged into your dashboard.</p>
    </div>
  );
}
