'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, Tag } from 'lucide-react';
import { newsItems } from '@/data/company';
import { useState } from 'react';

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', ...Array.from(new Set(newsItems.map(item => item.category)))];
  
  const filteredNews = selectedCategory === 'All' 
    ? newsItems 
    : newsItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-[#0A2647] via-[#144272] to-[#2C74B3] text-white py-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              News & Updates
            </h1>
            <p className="text-xl text-blue-100">
              Stay informed about the latest developments, achievements, and industry insights from Ricks Energy Limited.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-0 z-40 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex gap-3 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? 'bg-[#0A2647] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Featured Stories</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {filteredNews.filter(item => item.featured).map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Link href={`/news/${item.id}`}>
                    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
                      <div className="relative h-64 overflow-hidden">
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent z-10"></div>
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          priority={index === 0}
                          loading={index === 0 ? 'eager' : 'lazy'}
                          quality={85}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                        />
                        <div className="absolute bottom-4 left-4 z-20">
                          <span className="inline-block px-3 py-1 bg-[#FDB400] text-[#0A2647] text-xs font-semibold rounded-full">
                            {item.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-[#2C74B3] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {item.excerpt}
                        </p>
                        <div className="flex items-center gap-6 text-sm text-gray-500">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(item.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4" />
                            <span>{item.author}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* All News */}
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Latest News</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * (index % 3) }}
                >
                  <Link href={`/news/${item.id}`}>
                    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full group">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-4 right-4 z-10">
                          <span className="inline-block px-3 py-1 bg-white/90 text-[#0A2647] text-xs font-semibold rounded-full">
                            {item.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-[#2C74B3] transition-colors line-clamp-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-3 text-sm">
                          {item.excerpt}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>{new Date(item.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {filteredNews.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No news articles found in this category.</p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-linear-to-br from-[#0A2647] via-[#144272] to-[#2C74B3] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-blue-100 mb-8">
              Subscribe to our newsletter to receive the latest news and updates from Ricks Energy directly to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#FDB400]"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-[#FDB400] text-[#0A2647] font-semibold rounded-lg hover:bg-[#FDB400]/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
