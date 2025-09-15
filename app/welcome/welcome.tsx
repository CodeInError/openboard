import logoFinal1 from "./logoFinal1.png";
import openboard from "./openboard.png";
import { Link } from "react-router";

export function Welcome() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header / Navbar */}
      <header className="bg-white dark:bg-gray-800 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-4">
            {/* Light Mode Logo */}
            <img
              src={openboard}
              alt="Logo"
              className="w-20 sm:w-24 md:w-[166px] lg:w-[166px] xl:w-[166px] 2xl:w-[166px] dark:hidden object-contain"
            />

            {/* Dark Mode Logo */}
            <img
              src={openboard}
              alt="Logo Dark"
              className="w-20 sm:w-24 md:w-[166px] lg:w-[166px] xl:w-[166px] 2xl:w-[166px] hidden dark:block object-contain"
            />
          </div>

          {/* Navbar Buttons */}
          <nav className="flex gap-4 items-center">
            <a
              href="/explore"
              className="px-4 py-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-green-100 dark:hover:bg-gray-700"
            >
              Explore
            </a>
            {/* <a
              href="#upload"
              className="px-4 py-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-green-100 dark:hover:bg-gray-700"
            >
              Upload
            </a> */}

            {/* <Link
              to="/login"
              className="px-4 py-2 rounded-lg border border-[#4aca35] text-[#4aca35] hover:bg-[#4aca35] hover:text-white transition"
            >
              Login
            </Link> */}

            <Link
              to="/signup"
              className="px-4 py-2 rounded-lg bg-[#4aca35] text-white hover:bg-[#3fb92e] transition"
            >
              Get Started
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          Welcome to OpenBoard ✍️
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mb-8">
          Share your blogs, research, coding tutorials, or upload PDFs so the
          community can learn, read, and grow together. OpenBoardis your space
          to create and consume knowledge.
        </p>
        <div className="flex gap-4">
          <Link
            to="/signup"
            className="px-6 py-3 bg-[#4aca35] text-white rounded-xl hover:bg-[#3fb92e] transition shadow-md"
          >
            Get Started
          </Link>
          <Link
            to="/explore"
            className="px-6 py-3 border border-gray-400 text-gray-700 dark:text-gray-200 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Explore Content
          </Link>
        </div>
      </main>

      {/* Features Section */}
      <section className="bg-white dark:bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              ✍️ Publish Blogs
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Write and share articles about coding, research, or personal
              experiences.
            </p>
          </div>
          <div className="p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              📚 Upload PDFs
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Share research papers, eBooks, and readable PDFs with the
              community.
            </p>
          </div>
          <div className="p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              🌍 Explore Content
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Discover blogs, guides, and resources uploaded by other members.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} OpenBoard. Built for learners & creators.
        </div>
      </footer>
    </div>
  );
}
