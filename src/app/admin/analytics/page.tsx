'use client';

import { motion } from 'framer-motion';
import {
  ChartBarIcon,
  ArrowTrendingUpIcon,
  UsersIcon,
  ClockIcon,
  ChartPieIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';

export default function AnalyticsPage() {
  const stats = {
    pageViews: 12543,
    uniqueVisitors: 4321,
    avgDuration: '3m 42s',
    bounceRate: 42.5,
    conversionRate: 8.3,
    totalSessions: 8764,
  };

  const topPages = [
    { page: '/services/rope-access', views: 3421, change: +12.5 },
    { page: '/', views: 2876, change: +8.3 },
    { page: '/services', views: 1543, change: +5.7 },
    { page: '/contact', views: 1234, change: +15.2 },
    { page: '/news', views: 987, change: -2.1 },
  ];

  const trafficSources = [
    { source: 'Direct', visits: 4521, percentage: 51.6 },
    { source: 'Google Search', visits: 2345, percentage: 26.8 },
    { source: 'Social Media', visits: 1234, percentage: 14.1 },
    { source: 'Referral', visits: 664, percentage: 7.5 },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-slate-900">Analytics Dashboard</h1>
        <p className="text-slate-600 mt-1">Monitor your website performance and user engagement</p>
      </motion.div>

      {/* Main Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6"
      >
        <div className="bg-linear-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <ChartBarIcon className="h-6 w-6" />
            </div>
            <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
              +{((stats.pageViews / 10000) * 100).toFixed(0)}%
            </span>
          </div>
          <p className="text-sm opacity-90 mb-1">Total Page Views</p>
          <p className="text-4xl font-bold">{stats.pageViews.toLocaleString()}</p>
        </div>

        <div className="bg-linear-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <UsersIcon className="h-6 w-6" />
            </div>
            <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
              +{((stats.uniqueVisitors / 4000) * 100).toFixed(0)}%
            </span>
          </div>
          <p className="text-sm opacity-90 mb-1">Unique Visitors</p>
          <p className="text-4xl font-bold">{stats.uniqueVisitors.toLocaleString()}</p>
        </div>

        <div className="bg-linear-to-br from-green-500 to-green-600 rounded-xl shadow-lg p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <ClockIcon className="h-6 w-6" />
            </div>
            <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
              Avg Time
            </span>
          </div>
          <p className="text-sm opacity-90 mb-1">Avg. Session Duration</p>
          <p className="text-4xl font-bold">{stats.avgDuration}</p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Top Pages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl shadow-sm border border-slate-200 p-6"
        >
          <h2 className="text-lg font-semibold text-slate-900 mb-6">Top Pages</h2>
          <div className="space-y-4">
            {topPages.map((page, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-blue-600">{index + 1}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-900 truncate">{page.page}</p>
                  <p className="text-xs text-slate-500">{page.views.toLocaleString()} views</p>
                </div>
                <span className={`text-sm font-semibold ${page.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {page.change >= 0 ? '+' : ''}{page.change}%
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Traffic Sources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-xl shadow-sm border border-slate-200 p-6"
        >
          <h2 className="text-lg font-semibold text-slate-900 mb-6">Traffic Sources</h2>
          <div className="space-y-4">
            {trafficSources.map((source, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-slate-900">{source.source}</span>
                  <span className="text-sm font-semibold text-slate-900">
                    {source.visits.toLocaleString()} ({source.percentage}%)
                  </span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div
                    className="bg-linear-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${source.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Additional Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <ChartPieIcon className="h-6 w-6 text-orange-600" />
            </div>
            <div>
              <p className="text-sm text-slate-600">Bounce Rate</p>
              <p className="text-2xl font-bold text-slate-900">{stats.bounceRate}%</p>
            </div>
          </div>
          <p className="text-xs text-slate-500">Percentage of single-page sessions</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <ArrowTrendingUpIcon className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-slate-600">Conversion Rate</p>
              <p className="text-2xl font-bold text-slate-900">{stats.conversionRate}%</p>
            </div>
          </div>
          <p className="text-xs text-slate-500">Contact form submissions</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <GlobeAltIcon className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-slate-600">Total Sessions</p>
              <p className="text-2xl font-bold text-slate-900">{stats.totalSessions.toLocaleString()}</p>
            </div>
          </div>
          <p className="text-xs text-slate-500">Total user sessions this month</p>
        </div>
      </motion.div>
    </div>
  );
}
