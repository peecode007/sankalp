export default function ModuleCard({ title, project, status, assigned, reviewer }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-indigo-600">{project}</p>
      <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">
        {status}
      </span>
      <p className="text-sm text-gray-600 mt-2">
        Assigned on: {assigned} | Reviewer: {reviewer}
      </p>
    </div>
  );
}
