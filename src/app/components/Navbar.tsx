import Link from "next/link";
function Navbar() {
  return (
    <nav className="bg-blue-800 text-white p-4">
      <h1 className=" text-xl font-bold ">Female Class</h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
