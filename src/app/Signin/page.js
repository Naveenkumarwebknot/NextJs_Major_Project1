import Link from "next/link";

export default function Signin() {
  return (
    <>
      <head>
        <title>Register for Employee Management</title>
      </head>
      <main>
        <section className="bg-gray-200">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-3/4 bg-white rounded-lg shadow-md md:max-w-md xl:p-0">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-2xl font-bold leading-tight tracking-tight text-black">
                  Sign Up
                </h1>
                <form className="space-y-6">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                      className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="role"
                      className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3"
                      placeholder="Role"
                      required
                    />
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="terms"
                        aria-describedby="terms"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 "
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="terms"
                        className="font-light text-gray-600"
                      >
                        I accept the{" "}
                        <Link
                          href="#"
                          className="font-medium text-primary-600 hover:underline"
                        >
                          Terms and Conditions
                        </Link>
                      </label>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary-600 text-white rounded-lg font-medium text-sm py-3 transition duration-300 ease-in-out hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300"
                  >
                    Create Account
                  </button>
                  <p className="text-sm font-light text-gray-600">
                    Already have an account?{" "}
                    <Link
                      href="/"
                      className="font-medium text-primary-600 hover:underline"
                    >
                      Log in here
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
