'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { 
  WrenchScrewdriverIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  CogIcon,
  AcademicCapIcon,
  SunIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  PhoneIcon,
  EnvelopeIcon,
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

// Service-specific benefits
const getServiceBenefits = (serviceId: string) => {
  const benefitsMap: Record<string, Array<{ title: string; description: string }>> = {
    'fabric-maintenance': [
      {
        title: 'Minimal Downtime',
        description: 'Our efficient processes ensure maintenance work is completed with minimal disruption to your operations.',
      },
      {
        title: 'Cost-Effective Solutions',
        description: 'Preventive maintenance strategies that reduce long-term costs and extend asset lifespan.',
      },
      {
        title: 'Comprehensive Approach',
        description: 'From coating to welding, we handle all aspects of fabric maintenance under one roof.',
      },
      {
        title: 'Experienced Technicians',
        description: 'Our team brings years of offshore and onshore fabric maintenance expertise.',
      },
    ],
    'ndt': [
      {
        title: 'Advanced Technology',
        description: 'Latest NDT equipment including PAUT, TOFD, and advanced corrosion mapping systems.',
      },
      {
        title: 'No Asset Shutdown',
        description: 'Inspect critical assets without stopping production, saving time and money.',
      },
      {
        title: 'Certified Inspectors',
        description: 'All inspectors are internationally certified (PCN, ASNT) with proven expertise.',
      },
      {
        title: 'Detailed Reporting',
        description: 'Comprehensive digital reports with 3D mapping and actionable insights.',
      },
    ],
    'lifting-rigging': [
      {
        title: 'Safety Compliance',
        description: 'Full compliance with LOLER, PUWER, and international lifting standards.',
      },
      {
        title: 'Thorough Inspections',
        description: 'Detailed examination of all lifting equipment with certification and documentation.',
      },
      {
        title: 'Load Calculation Expertise',
        description: 'Precise load calculations and lifting plans for complex operations.',
      },
      {
        title: 'Emergency Repairs',
        description: '24/7 availability for urgent lifting equipment repairs and recertification.',
      },
    ],
    'mechanical': [
      {
        title: 'Qualified Tradesmen',
        description: 'Fully qualified pipefitters, welders, and mechanical technicians with verified competency.',
      },
      {
        title: 'Turnkey Solutions',
        description: 'Complete mechanical services from installation to commissioning and maintenance.',
      },
      {
        title: 'Rapid Mobilization',
        description: 'Quick deployment of skilled teams for shutdown support and emergency work.',
      },
      {
        title: 'Quality Workmanship',
        description: 'All work performed to international standards with rigorous quality checks.',
      },
    ],
    'work-at-height': [
      {
        title: 'Height Safety Specialists',
        description: 'Expert team trained in all aspects of working at height and fall protection.',
      },
      {
        title: 'Scaffold Design',
        description: 'Custom scaffold designs for complex structures with full engineering support.',
      },
      {
        title: 'HSE Focused',
        description: 'Comprehensive risk assessments and method statements for every project.',
      },
      {
        title: 'Equipment Supply',
        description: 'Full range of certified height safety equipment available for hire or sale.',
      },
    ],
    'rope-access': [
      {
        title: 'IRATA Certified',
        description: 'All technicians hold current IRATA certification with extensive offshore experience.',
      },
      {
        title: 'Cost-Effective Access',
        description: 'Rope access eliminates need for expensive scaffolding and reduces project costs.',
      },
      {
        title: 'Training Excellence',
        description: 'Certified training center offering IRATA Level 1, 2, and 3 courses.',
      },
      {
        title: 'Emergency Rescue',
        description: 'Specialized rope rescue teams available 24/7 for emergency situations.',
      },
    ],
    'training': [
      {
        title: 'Accredited Programs',
        description: 'All training courses are internationally recognized and industry-accredited.',
      },
      {
        title: 'Experienced Instructors',
        description: 'Learn from industry veterans with real-world experience and teaching expertise.',
      },
      {
        title: 'Practical Focus',
        description: 'Hands-on training with actual equipment in realistic work scenarios.',
      },
      {
        title: 'Certification Support',
        description: 'Full support for obtaining industry certifications and maintaining competency.',
      },
    ],
    'supplies': [
      {
        title: 'Genuine Products',
        description: 'Only genuine, high-quality industrial equipment and materials from trusted brands.',
      },
      {
        title: 'Fast Delivery',
        description: 'Efficient logistics network ensures timely delivery to your location.',
      },
      {
        title: 'Competitive Pricing',
        description: 'Volume purchasing power allows us to offer competitive rates without compromising quality.',
      },
      {
        title: 'Technical Support',
        description: 'Expert guidance on equipment selection and proper usage for your specific needs.',
      },
    ],
    'solar-energy': [
      {
        title: 'Complete Solutions',
        description: 'End-to-end solar solutions from design through installation to ongoing maintenance.',
      },
      {
        title: 'Energy Savings',
        description: 'Significant reduction in energy costs with rapid return on investment.',
      },
      {
        title: 'Green Technology',
        description: 'Latest solar and battery technology for maximum efficiency and reliability.',
      },
      {
        title: 'Smart Monitoring',
        description: 'Advanced energy management systems with real-time monitoring and optimization.',
      },
    ],
  };

  return benefitsMap[serviceId] || [
    {
      title: 'Expert Service',
      description: 'Professional service delivery by certified experts.',
    },
    {
      title: 'Quality Assured',
      description: 'ISO-certified processes for consistent quality.',
    },
    {
      title: 'Safety First',
      description: 'Strict adherence to international safety standards.',
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock support for your urgent needs.',
    },
  ];
};

