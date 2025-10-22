'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  CheckCircleIcon, 
  ShieldCheckIcon,
  UserGroupIcon,
  ClipboardDocumentCheckIcon,
  ExclamationTriangleIcon,
  HeartIcon,
  ArrowLeftIcon,
  AcademicCapIcon,
  DocumentCheckIcon
} from '@heroicons/react/24/outline';

export default function SafetyExcellencePage() {
  const safetyPillars = [
    {
      icon: ExclamationTriangleIcon,
      title: 'Zero Tolerance Policy',
      description: 'Absolute zero tolerance for safety violations. Every team member has the authority to stop work if safety is compromised.'
    },
    {
      icon: AcademicCapIcon,
      title: 'Continuous Training',
      description: 'Regular HSE training programs, certifications, and drills to keep our workforce prepared for any situation.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'PPE & Equipment',
      description: 'State-of-the-art personal protective equipment and safety gear for all personnel at all times.'
    },
    {
      icon: ClipboardDocumentCheckIcon,
      title: 'Risk Assessment',
      description: 'Comprehensive risk assessments conducted before every operation with detailed mitigation strategies.'
    },
    {
      icon: DocumentCheckIcon,
      title: 'Safety Audits',
      description: 'Regular internal and external safety audits ensure compliance with international HSE standards.'
    },
    {
      icon: HeartIcon,
      title: 'Health Monitoring',
      description: 'Ongoing health monitoring programs and occupational health services for all team members.'
    }
  ];

  const stats = [
    { value: '0', label: 'Lost Time Incidents', sublabel: 'Since inception' },
    { value: '100%', label: 'HSE Compliance', sublabel: 'Across all projects' },
    { value: '5000+', label: 'Safety Training Hours', sublabel: 'Annually' },
    { value: '24/7', label: 'HSE Monitoring', sublabel: 'On all sites' }
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
              <CheckCircleIcon className="h-16 w-16 text-amber-400" />
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Safety Excellence
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
              Zero tolerance for safety violations. We prioritize HSE compliance with continuous training, state-of-the-art safety equipment, and a culture where safety is everyone's responsibility.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-linear-to-br from-blue-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-blue-900 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-slate-900 mb-1">{stat.label}</div>
                <div className="text-sm text-slate-600">{stat.sublabel}</div>
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Safety Philosophy</h2>
            <div className="prose prose-lg max-w-none text-slate-600">
              <p className="mb-4">
                Safety is not negotiable. At Ricks Energy Limited, we believe that every person has the right to return home safely at the end of each workday. This belief drives our comprehensive Health, Safety, and Environment (HSE) program.
              </p>
              <p className="mb-4">
                Our safety culture is built on proactive risk management, continuous improvement, and the empowerment of every team member to prioritize safety above all else. We maintain a zero-incident track record through rigorous adherence to international safety standards and best practices.
              </p>
            </div>
          </motion.div>

          {/* Safety Pillars */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Six Pillars of Safety</h2>
              <p className="text-xl text-slate-600">
                Our comprehensive approach to workplace safety
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {safetyPillars.map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-slate-200 hover:border-blue-400"
                >
                  <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-blue-900 to-blue-700 rounded-xl shadow-lg group-hover:shadow-amber-500/50 group-hover:scale-110 transition-all duration-500">
                    <pillar.icon className="h-8 w-8 text-white group-hover:text-amber-300 transition-colors" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-900 transition-colors">
                    {pillar.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
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
            <ShieldCheckIcon className="h-20 w-20 text-amber-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Safety is Our Priority</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Partner with a company that never compromises on safety. Your team deserves the best protection.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105"
            >
              Contact Our Safety Team
              <ArrowLeftIcon className="h-5 w-5 rotate-180" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
