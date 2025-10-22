'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { 
  CheckCircleIcon,
  WrenchScrewdriverIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  SparklesIcon,
  ArrowRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  CpuChipIcon,
  CogIcon,
  AcademicCapIcon,
  SunIcon,
} from '@heroicons/react/24/outline';
import { companyData, services } from '@/data/company';
import { Button } from '@/components/ui/Button';
import { organizationSchema, localBusinessSchema, servicesOfferedSchema } from '@/lib/structured-data';
import { useReducedMotion } from '@/hooks/useResponsive';
import { responsiveClasses } from '@/lib/responsive-utils';

// Dynamically import heavy components with loading states
const DynamicStatCard = dynamic(() => import('@/components/StatCard'), {
  loading: () => <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 animate-pulse h-32" />,
  ssr: false,
});

// Icon mapping for services
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  WrenchScrewdriverIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  CogIcon,
  AcademicCapIcon,
  SunIcon,
};

const stats = [
  { name: 'Years of Excellence', value: 5, suffix: '+', icon: SparklesIcon },
  { name: 'Satisfied Clients', value: 100, suffix: '+', icon: CheckCircleIcon },
  { name: 'Projects Completed', value: 200, suffix: '+', icon: WrenchScrewdriverIcon },
  { name: 'Safety Record', value: 0, suffix: ' Incidents', icon: ShieldCheckIcon, isText: true },
];

const whyChooseUs = [
  {
    title: 'Quality Assurance',
    description: 'Dedicated project management and quality team ensuring every project meets industry standards and client expectations.',
    icon: ShieldCheckIcon,
    link: '/capabilities/quality-assurance',
  },
  {
    title: 'Safety Excellence',
    description: 'Zero tolerance for safety violations. We prioritize HSE compliance with continuous training and state-of-the-art safety equipment.',
    icon: CheckCircleIcon,
    link: '/capabilities/safety-excellence',
  },
  {
    title: 'International Standards',
    description: 'Our team brings global expertise from oil and gas projects worldwide, delivering international quality standards across Africa.',
    icon: ChartBarIcon,
    link: '/capabilities/global-experience',
  },
  {
    title: 'African Expertise',
    description: 'Deep understanding of African markets, regulations, logistics, and cultural dynamics across the continent.',
    icon: WrenchScrewdriverIcon,
    link: '/capabilities/local-expertise',
  },
];

