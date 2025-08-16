import { useAuth0 } from "@auth0/auth0-react";

export default function Header() {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  return (
    <header className="flex items-center justify-around mt-5">
      <div>
        <a href="/">
          <img src="/wiremit-logo.svg" alt="Wiremit Logo" className="h-12" />
        </a>
      </div>
      <ul className="flex gap-x-10">
        <li>Track A Transfer</li>
        <li>Contact Us</li>
        <li>Help</li>
      </ul>
      <div className="bg-primary text-white px-4 py-2 rounded-md">
        {!isAuthenticated ? (
          <>
            <button
              onClick={() =>
                loginWithRedirect({
                  screen_hint: "signup", // tells Auth0 to open Sign Up tab
                  appState: { returnTo: "/dashboard" }, // where to go after login/signup
                })
              }
              className="hover:underline"
            >
              Sign Up
            </button>
            <span> / </span>
            <button
              onClick={() =>
                loginWithRedirect({
                  appState: { returnTo: "/dashboard" },
                })
              }
              className="hover:underline"
            >
              Log In
            </button>
          </>
        ) : (
          <>
            <span className="mr-2">Hello, {user?.name}</span>
            <button
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
              className="hover:underline"
            >
              Log Out
            </button>
          </>
        )}
      </div>
    </header>
  );
}
