'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { companyData } from '@/data/company';
import { 
  ShieldCheckIcon,
  UserGroupIcon,
  AcademicCapIcon,
  HeartIcon,
  ClipboardDocumentCheckIcon,
  SparklesIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  BuildingOfficeIcon,
  GlobeAltIcon,
  ChartBarIcon,
  LightBulbIcon,
  TrophyIcon
} from '@heroicons/react/24/outline';

// Counter animation hook
function useCounter(target: number, duration: number = 2) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, target, duration]);

  return { count, ref };
}

const stats = [
  { label: 'Years of Excellence', value: 5, suffix: '+', icon: SparklesIcon },
  { label: 'Projects Completed', value: 200, suffix: '+', icon: CheckCircleIcon },
  { label: 'Satisfied Clients', value: 100, suffix: '+', icon: TrophyIcon },
  { label: 'Team Members', value: 200, suffix: '+', icon: UserGroupIcon },
];

const values = [
  {
    title: 'Integrity',
    description: 'We operate with transparency, honesty, and ethics in all our interactions. Trust is the foundation of every relationship.',
    icon: ShieldCheckIcon,
    color: 'from-blue-500 to-blue-700'
  },
  {
    title: 'Cooperation',
    description: 'We foster a collaborative environment, working together to achieve common goals and deliver exceptional results.',
    icon: UserGroupIcon,
    color: 'from-amber-500 to-orange-600'
  },
  {
    title: 'Personal Development',
    description: 'We invest in the growth and development of our people, empowering them to reach their full potential through continuous learning.',
    icon: AcademicCapIcon,
    color: 'from-green-500 to-emerald-600'
  },
  {
    title: 'Service Excellence',
    description: 'We are dedicated to providing exceptional service, exceeding our clients\' expectations through attention to detail and dedication.',
    icon: HeartIcon,
    color: 'from-purple-500 to-purple-700'
  },
  {
    title: 'Safety',
    description: 'We prioritize the safety of our people, clients, and the environment, adhering to the highest international HSE standards.',
    icon: ClipboardDocumentCheckIcon,
    color: 'from-red-500 to-red-700'
  },
  {
    title: 'Quality',
    description: 'We are committed to delivering high-quality services, ensuring reliability, consistency, and compliance with industry standards.',
    icon: CheckCircleIcon,
    color: 'from-blue-600 to-indigo-700'
  },
];

const timeline = [
  { 
    year: '2020', 
    event: 'Company Founded',
    description: 'Ricks Energy Limited established to serve Ghana\'s growing Oil and Gas industry with indigenous expertise.',
    icon: BuildingOfficeIcon
  },
  { 
    year: '2021', 
    event: 'Major Contract Wins',
    description: 'Secured major contracts with offshore operators, establishing credibility in the market.',
    icon: TrophyIcon
  },
  { 
    year: '2022', 
    event: 'Service Expansion',
    description: 'Expanded service offerings to include advanced NDT methods and specialized inspection services.',
    icon: ChartBarIcon
  },
  { 
    year: '2023', 
    event: 'Regulatory Milestone',
    description: 'Achieved Petroleum Commission registration PC 2025, meeting all regulatory requirements.',
    icon: CheckCircleIcon
  },
  { 
    year: '2024', 
    event: 'Innovation Launch',
    description: 'Launched Solar Energy Solutions division, diversifying service portfolio for sustainable future.',
    icon: LightBulbIcon
  },
  { 
    year: '2025', 
    event: 'Pan-African Expansion',
    description: 'Strategic expansion across West, East, and Southern Africa with zero incidents safety record and growing continental presence.',
    icon: SparklesIcon
  },
];

// Stats Counter Component
function StatCounter({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const { count, ref } = useCounter(stat.value, 2.5);
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 hover:border-amber-400/50 transition-all duration-500 hover:scale-105"
    >
      <div className="absolute inset-0 bg-linear-to-br from-amber-500/0 via-amber-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
      
      <div className="relative z-10 text-center">
        <stat.icon className="h-12 w-12 text-amber-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
        <div className="text-5xl font-bold text-white mb-2">
          {count}
          <span className="text-amber-400">{stat.suffix}</span>
        </div>
        <div className="text-sm text-gray-300 group-hover:text-white transition-colors">{stat.label}</div>
      </div>
    </motion.div>
  );
}

