// routes/dashboard.tsx
import { createFileRoute, redirect } from "@tanstack/react-router";
import Header from "../components/header";
import DashboardLayout from "../components/dashboardLayout";

export const Route = createFileRoute("/dashboard")({
  beforeLoad: ({ context }) => {
    if (!context.auth?.isAuthenticated) {
      throw redirect({ to: "/login" });
    }
  },
  component: Dashboard,
});

function Dashboard() {
  return (
    <div className="bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <Header />
      <DashboardLayout />
    </div>
  );
}
