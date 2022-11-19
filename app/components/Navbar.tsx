import { Link } from "@remix-run/react";

export default function Navbar() {
  return (
    <nav className="w-full">
      <ul className="w-full flex justify-around items-center py-4">
        <li>
          <Link to="/">
            <a href="/">Home</a>
          </Link>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </nav>
  );
}
