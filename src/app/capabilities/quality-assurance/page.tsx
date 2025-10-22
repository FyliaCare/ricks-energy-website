'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ShieldCheckIcon, 
  CheckCircleIcon, 
  ClipboardDocumentCheckIcon,
  UserGroupIcon,
  ChartBarIcon,
  ArrowLeftIcon,
  DocumentTextIcon,
  BeakerIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';

export default function QualityAssurancePage() {
  const features = [
    {
      icon: ClipboardDocumentCheckIcon,
      title: 'ISO Certified Processes',
      description: 'All our operations are ISO 9001:2015 certified, ensuring consistent quality management across all projects and services.'
    },
    {
      icon: UserGroupIcon,
      title: 'Dedicated QA Team',
      description: 'Expert quality assurance professionals oversee every phase of project execution, from planning to completion.'
    },
    {
      icon: ChartBarIcon,
      title: 'Performance Metrics',
      description: 'Comprehensive KPI tracking and reporting systems ensure measurable quality outcomes and continuous improvement.'
    },
    {
      icon: DocumentTextIcon,
      title: 'Documentation Standards',
      description: 'Rigorous documentation protocols maintain complete traceability and compliance with industry regulations.'
    },
    {
      icon: BeakerIcon,
      title: 'Testing & Validation',
      description: 'Multiple quality checkpoints and validation procedures at every stage ensure zero-defect delivery.'
    },
    {
      icon: WrenchScrewdriverIcon,
      title: 'Equipment Calibration',
      description: 'All testing equipment is regularly calibrated and certified to international standards for accurate results.'
    }
  ];

  const processes = [
    {
      step: '01',
      title: 'Pre-Project Planning',
      description: 'Comprehensive quality planning and risk assessment before project initiation. We establish clear quality objectives and acceptance criteria.'
    },
    {
      step: '02',
      title: 'Material Verification',
      description: 'Rigorous inspection and verification of all materials, ensuring compliance with specifications and industry standards.'
    },
    {
      step: '03',
      title: 'In-Process Monitoring',
      description: 'Continuous monitoring during execution with regular quality checkpoints and real-time corrective actions when needed.'
    },
    {
      step: '04',
      title: 'Final Inspection',
      description: 'Comprehensive final inspection and testing before handover, with detailed documentation and certification.'
    },
    {
      step: '05',
      title: 'Post-Delivery Support',
      description: 'Ongoing quality assurance support and follow-up to ensure sustained performance and client satisfaction.'
    }
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
              <ShieldCheckIcon className="h-16 w-16 text-amber-400" />
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Quality Assurance
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
              Dedicated project management and quality team ensuring every project meets industry standards and exceeds client expectations. Our commitment to quality is embedded in every aspect of our operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Quality Commitment</h2>
            <div className="prose prose-lg max-w-none text-slate-600">
              <p className="mb-4">
                At Ricks Energy Limited, quality assurance is not just a department—it's a fundamental principle that guides every decision and action. Our comprehensive QA framework ensures that all services delivered meet the highest international standards while maintaining cost-effectiveness and operational efficiency.
              </p>
              <p className="mb-4">
                We understand that in the Oil & Gas industry, quality is directly linked to safety, reliability, and long-term performance. That's why we've invested heavily in building a robust quality management system that encompasses people, processes, and technology.
              </p>
              <p>
                Our quality assurance team works proactively, identifying potential issues before they become problems, ensuring smooth project execution, and delivering results that stand the test of time.
              </p>
            </div>
          </motion.div>

          {/* Key Features */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Quality Assurance Features</h2>
              <p className="text-xl text-slate-600">
                Comprehensive quality management across all operations
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-slate-200 hover:border-blue-400"
                >
                  <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-blue-900 to-blue-700 rounded-xl shadow-lg group-hover:shadow-amber-500/50 group-hover:scale-110 transition-all duration-500">
                    <feature.icon className="h-8 w-8 text-white group-hover:text-amber-300 transition-colors" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-900 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Quality Process */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Quality Process</h2>
              <p className="text-xl text-slate-600">
                A systematic approach to ensuring excellence at every stage
              </p>
            </motion.div>

            <div className="space-y-8">
              {processes.map((process, index) => (
                <motion.div
                  key={process.step}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative bg-linear-to-r from-blue-50 to-white rounded-2xl p-8 border-l-4 border-blue-900 hover:border-amber-500 shadow-md hover:shadow-xl transition-all duration-500"
                >
                  <div className="flex items-start gap-6">
                    <div className="shrink-0">
                      <div className="text-5xl font-bold text-blue-900/20 group-hover:text-amber-500/30 transition-colors">
                        {process.step}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-900 transition-colors">
                        {process.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed text-lg">
                        {process.description}
                      </p>
                    </div>
                    
                    <CheckCircleIcon className="h-8 w-8 text-blue-900 group-hover:text-amber-500 group-hover:scale-125 transition-all duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-linear-to-br from-blue-900 to-blue-700 rounded-3xl p-12 text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-4">Experience Quality Excellence</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Partner with us for quality assurance that delivers peace of mind and measurable results.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105"
            >
              Get in Touch
              <ArrowLeftIcon className="h-5 w-5 rotate-180" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
