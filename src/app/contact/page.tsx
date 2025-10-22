'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon, 
  ClockIcon,
  BuildingOfficeIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';
import { contactInfo } from '@/data/company';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    // Reset form after success
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
      });
      setSubmitSuccess(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section with Gradient Background */}
      <section className="relative bg-linear-to-br from-blue-900 via-slate-900 to-blue-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center"
        >
          <span className="inline-block text-amber-400 font-semibold text-sm uppercase tracking-wide mb-4">
            Get In Touch
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Let's Start a <span className="text-amber-400">Conversation</span>
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-300 max-w-3xl mx-auto">
            Ready to power your future with reliable energy solutions? Our expert team is here to help you every step of the way.
          </p>
        </motion.div>
      </section>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        {/* Main Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {/* Contact Information Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-6"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Contact Information
            </h2>
            
            {/* Address Card */}
            <motion.div
              whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-lg border-2 border-slate-100 hover:border-blue-400"
            >
              <div className="flex items-start space-x-4">
                <div className="shrink-0 w-12 h-12 bg-linear-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center">
                  <MapPinIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Visit Us</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {contactInfo.address.street}<br />
                    {contactInfo.address.city}, {contactInfo.address.state}<br />
                    {contactInfo.address.zipCode}<br />
                    {contactInfo.address.country}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Phone Card */}
            <motion.div
              whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-lg border-2 border-slate-100 hover:border-green-400"
            >
              <div className="flex items-start space-x-4">
                <div className="shrink-0 w-12 h-12 bg-linear-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <PhoneIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Call Us</h3>
                  <a href={`tel:${contactInfo.phone}`} className="text-slate-600 text-sm hover:text-green-600 transition-colors">
                    {contactInfo.phone}
                  </a>
                  <p className="text-xs text-slate-500 mt-1">Office hours</p>
                </div>
              </div>
            </motion.div>

            {/* Email Card */}
            <motion.div
              whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-lg border-2 border-slate-100 hover:border-amber-400"
            >
              <div className="flex items-start space-x-4">
                <div className="shrink-0 w-12 h-12 bg-linear-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                  <EnvelopeIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Email Us</h3>
                  <a href={`mailto:${contactInfo.email}`} className="text-slate-600 text-sm hover:text-amber-600 transition-colors break-all">
                    {contactInfo.email}
                  </a>
                  <p className="text-xs text-slate-500 mt-1">Quick response guaranteed</p>
                </div>
              </div>
            </motion.div>

            {/* Working Hours Card */}
            <motion.div
              whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-lg border-2 border-slate-100 hover:border-purple-400"
            >
              <div className="flex items-start space-x-4">
                <div className="shrink-0 w-12 h-12 bg-linear-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center">
                  <ClockIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Working Hours</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {contactInfo.workingHours.weekdays}<br />
                    {contactInfo.workingHours.weekends}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl shadow-2xl border-2 border-slate-100 overflow-hidden">
              {/* Form Header */}
              <div className="bg-linear-to-r from-blue-900 to-blue-800 px-8 py-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-amber-400 rounded-lg flex items-center justify-center">
                    <ChatBubbleLeftRightIcon className="h-6 w-6 text-blue-900" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Send us a Message</h2>
                    <p className="text-blue-200 text-sm">We'll get back to you within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Form Content */}
              <div className="p-8">
                {submitSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                    <p className="text-slate-600">Thank you for reaching out. We'll be in touch soon.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name and Email Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    {/* Phone and Company Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-semibold text-slate-900 mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>

                    {/* Service Selection */}
                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-slate-900 mb-2">
                        Service of Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      >
                        <option value="">Select a service</option>
                        <option value="rope-access">Rope Access Services & Training</option>
                        <option value="fabric-maintenance">Fabric Maintenance (FM)</option>
                        <option value="ndt">Non-Destructive Testing (NDT)</option>
                        <option value="lifting-rigging">Lifting Equipment & Rigging</option>
                        <option value="mechanical">Mechanical Services</option>
                        <option value="work-at-height">Work at Height</option>
                        <option value="training">Training and Consultancy</option>
                        <option value="supplies">Supplies</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                        Your Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                        placeholder="Tell us about your project or how we can help you..."
                      />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-linear-to-r from-blue-900 to-blue-800 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wide">FAQ</span>
            <h2 className="text-4xl font-bold text-slate-900 mt-3 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-lg">
              Quick answers to common questions about our services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "What is your typical response time?",
                answer: "We respond to all inquiries within 24 hours during business days. Emergency requests are handled immediately.",
                icon: ClockIcon,
                color: 'from-blue-500 to-blue-700'
              },
              {
                question: "Do you offer free consultations?",
                answer: "Yes! We provide free initial consultations to assess your needs and recommend the best solutions.",
                icon: ChatBubbleLeftRightIcon,
                color: 'from-green-500 to-emerald-600'
              },
              {
                question: "What areas do you serve?",
                answer: "We serve Trinidad & Tobago and have expanded operations across the Caribbean and international markets.",
                icon: MapPinIcon,
                color: 'from-amber-500 to-orange-600'
              },
              {
                question: "Can I schedule a site visit?",
                answer: "Absolutely! Contact us to arrange a site visit at your convenience. We'll assess your facility and provide expert recommendations.",
                icon: BuildingOfficeIcon,
                color: 'from-purple-500 to-purple-700'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }}
                className="bg-white rounded-2xl p-6 shadow-lg border-2 border-slate-100"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-linear-to-br ${faq.color} rounded-xl mb-4`}>
                  <faq.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2 text-lg">{faq.question}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-24 bg-linear-to-br from-blue-900 via-slate-900 to-blue-800 rounded-3xl p-12 text-center text-white shadow-2xl"
        >
          <h3 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our team of experts is standing by to help you with your energy solutions. Let's discuss your project today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href={`tel:${contactInfo.phone}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-8 py-4 bg-amber-400 text-blue-900 font-bold rounded-xl shadow-lg hover:bg-amber-300 transition-all"
            >
              <PhoneIcon className="h-5 w-5 mr-2" />
              Call Now
            </motion.a>
            <motion.a
              href={`mailto:${contactInfo.email}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 font-bold rounded-xl shadow-lg hover:bg-gray-100 transition-all"
            >
              <EnvelopeIcon className="h-5 w-5 mr-2" />
              Send Email
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
