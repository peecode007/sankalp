export default function ProjectTeam() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        👥 Project Team & Mentorship
      </h3>

      <div className="mb-4 p-3 border border-gray-200 rounded-lg">
        <p className="text-sm font-medium text-gray-500">Project Master (PM)</p>
        <p className="text-lg font-bold text-gray-900">Jasspreet</p>
        <a href="#" className="text-sm text-indigo-500 hover:underline">
          Message on Discord (FR-INT-02)
        </a>
      </div>

      <div className="p-3 border border-gray-200 rounded-lg">
        <p className="text-sm font-medium text-gray-500">R&D Associate (Reviewer)</p>
        <p className="text-lg font-bold text-gray-900">Tushar Yadav</p>
        <a href="#" className="text-sm text-indigo-500 hover:underline">
          Contact for Technical Guidance
        </a>
      </div>
    </div>
  );
}