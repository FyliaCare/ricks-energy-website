'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  WrenchScrewdriverIcon,
  MapPinIcon,
  UserGroupIcon,
  ClockIcon,
  LanguageIcon,
  BuildingOfficeIcon,
  ArrowLeftIcon,
  CheckCircleIcon,
  TruckIcon
} from '@heroicons/react/24/outline';

export default function LocalExpertisePage() {
  const localAdvantages = [
    {
      icon: MapPinIcon,
      title: 'Local Presence',
      description: 'Headquartered in Takoradi, Ghana with deep understanding of the local Oil & Gas ecosystem and operational environment.'
    },
    {
      icon: UserGroupIcon,
      title: 'Ghanaian Workforce',
      description: 'Committed to local content development with over 80% Ghanaian staff, contributing to national capacity building.'
    },
    {
      icon: ClockIcon,
      title: 'Rapid Response',
      description: '24/7 emergency response capability with local teams ready to mobilize within hours for critical situations.'
    },
    {
      icon: LanguageIcon,
      title: 'Cultural Understanding',
      description: 'Navigate local business culture, customs, and communication styles effectively for smooth project execution.'
    },
    {
      icon: BuildingOfficeIcon,
      title: 'Regulatory Knowledge',
      description: 'In-depth knowledge of PNDC Law 84, Petroleum Commission requirements, and all local compliance frameworks.'
    },
    {
      icon: TruckIcon,
      title: 'Local Supply Chain',
      description: 'Established relationships with local suppliers and logistics providers ensuring cost-effective, timely deliveries.'
    }
  ];

  const ghanaExperience = [
    {
      category: 'Regulatory Compliance',
      details: [
        'Petroleum Commission PC 2025 Registered',
        'EPA Environmental Permits',
        'Local Content & Participation Compliance',
        'Ghana Revenue Authority Tax Compliance',
        'Social Security (SSNIT) Employer Status'
      ]
    },
    {
      category: 'Local Partnerships',
      details: [
        'Collaboration with Ghana National Petroleum Corporation',
        'Member of Chamber of Petroleum Consumers (COPEC)',
        'Partnership with Technical Universities for Training',
        'Engagement with Traditional Authorities',
        'Active in Local Business Associations'
      ]
    },
    {
      category: 'Community Impact',
      details: [
        'Employment of 200+ Ghanaian Professionals',
        'Annual Apprenticeship Programs',
        'Skills Development Training',
        'Support for Local Education Initiatives',
        'Community Development Projects'
      ]
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
              <WrenchScrewdriverIcon className="h-16 w-16 text-amber-400" />
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Local Expertise
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
              As a proudly Ghanaian company, we understand local regulations, logistics, business culture, and deliver with cultural sensitivity while contributing to national development.
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
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Your Local Partner</h2>
            <div className="prose prose-lg max-w-none text-slate-600">
              <p className="mb-4">
                Being Ghanaian isn't just about our location—it's about our commitment to building local capacity, contributing to the national economy, and understanding the unique challenges and opportunities of operating in Ghana's Oil & Gas sector.
              </p>
              <p className="mb-4">
                We combine international standards with local knowledge, ensuring projects are delivered efficiently while navigating the specific regulatory, cultural, and logistical landscape of Ghana and West Africa.
              </p>
            </div>
          </motion.div>

          {/* Local Advantages */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-4">The Local Advantage</h2>
              <p className="text-xl text-slate-600">
                Why local expertise matters in Ghana's Oil & Gas sector
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {localAdvantages.map((advantage, index) => (
                <motion.div
                  key={advantage.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-slate-200 hover:border-blue-400"
                >
                  <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-blue-900 to-blue-700 rounded-xl shadow-lg group-hover:shadow-amber-500/50 group-hover:scale-110 transition-all duration-500">
                    <advantage.icon className="h-8 w-8 text-white group-hover:text-amber-300 transition-colors" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-900 transition-colors">
                    {advantage.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed">
                    {advantage.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Ghana Experience */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Rooted in Ghana</h2>
              <p className="text-xl text-slate-600">
                Our commitment to Ghana's Oil & Gas sector
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {ghanaExperience.map((section, index) => (
                <motion.div
                  key={section.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-linear-to-br from-blue-50 to-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="text-2xl font-bold text-blue-900 mb-6">{section.category}</h3>
                  <ul className="space-y-3">
                    {section.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <CheckCircleIcon className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                        <span className="text-slate-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-linear-to-br from-blue-900 to-blue-700 rounded-3xl p-12 text-center text-white"
          >
            <MapPinIcon className="h-20 w-20 text-amber-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Proudly Ghanaian, Globally Competent</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Partner with a local company that understands your challenges and delivers international quality.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105"
            >
              Work With Us
              <ArrowLeftIcon className="h-5 w-5 rotate-180" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
