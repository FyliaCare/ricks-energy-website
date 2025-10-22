'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  PlusIcon,
  MagnifyingGlassIcon,
  ReceiptPercentIcon,
  PencilIcon,
  TrashIcon,
  EyeIcon,
  ArrowDownTrayIcon,
  CheckCircleIcon,
  BanknotesIcon,
} from '@heroicons/react/24/outline';

interface Receipt {
  id: string;
  receiptNumber: string;
  client: string;
  email: string;
  amount: number;
  paymentMethod: 'cash' | 'card' | 'bank-transfer' | 'cheque';
  project?: string;
  date: string;
  status: 'paid' | 'partially-paid' | 'pending';
  items: {
    description: string;
    amount: number;
  }[];
}

const mockReceipts: Receipt[] = [
  {
    id: 'REC-001',
    receiptNumber: 'RE-REC-2024-001',
    client: 'ABC Construction Ltd',
    email: 'john.smith@abc.com',
    amount: 15000,
    paymentMethod: 'bank-transfer',
    project: 'PRJ-001',
    date: '2024-01-20',
    status: 'paid',
    items: [
      { description: 'High-Rise Building Inspection - Milestone 2', amount: 15000 },
    ],
  },
  {
    id: 'REC-002',
    receiptNumber: 'RE-REC-2024-002',
    client: 'Energy Solutions UK',
    email: 'info@energysolutions.com',
    amount: 25000,
    paymentMethod: 'bank-transfer',
    project: 'PRJ-002',
    date: '2024-01-17',
    status: 'paid',
    items: [
      { description: 'Offshore Platform NDT - Deposit Payment', amount: 25000 },
    ],
  },
  {
    id: 'REC-003',
    receiptNumber: 'RE-REC-2024-003',
    client: 'Green Energy Corp',
    email: 'payments@greenenergy.com',
    amount: 8500,
    paymentMethod: 'card',
    project: 'PRJ-003',
    date: '2024-01-15',
    status: 'pending',
    items: [
      { description: 'Wind Turbine Maintenance - Final Payment', amount: 8500 },
    ],
  },
  {
    id: 'REC-004',
    receiptNumber: 'RE-REC-2024-004',
    client: 'Multiple Clients',
    email: 'training@ricksenergy.co',
    amount: 3500,
    paymentMethod: 'cash',
    date: '2024-01-19',
    status: 'paid',
    items: [
      { description: 'IRATA Level 1 Training Course - 5 Students', amount: 3500 },
    ],
  },
  {
    id: 'REC-005',
    receiptNumber: 'RE-REC-2024-005',
    client: 'Infrastructure Ltd',
    email: 'finance@infrastructure.com',
    amount: 6000,
    paymentMethod: 'bank-transfer',
    project: 'PRJ-005',
    date: '2024-01-12',
    status: 'partially-paid',
    items: [
      { description: 'Bridge Inspection - Initial Payment', amount: 6000 },
    ],
  },
];

