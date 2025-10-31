"use client";
import { motion } from "framer-motion";

export default function ModuleOverviewCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 rounded-2xl shadow-md bg-white/70 backdrop-blur-lg border border-indigo-100"
    >
      <h2 className="text-2xl font-semibold text-indigo-700">
        Module: Feature X Implementation
      </h2>
      <p className="text-sm text-gray-500 mt-1">
        Project: Developer AI (NLP Query Handler)
      </p>
      <div className="mt-3">
        <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-600 font-medium">
          Status: In Progress
        </span>
      </div>
    </motion.div>
  );
}
