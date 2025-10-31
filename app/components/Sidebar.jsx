'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  PuzzlePiece, 
  Users, 
  Brain, 
  BarChart2, 
  Settings,
  ChevronLeft,
  LogOut
} from 'lucide-react';

export default function Sidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navItems = [
    { 
      label: 'My Assignments', 
      href: '/dashboard',
      icon: BookOpen,
      description: 'View and manage your project assignments'
    },
    { 
      label: 'Browse Projects', 
      href: '/dashboard/projects',
      icon: PuzzlePiece,
      description: 'Explore available projects and modules'
    },
    { 
      label: 'My Contributions', 
      href: '/dashboard/contributions',
      icon: Users,
      description: 'Track your project contributions'
    },
    { 
      label: 'AI Workspace', 
      href: '/dashboard/ai-workspace',
      icon: Brain,
      description: 'Access AI development tools'
    },
    { 
      label: 'Reports & Analytics', 
      href: '/dashboard/reports',
      icon: BarChart2,
      description: 'View performance metrics and reports'
    },
    { 
      label: 'Settings', 
      href: '/dashboard/settings',
      icon: Settings,
      description: 'Manage your preferences'
    },
  ];

  return (
    <motion.aside
      initial={{ width: 280 }}
      animate={{ width: isCollapsed ? 80 : 280 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={`relative flex flex-col h-screen bg-linear-to-b from-indigo-900 via-slate-900 to-slate-900 text-white`}
    >
      {/* Collapse Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-8 w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center hover:bg-indigo-700 transition-colors z-50"
      >
        <motion.div
          animate={{ rotate: isCollapsed ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronLeft className="w-4 h-4 text-white" />
        </motion.div>
      </button>

      {/* Logo Section */}
      <div className={`relative p-6 border-b border-indigo-800/30 overflow-hidden ${isCollapsed ? 'items-center' : ''}`}>
        <motion.div
          animate={{ opacity: isCollapsed ? 0 : 1, y: isCollapsed ? -20 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex items-center gap-3"
        >
          {/* Logo with gradient ring */}
          <div className="relative">
            <div className="w-10 h-10 rounded-xl bg-linear-to-tr from-indigo-500 to-purple-500 flex items-center justify-center">
              <span className="text-xl">🇮🇳</span>
              {/* Animated gradient ring */}
              <div className="absolute -inset-0.5 bg-linear-to-r from-indigo-500 to-purple-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
            </div>
          </div>
          
          {!isCollapsed && (
            <div>
              <h1 className="text-xl font-bold bg-linear-to-r from-white to-indigo-200 bg-clip-text text-transparent">
                S.A.N.K.A.L.P
              </h1>
              <p className="text-xs text-indigo-300">Solutions for Atmanirbhar Nation</p>
            </div>
          )}
        </motion.div>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 py-6 px-3 space-y-2 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`group relative flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200
                ${isActive 
                  ? 'bg-linear-to-r from-indigo-600/80 to-indigo-800/50 text-white' 
                  : 'hover:bg-indigo-800/30 text-indigo-100/80'}
              `}
            >
              {/* Active Indicator */}
              {isActive && (
                <motion.div
                  layoutId="activeItem"
                  className="absolute left-0 w-1 h-full bg-indigo-400 rounded-full"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}

              <div className={`flex items-center gap-3 ${isCollapsed ? 'justify-center w-full' : ''}`}>
                <Icon className={`w-5 h-5 ${isActive ? 'text-indigo-200' : 'text-indigo-400'}`} />
                
                {!isCollapsed && (
                  <div>
                    <span className="font-medium">{item.label}</span>
                    {isActive && (
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xs text-indigo-300"
                      >
                        {item.description}
                      </motion.p>
                    )}
                  </div>
                )}
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Profile Section */}
      <div className={`p-4 border-t border-indigo-800/30 bg-linear-to-t from-slate-900 to-transparent`}>
        <div className={`flex ${isCollapsed ? 'justify-center' : 'items-center gap-3'}`}>
          <div className="relative">
            <img
              src="/avatar.png"
              alt="Profile"
              className="w-10 h-10 rounded-full border-2 border-indigo-500/30"
            />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-900"></div>
          </div>

          {!isCollapsed && (
            <div className="flex-1">
              <p className="font-medium text-sm text-white">Tushar Yadav</p>
              <p className="text-xs text-indigo-300">tushar.yadav@sankalp.ai</p>
            </div>
          )}
        </div>

        {!isCollapsed && (
          <button className="mt-4 w-full flex items-center gap-2 px-4 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors">
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        )}
      </div>
    </motion.aside>
  );
}