export default function ServiceDetail() {
  const params = useParams();
  const serviceId = params.id as string;
  
  const service = services.find(s => s.id === serviceId);
  
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Service Not Found</h1>
          <Link href="/services" className="text-blue-900 hover:text-blue-700">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = iconMap[service.icon] || WrenchScrewdriverIcon;

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-blue-900 via-slate-900 to-blue-800 text-white py-24">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIxMjEyMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-10"></div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Back button */}
            <Link 
              href="/services"
              className="inline-flex items-center gap-2 text-blue-100 hover:text-white mb-8 group"
            >
              <ArrowLeftIcon className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Services</span>
            </Link>

            <div className="flex items-start gap-6 mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-amber-500/20 rounded-2xl border border-amber-500/30">
                <IconComponent className="h-10 w-10 text-amber-400" />
              </div>
              
              <div className="flex-1">
                <h1 className="text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                  {service.title}
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
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
              Key Features & Capabilities
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive solutions delivered by certified professionals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-slate-200 hover:border-blue-400"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0">
                    <div className="w-10 h-10 bg-linear-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <CheckCircleIcon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-900 transition-colors">
                      {feature}
                    </h3>
                    <p className="text-sm text-slate-600 group-hover:text-slate-700 transition-colors">
                      Professional implementation with quality assurance
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose This Service */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Why Choose Our {service.title}?
              </h2>
              <div className="space-y-6">
                {getServiceBenefits(serviceId).map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4"
                  >
                    <div className="shrink-0">
                      <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center">
                        <CheckCircleIcon className="h-7 w-7 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative bg-linear-to-br from-blue-900 to-blue-700 rounded-3xl p-8 lg:p-12 text-white">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIxMjEyMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-10 rounded-3xl"></div>
                
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-6">Get Started Today</h3>
                  <p className="text-blue-100 mb-8 text-lg">
                    Contact our team for a free consultation and customized solution for your needs.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <PhoneIcon className="h-6 w-6 text-amber-400" />
                      <div>
                        <div className="text-sm text-blue-200">Call Us</div>
                        <a href="tel:+233579541111" className="font-semibold hover:text-amber-400 transition-colors">
                          +(233) 579541111
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <EnvelopeIcon className="h-6 w-6 text-amber-400" />
                      <div>
                        <div className="text-sm text-blue-200">Email Us</div>
                        <a href="mailto:gm@ricksenergy.co" className="font-semibold hover:text-amber-400 transition-colors">
                          gm@ricksenergy.co
                        </a>
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105"
                  >
                    Request a Quote
                    <ArrowRightIcon className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-24 bg-linear-to-br from-slate-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Explore Other Services
            </h2>
            <p className="text-lg text-slate-600">
              Discover our full range of oil and gas solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {services
              .filter(s => s.id !== serviceId)
              .slice(0, 3)
              .map((relatedService, index) => {
                const RelatedIcon = iconMap[relatedService.icon] || WrenchScrewdriverIcon;
                return (
                  <Link key={relatedService.id} href={`/services/${relatedService.id}`}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-slate-200 hover:border-blue-400 cursor-pointer"
                    >
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-linear-to-br from-blue-900 to-blue-700 rounded-xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <RelatedIcon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-900 transition-colors">
                        {relatedService.title}
                      </h3>
                      <p className="text-sm text-slate-600 line-clamp-2 group-hover:text-slate-700 transition-colors">
                        {relatedService.description}
                      </p>
                      <div className="flex items-center gap-2 text-blue-900 font-semibold mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <span className="text-sm">Learn More</span>
                        <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </motion.div>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>
    </div>
  );
}
