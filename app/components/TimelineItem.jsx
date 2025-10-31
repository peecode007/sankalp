export default function TimelineItem({ date, title, completed }) {
  return (
    <li>
      <div
        className={`absolute -left-2 w-3 h-3 ${
          completed ? 'bg-indigo-600' : 'bg-gray-300'
        } rounded-full`}
      ></div>
      <p className="text-sm text-gray-600">{date}</p>
      <p className="font-semibold text-gray-900">{title}</p>
    </li>
  );
}