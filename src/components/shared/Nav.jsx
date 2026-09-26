import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/logo.png";

function Nav() {
  const links = (
    <>
      <li className="rounded-3xl bg-[#1a2312] px-1">
        <Link
          className=" font-bold text-lime-500 text-[12px] hover:bg-transparent hover:shadow-none "
          href="#"
        >
          Workouts
        </Link>
      </li>
      <li>
        <Link
          className="font-bold text-[12px] hover:bg-transparent hover:shadow-none"
          href="./MyPlan"
        >
          My Plan
        </Link>
      </li>
    </>
  );
  return (
    <div className=" bg-black sticky">
      <section className="container mx-auto  ">
        <div className="navbar shadow-sm">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className=" lg:hidden">
                <svg
                  aria-label="Menu"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow "
              >
                {links}
              </ul>
            </div>
            <Link className=" text-xl flex flex-row gap-3" href="./">
              <Image
                src={logo}
                alt="logo Photo"
                className="h-8 w-auto"
                loading="eager"
              />
              <span className="font-bold text-white text-2xl hidden lg:block">
                FITLOG
              </span>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex ">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          <div className="navbar-end flex flex-row gap-4 text-[14px]">
            <Link href="./MyPlan" className="flex flex-row gap-2">
              <span>Plan</span>
              <span className="text-black bg-[#c2f800] flex h-6 w-6 items-center justify-center rounded-full">
                0
              </span>
            </Link>
            <Link href="./MyPlan" className="flex flex-row gap-2">
              <span>Saved</span>
              <span className="text-white border border-amber-50 flex h-6 w-6 items-center justify-center rounded-full">
                0
              </span>
            </Link>
          </div>
        </div>
      </section>
      <hr className="opacity-20" />
    </div>
  );
}

export default Nav;
