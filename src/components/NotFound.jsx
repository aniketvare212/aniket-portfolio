import { FiArrowLeft } from "react-icons/fi";

function NotFound() {
  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center px-6">

      <div className="text-center">

        <p className="text-8xl sm:text-9xl font-black bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          404
        </p>

        <h1 className="mt-6 text-3xl sm:text-4xl font-bold text-white">
          Page Not Found
        </h1>

        <p className="mt-4 max-w-md mx-auto text-slate-400">
          The page you're looking for doesn't exist or
          may have been moved.
        </p>

        <a
          href="/"
          className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition"
        >
          <FiArrowLeft />
          Back to Portfolio
        </a>

      </div>

    </main>
  );
}

export default NotFound;