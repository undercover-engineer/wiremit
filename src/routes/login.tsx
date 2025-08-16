import { useAuth0 } from "@auth0/auth0-react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
  component: Login,
});

function Login() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="flex items-center justify-center min-h-screen">
      <button
        onClick={() =>
          loginWithRedirect({ appState: { returnTo: "/dashboard" } })
        }
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Log In
      </button>
    </div>
  );
}
