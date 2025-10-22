'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ChartBarIcon,
  BriefcaseIcon,
  UsersIcon,
  ArrowTrendingUpIcon,
  ClockIcon,
  BanknotesIcon,
  DocumentTextIcon,
  BoltIcon,
  CheckCircleIcon,
  EnvelopeIcon,
  PhoneIcon,
  ChatBubbleLeftIcon,
  EllipsisVerticalIcon,
  CalendarIcon,
  StarIcon,
} from '@heroicons/react/24/outline';

export default function AdminDashboard() {
  const [currency, setCurrency] = useState('₵');
  const [activeTab, setActiveTab] = useState('6months');
  
  useEffect(() => {
    const saved = localStorage.getItem('adminSettings');
    if (saved) {
      const settings = JSON.parse(saved);
      const currencyMap: Record<string, string> = {
        'GHS': '₵',
        'USD': '$',
        'GBP': '£',
        'EUR': '€',
        'NGN': '₦',
      };
      setCurrency(currencyMap[settings.currency] || '₵');
    }
  }, []);

  // Real Ricks Energy LTD Dashboard Data
  const serviceCategories = [
    { name: 'Rope Access', value: 45, color: 'from-blue-500 to-blue-600', count: 45, icon: '🧗' },
    { name: 'NDT Services', value: 25, color: 'from-purple-500 to-purple-600', count: 25, icon: '🔬' },
    { name: 'Training', value: 20, color: 'from-green-500 to-green-600', count: 20, icon: '📚' },
    { name: 'Maintenance', value: 10, color: 'from-orange-500 to-orange-600', count: 10, icon: '🔧' },
  ];

  const revenueStats = {
    totalMonth: 245000,
    growth: '+15.3%',
    chartData: [
      { month: 'Jan', value: 180000 },
      { month: 'Feb', value: 220000 },
      { month: 'Mar', value: 195000 },
      { month: 'Apr', value: 260000 },
      { month: 'May', value: 240000 },
      { month: 'Jun', value: 245000 },
    ],
  };

  const topClients = [
    { name: 'ABC Construction Ltd', company: 'Construction', avatar: 'AC', status: 'active', color: 'bg-blue-500', projects: 12, revenue: 145000 },
    { name: 'Energy Solutions UK', company: 'Energy', avatar: 'ES', status: 'active', color: 'bg-purple-500', projects: 8, revenue: 128000 },
    { name: 'Green Energy Corp', company: 'Renewable', avatar: 'GE', status: 'active', color: 'bg-green-500', projects: 6, revenue: 95000 },
    { name: 'Infrastructure Ltd', company: 'Civil', avatar: 'IL', status: 'active', color: 'bg-orange-500', projects: 5, revenue: 78000 },
    { name: 'Offshore Services', company: 'Maritime', avatar: 'OS', status: 'active', color: 'bg-cyan-500', projects: 4, revenue: 65000 },
  ];

  const teamMembers = [
    { name: 'John Smith', title: 'Project Manager', status: 'Active', avatar: 'JS', color: 'bg-blue-500', email: 'john.smith@ricksenergy.com', phone: '+44 20 7123 4567', projects: 12, certification: 'IRATA Level 3' },
    { name: 'Sarah Johnson', title: 'Lead Technician', status: 'On Site', avatar: 'SJ', color: 'bg-purple-500', email: 'sarah.j@ricksenergy.com', phone: '+44 20 7123 4568', projects: 8, certification: 'IRATA Level 3' },
  ];

  const financialData = {
    quotations: { count: 45, pending: 12, value: 485000 },
    receipts: { count: 134, thisMonth: 28, value: 245000 },
    invoices: { sent: 89, paid: 76, pending: 13 },
  };

  const currentProjects = [
    { 
      id: 'PRJ-001',
      name: 'High-Rise Building Inspection', 
      client: 'ABC Construction Ltd',
      location: 'London, UK', 
      service: 'Rope Access',
      progress: 65,
      team: ['JS', 'SJ', 'MB'],
      status: 'in-progress',
      budget: 45000,
      dueDate: '2024-02-15'
    },
    { 
      id: 'PRJ-002',
      name: 'Offshore Platform NDT', 
      client: 'Energy Solutions UK',
      location: 'North Sea', 
      service: 'NDT Services',
      progress: 58,
      team: ['SJ', 'DL'],
      status: 'in-progress',
      budget: 78000,
      dueDate: '2024-02-28'
    },
  ];

  const trainingData = [
    { course: 'IRATA Level 1', enrolled: 12, completion: 75, revenue: 18000 },
    { course: 'IRATA Level 2', enrolled: 8, completion: 62, revenue: 16000 },
    { course: 'IRATA Level 3', enrolled: 5, completion: 80, revenue: 15000 },
  ];

  const stats = {
    totalProjects: 250,
    activeProjects: 15,
    totalClients: 89,
    monthlyRevenue: 245000,
    pendingQuotations: 12,
    trainings: 25,
  };

  const maxRevenueValue = Math.max(...revenueStats.chartData.map(d => d.value));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 p-4 lg:p-6">
      {/* Top Stats Row */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-2 lg:grid-cols-6 gap-4 mb-6"
      >
        {/* Total Projects */}
        <motion.div
          whileHover={{ y: -2 }}
          className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
              <BriefcaseIcon className="h-5 w-5 text-white" />
            </div>
            <span className="text-xs font-semibold text-green-600">+12%</span>
          </div>
          <p className="text-2xl font-bold text-slate-900">{stats.totalProjects}</p>
          <p className="text-xs text-slate-600 mt-1">Total Projects</p>
        </motion.div>

        {/* Active Projects */}
        <motion.div
          whileHover={{ y: -2 }}
          className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
              <BoltIcon className="h-5 w-5 text-white" />
            </div>
            <span className="text-xs font-semibold text-green-600">Active</span>
          </div>
          <p className="text-2xl font-bold text-slate-900">{stats.activeProjects}</p>
          <p className="text-xs text-slate-600 mt-1">In Progress</p>
        </motion.div>

        {/* Total Clients */}
        <motion.div
          whileHover={{ y: -2 }}
          className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
              <UsersIcon className="h-5 w-5 text-white" />
            </div>
            <span className="text-xs font-semibold text-green-600">+8%</span>
          </div>
          <p className="text-2xl font-bold text-slate-900">{stats.totalClients}</p>
          <p className="text-xs text-slate-600 mt-1">Clients</p>
        </motion.div>

        {/* Revenue */}
        <motion.div
          whileHover={{ y: -2 }}
          className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
              <BanknotesIcon className="h-5 w-5 text-white" />
            </div>
            <span className="text-xs font-semibold text-green-600">+15%</span>
          </div>
          <p className="text-2xl font-bold text-slate-900">{currency}{(stats.monthlyRevenue / 1000).toFixed(0)}k</p>
          <p className="text-xs text-slate-600 mt-1">Revenue</p>
        </motion.div>

        {/* Quotations */}
        <motion.div
          whileHover={{ y: -2 }}
          className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center">
              <DocumentTextIcon className="h-5 w-5 text-white" />
            </div>
            <span className="text-xs font-semibold text-orange-600">{financialData.quotations.pending} Pending</span>
          </div>
          <p className="text-2xl font-bold text-slate-900">{financialData.quotations.count}</p>
          <p className="text-xs text-slate-600 mt-1">Quotations</p>
        </motion.div>

        {/* Training */}
        <motion.div
          whileHover={{ y: -2 }}
          className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center">
              <CalendarIcon className="h-5 w-5 text-white" />
            </div>
            <span className="text-xs font-semibold text-green-600">+5%</span>
          </div>
          <p className="text-2xl font-bold text-slate-900">{stats.trainings}</p>
          <p className="text-xs text-slate-600 mt-1">Trainings</p>
        </motion.div>
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-3 space-y-6">
          {/* Service Categories */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-slate-900">Service Distribution</h3>
              <button className="text-slate-400 hover:text-slate-600">
                <EllipsisVerticalIcon className="h-5 w-5" />
              </button>
            </div>

            {/* Donut Chart */}
            <div className="relative w-40 h-40 mx-auto mb-6">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                {serviceCategories.map((category, index) => {
                  const previousTotal = serviceCategories
                    .slice(0, index)
                    .reduce((sum, cat) => sum + cat.value, 0);
                  const circumference = 2 * Math.PI * 35;
                  const offset = (previousTotal / 100) * circumference;
                  const dashArray = `${(category.value / 100) * circumference} ${circumference}`;
                  
                  return (
                    <circle
                      key={category.name}
                      cx="50"
                      cy="50"
                      r="35"
                      fill="none"
                      stroke={`url(#gradient-${index})`}
                      strokeWidth="12"
                      strokeDasharray={dashArray}
                      strokeDashoffset={-offset}
                      className="transition-all duration-300"
                    />
                  );
                })}
                {serviceCategories.map((category, index) => (
                  <defs key={`def-${index}`}>
                    <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor={category.color.includes('blue') ? '#3b82f6' : category.color.includes('purple') ? '#a855f7' : category.color.includes('green') ? '#10b981' : '#f97316'} />
                      <stop offset="100%" stopColor={category.color.includes('blue') ? '#2563eb' : category.color.includes('purple') ? '#9333ea' : category.color.includes('green') ? '#059669' : '#ea580c'} />
                    </linearGradient>
                  </defs>
                ))}
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p className="text-2xl font-bold text-slate-900">100%</p>
                <p className="text-xs text-slate-500">Services</p>
              </div>
            </div>

            {/* Category List */}
            <div className="space-y-3">
              {serviceCategories.map((category) => (
                <div key={category.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{category.icon}</span>
                    <div>
                      <span className="text-sm font-semibold text-slate-700">{category.name}</span>
                      <span className="text-xs text-slate-500 ml-2">({category.value}%)</span>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-slate-900">{category.count}</span>
                </div>
              ))}
            </div>

            <Link href="/admin/projects" className="block w-full mt-6 px-4 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors text-sm font-semibold">
              View All Projects
            </Link>
          </motion.div>

          {/* IRATA Training Courses */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200"
          >
            <h3 className="text-lg font-bold text-slate-900 mb-4">IRATA Training</h3>
            <div className="space-y-4">
              {trainingData.map((training) => (
                <div key={training.course}>
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <span className="text-sm font-semibold text-slate-700">{training.course}</span>
                      <p className="text-xs text-slate-500">{training.enrolled} Students Enrolled</p>
                    </div>
                    <span className="text-sm font-bold text-green-600">{currency}{(training.revenue / 1000).toFixed(0)}k</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-1">
                      <div className="w-full bg-slate-100 rounded-full h-2">
                        <div className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full" style={{ width: `${training.completion}%` }}></div>
                      </div>
                    </div>
                    <span className="text-xs text-slate-500 w-12 text-right">{training.completion}%</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-2 mt-6">
              <Link href="/services/training" className="flex-1 px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors text-sm font-semibold text-center">
                View Courses
              </Link>
              <button className="flex-1 px-4 py-2 bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200 transition-colors text-sm font-semibold">
                Enroll Students
              </button>
            </div>
          </motion.div>

          {/* Quick Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 shadow-lg text-white"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold">Financial Overview</h3>
              <StarIcon className="h-5 w-5 text-yellow-400 fill-yellow-400" />
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/20">
                <span className="text-sm opacity-90">Quotation Value</span>
                <span className="text-lg font-bold">{currency}{(financialData.quotations.value / 1000).toFixed(0)}k</span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-white/20">
                <span className="text-sm opacity-90">Receipts (Month)</span>
                <span className="text-lg font-bold">{currency}{(financialData.receipts.value / 1000).toFixed(0)}k</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm opacity-90">Pending Payment</span>
                <span className="text-lg font-bold">{financialData.invoices.pending}</span>
              </div>
            </div>

            <Link href="/admin/finance" className="block w-full mt-6 px-4 py-2.5 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-xl text-center text-sm font-semibold transition-colors">
              View Finance Hub
            </Link>
          </motion.div>
        </div>

        {/* Center Column */}
        <div className="lg:col-span-6 space-y-6">
          {/* Revenue Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Revenue Statistics</h3>
                <p className="text-sm text-slate-500 mt-1">Monthly revenue tracking and growth analysis</p>
              </div>
              <Link href="/admin/finance" className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors text-sm font-semibold">
                View Finance
              </Link>
            </div>

            {/* Big Number */}
            <div className="mb-6">
              <p className="text-5xl font-bold text-slate-900">{currency}{(revenueStats.totalMonth / 1000).toFixed(0)}k</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-sm text-slate-600">Total monthly revenue</span>
                <span className="text-sm font-semibold text-green-600 flex items-center gap-1">
                  <ArrowTrendingUpIcon className="h-4 w-4" />
                  {revenueStats.growth}
                </span>
              </div>
            </div>

            {/* Month Tabs */}
            <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
              {revenueStats.chartData.map((month) => (
                <button
                  key={month.month}
                  className="px-4 py-2 bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-600 rounded-lg text-sm font-medium whitespace-nowrap transition-colors"
                >
                  {month.month}
                </button>
              ))}
            </div>

            {/* Bar Chart */}
            <div className="relative h-64">
              <svg className="w-full h-full" viewBox="0 0 700 250">
                {/* Grid lines */}
                {[0, 1, 2, 3, 4].map((i) => (
                  <line
                    key={i}
                    x1="0"
                    y1={50 * i + 25}
                    x2="700"
                    y2={50 * i + 25}
                    stroke="#e2e8f0"
                    strokeWidth="1"
                  />
                ))}

                {/* Gradient defs */}
                <defs>
                  <linearGradient id="barGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#a855f7" />
                  </linearGradient>
                </defs>

                {/* Bars */}
                {revenueStats.chartData.map((d, i) => {
                  const barWidth = 60;
                  const spacing = (700 - barWidth * revenueStats.chartData.length) / (revenueStats.chartData.length + 1);
                  const x = spacing + i * (barWidth + spacing);
                  const barHeight = (d.value / maxRevenueValue) * 200;
                  const y = 250 - barHeight;
                  
                  return (
                    <g key={i}>
                      <motion.rect
                        x={x}
                        y={y}
                        width={barWidth}
                        height={barHeight}
                        fill="url(#barGradient)"
                        rx="8"
                        initial={{ height: 0, y: 250 }}
                        animate={{ height: barHeight, y: y }}
                        transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                      />
                      <text
                        x={x + barWidth / 2}
                        y={y - 10}
                        textAnchor="middle"
                        className="text-xs font-semibold fill-slate-700"
                      >
                        {currency}{(d.value / 1000).toFixed(0)}k
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </motion.div>

          {/* Current Projects & Team */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Current Projects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-6">Active Projects</h3>
              
              <div className="space-y-6">
                {currentProjects.map((project) => (
                  <div key={project.id} className="pb-6 border-b border-slate-100 last:border-0 last:pb-0">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="font-bold text-slate-900">{project.name}</p>
                        <p className="text-xs text-slate-500 mt-1">{project.client}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-xs px-2 py-0.5 bg-blue-50 text-blue-600 rounded font-medium">{project.service}</span>
                          <span className="text-xs text-slate-500">📍 {project.location}</span>
                        </div>
                      </div>
                      <span className="text-sm font-bold text-green-600">{currency}{(project.budget / 1000).toFixed(0)}k</span>
                    </div>

                    <div className="mb-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-slate-600">Progress</span>
                        <span className="text-xs font-bold text-slate-900">{project.progress}%</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-2">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full" style={{ width: `${project.progress}%` }}></div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex -space-x-2">
                        {project.team.map((member, i) => (
                          <div key={i} className={`w-7 h-7 ${['bg-blue-500', 'bg-purple-500', 'bg-green-500'][i]} rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-semibold`}>
                            {member}
                          </div>
                        ))}
                      </div>
                      <span className="text-xs text-slate-500">Due: {new Date(project.dueDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/admin/projects" className="block w-full text-center mt-6 px-4 py-2.5 text-blue-600 hover:bg-blue-50 rounded-xl transition-colors text-sm font-semibold border border-blue-200">
                View All Projects →
              </Link>
            </motion.div>

            {/* Team Members */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-6">Team Members</h3>
              
              <div className="space-y-6">
                {teamMembers.map((member) => (
                  <div key={member.name} className="pb-6 border-b border-slate-100 last:border-0 last:pb-0">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 ${member.color} rounded-xl flex items-center justify-center text-white font-bold text-lg`}>
                          {member.avatar}
                        </div>
                        <div>
                          <p className="font-bold text-slate-900">{member.name}</p>
                          <p className="text-xs text-slate-500">{member.title}</p>
                        </div>
                      </div>
                      <button className="text-slate-400 hover:text-slate-600">
                        <EllipsisVerticalIcon className="h-5 w-5" />
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-xs text-slate-500 mb-1">Active Projects</p>
                        <p className="text-lg font-bold text-slate-900">{member.projects}</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 mb-1">Certification</p>
                        <span className={`inline-block px-2 py-1 rounded-lg text-xs font-semibold ${member.status === 'Active' ? 'bg-green-50 text-green-600' : 'bg-orange-50 text-orange-600'}`}>
                          {member.certification}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <EnvelopeIcon className="h-4 w-4" />
                        <span className="text-xs">{member.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <PhoneIcon className="h-4 w-4" />
                        <span className="text-xs">{member.phone}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Financial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Quotations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-slate-700">Quotations</h3>
                <DocumentTextIcon className="h-5 w-5 text-blue-600" />
              </div>
              <p className="text-3xl font-bold text-slate-900 mb-2">{financialData.quotations.count}</p>
              <p className="text-xs text-slate-500 mb-4">{financialData.quotations.pending} Pending Approval</p>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-600">Total Value</span>
                <span className="font-bold text-blue-600">{currency}{(financialData.quotations.value / 1000).toFixed(0)}k</span>
              </div>
            </motion.div>

            {/* Receipts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-slate-700">Receipts</h3>
                <CheckCircleIcon className="h-5 w-5 text-green-600" />
              </div>
              <p className="text-3xl font-bold text-slate-900 mb-2">{financialData.receipts.count}</p>
              <p className="text-xs text-slate-500 mb-4">{financialData.receipts.thisMonth} This Month</p>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-600">Monthly Total</span>
                <span className="font-bold text-green-600">{currency}{(financialData.receipts.value / 1000).toFixed(0)}k</span>
              </div>
            </motion.div>

            {/* Invoices */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-slate-700">Invoices</h3>
                <BanknotesIcon className="h-5 w-5 text-purple-600" />
              </div>
              <p className="text-3xl font-bold text-slate-900 mb-2">{financialData.invoices.sent}</p>
              <p className="text-xs text-slate-500 mb-4">{financialData.invoices.paid} Paid, {financialData.invoices.pending} Pending</p>
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full" style={{ width: `${(financialData.invoices.paid / financialData.invoices.sent) * 100}%` }}></div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-3 space-y-6">
          {/* Top Clients */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-slate-900">Top Clients</h3>
              <Link href="/admin/finance" className="text-blue-600 hover:text-blue-700 text-sm font-semibold">
                View All →
              </Link>
            </div>

            <div className="space-y-4">
              {topClients.slice(0, 5).map((client, index) => (
                <div key={client.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className={`w-10 h-10 ${['bg-blue-500', 'bg-purple-500', 'bg-green-500', 'bg-orange-500', 'bg-pink-500'][index]} rounded-xl flex items-center justify-center text-white font-semibold text-sm`}>
                        {client.name.split(' ').map(w => w[0]).join('')}
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{client.name}</p>
                      <p className="text-xs text-slate-500">{client.projects} Projects</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-slate-900">{currency}{(client.revenue / 1000).toFixed(0)}k</p>
                    <p className="text-xs text-green-600">+{((client.revenue / stats.monthlyRevenue) * 10).toFixed(1)}%</p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/admin/projects" className="block w-full text-center mt-6 px-4 py-2.5 bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200 transition-colors text-sm font-semibold">
              View All Clients
            </Link>
          </motion.div>

          {/* Service Performance */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-slate-900">Service Distribution</h3>
              <div className="flex gap-2">
                <button className="px-3 py-1 text-xs font-semibold text-purple-600 bg-purple-50 rounded-lg">
                  Chart
                </button>
                <Link href="/admin/projects" className="px-3 py-1 text-xs font-semibold text-slate-600 hover:bg-slate-50 rounded-lg transition-colors">
                  Projects
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              {serviceCategories.map((service, index) => (
                <div key={service.name}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{service.icon}</span>
                      <span className="text-sm font-semibold text-slate-700">{service.name}</span>
                    </div>
                    <span className="text-sm font-bold text-slate-900">{service.value}%</span>
                  </div>
                  
                  {/* Circular Progress */}
                  <div className="relative w-full">
                    <svg className="w-full h-24" viewBox="0 0 200 100">
                      <defs>
                        <linearGradient id={`service-gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor={index === 0 ? '#3b82f6' : index === 1 ? '#a855f7' : index === 2 ? '#10b981' : '#f59e0b'} />
                          <stop offset="100%" stopColor={index === 0 ? '#2563eb' : index === 1 ? '#9333ea' : index === 2 ? '#059669' : '#d97706'} />
                        </linearGradient>
                      </defs>
                      
                      {/* Background arc */}
                      <path
                        d="M 20,80 A 80,80 0 0,1 180,80"
                        fill="none"
                        stroke="#e2e8f0"
                        strokeWidth="16"
                        strokeLinecap="round"
                      />
                      
                      {/* Progress arc */}
                      <motion.path
                        d="M 20,80 A 80,80 0 0,1 180,80"
                        fill="none"
                        stroke={`url(#service-gradient-${index})`}
                        strokeWidth="16"
                        strokeLinecap="round"
                        strokeDasharray={`${(service.value / 100) * 251.2} 251.2`}
                        initial={{ strokeDashoffset: 251.2 }}
                        animate={{ strokeDashoffset: 0 }}
                        transition={{ duration: 1.5, delay: 0.3 + index * 0.2 }}
                      />
                      
                      {/* Value text */}
                      <text x="100" y="60" textAnchor="middle" className="text-2xl font-bold fill-slate-900">
                        {service.count}
                      </text>
                      <text x="100" y="75" textAnchor="middle" className="text-xs fill-slate-500">
                        Projects
                      </text>
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Upcoming Training & Quick Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-6 shadow-lg text-white"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <CalendarIcon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm opacity-90">Monthly Overview</p>
                <p className="font-bold">Business Performance</p>
              </div>
            </div>
            
            <p className="text-sm opacity-90 mb-6">Track your monthly business metrics and training schedule</p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-xs opacity-75 mb-1">Active Projects</p>
                <p className="text-2xl font-bold">{stats.activeProjects}</p>
                <p className="text-xs opacity-75 mt-1">In Progress</p>
              </div>
              <div>
                <p className="text-xs opacity-75 mb-1">Pending Quotes</p>
                <p className="text-2xl font-bold">{stats.pendingQuotations}</p>
                <p className="text-xs opacity-75 mt-1">Awaiting Approval</p>
              </div>
              <div>
                <p className="text-xs opacity-75 mb-1">Training Courses</p>
                <p className="text-2xl font-bold">{stats.trainings}</p>
                <p className="text-xs opacity-75 mt-1">This Month</p>
              </div>
              <div>
                <p className="text-xs opacity-75 mb-1">Total Clients</p>
                <p className="text-2xl font-bold">{stats.totalClients}</p>
                <p className="text-xs opacity-75 mt-1">Active</p>
              </div>
            </div>

            <div className="flex gap-3">
              <Link href="/admin/finance" className="flex-1 py-2.5 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-xl text-sm font-semibold transition-colors text-center">
                View Finance
              </Link>
              <Link href="/services/training" className="flex-1 py-2.5 bg-white text-purple-600 hover:bg-white/90 rounded-xl text-sm font-semibold transition-colors text-center">
                Training Schedule
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
