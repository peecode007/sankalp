import Breadcrumb from "../components/Breadcrumb";
import DeadlineCard from "../components/DeadlineCard";
import ModuleDescription from "../components/ModuleDescription";
import MilestoneTimeline from "../components/MilestoneTimeline";
import SubmitMVP from "../components/SubmitMVP";
import MentorFeedback from "../components/MentorFeedback";
import ProjectTeam from "../components/ProjectTeam";
import QuickResources from "../components/QuickResources";
import PerformanceMetrics from "../components/PerformanceMetrics";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "My Assignments", href: "/dashboard/assignments" },
          { label: "Project Developer AI", href: "/dashboard/assignments/dev-ai", current: true },
        ]}
      />

      {/* Assignment Header */}
      <div className="bg-white p-6 rounded-xl shadow-lg mb-8 border-l-8 border-indigo-500">
        <h2 className="text-3xl font-bold text-gray-900">
          Module: Feature X Implementation
        </h2>
        <p className="text-lg text-indigo-600 mt-1">
          Project: Developer AI (NLP Query Handler)
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-4">
          <span className="px-3 py-1 text-sm font-medium bg-green-100 text-green-800 rounded-full">
            🟢 Status: In Progress
          </span>
          <span className="text-sm text-gray-600">Module ID: FR-CM-04-A</span>
          <span className="text-sm text-gray-600">Assigned on: 06 Oct 2025</span>
          <span className="text-sm text-gray-600">Reviewer: Tushar Yadav</span>
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column (Spans 2 columns on large screens) */}
        <div className="lg:col-span-2 space-y-8">
          <DeadlineCard 
            date="30 October 2025" 
            daysRemaining={24} 
            progress={60} 
          />
          <ModuleDescription />
          <MilestoneTimeline />
          <SubmitMVP />
          <MentorFeedback />
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <ProjectTeam />
          <QuickResources />
          <PerformanceMetrics />
        </div>
      </div>
    </div>
  );
}
