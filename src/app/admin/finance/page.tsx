'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  BanknotesIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  DocumentTextIcon,
  ReceiptPercentIcon,
  CreditCardIcon,
  ChartBarIcon,
  CalendarIcon,
} from '@heroicons/react/24/outline';

interface Transaction {
  id: string;
  type: 'income' | 'expense';
  category: string;
  description: string;
  amount: number;
  date: string;
  status: 'completed' | 'pending' | 'cancelled';
  project?: string;
  client?: string;
}

const mockTransactions: Transaction[] = [
  {
    id: 'TXN-001',
    type: 'income',
    category: 'Project Payment',
    description: 'High-Rise Building Inspection - Milestone 2',
    amount: 15000,
    date: '2024-01-20',
    status: 'completed',
    project: 'PRJ-001',
    client: 'ABC Construction Ltd',
  },
  {
    id: 'TXN-002',
    type: 'income',
    category: 'Training Course',
    description: 'IRATA Level 1 Training - 5 Students',
    amount: 3500,
    date: '2024-01-19',
    status: 'completed',
    client: 'Multiple Clients',
  },
  {
    id: 'TXN-003',
    type: 'expense',
    category: 'Equipment',
    description: 'Rope Access Equipment Purchase',
    amount: 2800,
    date: '2024-01-18',
    status: 'completed',
  },
  {
    id: 'TXN-004',
    type: 'income',
    category: 'Project Payment',
    description: 'Offshore Platform NDT - Deposit',
    amount: 25000,
    date: '2024-01-17',
    status: 'completed',
    project: 'PRJ-002',
    client: 'Energy Solutions UK',
  },
  {
    id: 'TXN-005',
    type: 'expense',
    category: 'Payroll',
    description: 'Staff Salaries - January',
    amount: 18000,
    date: '2024-01-15',
    status: 'completed',
  },
  {
    id: 'TXN-006',
    type: 'income',
    category: 'Project Payment',
    description: 'Wind Turbine Maintenance - Final Payment',
    amount: 8500,
    date: '2024-01-15',
    status: 'pending',
    project: 'PRJ-003',
    client: 'Green Energy Corp',
  },
  {
    id: 'TXN-007',
    type: 'expense',
    category: 'Insurance',
    description: 'Professional Liability Insurance',
    amount: 4200,
    date: '2024-01-12',
    status: 'completed',
  },
  {
    id: 'TXN-008',
    type: 'expense',
    category: 'Training',
    description: 'IRATA Certification Renewal',
    amount: 1500,
    date: '2024-01-10',
    status: 'completed',
  },
];

