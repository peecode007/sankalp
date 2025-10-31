"use client";
import { motion } from "framer-motion";

export default function DeadlineTracker() {
  const progress = 60;
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 bg-linear-to-r from-red-50 to-pink-50 border border-red-100 rounded-2xl shadow-sm"
    >
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-red-600 text-lg">🚨 Critical Deadline</h3>
        <span className="text-3xl font-bold text-red-500">24</span>
      </div>
      <p className="text-gray-600 mt-2">
        <strong>30 October 2025</strong> — Time remaining: 24 days
      </p>
      <div className="mt-3 bg-gray-200 h-2 rounded-full overflow-hidden">
        <motion.div
          className="h-2 bg-red-500"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1 }}
        />
      </div>
      <p className="text-xs mt-1 text-gray-500">{progress}% progress completed</p>
    </motion.div>
  );
}
