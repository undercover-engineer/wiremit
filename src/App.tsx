// App.tsx
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { useAuth0 } from "@auth0/auth0-react";

const router = createRouter({ routeTree });

// Register router type
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  const { isLoading, isAuthenticated, loginWithRedirect, logout, user } =
    useAuth0();

  if (isLoading) {
    return <div className="p-10">Loading authentication...</div>;
  }

  return (
    <RouterProvider
      router={router}
      context={{
        auth: { isAuthenticated, loginWithRedirect, logout, user },
      }}
    />
  );
}
