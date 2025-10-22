'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  WrenchScrewdriverIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  CogIcon,
  AcademicCapIcon,
  SunIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  SparklesIcon,
  ClipboardDocumentCheckIcon,
  BeakerIcon,
  TruckIcon
} from '@heroicons/react/24/outline';
import { services } from '@/data/company';

// Icon mapping for services
const iconMap: Record<string, any> = {
  WrenchScrewdriverIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  CogIcon,
  AcademicCapIcon,
  SunIcon,
};

export default function Services() {
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
                Our Services
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Africa's Premier
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-orange-500">
                Energy Solutions
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              From NDT inspection to mechanical maintenance, welding to training - we provide end-to-end services 
              across Africa, keeping your operations running smoothly, safely, and efficiently.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-24 bg-linear-to-br from-slate-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wide">What We Offer</span>
            <h2 className="text-4xl font-bold text-slate-900 mt-3 mb-4">
              Our Service Portfolio
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Industry-leading expertise serving energy markets across the African continent
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon] || WrenchScrewdriverIcon;
              return (
                <Link key={service.id} href={`/services/${service.id}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-slate-200 hover:border-blue-400 overflow-hidden cursor-pointer h-full"
                  >
                    {/* Animated background gradient */}
                    <div className="absolute inset-0 bg-linear-to-br from-blue-50/0 via-amber-50/0 to-blue-50/0 group-hover:from-blue-50 group-hover:via-amber-50/50 group-hover:to-blue-50 transition-all duration-500"></div>
                    
                    {/* Decorative corner */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-br from-blue-500/5 to-transparent rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-700"></div>
                    
                    <div className="relative z-10">
                      <div className="inline-flex items-center justify-center w-14 h-14 bg-linear-to-br from-blue-900 to-blue-700 rounded-xl shadow-lg mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        <IconComponent className="h-7 w-7 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-900 transition-colors line-clamp-2">
                        {service.title}
                      </h3>
                      
                      <p className="text-sm text-slate-600 leading-relaxed mb-4 group-hover:text-slate-700 transition-colors line-clamp-3">
                        {service.description}
                      </p>
                      
                      {/* Learn More indicator */}
                      <div className="flex items-center gap-2 text-blue-900 font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <span className="text-sm">Learn More</span>
                        <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                      
                      {/* Bottom accent line */}
                      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-linear-to-r from-blue-900 via-amber-500 to-blue-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full"></div>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wide">How We Work</span>
            <h2 className="text-4xl font-bold text-slate-900 mt-3 mb-4">
              Our Service Delivery Process
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              From initial consultation to ongoing support, we guide you through every step
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'We assess your needs, review site conditions, and understand your operational requirements.',
                icon: ClipboardDocumentCheckIcon,
                color: 'from-blue-500 to-blue-700'
              },
              {
                step: '02',
                title: 'Planning & Design',
                description: 'Our engineers create detailed plans, specifications, and safety protocols for your project.',
                icon: BeakerIcon,
                color: 'from-amber-500 to-orange-600'
              },
              {
                step: '03',
                title: 'Execution',
                description: 'Our certified technicians execute the work with precision, safety, and minimal disruption.',
                icon: CogIcon,
                color: 'from-green-500 to-emerald-600'
              },
              {
                step: '04',
                title: 'Support & Maintenance',
                description: 'We provide ongoing monitoring, maintenance, and 24/7 emergency support services.',
                icon: TruckIcon,
                color: 'from-purple-500 to-purple-700'
              }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-slate-200 hover:border-blue-400 h-full">
                  {/* Step number badge */}
                  <div className={`absolute -top-4 -right-4 w-12 h-12 bg-linear-to-br ${process.color} rounded-full flex items-center justify-center text-white font-bold shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {process.step}
                  </div>
                  
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-linear-to-br ${process.color} rounded-xl shadow-lg mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <process.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-900 transition-colors">
                    {process.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                    {process.description}
                  </p>
                </div>
                
                {/* Connector arrow (except for last item) */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <svg className="w-6 h-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services Section */}
      <section className="py-24 bg-linear-to-br from-blue-900 via-slate-900 to-blue-800 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-amber-400 font-semibold text-sm uppercase tracking-wide">Why Choose Us</span>
            <h2 className="text-4xl font-bold mt-3 mb-4">
              Service Excellence That Sets Us Apart
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our commitment to quality, safety, and customer satisfaction makes us Africa's preferred energy services partner
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheckIcon,
                title: 'Certified Professionals',
                description: 'All our technicians hold international certifications and undergo continuous training.',
              },
              {
                icon: CheckCircleIcon,
                title: 'Quality Guaranteed',
                description: 'ISO-certified processes ensure consistent quality in every project we deliver.',
              },
              {
                icon: SparklesIcon,
                title: '24/7 Emergency Response',
                description: 'Round-the-clock support team ready to respond to your urgent needs.',
              },
              {
                icon: CogIcon,
                title: 'Latest Equipment',
                description: 'State-of-the-art tools and technology for superior results and efficiency.',
              },
              {
                icon: WrenchScrewdriverIcon,
                title: 'Comprehensive Solutions',
                description: 'End-to-end service coverage from inspection to maintenance and repair.',
              },
              {
                icon: AcademicCapIcon,
                title: 'Knowledge Transfer',
                description: 'Training programs to build local capacity and enhance your team capabilities.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 hover:border-amber-400/50 transition-all duration-500 hover:scale-105"
              >
                <item.icon className="h-12 w-12 text-amber-400 mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
                <h3 className="text-xl font-bold mb-3 group-hover:text-amber-300 transition-colors">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors">{item.description}</p>
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
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIxMjEyMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-10"></div>
            
            <div className="relative z-10 text-center text-white">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Ready to Experience Service Excellence?
              </h2>
              <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                Get a free consultation and custom quote for your energy service needs anywhere in Africa. 
                Our continental team of experts is ready to help you succeed.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105"
                >
                  Get Free Quote
                  <ArrowRightIcon className="h-5 w-5" />
                </Link>
                <Link 
                  href="/about"
                  className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}