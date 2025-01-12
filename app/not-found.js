import Link from "next/link";

export default function NotFound() {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl w-full space-y-8 text-center">
          <div className="mb-12">
            <h2 className="mt-8 text-9xl font-extrabold text-gray-900 dark:text-gray-100">404</h2>
            <p className="mt-20 text-4xl font-bold text-gray-900 dark:text-gray-100">Page not found</p>
            <p className="mt-4 text-2xl text-gray-600 dark:text-gray-400">
              Sorry, we couldn't find the page you're looking for.<br />
              <i className="text-sm">But don't worry, you can find plenty of things on our homepage.</i>
            </p>
          </div>
          <div className="mt-8">
            <Link
              href="/"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            >
              <svg
                className="mr-2 -ml-1 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12h18m-9-9l9 9-9 9"
                />
              </svg>
              Go back home
            </Link>
          </div>
        </div>
        <div className="mt-16 w-full max-w-2xl">
          <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-2 bg-gray-100 dark:bg-gray-800 text-sm text-gray-500 dark:text-gray-400">
                If you think this is a mistake, please <Link href="/contact" className="link link-accent">contact</Link> support.
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  