'use client';

import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Calendar, User, Tag, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { newsItems } from '@/data/company';

export default function NewsArticlePage() {
  const params = useParams();
  const router = useRouter();
  const newsItem = newsItems.find(item => item.id === params.id);

  if (!newsItem) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <Link href="/news" className="text-[#2C74B3] hover:underline">
            Return to News
          </Link>
        </div>
      </div>
    );
  }

  const relatedNews = newsItems
    .filter(item => item.id !== newsItem.id && item.category === newsItem.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image */}
      <section className="relative h-[70vh] min-h-[500px]">
        <Image
          src={newsItem.image}
          alt={newsItem.title}
          fill
          className="object-cover"
          priority
        />
        <button
          onClick={() => router.back()}
          className="absolute top-8 left-8 flex items-center gap-2 text-white/90 hover:text-white transition-colors backdrop-blur-md bg-black/30 px-4 py-2 rounded-lg z-10"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Back to News</span>
        </button>
      </section>

      {/* Title and Meta Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 bg-[#FDB400] text-[#0A2647] text-sm font-bold rounded-lg uppercase tracking-wide mb-6">
              {newsItem.category}
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
              {newsItem.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light mb-6">
              {newsItem.excerpt}
            </p>

            <div className="flex items-center justify-center gap-6 text-gray-500 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>
                  {new Date(newsItem.publishedAt).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
              </div>
              <span className="text-gray-300">•</span>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{newsItem.author}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Main Content */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {/* Article Body */}
              <div 
                className="prose prose-lg max-w-none
                  prose-headings:text-gray-900 prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-center
                  prose-h3:text-3xl prose-h3:mt-12 prose-h3:mb-6 prose-h3:leading-tight
                  prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-lg prose-p:text-center
                  prose-ul:my-6 prose-ul:ml-6
                  prose-li:text-gray-700 prose-li:mb-3 prose-li:pl-2 prose-li:leading-relaxed prose-li:text-left
                  prose-strong:text-gray-900 prose-strong:font-bold
                  first-letter:text-7xl first-letter:font-bold first-letter:text-[#0A2647] first-letter:mr-3 first-letter:float-left first-letter:leading-none first-letter:mt-1"
                dangerouslySetInnerHTML={{ __html: newsItem.content }}
              />

              {/* Share Section */}
              <div className="mt-16 pt-8 border-t border-gray-200">
                <div className="flex flex-col items-center text-center gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Share this story</h3>
                    <p className="text-gray-600">Help others discover this news</p>
                  </div>
                  <div className="flex gap-3">
                    <button className="w-12 h-12 flex items-center justify-center bg-[#1877F2] text-white rounded-full hover:scale-110 transition-transform shadow-lg">
                      <Facebook className="w-5 h-5" />
                    </button>
                    <button className="w-12 h-12 flex items-center justify-center bg-[#1DA1F2] text-white rounded-full hover:scale-110 transition-transform shadow-lg">
                      <Twitter className="w-5 h-5" />
                    </button>
                    <button className="w-12 h-12 flex items-center justify-center bg-[#0A66C2] text-white rounded-full hover:scale-110 transition-transform shadow-lg">
                      <Linkedin className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedNews.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Stories</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedNews.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <Link href={`/news/${item.id}`}>
                      <div className="group">
                        <div className="relative h-48 rounded-lg overflow-hidden mb-3">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                        </div>
                        <h4 className="font-bold text-gray-900 group-hover:text-[#2C74B3] transition-colors mb-2 line-clamp-2 leading-snug">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-500 flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {new Date(item.publishedAt).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="text-center mt-8">
                <Link 
                  href="/news" 
                  className="inline-block px-8 py-3 bg-[#0A2647] text-white font-semibold rounded-lg hover:bg-[#144272] transition-colors"
                >
                  View All News
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-linear-to-br from-[#0A2647] via-[#144272] to-[#2C74B3]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Interested in Our Services?
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Learn more about how Ricks Energy can support your industrial and energy projects across Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-[#FDB400] text-[#0A2647] font-bold rounded-lg hover:bg-[#FDB400]/90 transition-colors"
              >
                Contact Us
              </Link>
              <Link 
                href="/services" 
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-lg hover:bg-white/20 transition-colors border-2 border-white/30"
              >
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
