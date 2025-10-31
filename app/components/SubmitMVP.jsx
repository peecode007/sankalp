'use client';

export default function SubmitMVP() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add submission logic here
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        🚀 Submit Your MVP (FR-INT-01)
      </h3>
      <p className="text-gray-600 mb-4">
        Paste your GitHub Pull Request (PR) URL below for review. Ensure your PR follows the naming
        convention:
        <code className="bg-gray-100 px-2 py-1 rounded text-sm ml-2">
          feature/FR-CM-04A
        </code>
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="url"
          placeholder="e.g., https://github.com/SANKALP/DeveloperAI/pull/123"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
          required
        />
        <button
          type="submit"
          className="mt-4 bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 transition duration-150 font-semibold"
        >
          Submit MVP for Review
        </button>
      </form>
    </div>
  );
}