'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  PlusIcon,
  MagnifyingGlassIcon,
  DocumentTextIcon,
  PencilIcon,
  TrashIcon,
  EyeIcon,
  ArrowDownTrayIcon,
  CheckCircleIcon,
  XCircleIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';

interface Quotation {
  id: string;
  quoteNumber: string;
  client: string;
  email: string;
  service: string;
  amount: number;
  validUntil: string;
  status: 'draft' | 'sent' | 'accepted' | 'rejected' | 'expired';
  createdDate: string;
  items: {
    description: string;
    quantity: number;
    unitPrice: number;
    total: number;
  }[];
}

const mockQuotations: Quotation[] = [
  {
    id: 'QUO-001',
    quoteNumber: 'RE-2024-001',
    client: 'ABC Construction Ltd',
    email: 'john.smith@abc.com',
    service: 'Rope Access Services',
    amount: 45000,
    validUntil: '2024-02-15',
    status: 'sent',
    createdDate: '2024-01-15',
    items: [
      { description: 'High-Rise Building Inspection', quantity: 1, unitPrice: 30000, total: 30000 },
      { description: 'Safety Equipment & Materials', quantity: 1, unitPrice: 8000, total: 8000 },
      { description: 'Project Management', quantity: 1, unitPrice: 7000, total: 7000 },
    ],
  },
  {
    id: 'QUO-002',
    quoteNumber: 'RE-2024-002',
    client: 'Energy Solutions UK',
    email: 'info@energysolutions.com',
    service: 'NDT Services',
    amount: 78000,
    validUntil: '2024-02-20',
    status: 'accepted',
    createdDate: '2024-01-12',
    items: [
      { description: 'Ultrasonic Testing', quantity: 50, unitPrice: 800, total: 40000 },
      { description: 'Magnetic Particle Testing', quantity: 40, unitPrice: 600, total: 24000 },
      { description: 'Inspection Reports', quantity: 1, unitPrice: 14000, total: 14000 },
    ],
  },
  {
    id: 'QUO-003',
    quoteNumber: 'RE-2024-003',
    client: 'Green Energy Corp',
    service: 'Training Services',
    email: 'training@greenenergy.com',
    amount: 15000,
    validUntil: '2024-02-28',
    status: 'draft',
    createdDate: '2024-01-20',
    items: [
      { description: 'IRATA Level 1 Training (5 students)', quantity: 5, unitPrice: 2500, total: 12500 },
      { description: 'Training Materials', quantity: 5, unitPrice: 500, total: 2500 },
    ],
  },
];

export default function QuotationsPage() {
  const [quotations, setQuotations] = useState<Quotation[]>(mockQuotations);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | Quotation['status']>('all');

  const filteredQuotations = quotations.filter((quote) => {
    const matchesSearch = quote.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      quote.quoteNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      quote.service.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = filterStatus === 'all' || quote.status === filterStatus;

    return matchesSearch && matchesStatus;
  });

  const stats = {
    total: quotations.length,
    draft: quotations.filter(q => q.status === 'draft').length,
    sent: quotations.filter(q => q.status === 'sent').length,
    accepted: quotations.filter(q => q.status === 'accepted').length,
    totalValue: quotations.reduce((sum, q) => sum + q.amount, 0),
    acceptedValue: quotations.filter(q => q.status === 'accepted').reduce((sum, q) => sum + q.amount, 0),
  };

  const getStatusIcon = (status: Quotation['status']) => {
    switch (status) {
      case 'accepted': return <CheckCircleIcon className="h-5 w-5 text-green-600" />;
      case 'rejected': return <XCircleIcon className="h-5 w-5 text-red-600" />;
      case 'sent': return <DocumentTextIcon className="h-5 w-5 text-blue-600" />;
      case 'draft': return <PencilIcon className="h-5 w-5 text-slate-600" />;
      case 'expired': return <ClockIcon className="h-5 w-5 text-orange-600" />;
    }
  };

  const getStatusColor = (status: Quotation['status']) => {
    switch (status) {
      case 'accepted': return 'bg-green-100 text-green-700';
      case 'rejected': return 'bg-red-100 text-red-700';
      case 'sent': return 'bg-blue-100 text-blue-700';
      case 'draft': return 'bg-slate-100 text-slate-700';
      case 'expired': return 'bg-orange-100 text-orange-700';
    }
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this quotation?')) {
      setQuotations(quotations.filter(q => q.id !== id));
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
          <h1 className="text-3xl font-bold text-slate-900">Quotations</h1>
          <p className="text-slate-600 mt-1">Create and manage client quotations</p>
        </div>
        <Link
          href="/admin/finance/quotations/create"
          className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors shadow-lg shadow-purple-600/30"
        >
          <PlusIcon className="h-5 w-5" />
          New Quotation
        </Link>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6"
      >
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600">Total Quotations</p>
              <p className="text-3xl font-bold text-slate-900 mt-2">{stats.total}</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <DocumentTextIcon className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600">Accepted</p>
              <p className="text-3xl font-bold text-green-600 mt-2">{stats.accepted}</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircleIcon className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600">Total Value</p>
              <p className="text-3xl font-bold text-blue-600 mt-2">£{(stats.totalValue / 1000).toFixed(0)}k</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-xl font-bold text-blue-600">£</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600">Accepted Value</p>
              <p className="text-3xl font-bold text-emerald-600 mt-2">£{(stats.acceptedValue / 1000).toFixed(0)}k</p>
            </div>
            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
              <CheckCircleIcon className="h-6 w-6 text-emerald-600" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6"
      >
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search quotations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {(['all', 'draft', 'sent', 'accepted', 'rejected'] as const).map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-4 py-2 rounded-lg font-medium capitalize transition-colors ${
                  filterStatus === status
                    ? 'bg-purple-600 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Quotations Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Quote #</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Client</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Service</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Amount</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Valid Until</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Status</th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-slate-600 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {filteredQuotations.map((quote, index) => (
                <motion.tr
                  key={quote.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                  className="hover:bg-slate-50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-mono text-sm font-semibold text-slate-900">{quote.quoteNumber}</p>
                      <p className="text-xs text-slate-500 mt-1">{quote.createdDate}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium text-slate-900">{quote.client}</p>
                      <p className="text-xs text-slate-500 mt-1">{quote.email}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-slate-700">{quote.service}</span>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-lg font-bold text-slate-900">£{quote.amount.toLocaleString()}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-slate-600">{quote.validUntil}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(quote.status)}`}>
                      {getStatusIcon(quote.status)}
                      {quote.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        className="p-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        title="View"
                      >
                        <EyeIcon className="h-5 w-5" />
                      </button>
                      <button
                        className="p-2 text-slate-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
                        title="Download PDF"
                      >
                        <ArrowDownTrayIcon className="h-5 w-5" />
                      </button>
                      <Link
                        href={`/admin/finance/quotations/${quote.id}/edit`}
                        className="p-2 text-slate-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                        title="Edit"
                      >
                        <PencilIcon className="h-5 w-5" />
                      </Link>
                      <button
                        onClick={() => handleDelete(quote.id)}
                        className="p-2 text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="Delete"
                      >
                        <TrashIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredQuotations.length === 0 && (
          <div className="text-center py-12">
            <DocumentTextIcon className="h-12 w-12 text-slate-300 mx-auto mb-3" />
            <p className="text-slate-500">No quotations found matching your criteria.</p>
          </div>
        )}
      </motion.div>
    </div>
  );
}
