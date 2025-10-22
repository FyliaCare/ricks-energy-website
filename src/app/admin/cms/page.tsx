'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Edit, Trash2, Eye, Calendar, Image as ImageIcon } from 'lucide-react';

type ContentType = 'news' | 'projects';

export default function CMSAdminPage() {
  const [activeTab, setActiveTab] = useState<ContentType>('news');
  const [showCreateModal, setShowCreateModal] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-linear-to-br from-[#0A2647] via-[#144272] to-[#2C74B3] text-white py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl font-bold mb-4">Content Management System</h1>
            <p className="text-blue-100">Manage news articles and projects</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Tabs */}
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => setActiveTab('news')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                activeTab === 'news'
                  ? 'bg-[#0A2647] text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              News Articles
            </button>
            <button
              onClick={() => setActiveTab('projects')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                activeTab === 'projects'
                  ? 'bg-[#0A2647] text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Projects
            </button>
          </div>

          {/* Create Button */}
          <div className="mb-8">
            <button
              onClick={() => setShowCreateModal(true)}
              className="flex items-center gap-2 px-6 py-3 bg-[#FDB400] text-[#0A2647] font-semibold rounded-lg hover:bg-[#FDB400]/90 transition-colors"
            >
              <Plus className="w-5 h-5" />
              Create New {activeTab === 'news' ? 'Article' : 'Project'}
            </button>
          </div>

          {/* Content List */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {activeTab === 'news' ? <NewsManagement /> : <ProjectsManagement />}
          </div>
        </div>
      </section>

      {/* Create Modal */}
      {showCreateModal && (
        <CreateModal
          type={activeTab}
          onClose={() => setShowCreateModal(false)}
        />
      )}
    </div>
  );
}

function NewsManagement() {
  const mockNews = [
    {
      id: 1,
      title: 'Ricks Energy Opens State-of-the-Art Rope Access Training Facility at TTU JTTC',
      category: 'Facilities & Infrastructure',
      publishedAt: '2025-10-15',
      status: 'published',
    },
    {
      id: 2,
      title: 'Ricks Energy Partners with UK-Based Hightech Rope Access for Training Excellence',
      category: 'Partnerships',
      publishedAt: '2025-10-18',
      status: 'published',
    },
    {
      id: 3,
      title: 'Historic Day: First Rope Access Students Undergo IRATA Assessment',
      category: 'Training & Development',
      publishedAt: '2025-10-21',
      status: 'published',
    },
  ];

  return (
    <div className="divide-y">
      {mockNews.map((item) => (
        <div key={item.id} className="p-6 hover:bg-gray-50 transition-colors">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                  {item.category}
                </span>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(item.publishedAt).toLocaleDateString()}</span>
                </div>
                <span className={`px-3 py-1 rounded-full ${
                  item.status === 'published' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {item.status}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 text-gray-600 hover:text-[#2C74B3] hover:bg-blue-50 rounded-lg transition-colors">
                <Eye className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-600 hover:text-[#2C74B3] hover:bg-blue-50 rounded-lg transition-colors">
                <Edit className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function ProjectsManagement() {
  const mockProjects = [
    {
      id: 1,
      title: 'FPSO Kwame Nkrumah Maintenance',
      category: 'Oil & Gas',
      location: 'Ghana',
      status: 'completed',
    },
    {
      id: 2,
      title: 'Tema Oil Refinery Shutdown Support',
      category: 'Industrial',
      location: 'Ghana',
      status: 'ongoing',
    },
    {
      id: 3,
      title: 'Jubilee Field Platform Inspection',
      category: 'Offshore',
      location: 'Ghana',
      status: 'completed',
    },
    {
      id: 4,
      title: 'TEN FPSO Annual Maintenance',
      category: 'Offshore',
      location: 'Ghana',
      status: 'ongoing',
    },
    {
      id: 5,
      title: 'Sankofa Gas Platform Inspection',
      category: 'Oil & Gas',
      location: 'Ghana',
      status: 'completed',
    },
  ];

  return (
    <div className="divide-y">
      {mockProjects.map((item) => (
        <div key={item.id} className="p-6 hover:bg-gray-50 transition-colors">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full">
                  {item.category}
                </span>
                <span>{item.location}</span>
                <span className={`px-3 py-1 rounded-full ${
                  item.status === 'completed' 
                    ? 'bg-green-100 text-green-700' 
                    : item.status === 'ongoing'
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {item.status}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 text-gray-600 hover:text-[#2C74B3] hover:bg-blue-50 rounded-lg transition-colors">
                <Eye className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-600 hover:text-[#2C74B3] hover:bg-blue-50 rounded-lg transition-colors">
                <Edit className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function CreateModal({ type, onClose }: { type: ContentType; onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="p-6 border-b sticky top-0 bg-white z-10">
          <h2 className="text-2xl font-bold text-gray-900">
            Create New {type === 'news' ? 'Article' : 'Project'}
          </h2>
        </div>

        <form className="p-6 space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Title *
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2C74B3]"
              placeholder={`Enter ${type === 'news' ? 'article' : 'project'} title`}
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Category *
            </label>
            <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2C74B3]">
              {type === 'news' ? (
                <>
                  <option>Facilities & Infrastructure</option>
                  <option>Partnerships</option>
                  <option>Training & Development</option>
                  <option>Projects</option>
                  <option>Company News</option>
                </>
              ) : (
                <>
                  <option>Oil & Gas</option>
                  <option>Offshore</option>
                  <option>Industrial</option>
                  <option>Petrochemical</option>
                  <option>Mining</option>
                  <option>Renewable Energy</option>
                </>
              )}
            </select>
          </div>

          {/* Excerpt/Description */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {type === 'news' ? 'Excerpt' : 'Description'} *
            </label>
            <textarea
              rows={3}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2C74B3]"
              placeholder={`Brief ${type === 'news' ? 'excerpt' : 'description'}...`}
            />
          </div>

          {/* Content */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {type === 'news' ? 'Content' : 'Details'} *
            </label>
            <textarea
              rows={10}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2C74B3]"
              placeholder={`Full ${type === 'news' ? 'article content' : 'project details'}...`}
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Featured Image
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#2C74B3] transition-colors cursor-pointer">
              <ImageIcon className="w-12 h-12 mx-auto text-gray-400 mb-4" />
              <p className="text-gray-600 mb-2">Click to upload or drag and drop</p>
              <p className="text-sm text-gray-500">PNG, JPG up to 10MB</p>
            </div>
          </div>

          {/* Additional Fields for Projects */}
          {type === 'projects' && (
            <>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Location *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2C74B3]"
                    placeholder="Project location"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Status *
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2C74B3]">
                    <option>Completed</option>
                    <option>Ongoing</option>
                    <option>Planned</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Client
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2C74B3]"
                    placeholder="Client name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Duration
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2C74B3]"
                    placeholder="e.g., 6 months"
                  />
                </div>
              </div>
            </>
          )}

          {/* Date for News */}
          {type === 'news' && (
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Publish Date *
              </label>
              <input
                type="date"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2C74B3]"
              />
            </div>
          )}

          {/* Author for News */}
          {type === 'news' && (
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Author
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2C74B3]"
                placeholder="Author name"
                defaultValue="Ricks Energy Media Team"
              />
            </div>
          )}

          {/* Featured Toggle */}
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="featured"
              className="w-5 h-5 text-[#2C74B3] rounded focus:ring-[#2C74B3]"
            />
            <label htmlFor="featured" className="text-sm font-semibold text-gray-700">
              Mark as featured
            </label>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4 border-t">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-[#0A2647] text-white font-semibold rounded-lg hover:bg-[#144272] transition-colors"
            >
              Create {type === 'news' ? 'Article' : 'Project'}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
