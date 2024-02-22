import Navbar from "../../Component/ui/Navbar";

export default function main_page() {
  return (
    <>
      <Navbar />
      <title>My Profile</title>
      <main>
        <div className="max-w-md mx-auto mt-16 shadow-lg rounded-lg overflow-hidden bg-white">
          <div className="rounded-t-lg overflow-hidden">
            <img
              className="w-full"
              src="https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="cover page"
            />
          </div>
          <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
            <img
              className="h-32 w-full object-cover object-center"
              src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Profile picture"
            />
          </div>
          <div className="text-center mt-2">
            <h2 className="font-semibold">John Doe</h2>
            <p className="text-gray-500">Software Developer</p>
          </div>
          <ul className="py-4 mt-2 text-gray-700 flex items-center justify-around">
            <li className="flex flex-col items-start justify-around">
              <p>Email</p>
              <p>john.doe@example.com</p>
            </li>
            <li className="flex flex-col items-start justify-around">
              <p>Phone</p>
              <p>+1 (123) 456-7890</p>
            </li>
          </ul>
          <ul className="py-4 mt-2 text-gray-700 flex items-center justify-around">
            <li className="flex flex-col items-start justify-around">
              <p>Location</p>
              <p>New York, USA</p>
            </li>
            <li className="flex flex-col items-start justify-around">
              <p>Experience (in years)</p>
              <p>7</p>
            </li>
          </ul>
          <div className="p-4 border-t mt-2">
            <button className="w-full block rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">
              Save Changes
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
