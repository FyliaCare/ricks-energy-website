'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import {
  HomeIcon,
  NewspaperIcon,
  BriefcaseIcon,
  EnvelopeIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  ArrowLeftOnRectangleIcon,
  Bars3Icon,
  XMarkIcon,
  UserCircleIcon,
  BanknotesIcon,
} from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Dashboard', href: '/admin/dashboard', icon: HomeIcon },
  { name: 'Finance', href: '/admin/finance', icon: BanknotesIcon },
  { name: 'Projects', href: '/admin/projects', icon: BriefcaseIcon },
  { name: 'News Management', href: '/admin/news', icon: NewspaperIcon },
  { name: 'Messages', href: '/admin/messages', icon: EnvelopeIcon },
  { name: 'Analytics', href: '/admin/analytics', icon: ChartBarIcon },
  { name: 'Settings', href: '/admin/settings', icon: Cog6ToothIcon },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Mobile sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setSidebarOpen(false)}
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 w-80 bg-gradient-to-b from-white via-slate-50 to-slate-100 z-50 lg:hidden shadow-2xl"
            >
              {/* Logo with close button */}
              <div className="px-6 py-6 relative border-b border-slate-200">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50"></div>
                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg overflow-hidden">
                      <Image 
                        src="/logo.jpg" 
                        alt="Ricks Energy Logo" 
                        width={48} 
                        height={48}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-slate-900">Ricks Energy</h2>
                      <p className="text-sm text-blue-600 font-medium">Admin Dashboard</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSidebarOpen(false)}
                    className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 transition-all"
                  >
                    <XMarkIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Navigation */}
              <nav className="px-4 py-6 space-y-1.5">
                {navigation.map((item) => {
                  const isActive = pathname === item.href || pathname?.startsWith(item.href + '/');
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setSidebarOpen(false)}
                      className={`group relative flex items-center gap-4 px-5 py-3.5 rounded-xl transition-all ${
                        isActive
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-600/20'
                          : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                      }`}
                    >
                      {/* Icon container */}
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                        isActive 
                          ? 'bg-white/20' 
                          : 'bg-slate-200/50 group-hover:bg-slate-300/50'
                      }`}>
                        <item.icon className="h-5 w-5" />
                      </div>
                      
                      {/* Text */}
                      <span className="font-semibold text-[15px]">{item.name}</span>
                    </Link>
                  );
                })}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-80 lg:flex-col z-40">
        <div className="flex flex-col flex-1 bg-gradient-to-b from-white via-slate-50 to-slate-100 shadow-2xl border-r border-slate-200">
          {/* Logo with gradient background */}
          <div className="px-6 py-8 relative border-b border-slate-200">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50"></div>
            <div className="relative flex items-center gap-4">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform overflow-hidden">
                <Image 
                  src="/logo.jpg" 
                  alt="Ricks Energy Logo" 
                  width={56} 
                  height={56}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900">Ricks Energy</h2>
                <p className="text-sm text-blue-600 font-medium">Admin Dashboard</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto">
            {navigation.map((item, index) => {
              const isActive = pathname === item.href || pathname?.startsWith(item.href + '/');
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className={`group relative flex items-center gap-4 px-5 py-3.5 rounded-xl transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-600/20'
                        : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    
                    {/* Icon container */}
                    <div className={`relative z-10 w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                      isActive 
                        ? 'bg-white/20' 
                        : 'bg-slate-200/50 group-hover:bg-slate-300/50'
                    }`}>
                      <item.icon className="h-5 w-5" />
                    </div>
                    
                    {/* Text */}
                    <span className="relative z-10 font-semibold text-[15px]">{item.name}</span>
                    
                    {/* Hover effect */}
                    {!isActive && (
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/0 to-purple-50/0 group-hover:from-blue-50 group-hover:to-purple-50 rounded-xl transition-all duration-300"></div>
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          {/* User Profile with gradient card */}
          <div className="p-4 relative border-t border-slate-200">
            {/* Decorative gradient line */}
            <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
            
            <div className="mt-4 relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 shadow-md">
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50/0 via-purple-50/30 to-blue-50/0"></div>
              
              <div className="relative p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                    <UserCircleIcon className="h-7 w-7 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-slate-900 truncate">Admin User</p>
                    <p className="text-xs text-slate-600 truncate">admin@ricksenergy.co</p>
                  </div>
                </div>
                
                <Link
                  href="/"
                  className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 transition-all border border-slate-200 hover:border-slate-300 shadow-sm"
                >
                  <ArrowLeftOnRectangleIcon className="h-4 w-4" />
                  <span className="text-sm font-semibold">Back to Site</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-80">
        {/* Mobile header */}
        <div className="lg:hidden bg-white border-b border-slate-200 sticky top-0 z-30">
          <div className="flex items-center justify-between px-4 py-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="text-slate-600 hover:text-slate-900"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
            <h1 className="text-lg font-bold text-slate-900">Admin Panel</h1>
            <Link href="/" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
              View Site
            </Link>
          </div>
        </div>

        {/* Page content */}
        <main>{children}</main>
      </div>
    </div>
  );
}