export default function About() {
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
                About Us
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Empowering Africa's
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-orange-500">
                Energy Future
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {companyData.description}
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {stats.map((stat, index) => (
              <StatCounter key={stat.label} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-24 bg-linear-to-br from-slate-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Our Story */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-block mb-4">
                <span className="text-amber-600 font-semibold text-sm uppercase tracking-wide">Our Story</span>
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Built on Excellence, Driven by Passion
              </h2>
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                <p>
                  Ricks Energy Limited is a <strong className="text-slate-900">proudly African energy services company</strong> established to provide world-class services to the Oil and Gas, Marine and related industries across the African continent.
                </p>
                <p>
                  Headquartered in <strong className="text-slate-900">Takoradi, Ghana</strong>, and expanding throughout West, East, and Southern Africa, we serve both offshore and onshore operations with unmatched responsiveness and continental reach.
                </p>
                <p>
                  <strong className="text-slate-900">Registered with Petroleum Commission PC 2025</strong>, we bring together a diverse team of African and international professionals with rich experience working on oil and gas projects across the continent, delivering internationally recognized standards and certifications.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-6 shadow-md border border-slate-200">
                  <GlobeAltIcon className="h-10 w-10 text-blue-900 mb-3" />
                  <div className="text-2xl font-bold text-slate-900 mb-1">Pan-African Reach</div>
                  <p className="text-sm text-slate-600">Serving energy markets across Africa</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md border border-slate-200">
                  <BuildingOfficeIcon className="h-10 w-10 text-amber-500 mb-3" />
                  <div className="text-2xl font-bold text-slate-900 mb-1">Continental Expertise</div>
                  <p className="text-sm text-slate-600">Deep understanding of African markets</p>
                </div>
              </div>
            </motion.div>

            {/* Right - Mission & Vision */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Mission Card */}
              <div className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-blue-200 hover:border-blue-400 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-blue-500/10 to-transparent rounded-full -mr-16 -mt-16"></div>
                
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-linear-to-br from-blue-900 to-blue-700 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircleIcon className="h-7 w-7 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
                  <p className="text-slate-600 leading-relaxed">
                    To be Africa's leading energy services provider, committed to delivering tailored solutions driven by our passion for quality, reliability, and customer satisfaction. We strive to build long-term relationships with clients across the continent, founded on trust, integrity, and cooperation.
                  </p>
                </div>
              </div>

              {/* Vision Card */}
              <div className="group relative bg-linear-to-br from-blue-900 to-blue-700 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 text-white overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-amber-500/20 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <SparklesIcon className="h-7 w-7 text-amber-400" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-blue-100 leading-relaxed">
                    To empower a safer, more efficient and sustainable energy industry across Africa through innovative solutions, exceptional service delivery, and unwavering commitment to excellence that drives the continent's energy future.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wide">Our Foundation</span>
            <h2 className="text-4xl font-bold text-slate-900 mt-3 mb-4">
              Core Values
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              The principles that guide everything we do and define who we are
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-slate-200 hover:border-blue-400 overflow-hidden"
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-linear-to-br from-blue-50/0 via-amber-50/0 to-blue-50/0 group-hover:from-blue-50 group-hover:via-amber-50/50 group-hover:to-blue-50 transition-all duration-500"></div>
                
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-br from-blue-500/5 to-transparent rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-700"></div>
                
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-linear-to-br ${value.color} rounded-xl shadow-lg mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-900 transition-colors">
                    {value.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                    {value.description}
                  </p>
                  
                  {/* Bottom accent line */}
                  <div className={`absolute -bottom-6 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-linear-to-r ${value.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full`}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-linear-to-br from-slate-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wide">Our Growth</span>
            <h2 className="text-4xl font-bold text-slate-900 mt-3 mb-4">
              Journey of Excellence
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Key milestones that shaped our path to becoming Africa's trusted energy service provider
            </p>
          </motion.div>

          <div className="relative lg:pl-16">
            {/* Vertical line */}
            <div className="absolute left-1/2 lg:left-8 top-0 bottom-0 w-0.5 bg-linear-to-b from-blue-900 via-amber-500 to-blue-900 transform -translate-x-1/2"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 lg:-left-8 w-4 h-4 bg-amber-500 rounded-full border-4 border-white shadow-lg transform -translate-x-1/2 z-10"></div>
                  
                  {/* Year badge - Desktop */}
                  <div className={`hidden lg:flex ${index % 2 === 0 ? 'justify-end pr-16' : 'lg:col-start-2 justify-start pl-24'}`}>
                    <div className="inline-flex items-center gap-3 bg-linear-to-br from-blue-900 to-blue-700 text-white px-6 py-3 rounded-full font-bold text-xl shadow-lg">
                      <item.icon className="h-6 w-6" />
                      {item.year}
                    </div>
                  </div>

                  {/* Content card */}
                  <div className={`${index % 2 === 0 ? 'lg:pl-24' : 'lg:col-start-1 lg:row-start-1 lg:pr-16'}`}>
                    <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-slate-200 hover:border-blue-400">
                      {/* Mobile year badge */}
                      <div className="lg:hidden flex items-center gap-3 mb-4">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-linear-to-br from-blue-900 to-blue-700 rounded-xl">
                          <item.icon className="h-6 w-6 text-white" />
                        </div>
                        <span className="text-2xl font-bold text-blue-900">{item.year}</span>
                      </div>

                      <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-900 transition-colors">
                        {item.event}
                      </h3>
                      <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                        {item.description}
                      </p>
                      
                      {/* Decorative element */}
                      <div className="mt-4 h-1 w-16 bg-linear-to-r from-blue-900 to-amber-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-blue-900 via-slate-900 to-blue-800"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIxMjEyMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-10"></div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Partner with Excellence?
            </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Join leading energy companies across Africa who trust Ricks Energy Limited for world-class service delivery.
              </p>            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                href="/services"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105"
              >
                Explore Our Services
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-blue-500 hover:border-blue-500 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Contact Us Today
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}