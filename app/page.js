export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold">Welcome to DevConnect 🚀</h1>
      <p className="text-gray-600 mt-3">
        A community for developers to explore open-source contributions.
      </p>
      <a
        href="/dashboard"
        className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-all"
      >
        Go to Dashboard
      </a>
    </main>
  );
}
