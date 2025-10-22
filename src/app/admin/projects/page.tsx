'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  PlusIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon,
  ClockIcon,
  CheckCircleIcon,
  XCircleIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/outline';

interface Project {
  id: string;
  name: string;
  client: string;
  service: string;
  status: 'pending' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled';
  budget: number;
  spent: number;
  startDate: string;
  endDate?: string;
  progress: number;
  location: string;
  manager: string;
}

const mockProjects: Project[] = [
  {
    id: 'PRJ-001',
    name: 'High-Rise Building Inspection',
    client: 'ABC Construction Ltd',
    service: 'Rope Access Services',
    status: 'in-progress',
    budget: 45000,
    spent: 28000,
    startDate: '2024-01-15',
    progress: 65,
    location: 'London, UK',
    manager: 'John Smith',
  },
  {
    id: 'PRJ-002',
    name: 'Offshore Platform NDT',
    client: 'Energy Solutions UK',
    service: 'NDT Services',
    status: 'in-progress',
    budget: 78000,
    spent: 45000,
    startDate: '2024-01-10',
    progress: 58,
    location: 'North Sea',
    manager: 'Sarah Johnson',
  },
  {
    id: 'PRJ-003',
    name: 'Wind Turbine Maintenance',
    client: 'Green Energy Corp',
    service: 'Fabric Maintenance',
    status: 'completed',
    budget: 32000,
    spent: 31500,
    startDate: '2023-12-01',
    endDate: '2024-01-05',
    progress: 100,
    location: 'Scotland',
    manager: 'Michael Brown',
  },
  {
    id: 'PRJ-004',
    name: 'IRATA Level 1 Training Course',
    client: 'Multiple Clients',
    service: 'Training Services',
    status: 'pending',
    budget: 15000,
    spent: 0,
    startDate: '2024-02-01',
    progress: 0,
    location: 'Training Facility',
    manager: 'Emma Wilson',
  },
  {
    id: 'PRJ-005',
    name: 'Bridge Inspection & Repair',
    client: 'Infrastructure Ltd',
    service: 'Rope Access Services',
    status: 'on-hold',
    budget: 52000,
    spent: 12000,
    startDate: '2024-01-08',
    progress: 23,
    location: 'Manchester',
    manager: 'David Lee',
  },
];

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>(mockProjects);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | Project['status']>('all');

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.id.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = filterStatus === 'all' || project.status === filterStatus;

    return matchesSearch && matchesStatus;
  });

  const stats = {
    total: projects.length,
    inProgress: projects.filter(p => p.status === 'in-progress').length,
    completed: projects.filter(p => p.status === 'completed').length,
    pending: projects.filter(p => p.status === 'pending').length,
    totalBudget: projects.reduce((sum, p) => sum + p.budget, 0),
    totalSpent: projects.reduce((sum, p) => sum + p.spent, 0),
  };

  const getStatusIcon = (status: Project['status']) => {
    switch (status) {
      case 'completed': return <CheckCircleIcon className="h-5 w-5 text-green-600" />;
      case 'in-progress': return <ArrowPathIcon className="h-5 w-5 text-blue-600" />;
      case 'pending': return <ClockIcon className="h-5 w-5 text-orange-600" />;
      case 'on-hold': return <ClockIcon className="h-5 w-5 text-yellow-600" />;
      case 'cancelled': return <XCircleIcon className="h-5 w-5 text-red-600" />;
    }
  };

  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-700';
      case 'in-progress': return 'bg-blue-100 text-blue-700';
      case 'pending': return 'bg-orange-100 text-orange-700';
      case 'on-hold': return 'bg-yellow-100 text-yellow-700';
      case 'cancelled': return 'bg-red-100 text-red-700';
    }
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this project?')) {
      setProjects(projects.filter(p => p.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4"
      >
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Projects Management</h1>
          <p className="text-slate-600 mt-1">Track and manage all your projects</p>
        </div>
        <Link
          href="/admin/projects/create"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30"
        >
          <PlusIcon className="h-5 w-5" />
          New Project
        </Link>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6"
      >
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600">Total Projects</p>
              <p className="text-3xl font-bold text-slate-900 mt-2">{stats.total}</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <FunnelIcon className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600">In Progress</p>
              <p className="text-3xl font-bold text-blue-600 mt-2">{stats.inProgress}</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <ArrowPathIcon className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600">Completed</p>
              <p className="text-3xl font-bold text-green-600 mt-2">{stats.completed}</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircleIcon className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600">Total Budget</p>
              <p className="text-3xl font-bold text-purple-600 mt-2">
                £{(stats.totalBudget / 1000).toFixed(0)}k
              </p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <span className="text-xl font-bold text-purple-600">£</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Financial Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6"
      >
        <h2 className="text-lg font-semibold text-slate-900 mb-4">Financial Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="text-sm text-slate-600 mb-2">Total Budget</p>
            <p className="text-2xl font-bold text-slate-900">£{stats.totalBudget.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-sm text-slate-600 mb-2">Total Spent</p>
            <p className="text-2xl font-bold text-orange-600">£{stats.totalSpent.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-sm text-slate-600 mb-2">Remaining</p>
            <p className="text-2xl font-bold text-green-600">
              £{(stats.totalBudget - stats.totalSpent).toLocaleString()}
            </p>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-slate-600">Budget Utilization</span>
            <span className="font-semibold text-slate-900">
              {((stats.totalSpent / stats.totalBudget) * 100).toFixed(1)}%
            </span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-3">
            <div
              className="bg-linear-to-r from-blue-600 to-purple-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${(stats.totalSpent / stats.totalBudget) * 100}%` }}
            />
          </div>
        </div>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6"
      >
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {(['all', 'pending', 'in-progress', 'completed', 'on-hold'] as const).map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-4 py-2 rounded-lg font-medium capitalize transition-colors ${
                  filterStatus === status
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {status === 'all' ? 'All' : status.replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.05 }}
            className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-lg transition-shadow"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-mono text-slate-500">{project.id}</span>
                  <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {getStatusIcon(project.status)}
                    {project.status.replace('-', ' ')}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">{project.name}</h3>
                <p className="text-sm text-slate-600 mt-1">{project.client}</p>
              </div>
            </div>

            {/* Details */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-xs text-slate-500 mb-1">Service</p>
                <p className="text-sm font-medium text-slate-900">{project.service}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-1">Location</p>
                <p className="text-sm font-medium text-slate-900">{project.location}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-1">Manager</p>
                <p className="text-sm font-medium text-slate-900">{project.manager}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-1">Start Date</p>
                <p className="text-sm font-medium text-slate-900">{project.startDate}</p>
              </div>
            </div>

            {/* Budget */}
            <div className="mb-4">
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-slate-600">Budget: £{project.budget.toLocaleString()}</span>
                <span className="font-semibold text-slate-900">
                  £{project.spent.toLocaleString()} spent
                </span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div
                  className="bg-linear-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                  style={{ width: `${(project.spent / project.budget) * 100}%` }}
                />
              </div>
            </div>

            {/* Progress */}
            <div className="mb-4">
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-slate-600">Progress</span>
                <span className="font-semibold text-slate-900">{project.progress}%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div
                  className="bg-linear-to-r from-green-600 to-emerald-600 h-2 rounded-full"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 pt-4 border-t border-slate-200">
              <Link
                href={`/admin/projects/${project.id}`}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors text-sm font-medium"
              >
                <EyeIcon className="h-4 w-4" />
                View Details
              </Link>
              <Link
                href={`/admin/projects/${project.id}/edit`}
                className="p-2 text-slate-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
              >
                <PencilIcon className="h-5 w-5" />
              </Link>
              <button
                onClick={() => handleDelete(project.id)}
                className="p-2 text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                <TrashIcon className="h-5 w-5" />
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12 bg-white rounded-xl shadow-sm border border-slate-200">
          <p className="text-slate-500">No projects found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}
