export default function QuickResources() {
  const resources = [
    { label: 'View GitHub Repository', href: '#' },
    { label: 'Access Discord Discussion', href: '#' },
    { label: 'Download API Design Docs', href: '#' },
    { label: 'Core Council Quality Standards', href: '#' },
    { label: 'Security Compliance Reference', href: '#' },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        🔗 Quick Resources
      </h3>
      <ul className="space-y-2 text-indigo-600 text-sm">
        {resources.map((resource) => (
          <li key={resource.label}>
            <a href={resource.href} className="hover:underline">
              {resource.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}