'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ChartBarIcon,
  GlobeAltIcon,
  AcademicCapIcon,
  UserGroupIcon,
  BuildingOffice2Icon,
  CheckBadgeIcon,
  ArrowLeftIcon,
  StarIcon
} from '@heroicons/react/24/outline';

export default function GlobalExperiencePage() {
  const globalCapabilities = [
    {
      icon: GlobeAltIcon,
      title: 'International Standards',
      description: 'Full compliance with API, ASME, ISO, and other international Oil & Gas standards across all our operations and deliverables.'
    },
    {
      icon: AcademicCapIcon,
      title: 'Certified Professionals',
      description: 'Team members hold international certifications including CSWIP, ASNT, AWS, and other globally recognized qualifications.'
    },
    {
      icon: UserGroupIcon,
      title: 'Multinational Teams',
      description: 'Diverse workforce with experience from major Oil & Gas projects in Europe, Middle East, Asia, and Africa.'
    },
    {
      icon: BuildingOffice2Icon,
      title: 'Major Project Experience',
      description: 'Track record of successful delivery on large-scale offshore platforms, refineries, and petrochemical facilities worldwide.'
    },
    {
      icon: CheckBadgeIcon,
      title: 'Quality Management',
      description: 'ISO 9001:2015 certified quality management systems aligned with international best practices.'
    },
    {
      icon: StarIcon,
      title: 'Technology Leadership',
      description: 'Deployment of cutting-edge inspection and testing technologies from leading global manufacturers.'
    }
  ];

  const projectTypes = [
    {
      region: 'West Africa',
      projects: 'FPSO maintenance, offshore platforms, subsea infrastructure',
      achievements: 'Zero LTI record across 50+ projects'
    },
    {
      region: 'Middle East',
      projects: 'Refinery turnarounds, pipeline integrity, petrochemical facilities',
      achievements: 'Completed under budget with 98% client satisfaction'
    },
    {
      region: 'North Sea',
      projects: 'Offshore inspection, platform modifications, emergency repairs',
      achievements: 'Maintained operations in extreme conditions'
    },
    {
      region: 'Asia Pacific',
      projects: 'LNG facilities, marine terminals, tank farm inspections',
      achievements: 'Award for safety excellence and innovation'
    }
  ];

  const certifications = [
    'API 570 - Piping Inspection Code',
    'API 510 - Pressure Vessel Inspection',
    'API 653 - Tank Inspection',
    'ASME Section VIII - Pressure Vessels',
    'ISO 9712 - NDT Personnel Certification',
    'CSWIP 3.1 - Welding Inspector',
    'NACE CP Level 3 - Corrosion Protection',
    'IOSH Managing Safely'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-blue-900 via-slate-900 to-blue-800 text-white py-24">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIxMjEyMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-10"></div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 mb-8 transition-colors">
            <ArrowLeftIcon className="h-5 w-5" />
            Back to Home
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block p-4 bg-amber-500/20 rounded-2xl mb-6">
              <ChartBarIcon className="h-16 w-16 text-amber-400" />
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Global Experience
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
              Our team brings international expertise from oil and gas projects worldwide with certified qualifications, global best practices, and proven track record across diverse environments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">World-Class Expertise</h2>
            <div className="prose prose-lg max-w-none text-slate-600">
              <p className="mb-4">
                Ricks Energy Limited leverages global expertise while serving local markets. Our team comprises professionals who have worked on some of the world's most challenging Oil & Gas projects, bringing that experience to every engagement.
              </p>
              <p className="mb-4">
                We maintain partnerships with international certification bodies, technology providers, and training institutions to ensure our capabilities remain at the forefront of industry standards.
              </p>
            </div>
          </motion.div>

          {/* Global Capabilities */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Global Capabilities</h2>
              <p className="text-xl text-slate-600">
                International standards meet local excellence
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {globalCapabilities.map((capability, index) => (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-slate-200 hover:border-blue-400"
                >
                  <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-blue-900 to-blue-700 rounded-xl shadow-lg group-hover:shadow-amber-500/50 group-hover:scale-110 transition-all duration-500">
                    <capability.icon className="h-8 w-8 text-white group-hover:text-amber-300 transition-colors" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-900 transition-colors">
                    {capability.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed">
                    {capability.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Regional Experience */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Global Project Portfolio</h2>
              <p className="text-xl text-slate-600">
                Proven track record across continents
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {projectTypes.map((project, index) => (
                <motion.div
                  key={project.region}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-linear-to-br from-blue-50 to-white rounded-2xl p-8 border-l-4 border-blue-900 shadow-md hover:shadow-xl transition-all duration-500"
                >
                  <h3 className="text-2xl font-bold text-blue-900 mb-3">{project.region}</h3>
                  <p className="text-slate-700 mb-4 font-medium">{project.projects}</p>
                  <div className="flex items-start gap-2">
                    <CheckBadgeIcon className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-600">{project.achievements}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-linear-to-br from-blue-900 to-blue-700 rounded-3xl p-12 text-white"
            >
              <h2 className="text-3xl font-bold mb-6 text-center">International Certifications</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors"
                  >
                    <CheckBadgeIcon className="h-6 w-6 text-amber-400 shrink-0" />
                    <span className="text-sm font-medium">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Global Standards, Local Service</h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Experience the benefit of international expertise with the responsiveness of a local partner.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-blue-900/50 transition-all duration-300 hover:scale-105"
            >
              Discuss Your Project
              <ArrowLeftIcon className="h-5 w-5 rotate-180" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