export default function Home() {
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesOfferedSchema) }}
      />
      
      <div className="overflow-hidden bg-white">
        {/* Hero Section - Mobile Optimized */}
        <section className="relative min-h-[80vh] sm:min-h-[85vh] lg:min-h-[90vh] flex items-center">
          {/* Background with overlay */}
          <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-blue-900 to-slate-800">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIxMjEyMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
            <div className="absolute inset-0 bg-linear-to-t from-slate-900/50 via-transparent to-transparent"></div>
          </div>

        <div className={`relative z-10 ${responsiveClasses.container} ${responsiveClasses.sectionPadding}`}>
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block mb-4 sm:mb-6">
                <span className="bg-amber-500/20 text-amber-400 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold border border-amber-500/30">
                  Petroleum Commission PC 2025 Registered
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Powering Africa&apos;s
                <span className="block text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-orange-500">
                  Energy Excellence
                </span>
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                Leading African energy services provider delivering world-class inspection, welding, fabrication, 
                NDT, and comprehensive maintenance solutions across West, East, and Southern Africa.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
                <Button size="lg" className={`${responsiveClasses.touchButton} bg-amber-500 hover:bg-amber-600 text-white font-semibold shadow-lg shadow-amber-500/30 transition-all duration-300 ${!prefersReducedMotion && 'hover:shadow-amber-500/50 hover:scale-105'}`}>
                  <Link href="/services" className="flex items-center justify-center gap-2 w-full">
                    Explore Services
                    <ArrowRightIcon className="h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className={`${responsiveClasses.touchButton} border-2 border-white text-white hover:bg-blue-500 hover:border-blue-500 backdrop-blur-sm transition-all duration-300 ${!prefersReducedMotion && 'hover:scale-105'}`}>
                  <Link href="/contact" className="flex items-center justify-center gap-2 w-full">
                    <PhoneIcon className="h-5 w-5" />
                    Contact Us
                  </Link>
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="h-4 sm:h-5 w-4 sm:w-5 text-green-400" />
                  <span>ISO Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="h-4 sm:h-5 w-4 sm:w-5 text-green-400" />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="h-4 sm:h-5 w-4 sm:w-5 text-green-400" />
                  <span>Safety First</span>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Stats Cards */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-3 sm:gap-4"
            >
              {stats.map((stat, index) => (
                <DynamicStatCard key={stat.name} stat={stat} index={index} />
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator - Hidden on mobile */}
        {!prefersReducedMotion && (
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
            </div>
          </motion.div>
        )}
      </section>

      {/* Why Choose Us Section */}
      <section className={`${responsiveClasses.sectionPadding} bg-linear-to-br from-slate-50 to-blue-50`}>
        <div className={responsiveClasses.container}>
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12 lg:mb-16"
          >
            <h2 className="text-base font-semibold text-amber-600 mb-2 sm:mb-3">Why Choose Us</h2>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 sm:mb-4 px-4">
              Africa&apos;s Trusted Energy Services Partner
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto px-4">
              Combining international standards with deep African expertise to deliver exceptional results across the continent
            </p>
          </motion.div>

          <div className={responsiveClasses.grid4Col}>
            {whyChooseUs.map((item, index) => (
              <Link key={item.title} href={item.link}>
                <motion.div
                  initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`group relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg ${!prefersReducedMotion && 'hover:shadow-2xl'} transition-all duration-500 ${!prefersReducedMotion && 'hover:-translate-y-3'} border border-slate-200 hover:border-blue-300 overflow-hidden cursor-pointer h-full ${responsiveClasses.interactive}`}
                >
                  {/* Lightbox glow effect */}
                  <div className="absolute inset-0 bg-linear-to-br from-blue-500/0 via-amber-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:via-amber-500/5 group-hover:to-blue-500/10 transition-all duration-500"></div>
                  
                  {/* Animated corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-br from-amber-400/20 to-transparent rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className={`mb-5 sm:mb-6 inline-flex items-center justify-center w-14 sm:w-16 h-14 sm:h-16 bg-linear-to-br from-blue-900 to-blue-700 rounded-xl shadow-lg ${!prefersReducedMotion && 'group-hover:shadow-amber-500/50 group-hover:scale-110 group-hover:rotate-3'} transition-all duration-500`}>
                      <item.icon className={`h-7 sm:h-8 w-7 sm:w-8 text-white group-hover:text-amber-300 transition-colors duration-300`} />
                    </div>
                    
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3 group-hover:text-blue-900 transition-colors duration-300">
                      {item.title}
                    </h3>
                    
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300 mb-4">
                      {item.description}
                    </p>
                    
                    {/* Learn More indicator */}
                    <div className="flex items-center gap-2 text-blue-900 font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <span className="text-sm">Learn More</span>
                      <ArrowRightIcon className={`h-4 w-4 ${!prefersReducedMotion && 'group-hover:translate-x-1'} transition-transform`} />
                    </div>
                    
                    {/* Bottom accent line */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-linear-to-r from-blue-900 via-amber-500 to-blue-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full"></div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className={`${responsiveClasses.sectionPadding} bg-white`}>
        <div className={responsiveClasses.container}>
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center mb-12 sm:mb-14 lg:mb-16">
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-base font-semibold text-amber-600 mb-2 sm:mb-3">Our Services</h2>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 sm:mb-6">
                Comprehensive Solutions for Every Need
              </p>
              <p className="text-base sm:text-lg text-slate-600 mb-6 sm:mb-8 leading-relaxed">
                From NDT inspection to mechanical maintenance, welding to training - 
                we provide end-to-end services that keep your operations running smoothly and safely.
              </p>
              <Button size="lg" className={`${responsiveClasses.touchButton} bg-blue-900 hover:bg-blue-800 text-white ${!prefersReducedMotion && 'hover:shadow-lg hover:shadow-blue-900/50'} transition-all duration-300 ${!prefersReducedMotion && 'hover:scale-105'}`}>
                <Link href="/services" className="flex items-center justify-center gap-2 w-full">
                  View All Services
                  <ArrowRightIcon className="h-5 w-5" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* 3D Shadow effect */}
              <div className={`absolute inset-0 bg-linear-to-br from-blue-900/30 to-amber-500/30 rounded-3xl transform rotate-3 ${!prefersReducedMotion && 'group-hover:rotate-6'} transition-transform duration-500`}></div>
              
              {/* Main card with lightbox effect */}
              <div className={`relative bg-linear-to-br from-blue-900 via-blue-800 to-blue-700 rounded-3xl p-6 sm:p-8 text-white shadow-2xl ${!prefersReducedMotion && 'group-hover:shadow-amber-500/30'} transition-all duration-500 border border-blue-600/50`}>
                {/* Shine effect */}
                <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                
                <div className="relative z-10">
                  <div className={`mb-5 sm:mb-6 inline-block p-3 sm:p-4 bg-amber-500/20 rounded-2xl ${!prefersReducedMotion && 'group-hover:scale-110'} transition-transform duration-300`}>
                    <WrenchScrewdriverIcon className="h-12 sm:h-14 lg:h-16 w-12 sm:w-14 lg:w-16 text-amber-400" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Industry Expertise</h3>
                  <ul className="space-y-3 sm:space-y-4">
                    <li className="flex items-start gap-3 group/item">
                      <CheckCircleIcon className={`h-5 sm:h-6 w-5 sm:w-6 text-amber-400 shrink-0 mt-0.5 ${!prefersReducedMotion && 'group-hover/item:scale-125'} transition-transform`} />
                      <span className="text-sm sm:text-base group-hover/item:text-amber-200 transition-colors">Petroleum Commission PC 2025 Registered</span>
                    </li>
                    <li className="flex items-start gap-3 group/item">
                      <CheckCircleIcon className={`h-5 sm:h-6 w-5 sm:w-6 text-amber-400 shrink-0 mt-0.5 ${!prefersReducedMotion && 'group-hover/item:scale-125'} transition-transform`} />
                      <span className="text-sm sm:text-base group-hover/item:text-amber-200 transition-colors">International Safety Standards Compliance</span>
                    </li>
                    <li className="flex items-start gap-3 group/item">
                      <CheckCircleIcon className={`h-5 sm:h-6 w-5 sm:w-6 text-amber-400 shrink-0 mt-0.5 ${!prefersReducedMotion && 'group-hover/item:scale-125'} transition-transform`} />
                      <span className="text-sm sm:text-base group-hover/item:text-amber-200 transition-colors">Experienced Local and International Teams</span>
                    </li>
                    <li className="flex items-start gap-3 group/item">
                      <CheckCircleIcon className={`h-5 sm:h-6 w-5 sm:w-6 text-amber-400 shrink-0 mt-0.5 ${!prefersReducedMotion && 'group-hover/item:scale-125'} transition-transform`} />
                      <span className="text-sm sm:text-base group-hover/item:text-amber-200 transition-colors">24/7 Emergency Response Available</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          <div className={responsiveClasses.grid4Col}>
            {services.slice(0, 4).map((service, index) => {
              const IconComponent = iconMap[service.icon] || WrenchScrewdriverIcon;
              return (
                <Link key={service.id} href="/services">
                  <motion.div
                    initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`group relative overflow-hidden rounded-2xl bg-white p-5 sm:p-6 border-2 border-slate-200 hover:border-blue-400 ${!prefersReducedMotion && 'hover:shadow-2xl hover:shadow-blue-500/20'} transition-all duration-500 ${!prefersReducedMotion && 'hover:-translate-y-2'} cursor-pointer h-full ${responsiveClasses.interactive}`}
                  >
                    {/* Animated gradient background */}
                    <div className="absolute inset-0 bg-linear-to-br from-blue-50 via-white to-amber-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Decorative circle */}
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-blue-500/10 via-amber-500/10 to-transparent rounded-full -mr-16 -mt-16 ${!prefersReducedMotion && 'group-hover:scale-150'} transition-transform duration-700`}></div>
                    
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    
                    <div className="relative z-10">
                      <div className={`mb-4 sm:mb-5 inline-flex items-center justify-center w-12 sm:w-14 h-12 sm:h-14 bg-linear-to-br from-blue-900 to-blue-700 rounded-xl shadow-md ${!prefersReducedMotion && 'group-hover:shadow-amber-500/50 group-hover:scale-110 group-hover:rotate-6'} transition-all duration-500`}>
                        <IconComponent className={`h-6 sm:h-7 w-6 sm:w-7 text-white group-hover:text-amber-300 transition-colors duration-300`} />
                      </div>
                      
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 sm:mb-3 group-hover:text-blue-900 transition-colors duration-300 line-clamp-2">
                        {service.title}
                      </h3>
                      
                      <p className="text-xs sm:text-sm text-slate-600 group-hover:text-slate-700 leading-relaxed line-clamp-3 transition-colors duration-300 mb-3 sm:mb-4">
                        {service.description}
                      </p>
                      
                      {/* Hover indicator */}
                      <div className="mt-3 sm:mt-4 flex items-center gap-2 text-blue-900 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <span className="text-xs sm:text-sm font-semibold">Learn more</span>
                        <ArrowRightIcon className={`h-3 sm:h-4 w-3 sm:w-4 ${!prefersReducedMotion && 'group-hover:translate-x-1'} transition-transform`} />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className={`relative ${responsiveClasses.sectionPadding} overflow-hidden`}>
        {/* Background */}
        <div className="absolute inset-0 bg-linear-to-br from-blue-900 via-slate-900 to-blue-800"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIxMjEyMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-10"></div>
        
        <div className={`relative ${responsiveClasses.container}`}>
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Ready to Start Your Next Project?
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                Partner with Ghana&apos;s leading Oil & Gas service provider. 
                Get expert consultation and competitive quotes for your project today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
                <Button size="lg" className={`${responsiveClasses.touchButton} bg-amber-500 hover:bg-amber-600 text-white font-semibold shadow-lg shadow-amber-500/30 ${!prefersReducedMotion && 'hover:shadow-amber-500/50'} transition-all duration-300 ${!prefersReducedMotion && 'hover:scale-105'}`}>
                  <Link href="/contact" className="flex items-center justify-center gap-2 w-full">
                    <EnvelopeIcon className="h-5 w-5" />
                    Get a Quote
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className={`${responsiveClasses.touchButton} border-2 border-white text-white hover:bg-blue-500 hover:border-blue-500 transition-all duration-300 ${!prefersReducedMotion && 'hover:scale-105'}`}>
                  <Link href="/about" className="flex items-center justify-center gap-2 w-full">
                    Learn More
                    <ArrowRightIcon className="h-5 w-5" />
                  </Link>
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="flex items-start gap-3">
                  <PhoneIcon className="h-5 sm:h-6 w-5 sm:w-6 text-amber-400 shrink-0 mt-1" />
                  <div>
                    <div className="text-xs sm:text-sm text-gray-400 mb-1">Call Us</div>
                    <a href={`tel:${companyData.phone}`} className="text-sm sm:text-base text-white font-semibold hover:text-amber-400 transition-colors touch-manipulation">
                      {companyData.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <EnvelopeIcon className="h-5 sm:h-6 w-5 sm:w-6 text-amber-400 shrink-0 mt-1" />
                  <div>
                    <div className="text-xs sm:text-sm text-gray-400 mb-1">Email Us</div>
                    <a href={`mailto:${companyData.email}`} className="text-sm sm:text-base text-white font-semibold hover:text-amber-400 transition-colors break-all touch-manipulation">
                      {companyData.email}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-3 sm:gap-4"
            >
              {[
                { icon: CheckCircleIcon, title: "Quality Assured", desc: "ISO certified processes" },
                { icon: ShieldCheckIcon, title: "Safety First", desc: "Zero incident record" },
                { icon: WrenchScrewdriverIcon, title: "Expert Team", desc: "Certified professionals" },
                { icon: SparklesIcon, title: "Innovation", desc: "Latest technology" },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={prefersReducedMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`group relative bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-5 lg:p-6 border border-white/20 hover:bg-white/20 hover:border-amber-400/50 transition-all duration-500 ${!prefersReducedMotion && 'hover:scale-105 hover:shadow-lg hover:shadow-amber-500/20'}`}
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-linear-to-br from-amber-500/0 via-amber-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <item.icon className={`h-6 sm:h-7 lg:h-8 w-6 sm:w-7 lg:w-8 text-amber-400 mb-2 sm:mb-3 ${!prefersReducedMotion && 'group-hover:scale-110 group-hover:rotate-6'} transition-all duration-300`} />
                    <h3 className="text-sm sm:text-base text-white font-semibold mb-0.5 sm:mb-1 group-hover:text-amber-300 transition-colors">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-colors">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
