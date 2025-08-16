export default function Header() {
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
        <a href="#">Sign Up</a>
        <span> / </span>
        <a href="#">Log In</a>
      </div>
    </header>
  );
}
