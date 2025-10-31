export default function ResourcesCard() {
  const links = [
    { label: "View GitHub Repository", href: "#" },
    { label: "Access Discord Discussion", href: "#" },
    { label: "View API Documentation", href: "#" },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
      <h3 className="font-semibold mb-3">⚡ Quick Resources</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href} className="text-blue-600 hover:underline">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
