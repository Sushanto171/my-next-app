import Link from "next/link";
import Authenticate from "./Authenticate";

const Navbar = () => {
  return (
    <>
      <nav className="bg-teal-800 text-white">
        <div className="container py-2 mx-auto flex items-center justify-between">
          {/* left */}
          <Link href={"/"} className="btn btn-ghost text-xl">
            LoGO
          </Link>
          {/* middle */}
          <div className="">
            <ul className="flex gap-3">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/profile"}>profile</Link>
              </li>
              <li>
                <Link href={"/about us"}>About us</Link>
              </li>
            </ul>
          </div>
          {/* right */}
          <>
            <Authenticate />
          </>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
