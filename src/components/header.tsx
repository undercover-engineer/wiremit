import { useAuth0 } from "@auth0/auth0-react";

export default function Header() {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <header className="px-6 py-4">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div>
          <a href="/">
            <img src="/wiremit-logo.svg" alt="Wiremit Logo" className="h-8" />
          </a>
        </div>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="/dashboard" className="text-gray-700 hover:text-gray-900">
            Send Money
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Track A Transfer
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Help
          </a>
        </div>

        {/* CTA Button */}
        {/* <a
          href=""
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
        >
          Log In
        </a> */}
        <div
          className={`px-6 py-2 rounded-lg text-white 
    ${isAuthenticated ? "bg-white text-black" : "bg-blue-600 hover:bg-blue-700"}`}
        >
          {!isAuthenticated ? (
            <>
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
            <div className="text-black flex item-center">
              <span className="mr-2">
                <img src="/user.svg" alt="user avatar" className="h-6" />
              </span>
              <button
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
                className="hover:underline"
              >
                LogOut
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
