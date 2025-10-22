'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import {
  WrenchScrewdriverIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  CheckCircleIcon,
  ClockIcon,
  MapPinIcon,
  ArrowRightIcon,
  SparklesIcon,
  TrophyIcon,
  BuildingOffice2Icon,
} from '@heroicons/react/24/outline';
import { projects } from '@/data/company';

const categories = ['All', 'Fabric Maintenance', 'NDT', 'Mechanical', 'Rope Access', 'Training', 'Lifting & Rigging', 'Solar Energy', 'Emergency Services'];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getStatusBadge = (status: string) => {
    const badges = {
      completed: 'bg-green-100 text-green-800 border-green-300',
      ongoing: 'bg-blue-100 text-blue-800 border-blue-300',
      planned: 'bg-amber-100 text-amber-800 border-amber-300',
    };
    return badges[status as keyof typeof badges] || badges.completed;
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-blue-900 via-slate-900 to-blue-800 text-white py-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIxMjEyMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-10"></div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-block mb-6">
              <span className="bg-amber-500/20 text-amber-400 px-6 py-3 rounded-full text-sm font-semibold border border-amber-500/30">
                Our Projects
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Delivering Excellence
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-orange-500">
                Across Africa
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of successfully delivered projects spanning fabric maintenance, NDT inspection, 
              mechanical services, and specialized solutions across the African energy sector.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-slate-50 sticky top-0 z-10 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-900 text-white shadow-lg scale-105'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-linear-to-br from-slate-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              {selectedCategory === 'All' ? 'Featured Projects' : `${selectedCategory} Projects`}
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Showcasing our commitment to excellence and safety across diverse energy projects
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-slate-200 hover:border-blue-400"
              >
                {/* Project Image Placeholder */}
                <div className="relative h-64 bg-linear-to-br from-blue-900 to-blue-700 overflow-hidden">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIxMjEyMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className={`px-4 py-2 rounded-full text-xs font-bold uppercase border ${getStatusBadge(project.status)}`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-semibold border border-white/30">
                      {project.category}
                    </span>
                  </div>

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-900 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed mb-6 group-hover:text-slate-700 transition-colors">
                    {project.description}
                  </p>

                  {/* Project Meta */}
                  <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-slate-200">
                    <div className="flex items-center gap-2 text-sm">
                      <MapPinIcon className="h-5 w-5 text-blue-900 shrink-0" />
                      <span className="text-slate-600">{project.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <ClockIcon className="h-5 w-5 text-blue-900 shrink-0" />
                      <span className="text-slate-600">{project.duration}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 mb-3 text-sm uppercase tracking-wide">Key Highlights</h4>
                    <ul className="space-y-2">
                      {project.highlights.slice(0, 3).map((highlight, idx) => (
                        <li key={idx} className="text-sm text-slate-600 flex items-start">
                          <CheckCircleIcon className="h-4 w-4 text-green-600 shrink-0 mt-0.5 mr-2" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* View Details */}
                  <Link 
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center gap-2 text-blue-900 font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                  >
                    <span className="text-sm">View Full Details</span>
                    <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Bottom accent line */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-linear-to-r from-blue-900 via-amber-500 to-blue-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative bg-linear-to-br from-blue-900 to-blue-700 rounded-3xl p-12 lg:p-16 overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIxMjEyMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-10"></div>
            
            <div className="relative z-10 text-center text-white">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Start Your Next Project With Us
              </h2>
              <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                Let's discuss how we can deliver excellence on your next energy project across Africa.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105"
                >
                  Discuss Your Project
                  <ArrowRightIcon className="h-5 w-5" />
                </Link>
                <Link 
                  href="/services"
                  className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Explore Our Services
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