export default function ReceiptsPage() {
  const [receipts, setReceipts] = useState<Receipt[]>(mockReceipts);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | Receipt['status']>('all');
  const [filterPayment, setFilterPayment] = useState<'all' | Receipt['paymentMethod']>('all');

  const filteredReceipts = receipts.filter((receipt) => {
    const matchesSearch = receipt.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      receipt.receiptNumber.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = filterStatus === 'all' || receipt.status === filterStatus;
    const matchesPayment = filterPayment === 'all' || receipt.paymentMethod === filterPayment;

    return matchesSearch && matchesStatus && matchesPayment;
  });

  const stats = {
    total: receipts.length,
    paid: receipts.filter(r => r.status === 'paid').length,
    pending: receipts.filter(r => r.status === 'pending').length,
    totalRevenue: receipts.filter(r => r.status === 'paid').reduce((sum, r) => sum + r.amount, 0),
    pendingAmount: receipts.filter(r => r.status === 'pending').reduce((sum, r) => sum + r.amount, 0),
  };

  const getPaymentIcon = (method: Receipt['paymentMethod']) => {
    return <BanknotesIcon className="h-4 w-4" />;
  };

  const getStatusColor = (status: Receipt['status']) => {
    switch (status) {
      case 'paid': return 'bg-green-100 text-green-700';
      case 'partially-paid': return 'bg-orange-100 text-orange-700';
      case 'pending': return 'bg-yellow-100 text-yellow-700';
    }
  };

  const getPaymentMethodColor = (method: Receipt['paymentMethod']) => {
    switch (method) {
      case 'bank-transfer': return 'bg-blue-100 text-blue-700';
      case 'card': return 'bg-purple-100 text-purple-700';
      case 'cash': return 'bg-green-100 text-green-700';
      case 'cheque': return 'bg-orange-100 text-orange-700';
    }
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this receipt?')) {
      setReceipts(receipts.filter(r => r.id !== id));
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
          <h1 className="text-3xl font-bold text-slate-900">Receipts</h1>
          <p className="text-slate-600 mt-1">Manage payment receipts and invoices</p>
        </div>
        <Link
          href="/admin/finance/receipts/create"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30"
        >
          <PlusIcon className="h-5 w-5" />
          New Receipt
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
              <p className="text-sm text-slate-600">Total Receipts</p>
              <p className="text-3xl font-bold text-slate-900 mt-2">{stats.total}</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <ReceiptPercentIcon className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600">Paid</p>
              <p className="text-3xl font-bold text-green-600 mt-2">{stats.paid}</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircleIcon className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600">Total Revenue</p>
              <p className="text-3xl font-bold text-emerald-600 mt-2">£{(stats.totalRevenue / 1000).toFixed(0)}k</p>
            </div>
            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
              <BanknotesIcon className="h-6 w-6 text-emerald-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600">Pending</p>
              <p className="text-3xl font-bold text-orange-600 mt-2">£{(stats.pendingAmount / 1000).toFixed(1)}k</p>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <span className="text-xl font-bold text-orange-600">£</span>
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
        <div className="flex flex-col gap-4">
          <div className="relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search receipts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            <div className="flex gap-2">
              <span className="text-sm font-medium text-slate-700 py-2">Status:</span>
              {(['all', 'paid', 'pending', 'partially-paid'] as const).map((status) => (
                <button
                  key={status}
                  onClick={() => setFilterStatus(status)}
                  className={`px-3 py-1 rounded-lg text-sm font-medium capitalize transition-colors ${
                    filterStatus === status
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {status === 'all' ? 'All' : status.replace('-', ' ')}
                </button>
              ))}
            </div>
            
            <div className="w-px bg-slate-200" />
            
            <div className="flex gap-2">
              <span className="text-sm font-medium text-slate-700 py-2">Payment:</span>
              {(['all', 'bank-transfer', 'card', 'cash', 'cheque'] as const).map((method) => (
                <button
                  key={method}
                  onClick={() => setFilterPayment(method)}
                  className={`px-3 py-1 rounded-lg text-sm font-medium capitalize transition-colors ${
                    filterPayment === method
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {method === 'all' ? 'All' : method.replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Receipts Table */}
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
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Receipt #</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Client</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Description</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Payment Method</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Date</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Amount</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Status</th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-slate-600 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {filteredReceipts.map((receipt, index) => (
                <motion.tr
                  key={receipt.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                  className="hover:bg-slate-50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-mono text-sm font-semibold text-slate-900">{receipt.receiptNumber}</p>
                      <p className="text-xs text-slate-500 mt-1">{receipt.project || 'N/A'}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium text-slate-900">{receipt.client}</p>
                      <p className="text-xs text-slate-500 mt-1">{receipt.email}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-slate-700 max-w-xs truncate">
                      {receipt.items[0]?.description}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${getPaymentMethodColor(receipt.paymentMethod)}`}>
                      {getPaymentIcon(receipt.paymentMethod)}
                      {receipt.paymentMethod.replace('-', ' ')}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-slate-600">{receipt.date}</span>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-lg font-bold text-slate-900">£{receipt.amount.toLocaleString()}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(receipt.status)}`}>
                      {receipt.status === 'paid' && <CheckCircleIcon className="h-3 w-3" />}
                      {receipt.status.replace('-', ' ')}
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
                        className="p-2 text-slate-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                        title="Download PDF"
                      >
                        <ArrowDownTrayIcon className="h-5 w-5" />
                      </button>
                      <Link
                        href={`/admin/finance/receipts/${receipt.id}/edit`}
                        className="p-2 text-slate-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
                        title="Edit"
                      >
                        <PencilIcon className="h-5 w-5" />
                      </Link>
                      <button
                        onClick={() => handleDelete(receipt.id)}
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

        {filteredReceipts.length === 0 && (
          <div className="text-center py-12">
            <ReceiptPercentIcon className="h-12 w-12 text-slate-300 mx-auto mb-3" />
            <p className="text-slate-500">No receipts found matching your criteria.</p>
          </div>
        )}
      </motion.div>
    </div>
  );
}
