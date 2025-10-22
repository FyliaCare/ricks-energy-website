'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeftIcon,
  PlusIcon,
  TrashIcon,
  DocumentTextIcon,
  CheckIcon,
} from '@heroicons/react/24/outline';

interface QuotationItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

export default function CreateQuotationPage() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  
  const [formData, setFormData] = useState({
    client: '',
    email: '',
    phone: '',
    company: '',
    service: 'Rope Access Services',
    validUntil: '',
    notes: '',
    terms: 'Payment due within 30 days\nAll prices exclude VAT\nQuotation valid for 30 days from issue date',
  });

  const [items, setItems] = useState<QuotationItem[]>([
    { id: '1', description: '', quantity: 1, unitPrice: 0, total: 0 },
  ]);

  const services = [
    'Rope Access Services',
    'NDT Services',
    'Fabric Maintenance',
    'Lifting & Rigging',
    'Mechanical Services',
    'Work at Height',
    'Training Services',
    'Equipment & Supplies',
  ];

  const addItem = () => {
    setItems([
      ...items,
      { id: Date.now().toString(), description: '', quantity: 1, unitPrice: 0, total: 0 },
    ]);
  };

  const removeItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const updateItem = (id: string, field: keyof QuotationItem, value: string | number) => {
    setItems(items.map(item => {
      if (item.id === id) {
        const updated = { ...item, [field]: value };
        if (field === 'quantity' || field === 'unitPrice') {
          updated.total = updated.quantity * updated.unitPrice;
        }
        return updated;
      }
      return item;
    }));
  };

  const subtotal = items.reduce((sum, item) => sum + item.total, 0);
  const vat = subtotal * 0.2; // 20% VAT
  const total = subtotal + vat;

  const handleSubmit = async (e: React.FormEvent, status: 'draft' | 'sent') => {
    e.preventDefault();
    setSaving(true);

    // TODO: Implement API call to save quotation
    console.log('Saving quotation:', { ...formData, items, status });

    setTimeout(() => {
      setSaving(false);
      router.push('/admin/finance/quotations');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <Link
          href="/admin/finance/quotations"
          className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-4"
        >
          <ArrowLeftIcon className="h-5 w-5" />
          Back to Quotations
        </Link>
        <h1 className="text-3xl font-bold text-slate-900">Create New Quotation</h1>
        <p className="text-slate-600 mt-1">Generate a professional quotation for your client</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-2 space-y-6"
        >
          {/* Client Information */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">Client Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Client Name *
                </label>
                <input
                  type="text"
                  value={formData.client}
                  onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                  placeholder="John Smith"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Company *
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="ABC Construction Ltd"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="client@example.com"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+44 7700 900000"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Service *
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  {services.map(service => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Valid Until *
                </label>
                <input
                  type="date"
                  value={formData.validUntil}
                  onChange={(e) => setFormData({ ...formData, validUntil: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>
            </div>
          </div>

          {/* Line Items */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-slate-900">Line Items</h2>
              <button
                onClick={addItem}
                className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm"
              >
                <PlusIcon className="h-4 w-4" />
                Add Item
              </button>
            </div>

            <div className="space-y-4">
              {items.map((item, index) => (
                <div key={item.id} className="p-4 bg-slate-50 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="flex-1 space-y-3">
                      <input
                        type="text"
                        value={item.description}
                        onChange={(e) => updateItem(item.id, 'description', e.target.value)}
                        placeholder="Item description..."
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                      />
                      <div className="grid grid-cols-3 gap-3">
                        <div>
                          <label className="block text-xs font-medium text-slate-600 mb-1">Quantity</label>
                          <input
                            type="number"
                            value={item.quantity}
                            onChange={(e) => updateItem(item.id, 'quantity', parseFloat(e.target.value) || 0)}
                            min="1"
                            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-slate-600 mb-1">Unit Price (£)</label>
                          <input
                            type="number"
                            value={item.unitPrice}
                            onChange={(e) => updateItem(item.id, 'unitPrice', parseFloat(e.target.value) || 0)}
                            min="0"
                            step="0.01"
                            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-slate-600 mb-1">Total (£)</label>
                          <input
                            type="text"
                            value={item.total.toFixed(2)}
                            readOnly
                            className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-slate-100 text-sm font-semibold text-slate-900"
                          />
                        </div>
                      </div>
                    </div>
                    {items.length > 1 && (
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <TrashIcon className="h-5 w-5" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Information */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">Additional Information</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Notes
                </label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Any additional notes or special requirements..."
                  rows={4}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Terms & Conditions
                </label>
                <textarea
                  value={formData.terms}
                  onChange={(e) => setFormData({ ...formData, terms: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none font-mono text-sm"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Sidebar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          {/* Summary */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sticky top-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">Quotation Summary</h2>
            
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Subtotal:</span>
                <span className="font-semibold text-slate-900">£{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">VAT (20%):</span>
                <span className="font-semibold text-slate-900">£{vat.toFixed(2)}</span>
              </div>
              <div className="pt-3 border-t border-slate-200">
                <div className="flex justify-between">
                  <span className="font-semibold text-slate-900">Total:</span>
                  <span className="text-2xl font-bold text-purple-600">£{total.toFixed(2)}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 space-y-3">
                <button
                  onClick={(e) => handleSubmit(e, 'draft')}
                  disabled={saving}
                  className="w-full px-4 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 transition-colors font-medium disabled:opacity-50"
                >
                  Save as Draft
                </button>

                <button
                  onClick={(e) => handleSubmit(e, 'sent')}
                  disabled={saving}
                  className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium shadow-lg shadow-purple-600/30 disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {saving ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Creating...
                    </>
                  ) : (
                    <>
                      <CheckIcon className="h-5 w-5" />
                      Create & Send
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Preview Info */}
          <div className="bg-purple-50 rounded-xl border border-purple-200 p-6">
            <div className="flex items-start gap-3">
              <DocumentTextIcon className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-purple-900 mb-2">Professional Quotation</h3>
                <p className="text-sm text-purple-700 leading-relaxed">
                  This quotation will be generated with your company logo, branding, and all necessary details in a professional PDF format.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
