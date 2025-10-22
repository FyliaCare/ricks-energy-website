'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ChartBarIcon, 
  UsersIcon, 
  CpuChipIcon, 
  BoltIcon,
  EnvelopeIcon,
  ClipboardDocumentListIcon
} from '@heroicons/react/24/outline';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

interface DashboardData {
  stats: {
    totalProjects: number;
    activeProjects: number;
    totalClients: number;
    energyGenerated: number;
  };
  recentContacts: Array<{
    id: number;
    name: string;
    email: string;
    service: string;
    date: string;
    status: string;
  }>;
  projectUpdates: Array<{
    id: number;
    projectName: string;
    status: string;
    completion: number;
    nextMilestone: string;
    date: string;
  }>;
}

export default function AdminDashboard() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const response = await fetch('/api/admin');
      const dashboardData = await response.json();
      setData(dashboardData);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">Loading dashboard...</div>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">Error loading dashboard data</div>
        </div>
      </div>
    );
  }

  const statCards = [
    {
      title: 'Total Projects',
      value: data.stats.totalProjects,
      icon: ClipboardDocumentListIcon,
      color: 'text-blue-600',
    },
    {
      title: 'Active Projects',
      value: data.stats.activeProjects,
      icon: CpuChipIcon,
      color: 'text-green-600',
    },
    {
      title: 'Total Clients',
      value: data.stats.totalClients,
      icon: UsersIcon,
      color: 'text-purple-600',
    },
    {
      title: 'Energy Generated (MW)',
      value: data.stats.energyGenerated,
      icon: BoltIcon,
      color: 'text-yellow-600',
    },
  ];

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Admin Dashboard
          </h1>
          <p className="mt-2 text-gray-600">
            Overview of company performance and recent activities
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          {statCards.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        {stat.title}
                      </p>
                      <p className="text-2xl font-bold text-gray-900">
                        {stat.value}
                      </p>
                    </div>
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Recent Contacts */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <EnvelopeIcon className="h-5 w-5" />
                  Recent Contacts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {data.recentContacts.length > 0 ? (
                    data.recentContacts.map((contact) => (
                      <div
                        key={contact.id}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                      >
                        <div>
                          <p className="font-medium text-gray-900">{contact.name}</p>
                          <p className="text-sm text-gray-600">{contact.email}</p>
                          <p className="text-xs text-gray-500">{contact.service}</p>
                        </div>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {contact.status}
                        </span>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500 text-center py-4">No recent contacts</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Project Updates */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ChartBarIcon className="h-5 w-5" />
                  Project Updates
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {data.projectUpdates.length > 0 ? (
                    data.projectUpdates.map((project) => (
                      <div
                        key={project.id}
                        className="p-3 bg-gray-50 rounded-lg"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <p className="font-medium text-gray-900">{project.projectName}</p>
                          <span className="text-sm text-gray-600">{project.completion}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                          <div
                            className="bg-green-600 h-2 rounded-full"
                            style={{ width: `${project.completion}%` }}
                          ></div>
                        </div>
                        <p className="text-xs text-gray-500">
                          Next: {project.nextMilestone}
                        </p>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500 text-center py-4">No recent updates</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8"
        >
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                <button className="p-4 text-center border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <ClipboardDocumentListIcon className="h-6 w-6 mx-auto mb-2 text-blue-600" />
                  <span className="text-sm font-medium">Add Project</span>
                </button>
                <button className="p-4 text-center border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <UsersIcon className="h-6 w-6 mx-auto mb-2 text-green-600" />
                  <span className="text-sm font-medium">Manage Clients</span>
                </button>
                <button className="p-4 text-center border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <EnvelopeIcon className="h-6 w-6 mx-auto mb-2 text-purple-600" />
                  <span className="text-sm font-medium">View Messages</span>
                </button>
                <button className="p-4 text-center border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <ChartBarIcon className="h-6 w-6 mx-auto mb-2 text-yellow-600" />
                  <span className="text-sm font-medium">Analytics</span>
                </button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}