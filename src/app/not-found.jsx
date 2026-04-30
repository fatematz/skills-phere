import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 text-center">
      
      <h1 className="text-7xl font-bold text-blue-600">404</h1>

      <h2 className="text-2xl md:text-3xl font-semibold mt-4 text-gray-800">
        Oops! Page Not Found
      </h2>

      <p className="mt-3 text-gray-500 max-w-md">
        The page you are looking for doesn’t exist or has been moved.
      </p>

      <Link href="/">
        <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
          Go Back Home
        </button>
      </Link>

    </div>
  );
};

export default NotFoundPage;