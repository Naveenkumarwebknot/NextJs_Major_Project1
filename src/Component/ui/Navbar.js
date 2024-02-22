import Link from "next/link";


export default function Navbar() {
  return (
    <nav className={`${styles.navigationbar} bg-gray-800 text-white body-font`}>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0 hover:cursor-pointer">
          <span className="ml-3 text-xl font-bold">TechJourney</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/employee" className="mr-5 hover:text-gray-300">Employees</Link>
          <Link href="/projects" className="mr-5 hover:text-gray-300">Projects</Link>
          <Link href="/" className="mr-5 hover:text-gray-300">Dashboard</Link>
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height={14}
              width="12.25"
              viewBox="0 0 448 512"
            >
              
              <path
                fill="#FFFFFF"
                d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
              />
            </svg>
            <Link href="/profile" className="mr-5 hover:text-gray-300">
              My Profile
            </Link>
          </div>
        </nav>
        <button className="text-black inline-flex font-semibold items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Logout
        </button>
      </div>
    </nav>
  );
}
