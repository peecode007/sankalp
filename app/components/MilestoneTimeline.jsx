'use client';
import TimelineItem from './TimelineItem';

export default function MilestoneTimeline() {
  const milestones = [
    {
      date: '06 Oct 2025',
      title: 'Module Assigned',
      completed: true,
    },
    {
      date: '10 Oct 2025',
      title: 'Initial Setup Completed',
      completed: true,
    },
    {
      date: '20 Oct 2025',
      title: 'MVP Submission Target',
      completed: false,
    },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        📅 Milestone Timeline
      </h3>
      <ol className="relative border-l border-gray-300 ml-4 space-y-6">
        {milestones.map((milestone) => (
          <TimelineItem
            key={milestone.date}
            date={milestone.date}
            title={milestone.title}
            completed={milestone.completed}
          />
        ))}
      </ol>
    </div>
  );
}