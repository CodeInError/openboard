import { Link } from "react-router";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">Welcome to OpenBoard</h1>

      <Link
        to="/explore"
        className="px-6 py-3 bg-[#4aca35] text-white rounded-xl hover:bg-[#3fb92e] transition shadow-md"
      >
        Explore Content
      </Link>
    </div>
  );
}
