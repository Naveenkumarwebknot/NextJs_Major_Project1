import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gray-100">
      <head>
        <title>Employee Management - Login</title>
      </head>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-4">
        <section className="w-full md:w-2/3 bg-white rounded-lg shadow-md dark:bg-teal-500 dark:border-gray-700">
          <div className="flex flex-col items-center justify-center px-6 py-8 md:px-8 lg:px-12">
            <h1 className="text-2xl font-bold text-black dark:text-white mb-6">
              Login
            </h1>
            <form className="space-y-6 w-full max-w-sm">
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-white border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3"
                  placeholder="Email"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="bg-white border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary-600 text-white rounded-lg font-medium text-sm py-3 transition duration-300 ease-in-out hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300"
              >
                Login
              </button>
              <p className="text-sm font-light text-gray-600">
                Don't have an account?{" "}
                <Link href="/Signin">
                  <a className="text-primary-600 hover:underline">
                    Create here
                  </a>
                </Link>
              </p>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
