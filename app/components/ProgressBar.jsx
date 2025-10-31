export default function ProgressBar({ progress }) {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div
        className="bg-indigo-600 h-2 rounded-full"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}