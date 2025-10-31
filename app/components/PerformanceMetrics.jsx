export default function PerformanceMetrics() {
  const metrics = [
    { label: 'Code Quality Score', value: '88%' },
    { label: 'Documentation Completeness', value: '92%' },
    { label: 'Mentor Review Status', value: 'Pending Review' },
    { label: 'Expected Completion', value: '28 Oct 2025' },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        📊 Performance Metrics
      </h3>
      <div className="space-y-3 text-sm">
        {metrics.map((metric) => (
          <p key={metric.label}>
            <span className="font-semibold">{metric.label}:</span> {metric.value}
          </p>
        ))}
      </div>
    </div>
  );
}