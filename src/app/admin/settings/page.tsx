'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BuildingOfficeIcon,
  PhoneIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  MapPinIcon,
  CheckIcon,
  BanknotesIcon,
  UserGroupIcon,
  BellIcon,
  ShieldCheckIcon,
  PaintBrushIcon,
  Cog6ToothIcon,
  ChartBarIcon,
  DocumentTextIcon,
  KeyIcon,
  CloudArrowUpIcon,
} from '@heroicons/react/24/outline';

export default function SettingsPage() {
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState('general');
  const [settings, setSettings] = useState({
    // General Settings
    companyName: 'Ricks Energy LTD',
    email: 'info@ricksenergy.co',
    phone: '+233 123 456 789',
    secondaryPhone: '+233 987 654 321',
    address: 'Takoradi, Western Region, Ghana',
    website: 'www.ricksenergy.co',
    workingHours: 'Mon-Fri: 8:30 AM - 4:30 PM',
    currency: 'GHS',
    
    // Social Media
    facebook: 'https://facebook.com/ricksenergy',
    linkedin: 'https://linkedin.com/company/ricksenergy',
    twitter: 'https://twitter.com/ricksenergy',
    instagram: 'https://instagram.com/ricksenergy',
    youtube: 'https://youtube.com/@ricksenergy',
    
    // SEO Settings
    seoTitle: 'Ricks Energy LTD - Professional Rope Access & Industrial Services',
    seoDescription: 'Leading provider of rope access, NDT, fabric maintenance, and industrial services across Ghana.',
    seoKeywords: 'rope access, NDT services, fabric maintenance, IRATA, industrial services, Ghana',
    
    // Notifications
    emailNotifications: true,
    smsNotifications: false,
    projectUpdates: true,
    financialAlerts: true,
    systemAlerts: true,
    
    // Security
    twoFactorAuth: false,
    sessionTimeout: '30',
    passwordExpiry: '90',
    
    // Appearance
    theme: 'light',
    primaryColor: '#2563eb',
    accentColor: '#9333ea',
    
    // Backup
    autoBackup: true,
    backupFrequency: 'daily',
  });

  const currencies = [
    { code: 'GHS', symbol: '₵', name: 'Ghana Cedi', flag: '🇬🇭' },
    { code: 'USD', symbol: '$', name: 'US Dollar', flag: '🇺🇸' },
    { code: 'GBP', symbol: '£', name: 'British Pound', flag: '🇬🇧' },
    { code: 'EUR', symbol: '€', name: 'Euro', flag: '🇪🇺' },
    { code: 'NGN', symbol: '₦', name: 'Nigerian Naira', flag: '🇳🇬' },
  ];

  const tabs = [
    { id: 'general', name: 'General', icon: BuildingOfficeIcon },
    { id: 'currency', name: 'Currency', icon: BanknotesIcon },
    { id: 'social', name: 'Social Media', icon: GlobeAltIcon },
    { id: 'seo', name: 'SEO', icon: ChartBarIcon },
    { id: 'notifications', name: 'Notifications', icon: BellIcon },
    { id: 'security', name: 'Security', icon: ShieldCheckIcon },
    { id: 'appearance', name: 'Appearance', icon: PaintBrushIcon },
    { id: 'backup', name: 'Backup', icon: CloudArrowUpIcon },
  ];

  // Load settings from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('adminSettings');
    if (saved) {
      setSettings(JSON.parse(saved));
    }
  }, []);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    // Save to localStorage
    localStorage.setItem('adminSettings', JSON.stringify(settings));
    console.log('Saving settings:', settings);

    setTimeout(() => {
      setSaving(false);
      alert('Settings saved successfully!');
      // Trigger a page reload to apply currency changes
      window.location.reload();
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/20 to-purple-50/20 p-4 lg:p-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Settings
            </h1>
            <p className="text-slate-600 mt-2">Manage your company information and preferences</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Cog6ToothIcon className="h-5 w-5 animate-spin-slow" />
            <span>Last saved: Just now</span>
          </div>
        </div>
      </motion.div>

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-6"
      >
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-2">
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-600/20'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <tab.icon className="h-4 w-4" />
                <span className="hidden sm:inline">{tab.name}</span>
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      <form onSubmit={handleSave} className="max-w-5xl">
        <AnimatePresence mode="wait">
          {/* General Settings Tab */}
          {activeTab === 'general' && (
            <motion.div
              key="general"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                    <BuildingOfficeIcon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">Company Information</h2>
                    <p className="text-sm text-slate-500">Basic details about your company</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      value={settings.companyName}
                      onChange={(e) => setSettings({ ...settings, companyName: e.target.value })}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Enter company name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Primary Email *
                    </label>
                    <div className="relative">
                      <EnvelopeIcon className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />
                      <input
                        type="email"
                        value={settings.email}
                        onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                        className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Primary Phone *
                    </label>
                    <div className="relative">
                      <PhoneIcon className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />
                      <input
                        type="tel"
                        value={settings.phone}
                        onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
                        className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="+233 XXX XXX XXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Secondary Phone
                    </label>
                    <div className="relative">
                      <PhoneIcon className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />
                      <input
                        type="tel"
                        value={settings.secondaryPhone}
                        onChange={(e) => setSettings({ ...settings, secondaryPhone: e.target.value })}
                        className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="+233 XXX XXX XXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Website
                    </label>
                    <div className="relative">
                      <GlobeAltIcon className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />
                      <input
                        type="text"
                        value={settings.website}
                        onChange={(e) => setSettings({ ...settings, website: e.target.value })}
                        className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="www.example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Working Hours
                    </label>
                    <input
                      type="text"
                      value={settings.workingHours}
                      onChange={(e) => setSettings({ ...settings, workingHours: e.target.value })}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Mon-Fri: 9:00 AM - 5:00 PM"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Office Address *
                    </label>
                    <div className="relative">
                      <MapPinIcon className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />
                      <input
                        type="text"
                        value={settings.address}
                        onChange={(e) => setSettings({ ...settings, address: e.target.value })}
                        className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Enter your office address"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Currency Settings Tab */}
          {activeTab === 'currency' && (
            <motion.div
              key="currency"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                    <BanknotesIcon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">Currency Preference</h2>
                    <p className="text-sm text-slate-500">Choose your default currency for financial data</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {currencies.map((curr) => (
                    <label
                      key={curr.code}
                      className={`relative flex items-center gap-4 p-5 border-2 rounded-2xl cursor-pointer transition-all hover:shadow-md ${
                        settings.currency === curr.code
                          ? 'border-green-600 bg-green-50 shadow-lg shadow-green-600/20'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="currency"
                        value={curr.code}
                        checked={settings.currency === curr.code}
                        onChange={(e) => setSettings({ ...settings, currency: e.target.value })}
                        className="sr-only"
                      />
                      <div className="text-4xl">{curr.flag}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-2xl font-bold text-slate-900">{curr.symbol}</span>
                          <span className="text-sm font-bold text-slate-900">{curr.code}</span>
                        </div>
                        <p className="text-xs text-slate-600">{curr.name}</p>
                      </div>
                      {settings.currency === curr.code && (
                        <CheckIcon className="h-6 w-6 text-green-600" />
                      )}
                    </label>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                  <p className="text-sm text-blue-900">
                    <span className="font-semibold">Note:</span> This currency will be used throughout the dashboard for all financial displays. Changing it will reload the page to apply changes.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Social Media Tab */}
          {activeTab === 'social' && (
            <motion.div
              key="social"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <GlobeAltIcon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">Social Media Links</h2>
                    <p className="text-sm text-slate-500">Connect your social media profiles</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                      <span className="text-blue-600 text-lg">📘</span> Facebook
                    </label>
                    <input
                      type="url"
                      value={settings.facebook}
                      onChange={(e) => setSettings({ ...settings, facebook: e.target.value })}
                      placeholder="https://facebook.com/yourpage"
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                      <span className="text-blue-700 text-lg">💼</span> LinkedIn
                    </label>
                    <input
                      type="url"
                      value={settings.linkedin}
                      onChange={(e) => setSettings({ ...settings, linkedin: e.target.value })}
                      placeholder="https://linkedin.com/company/yourcompany"
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                      <span className="text-sky-500 text-lg">🐦</span> Twitter
                    </label>
                    <input
                      type="url"
                      value={settings.twitter}
                      onChange={(e) => setSettings({ ...settings, twitter: e.target.value })}
                      placeholder="https://twitter.com/yourhandle"
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                      <span className="text-pink-600 text-lg">📸</span> Instagram
                    </label>
                    <input
                      type="url"
                      value={settings.instagram}
                      onChange={(e) => setSettings({ ...settings, instagram: e.target.value })}
                      placeholder="https://instagram.com/yourprofile"
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                      <span className="text-red-600 text-lg">▶️</span> YouTube
                    </label>
                    <input
                      type="url"
                      value={settings.youtube}
                      onChange={(e) => setSettings({ ...settings, youtube: e.target.value })}
                      placeholder="https://youtube.com/@yourchannel"
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* SEO Tab */}
          {activeTab === 'seo' && (
            <motion.div
              key="seo"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                    <ChartBarIcon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">SEO Settings</h2>
                    <p className="text-sm text-slate-500">Optimize your website for search engines</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      SEO Title *
                    </label>
                    <input
                      type="text"
                      value={settings.seoTitle}
                      onChange={(e) => setSettings({ ...settings, seoTitle: e.target.value })}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      maxLength={60}
                    />
                    <div className="flex justify-between mt-1">
                      <p className="text-xs text-slate-500">Recommended: 50-60 characters</p>
                      <p className={`text-xs font-medium ${settings.seoTitle.length > 60 ? 'text-red-600' : 'text-slate-500'}`}>
                        {settings.seoTitle.length}/60
                      </p>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      SEO Description *
                    </label>
                    <textarea
                      value={settings.seoDescription}
                      onChange={(e) => setSettings({ ...settings, seoDescription: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all"
                      maxLength={160}
                    />
                    <div className="flex justify-between mt-1">
                      <p className="text-xs text-slate-500">Recommended: 150-160 characters</p>
                      <p className={`text-xs font-medium ${settings.seoDescription.length > 160 ? 'text-red-600' : 'text-slate-500'}`}>
                        {settings.seoDescription.length}/160
                      </p>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      SEO Keywords
                    </label>
                    <textarea
                      value={settings.seoKeywords}
                      onChange={(e) => setSettings({ ...settings, seoKeywords: e.target.value })}
                      rows={3}
                      placeholder="rope access, NDT services, fabric maintenance, IRATA, industrial services"
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all"
                    />
                    <p className="text-xs text-slate-500 mt-1">Separate keywords with commas</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Notifications Tab */}
          {activeTab === 'notifications' && (
            <motion.div
              key="notifications"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg">
                    <BellIcon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">Notification Preferences</h2>
                    <p className="text-sm text-slate-500">Manage how you receive updates</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    { key: 'emailNotifications', label: 'Email Notifications', desc: 'Receive notifications via email' },
                    { key: 'smsNotifications', label: 'SMS Notifications', desc: 'Receive notifications via SMS' },
                    { key: 'projectUpdates', label: 'Project Updates', desc: 'Get notified about project changes' },
                    { key: 'financialAlerts', label: 'Financial Alerts', desc: 'Receive financial transaction alerts' },
                    { key: 'systemAlerts', label: 'System Alerts', desc: 'Get system maintenance notifications' },
                  ].map((item) => (
                    <label
                      key={item.key}
                      className="flex items-center justify-between p-5 border-2 border-slate-200 rounded-xl hover:border-slate-300 cursor-pointer transition-all"
                    >
                      <div>
                        <p className="font-semibold text-slate-900">{item.label}</p>
                        <p className="text-sm text-slate-500">{item.desc}</p>
                      </div>
                      <div className="relative">
                        <input
                          type="checkbox"
                          checked={settings[item.key as keyof typeof settings] as boolean}
                          onChange={(e) => setSettings({ ...settings, [item.key]: e.target.checked })}
                          className="sr-only peer"
                        />
                        <div className="w-14 h-7 bg-slate-300 peer-checked:bg-green-600 rounded-full peer transition-all"></div>
                        <div className="absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-all peer-checked:translate-x-7 shadow-sm"></div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Security Tab */}
          {activeTab === 'security' && (
            <motion.div
              key="security"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                    <ShieldCheckIcon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">Security Settings</h2>
                    <p className="text-sm text-slate-500">Manage your account security</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="p-5 border-2 border-slate-200 rounded-xl">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="font-semibold text-slate-900">Two-Factor Authentication</p>
                        <p className="text-sm text-slate-500">Add an extra layer of security</p>
                      </div>
                      <div className="relative">
                        <input
                          type="checkbox"
                          checked={settings.twoFactorAuth}
                          onChange={(e) => setSettings({ ...settings, twoFactorAuth: e.target.checked })}
                          className="sr-only peer"
                        />
                        <div className="w-14 h-7 bg-slate-300 peer-checked:bg-green-600 rounded-full peer transition-all"></div>
                        <div className="absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-all peer-checked:translate-x-7 shadow-sm"></div>
                      </div>
                    </div>
                    {settings.twoFactorAuth && (
                      <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-medium">
                        Configure 2FA
                      </button>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Session Timeout (minutes)
                    </label>
                    <select
                      value={settings.sessionTimeout}
                      onChange={(e) => setSettings({ ...settings, sessionTimeout: e.target.value })}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      <option value="15">15 minutes</option>
                      <option value="30">30 minutes</option>
                      <option value="60">1 hour</option>
                      <option value="120">2 hours</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Password Expiry (days)
                    </label>
                    <select
                      value={settings.passwordExpiry}
                      onChange={(e) => setSettings({ ...settings, passwordExpiry: e.target.value })}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      <option value="30">30 days</option>
                      <option value="60">60 days</option>
                      <option value="90">90 days</option>
                      <option value="never">Never</option>
                    </select>
                  </div>

                  <button className="w-full px-4 py-3 bg-orange-600 text-white rounded-xl hover:bg-orange-700 transition-colors font-medium flex items-center justify-center gap-2">
                    <KeyIcon className="h-5 w-5" />
                    Change Password
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Appearance Tab */}
          {activeTab === 'appearance' && (
            <motion.div
              key="appearance"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                    <PaintBrushIcon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">Appearance Settings</h2>
                    <p className="text-sm text-slate-500">Customize the look and feel</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-3">
                      Theme
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { value: 'light', label: 'Light', icon: '☀️' },
                        { value: 'dark', label: 'Dark', icon: '🌙' },
                      ].map((theme) => (
                        <label
                          key={theme.value}
                          className={`flex items-center gap-3 p-4 border-2 rounded-xl cursor-pointer transition-all ${
                            settings.theme === theme.value
                              ? 'border-blue-600 bg-blue-50'
                              : 'border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          <input
                            type="radio"
                            name="theme"
                            value={theme.value}
                            checked={settings.theme === theme.value}
                            onChange={(e) => setSettings({ ...settings, theme: e.target.value })}
                            className="sr-only"
                          />
                          <span className="text-2xl">{theme.icon}</span>
                          <span className="font-semibold text-slate-900">{theme.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Primary Color
                    </label>
                    <input
                      type="color"
                      value={settings.primaryColor}
                      onChange={(e) => setSettings({ ...settings, primaryColor: e.target.value })}
                      className="w-full h-12 rounded-xl cursor-pointer"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Accent Color
                    </label>
                    <input
                      type="color"
                      value={settings.accentColor}
                      onChange={(e) => setSettings({ ...settings, accentColor: e.target.value })}
                      className="w-full h-12 rounded-xl cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Backup Tab */}
          {activeTab === 'backup' && (
            <motion.div
              key="backup"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                    <CloudArrowUpIcon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">Backup & Data</h2>
                    <p className="text-sm text-slate-500">Manage your data backup settings</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="p-5 border-2 border-slate-200 rounded-xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-slate-900">Automatic Backup</p>
                        <p className="text-sm text-slate-500">Automatically backup your data</p>
                      </div>
                      <div className="relative">
                        <input
                          type="checkbox"
                          checked={settings.autoBackup}
                          onChange={(e) => setSettings({ ...settings, autoBackup: e.target.checked })}
                          className="sr-only peer"
                        />
                        <div className="w-14 h-7 bg-slate-300 peer-checked:bg-green-600 rounded-full peer transition-all"></div>
                        <div className="absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-all peer-checked:translate-x-7 shadow-sm"></div>
                      </div>
                    </div>
                  </div>

                  {settings.autoBackup && (
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Backup Frequency
                      </label>
                      <select
                        value={settings.backupFrequency}
                        onChange={(e) => setSettings({ ...settings, backupFrequency: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      >
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                        <option value="monthly">Monthly</option>
                      </select>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button className="px-6 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-medium flex items-center justify-center gap-2">
                      <CloudArrowUpIcon className="h-5 w-5" />
                      Backup Now
                    </button>
                    <button className="px-6 py-4 bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200 transition-colors font-medium flex items-center justify-center gap-2">
                      <DocumentTextIcon className="h-5 w-5" />
                      View Backups
                    </button>
                  </div>

                  <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl">
                    <p className="text-sm text-amber-900">
                      <span className="font-semibold">Last backup:</span> 2 hours ago
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Save Button - Always visible */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-between gap-4 mt-8 p-6 bg-white rounded-2xl shadow-sm border border-slate-200"
        >
          <p className="text-sm text-slate-600">
            Make sure to save your changes before leaving this page
          </p>
          <button
            type="submit"
            disabled={saving}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg hover:shadow-blue-600/30 transition-all font-semibold disabled:opacity-50 flex items-center gap-2 whitespace-nowrap"
          >
            {saving ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Saving...
              </>
            ) : (
              <>
                <CheckIcon className="h-5 w-5" />
                Save All Settings
              </>
            )}
          </button>
        </motion.div>
      </form>
    </div>
  );
}