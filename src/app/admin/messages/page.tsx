'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MagnifyingGlassIcon,
  EnvelopeIcon,
  EnvelopeOpenIcon,
  TrashIcon,
  FunnelIcon,
  CheckIcon,
} from '@heroicons/react/24/outline';

interface Message {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
  date: string;
  read: boolean;
}

// Mock data
const mockMessages: Message[] = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john.smith@example.com',
    phone: '+44 7700 900123',
    company: 'ABC Construction Ltd',
    service: 'Rope Access Services',
    message: 'We are interested in rope access services for a high-rise building project in London. Please contact us to discuss requirements and pricing.',
    date: '2024-01-20',
    read: false,
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah.j@techcorp.com',
    phone: '+44 7700 900456',
    company: 'TechCorp Industries',
    service: 'NDT Services',
    message: 'Looking for NDT inspection services for our manufacturing facility. Need ultrasonic and magnetic particle testing.',
    date: '2024-01-19',
    read: false,
  },
  {
    id: '3',
    name: 'Michael Brown',
    email: 'm.brown@energy.co.uk',
    phone: '+44 7700 900789',
    company: 'Energy Solutions UK',
    service: 'Training Services',
    message: 'We need IRATA Level 1 training for 5 of our staff members. What are the available dates for the next course?',
    date: '2024-01-18',
    read: true,
  },
  {
    id: '4',
    name: 'Emma Wilson',
    email: 'emma.wilson@offshore.com',
    phone: '+44 7700 900012',
    company: 'Offshore Maintenance Ltd',
    service: 'Lifting & Rigging',
    message: 'Require lifting and rigging equipment and services for offshore wind farm project. Please send your capabilities and pricing.',
    date: '2024-01-17',
    read: true,
  },
  {
    id: '5',
    name: 'David Lee',
    email: 'david.lee@facilities.net',
    phone: '+44 7700 900345',
    company: 'Facilities Management Pro',
    service: 'Fabric Maintenance',
    message: 'Need fabric maintenance services for multiple commercial buildings. Can you handle ongoing contracts?',
    date: '2024-01-16',
    read: true,
  },
];

