'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import {
  ShieldCheckIcon,
  AcademicCapIcon,
  CheckCircleIcon,
  UserGroupIcon,
  TrophyIcon,
  ArrowLeftIcon,
} from '@heroicons/react/24/outline';

const ropeAccessImages = [
  '/rope-access/IMG-20251021-WA0034.jpg',
  '/rope-access/IMG-20251021-WA0035.jpg',
  '/rope-access/IMG-20251021-WA0036.jpg',
  '/rope-access/IMG-20251021-WA0037.jpg',
  '/rope-access/IMG-20251021-WA0038.jpg',
  '/rope-access/IMG-20251021-WA0039.jpg',
  '/rope-access/IMG-20251021-WA0040.jpg',
  '/rope-access/IMG-20251021-WA0041.jpg',
  '/rope-access/IMG-20251021-WA0042.jpg',
  '/rope-access/IMG-20251021-WA0043.jpg',
  '/rope-access/IMG-20251021-WA0044.jpg',
  '/rope-access/IMG-20251021-WA0045.jpg',
  '/rope-access/IMG-20251021-WA0046.jpg',
  '/rope-access/IMG-20251021-WA0047.jpg',
  '/rope-access/IMG-20251021-WA0048.jpg',
  '/rope-access/IMG-20251021-WA0049.jpg',
  '/rope-access/IMG-20251021-WA0050.jpg',
  '/rope-access/IMG-20251021-WA0051.jpg',
  '/rope-access/IMG-20251021-WA0052.jpg',
  '/rope-access/IMG-20251021-WA0053.jpg',
  '/rope-access/IMG-20251021-WA0054.jpg',
  '/rope-access/IMG-20251021-WA0055.jpg',
  '/rope-access/IMG-20251021-WA0056.jpg',
  '/rope-access/IMG-20251021-WA0057.jpg',
  '/rope-access/IMG-20251021-WA0058.jpg',
  '/rope-access/IMG-20251021-WA0059.jpg',
  '/rope-access/IMG-20251021-WA0060.jpg',
];

export default function RopeAccessPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % ropeAccessImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-blue-900 via-slate-900 to-blue-800 text-white py-24">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-blue-100 hover:text-white mb-8 group"
          >
            <ArrowLeftIcon className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            Back to Services
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6">
              <span className="bg-amber-500/20 text-amber-400 px-6 py-3 rounded-full text-sm font-semibold border border-amber-500/30">
                Premium Service
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Rope Access Services
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-orange-500">
                & Training
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
              Leading the way in industrial rope access solutions across Trinidad & Tobago and the Caribbean. 
              IRATA-certified professionals delivering safe, efficient, and cost-effective access solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Image Slideshow Section */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Our Rope Access Facility & Training
            </h2>
            <p className="text-xl text-slate-600">
              World-class training facility at TTU JTTC
            </p>
          </motion.div>

          {/* Slideshow */}
          <div className="relative">
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              {ropeAccessImages.map((image, index) => (
                <motion.div
                  key={image}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: currentSlide === index ? 1 : 0,
                  }}
                  transition={{ duration: 1 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={image}
                    alt={`Rope Access ${index + 1}`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    quality={85}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
                </motion.div>
              ))}

              {/* Slide Indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {ropeAccessImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-2 rounded-full transition-all ${
                      currentSlide === index
                        ? 'w-8 bg-amber-400'
                        : 'w-2 bg-white/60 hover:bg-white'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wide">
              Our Partners
            </span>
            <h2 className="text-4xl font-bold text-slate-900 mt-3 mb-4">
              Certified & Recognized
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Partnered with leading organizations to deliver world-class rope access training and services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* IRATA Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-2xl shadow-xl border-2 border-slate-100 hover:border-blue-400 transition-all"
            >
              <div className="relative h-48 mb-6">
                <Image
                  src="/irata-logo.jpg"
                  alt="IRATA International Member"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 text-center">
                IRATA International Member
              </h3>
              <p className="text-slate-600 text-center">
                Member 8230/OT - Industrial Rope Access Trade Association
              </p>
            </motion.div>

            {/* Hightech Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-slate-900 p-8 rounded-2xl shadow-xl border-2 border-slate-700 hover:border-amber-400 transition-all"
            >
              <div className="relative h-48 mb-6">
                <Image
                  src="/hightech-logo.jpg"
                  alt="Hightech Industrial Access"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 text-center">
                Hightech Industrial Access
              </h3>
              <p className="text-gray-300 text-center">
                Official Training Partner - UK Based Excellence
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-linear-to-br from-slate-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              What We Offer
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Rope Access Services */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl border-2 border-slate-100 hover:border-blue-400 transition-all"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-blue-500 to-blue-700 rounded-xl mb-6">
                <ShieldCheckIcon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Rope Access Services
              </h3>
              
              <p className="text-slate-600 mb-6 leading-relaxed">
                Our IRATA-certified technicians provide safe and efficient access solutions for challenging industrial environments. 
                From inspections to maintenance, we deliver cost-effective alternatives to traditional access methods.
              </p>

              <ul className="space-y-3">
                {[
                  'Industrial inspections & surveys',
                  'Maintenance & repairs at height',
                  'Painting & coating applications',
                  'NDT inspections via rope access',
                  'Emergency rescue services',
                  'Confined space entry support',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircleIcon className="h-6 w-6 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Training Programs */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl border-2 border-slate-100 hover:border-amber-400 transition-all"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-amber-500 to-orange-600 rounded-xl mb-6">
                <AcademicCapIcon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                IRATA Training Programs
              </h3>
              
              <p className="text-slate-600 mb-6 leading-relaxed">
                Comprehensive rope access training at our state-of-the-art facility at TTU JTTC. 
                From beginner to supervisor level, we provide internationally recognized IRATA certification.
              </p>

              <ul className="space-y-3">
                {[
                  'IRATA Level 1 (Rope Access Technician)',
                  'IRATA Level 2 (Senior Technician)',
                  'IRATA Level 3 (Supervisor)',
                  'Refresher & re-certification courses',
                  'Rescue training & emergency procedures',
                  'Customized industry-specific training',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircleIcon className="h-6 w-6 text-amber-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Why Choose Ricks Energy?
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              The leading rope access provider in Trinidad & Tobago
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: TrophyIcon,
                title: 'IRATA Certified',
                description: 'Official IRATA member with certified instructors and technicians',
                color: 'from-blue-500 to-blue-700',
              },
              {
                icon: UserGroupIcon,
                title: 'Expert Team',
                description: 'Highly trained professionals with years of industry experience',
                color: 'from-green-500 to-emerald-600',
              },
              {
                icon: ShieldCheckIcon,
                title: 'Safety First',
                description: 'Zero-incident record with strict HSE compliance',
                color: 'from-amber-500 to-orange-600',
              },
              {
                icon: AcademicCapIcon,
                title: 'World-Class Facility',
                description: 'State-of-the-art training center at TTU JTTC',
                color: 'from-purple-500 to-purple-700',
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-linear-to-br ${benefit.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-slate-600">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-br from-blue-900 via-slate-900 to-blue-800 text-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Work at Height Safely?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to discuss your rope access needs or enroll in our training programs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-amber-400 text-blue-900 font-bold rounded-xl shadow-lg hover:bg-amber-300 transition-all hover:scale-105"
              >
                Get a Quote
              </Link>
              <Link
                href="/news"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border-2 border-white/20 hover:bg-white/20 transition-all hover:scale-105"
              >
                View Latest News
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