export default function FinancePage() {
  const [transactions, setTransactions] = useState<Transaction[]>(mockTransactions);
  const [filterType, setFilterType] = useState<'all' | 'income' | 'expense'>('all');
  const [filterPeriod, setFilterPeriod] = useState<'week' | 'month' | 'year'>('month');

  const filteredTransactions = transactions.filter(t => 
    filterType === 'all' || t.type === filterType
  );

  const stats = {
    totalIncome: transactions.filter(t => t.type === 'income' && t.status === 'completed').reduce((sum, t) => sum + t.amount, 0),
    totalExpense: transactions.filter(t => t.type === 'expense' && t.status === 'completed').reduce((sum, t) => sum + t.amount, 0),
    pendingIncome: transactions.filter(t => t.type === 'income' && t.status === 'pending').reduce((sum, t) => sum + t.amount, 0),
    totalTransactions: transactions.length,
  };

  const netIncome = stats.totalIncome - stats.totalExpense;
  const profitMargin = stats.totalIncome > 0 ? (netIncome / stats.totalIncome) * 100 : 0;

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4"
      >
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Finance Dashboard</h1>
          <p className="text-slate-600 mt-1">Manage your financial transactions and reports</p>
        </div>
        <div className="flex gap-3">
          <Link
            href="/admin/finance/quotations"
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors shadow-lg shadow-purple-600/30"
          >
            <DocumentTextIcon className="h-5 w-5" />
            Quotations
          </Link>
          <Link
            href="/admin/finance/receipts"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30"
          >
            <ReceiptPercentIcon className="h-5 w-5" />
            Receipts
          </Link>
        </div>
      </motion.div>

      {/* Main Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6"
      >
        <div className="bg-linear-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <ArrowTrendingUpIcon className="h-6 w-6" />
            </div>
            <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
              +{((stats.totalIncome / (stats.totalIncome + stats.totalExpense)) * 100).toFixed(0)}%
            </span>
          </div>
          <p className="text-sm opacity-90 mb-1">Total Income</p>
          <p className="text-3xl font-bold">£{stats.totalIncome.toLocaleString()}</p>
        </div>

        <div className="bg-linear-to-br from-red-500 to-rose-600 rounded-xl shadow-lg p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <ArrowTrendingDownIcon className="h-6 w-6" />
            </div>
            <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
              -{((stats.totalExpense / (stats.totalIncome + stats.totalExpense)) * 100).toFixed(0)}%
            </span>
          </div>
          <p className="text-sm opacity-90 mb-1">Total Expenses</p>
          <p className="text-3xl font-bold">£{stats.totalExpense.toLocaleString()}</p>
        </div>

        <div className="bg-linear-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <BanknotesIcon className="h-6 w-6" />
            </div>
            <span className={`text-sm font-medium px-3 py-1 rounded-full ${netIncome >= 0 ? 'bg-green-500/30' : 'bg-red-500/30'}`}>
              {netIncome >= 0 ? 'Profit' : 'Loss'}
            </span>
          </div>
          <p className="text-sm opacity-90 mb-1">Net Income</p>
          <p className="text-3xl font-bold">£{Math.abs(netIncome).toLocaleString()}</p>
        </div>

        <div className="bg-linear-to-br from-orange-500 to-amber-600 rounded-xl shadow-lg p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <CreditCardIcon className="h-6 w-6" />
            </div>
            <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
              Pending
            </span>
          </div>
          <p className="text-sm opacity-90 mb-1">Pending Income</p>
          <p className="text-3xl font-bold">£{stats.pendingIncome.toLocaleString()}</p>
        </div>
      </motion.div>

      {/* Charts & Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-slate-900">Financial Overview</h2>
            <div className="flex gap-2">
              {(['week', 'month', 'year'] as const).map((period) => (
                <button
                  key={period}
                  onClick={() => setFilterPeriod(period)}
                  className={`px-3 py-1 rounded-lg text-sm font-medium capitalize transition-colors ${
                    filterPeriod === period
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
          </div>
          
          {/* Simple Bar Chart Visualization */}
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-slate-700">Income</span>
                <span className="text-sm font-bold text-green-600">£{stats.totalIncome.toLocaleString()}</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-4">
                <div
                  className="bg-linear-to-r from-green-600 to-emerald-600 h-4 rounded-full"
                  style={{ width: '100%' }}
                />
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-slate-700">Expenses</span>
                <span className="text-sm font-bold text-red-600">£{stats.totalExpense.toLocaleString()}</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-4">
                <div
                  className="bg-linear-to-r from-red-600 to-rose-600 h-4 rounded-full"
                  style={{ width: `${(stats.totalExpense / stats.totalIncome) * 100}%` }}
                />
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-slate-700">Net Profit</span>
                <span className="text-sm font-bold text-blue-600">£{netIncome.toLocaleString()}</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-4">
                <div
                  className="bg-linear-to-r from-blue-600 to-indigo-600 h-4 rounded-full"
                  style={{ width: `${(netIncome / stats.totalIncome) * 100}%` }}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-200">
            <div>
              <p className="text-xs text-slate-500 mb-1">Profit Margin</p>
              <p className="text-xl font-bold text-slate-900">{profitMargin.toFixed(1)}%</p>
            </div>
            <div>
              <p className="text-xs text-slate-500 mb-1">Transactions</p>
              <p className="text-xl font-bold text-slate-900">{stats.totalTransactions}</p>
            </div>
            <div>
              <p className="text-xs text-slate-500 mb-1">Avg. Transaction</p>
              <p className="text-xl font-bold text-slate-900">
                £{((stats.totalIncome + stats.totalExpense) / stats.totalTransactions).toFixed(0)}
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-xl shadow-sm border border-slate-200 p-6"
        >
          <h2 className="text-lg font-semibold text-slate-900 mb-6">Quick Actions</h2>
          <div className="space-y-3">
            <Link
              href="/admin/finance/quotations/create"
              className="flex items-center gap-3 p-4 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors"
            >
              <DocumentTextIcon className="h-6 w-6" />
              <div>
                <p className="font-semibold text-sm">New Quotation</p>
                <p className="text-xs opacity-75">Create quote for client</p>
              </div>
            </Link>
            <Link
              href="/admin/finance/receipts/create"
              className="flex items-center gap-3 p-4 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <ReceiptPercentIcon className="h-6 w-6" />
              <div>
                <p className="font-semibold text-sm">New Receipt</p>
                <p className="text-xs opacity-75">Generate payment receipt</p>
              </div>
            </Link>
            <Link
              href="/admin/finance/reports"
              className="flex items-center gap-3 p-4 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors"
            >
              <ChartBarIcon className="h-6 w-6" />
              <div>
                <p className="font-semibold text-sm">View Reports</p>
                <p className="text-xs opacity-75">Financial reports</p>
              </div>
            </Link>
            <Link
              href="/admin/finance/invoices"
              className="flex items-center gap-3 p-4 bg-orange-50 text-orange-700 rounded-lg hover:bg-orange-100 transition-colors"
            >
              <BanknotesIcon className="h-6 w-6" />
              <div>
                <p className="font-semibold text-sm">Invoices</p>
                <p className="text-xs opacity-75">Manage invoices</p>
              </div>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Transactions List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden"
      >
        <div className="p-6 border-b border-slate-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-900">Recent Transactions</h2>
            <div className="flex gap-2">
              {(['all', 'income', 'expense'] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => setFilterType(type)}
                  className={`px-3 py-1 rounded-lg text-sm font-medium capitalize transition-colors ${
                    filterType === type
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">ID</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">Type</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">Description</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">Client</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">Date</th>
                <th className="px-6 py-3 text-right text-xs font-semibold text-slate-600 uppercase">Amount</th>
                <th className="px-6 py-3 text-center text-xs font-semibold text-slate-600 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {filteredTransactions.map((transaction) => (
                <tr key={transaction.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-mono text-slate-600">{transaction.id}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                      transaction.type === 'income'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {transaction.type === 'income' ? (
                        <ArrowTrendingUpIcon className="h-3 w-3" />
                      ) : (
                        <ArrowTrendingDownIcon className="h-3 w-3" />
                      )}
                      {transaction.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-900">{transaction.description}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{transaction.client || '-'}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{transaction.date}</td>
                  <td className={`px-6 py-4 text-right text-sm font-bold ${
                    transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {transaction.type === 'income' ? '+' : '-'}£{transaction.amount.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                      transaction.status === 'completed'
                        ? 'bg-green-100 text-green-700'
                        : transaction.status === 'pending'
                        ? 'bg-orange-100 text-orange-700'
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {transaction.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