export default function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>(mockMessages);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'unread' | 'read'>('all');
  const [selectedMessages, setSelectedMessages] = useState<string[]>([]);
  const [expandedMessage, setExpandedMessage] = useState<string | null>(null);

  const filteredMessages = messages.filter((msg) => {
    const matchesSearch = msg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      msg.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      msg.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      msg.service.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = filterStatus === 'all' ? true : 
      filterStatus === 'unread' ? !msg.read : msg.read;

    return matchesSearch && matchesStatus;
  });

  const unreadCount = messages.filter(m => !m.read).length;

  const toggleMessage = (id: string) => {
    setExpandedMessage(expandedMessage === id ? null : id);
    // Mark as read when opened
    setMessages(messages.map(msg => 
      msg.id === id ? { ...msg, read: true } : msg
    ));
  };

  const toggleSelect = (id: string) => {
    setSelectedMessages(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (selectedMessages.length === filteredMessages.length) {
      setSelectedMessages([]);
    } else {
      setSelectedMessages(filteredMessages.map(m => m.id));
    }
  };

  const markAsRead = (ids: string[]) => {
    setMessages(messages.map(msg =>
      ids.includes(msg.id) ? { ...msg, read: true } : msg
    ));
    setSelectedMessages([]);
  };

  const deleteMessages = (ids: string[]) => {
    if (confirm(`Delete ${ids.length} message(s)?`)) {
      setMessages(messages.filter(msg => !ids.includes(msg.id)));
      setSelectedMessages([]);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-slate-900">Messages & Inquiries</h1>
        <p className="text-slate-600 mt-1">Manage contact form submissions</p>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6"
      >
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <EnvelopeIcon className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">{messages.length}</p>
              <p className="text-sm text-slate-600">Total Messages</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <EnvelopeIcon className="h-6 w-6 text-orange-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">{unreadCount}</p>
              <p className="text-sm text-slate-600">Unread</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <EnvelopeOpenIcon className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">{messages.length - unreadCount}</p>
              <p className="text-sm text-slate-600">Read</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <FunnelIcon className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">{filteredMessages.length}</p>
              <p className="text-sm text-slate-600">Filtered</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Filters & Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6"
      >
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search messages..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Status Filter */}
          <div className="flex gap-2">
            {(['all', 'unread', 'read'] as const).map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-4 py-2 rounded-lg font-medium capitalize transition-colors ${
                  filterStatus === status
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {status}
              </button>
            ))}
          </div>

          {/* Bulk Actions */}
          {selectedMessages.length > 0 && (
            <div className="flex gap-2">
              <button
                onClick={() => markAsRead(selectedMessages)}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
              >
                <CheckIcon className="h-5 w-5" />
                Mark Read
              </button>
              <button
                onClick={() => deleteMessages(selectedMessages)}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2"
              >
                <TrashIcon className="h-5 w-5" />
                Delete
              </button>
            </div>
          )}
        </div>
      </motion.div>

      {/* Messages List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden"
      >
        {/* Select All */}
        <div className="px-6 py-3 border-b border-slate-200 bg-slate-50">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={selectedMessages.length === filteredMessages.length && filteredMessages.length > 0}
              onChange={toggleSelectAll}
              className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500"
            />
            <span className="text-sm font-medium text-slate-700">
              {selectedMessages.length > 0 ? `${selectedMessages.length} selected` : 'Select all'}
            </span>
          </label>
        </div>

        {/* Messages */}
        <div className="divide-y divide-slate-200">
          {filteredMessages.map((message, index) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.05 }}
              className={`${!message.read ? 'bg-blue-50' : ''}`}
            >
              {/* Message Header */}
              <div className="px-6 py-4 flex items-start gap-4">
                <input
                  type="checkbox"
                  checked={selectedMessages.includes(message.id)}
                  onChange={() => toggleSelect(message.id)}
                  className="mt-1 w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500"
                />
                
                <div
                  className="flex-1 cursor-pointer"
                  onClick={() => toggleMessage(message.id)}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        {!message.read && (
                          <span className="w-2 h-2 bg-blue-600 rounded-full" />
                        )}
                        <h3 className={`font-semibold ${!message.read ? 'text-slate-900' : 'text-slate-700'}`}>
                          {message.name}
                        </h3>
                        <span className="text-sm text-slate-500">{message.email}</span>
                      </div>
                      <div className="mt-1 flex items-center gap-4 text-sm text-slate-600">
                        <span>{message.company}</span>
                        <span>•</span>
                        <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-xs">
                          {message.service}
                        </span>
                      </div>
                      {expandedMessage !== message.id && (
                        <p className="mt-2 text-sm text-slate-600 line-clamp-2">
                          {message.message}
                        </p>
                      )}
                    </div>
                    <span className="text-sm text-slate-500 whitespace-nowrap">{message.date}</span>
                  </div>
                </div>
              </div>

              {/* Expanded Message */}
              {expandedMessage === message.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="px-6 pb-4 ml-10"
                >
                  <div className="bg-white border border-slate-200 rounded-lg p-4 space-y-3">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-slate-500">Phone:</span>
                        <span className="ml-2 text-slate-900">{message.phone}</span>
                      </div>
                      <div>
                        <span className="text-slate-500">Date:</span>
                        <span className="ml-2 text-slate-900">{message.date}</span>
                      </div>
                    </div>
                    <div className="pt-3 border-t border-slate-200">
                      <p className="text-sm font-medium text-slate-700 mb-2">Message:</p>
                      <p className="text-sm text-slate-600 leading-relaxed">{message.message}</p>
                    </div>
                    <div className="pt-3 border-t border-slate-200 flex gap-2">
                      <a
                        href={`mailto:${message.email}`}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                      >
                        Reply via Email
                      </a>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteMessages([message.id]);
                        }}
                        className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors text-sm font-medium"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {filteredMessages.length === 0 && (
          <div className="text-center py-12">
            <EnvelopeOpenIcon className="h-12 w-12 text-slate-300 mx-auto mb-3" />
            <p className="text-slate-500">No messages found matching your criteria.</p>
          </div>
        )}
      </motion.div>
    </div>
  );
}
