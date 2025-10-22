'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowLeftIcon,
  PhotoIcon,
  EyeIcon,
  CheckIcon,
} from '@heroicons/react/24/outline';

export default function CreateNewsPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    category: 'Training',
    author: 'Ricks Energy Team',
    content: '',
    image: '',
    featured: false,
  });

  const [imagePreview, setImagePreview] = useState('');
  const [saving, setSaving] = useState(false);

  const categories = [
    'Training',
    'Safety',
    'Industry News',
    'Company Updates',
    'Projects',
    'Certifications',
  ];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        setFormData({ ...formData, image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent, status: 'draft' | 'published') => {
    e.preventDefault();
    setSaving(true);

    // TODO: Implement API call to save article
    console.log('Saving article:', { ...formData, status });

    // Simulate API call
    setTimeout(() => {
      setSaving(false);
      router.push('/admin/news');
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
          href="/admin/news"
          className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-4"
        >
          <ArrowLeftIcon className="h-5 w-5" />
          Back to News
        </Link>
        <h1 className="text-3xl font-bold text-slate-900">Create New Article</h1>
        <p className="text-slate-600 mt-1">Write and publish a new news article</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-2 space-y-6"
        >
          {/* Basic Info */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">Basic Information</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Article Title *
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Enter article title..."
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Excerpt *
                </label>
                <textarea
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  placeholder="Brief summary of the article..."
                  rows={3}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Category *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Author *
                  </label>
                  <input
                    type="text"
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">Featured Image</h2>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Upload Image *
              </label>
              
              {imagePreview ? (
                <div className="relative w-full h-64 rounded-lg overflow-hidden mb-4">
                  <Image
                    src={imagePreview}
                    alt="Preview"
                    fill
                    className="object-cover"
                  />
                  <button
                    onClick={() => {
                      setImagePreview('');
                      setFormData({ ...formData, image: '' });
                    }}
                    className="absolute top-2 right-2 px-3 py-1 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-slate-300 rounded-lg cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-colors">
                  <PhotoIcon className="h-12 w-12 text-slate-400 mb-2" />
                  <span className="text-sm text-slate-600 mb-1">Click to upload image</span>
                  <span className="text-xs text-slate-500">PNG, JPG, GIF up to 10MB</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              )}
            </div>
          </div>

          {/* Content Editor */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">Article Content</h2>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Content (HTML Supported) *
              </label>
              <textarea
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                placeholder="Write your article content here... You can use HTML tags for formatting."
                rows={20}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none font-mono text-sm"
                required
              />
              <p className="text-xs text-slate-500 mt-2">
                Tip: Use HTML tags like &lt;h2&gt;, &lt;p&gt;, &lt;ul&gt;, &lt;li&gt;, &lt;strong&gt; for formatting
              </p>
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
          {/* Publish Actions */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sticky top-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">Publish</h2>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="featured"
                  checked={formData.featured}
                  onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                  className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="featured" className="text-sm font-medium text-slate-700">
                  Mark as Featured Article
                </label>
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
                  onClick={(e) => handleSubmit(e, 'published')}
                  disabled={saving}
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-lg shadow-blue-600/30 disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {saving ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Publishing...
                    </>
                  ) : (
                    <>
                      <CheckIcon className="h-5 w-5" />
                      Publish Article
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Preview */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <EyeIcon className="h-5 w-5" />
              Quick Preview
            </h2>
            
            <div className="space-y-3">
              {imagePreview && (
                <div className="relative w-full h-32 rounded-lg overflow-hidden">
                  <Image
                    src={imagePreview}
                    alt="Preview"
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              
              <div>
                <h3 className="font-semibold text-slate-900 line-clamp-2">
                  {formData.title || 'Article Title'}
                </h3>
                <p className="text-sm text-slate-600 mt-2 line-clamp-3">
                  {formData.excerpt || 'Article excerpt will appear here...'}
                </p>
                <div className="flex items-center gap-2 mt-3">
                  <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded">
                    {formData.category}
                  </span>
                  {formData.featured && (
                    <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-700 rounded">
                      Featured
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
