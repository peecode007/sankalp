'use client';

export default function ModuleDescription() {
  const techStack = [
    { name: '.NET 8', bgColor: 'bg-blue-100', textColor: 'text-blue-800' },
    { name: 'C#', bgColor: 'bg-blue-100', textColor: 'text-blue-800' },
    { name: 'MongoDB', bgColor: 'bg-gray-200', textColor: 'text-gray-700' },
    { name: 'Azure Function', bgColor: 'bg-yellow-100', textColor: 'text-yellow-800' },
    { name: 'Docker', bgColor: 'bg-green-100', textColor: 'text-green-800' },
  ];

  const deliverables = [
    'Functional API endpoint: /api/nlp/translate',
    'Documentation (Swagger + Markdown README)',
    'Unit tests with ≥90% coverage',
    'Performance logs (avg. latency < 300ms)',
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        📜 Module Description & Requirements
      </h3>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        Your task is to design and implement a <strong>secure REST API endpoint</strong> that performs
        <em>natural language query translation</em> into structured command syntax for the Developer AI module.
        Ensure compliance with internal security guidelines (<span className="font-semibold">NFR-SEC-02</span>)
        and maintain a maximum average response time under <strong>300ms (NFR-PER-02)</strong>.
      </p>

      <h4 className="font-semibold text-gray-800 mb-2">Tech Stack & Integrations:</h4>
      <div className="flex flex-wrap gap-2 mb-4">
        {techStack.map((tech) => (
          <span
            key={tech.name}
            className={`px-3 py-1 text-sm font-medium ${tech.bgColor} ${tech.textColor} rounded-full`}
          >
            {tech.name}
          </span>
        ))}
      </div>

      <h4 className="font-semibold text-gray-800 mb-2">Expected Deliverables:</h4>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        {deliverables.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <p className="text-sm text-gray-500 mt-4">
        *Refer to GitHub repo for the base setup:
        <a href="#" className="text-indigo-500 hover:underline ml-1">
          /DeveloperAI/module-featureX
        </a>
      </p>
    </div>
  );
}