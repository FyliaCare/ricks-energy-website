'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { preventScroll } from '@/lib/responsive-utils';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { 
    name: 'Services', 
    href: '/services',
    submenu: [
      { name: 'NDT Inspection', href: '/services/ndt-inspection' },
      { name: 'Rope Access', href: '/services/rope-access' },
      { name: 'Welding & Fabrication', href: '/services/welding-fabrication' },
      { name: 'IRATA Training', href: '/services/irata-training' },
    ]
  },
  { name: 'Projects', href: '/projects' },
  { name: 'News', href: '/news' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    preventScroll(mobileMenuOpen);
    return () => preventScroll(false);
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setExpandedMenu(null);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2 min-h-[44px]">
              <Image 
                src="/logo.jpg" 
                alt="Ricks Energy Logo" 
                width={40} 
                height={40}
                className="h-8 w-8 sm:h-10 sm:w-10"
                priority
              />
              <span className="text-lg sm:text-xl font-bold text-blue-900">
                Ricks Energy
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={cn(
                    'text-sm font-semibold leading-6 transition-colors duration-200 hover:text-blue-900 py-2',
                    pathname === item.href || pathname.startsWith(item.href + '/')
                      ? 'text-blue-900'
                      : 'text-gray-900'
                  )}
                >
                  {item.name}
                  {item.submenu && (
                    <ChevronDownIcon className="inline-block ml-1 h-4 w-4" />
                  )}
                </Link>
                
                {/* Desktop Submenu */}
                {item.submenu && (
                  <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
                    <div className="bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 py-2">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              href="/contact"
              className="rounded-md bg-blue-900 px-4 sm:px-6 py-2 sm:py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900 transition-all duration-200 min-h-[44px] flex items-center"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg p-2.5 text-gray-700 hover:bg-gray-100 transition-colors min-h-[44px] min-w-[44px] touch-manipulation"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open main menu"
            >
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm lg:hidden"
              onClick={closeMobileMenu}
            />
            
            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 z-50 h-full w-full max-w-sm bg-white shadow-2xl overflow-y-auto lg:hidden"
            >
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-gray-200">
                <Link href="/" onClick={closeMobileMenu} className="flex items-center gap-2">
                  <Image 
                    src="/logo.jpg" 
                    alt="Ricks Energy Logo" 
                    width={40} 
                    height={40}
                    className="h-10 w-10"
                  />
                  <span className="text-xl font-bold text-blue-900">
                    Ricks Energy
                  </span>
                </Link>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-lg p-2.5 text-gray-700 hover:bg-gray-100 transition-colors min-h-[44px] min-w-[44px] touch-manipulation"
                  onClick={closeMobileMenu}
                  aria-label="Close menu"
                >
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Mobile Menu Items */}
              <div className="px-4 sm:px-6 py-6 space-y-2">
                {navigation.map((item) => (
                  <div key={item.name} className="space-y-1">
                    {item.submenu ? (
                      <>
                        <button
                          onClick={() => setExpandedMenu(expandedMenu === item.name ? null : item.name)}
                          className={cn(
                            'flex items-center justify-between w-full px-4 py-3 text-base font-semibold rounded-lg transition-colors touch-manipulation min-h-[44px]',
                            pathname.startsWith(item.href)
                              ? 'bg-blue-50 text-blue-900'
                              : 'text-gray-900 hover:bg-gray-50'
                          )}
                        >
                          <span>{item.name}</span>
                          <motion.div
                            animate={{ rotate: expandedMenu === item.name ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDownIcon className="h-5 w-5" />
                          </motion.div>
                        </button>
                        
                        <AnimatePresence>
                          {expandedMenu === item.name && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden ml-4 space-y-1"
                            >
                              {item.submenu.map((subitem) => (
                                <Link
                                  key={subitem.name}
                                  href={subitem.href}
                                  onClick={closeMobileMenu}
                                  className={cn(
                                    'block px-4 py-2.5 text-sm rounded-lg transition-colors touch-manipulation min-h-[44px] flex items-center',
                                    pathname === subitem.href
                                      ? 'bg-blue-50 text-blue-900 font-medium'
                                      : 'text-gray-700 hover:bg-gray-50'
                                  )}
                                >
                                  {subitem.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={closeMobileMenu}
                        className={cn(
                          'block px-4 py-3 text-base font-semibold rounded-lg transition-colors touch-manipulation min-h-[44px]',
                          pathname === item.href
                            ? 'bg-blue-50 text-blue-900'
                            : 'text-gray-900 hover:bg-gray-50'
                        )}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="px-4 sm:px-6 py-6 border-t border-gray-200 mt-auto">
                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="block w-full text-center rounded-lg bg-blue-900 px-4 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-800 transition-colors touch-manipulation min-h-[44px]"
                >
                  Get a Free Quote
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}