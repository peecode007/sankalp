export default function TeamCard({ pm, reviewer }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
      <h3 className="font-semibold mb-3">👥 Project Team & Mentorship</h3>
      <div className="text-sm space-y-2">
        <p>
          <strong>Project Master (PM):</strong> {pm}  
          <a href="#" className="text-blue-600 ml-2">Message on Discord</a>
        </p>
        <p>
          <strong>Reviewer:</strong> {reviewer}  
          <a href="#" className="text-blue-600 ml-2">Technical Guidance</a>
        </p>
      </div>
    </div>
  );
}
