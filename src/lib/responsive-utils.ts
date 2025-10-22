import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Mobile-first responsive class utilities
export const responsiveClasses = {
  // Container sizes
  container: 'w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  containerTight: 'w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8',
  containerWide: 'w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8',
  
  // Spacing
  sectionPadding: 'py-12 sm:py-16 md:py-20 lg:py-24',
  sectionPaddingSmall: 'py-8 sm:py-12 md:py-16',
  sectionPaddingLarge: 'py-16 sm:py-20 md:py-24 lg:py-32',
  
  // Typography
  heading1: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold',
  heading2: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold',
  heading3: 'text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold',
  heading4: 'text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold',
  bodyLarge: 'text-base sm:text-lg md:text-xl',
  bodyRegular: 'text-sm sm:text-base',
  bodySmall: 'text-xs sm:text-sm',
  
  // Grid layouts
  grid2Col: 'grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8',
  grid3Col: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8',
  grid4Col: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8',
  
  // Touch targets (minimum 44x44px for accessibility)
  touchTarget: 'min-h-[44px] min-w-[44px]',
  touchButton: 'px-4 sm:px-6 py-2.5 sm:py-3 min-h-[44px]',
  
  // Interactive states
  interactive: 'transition-all duration-200 ease-in-out active:scale-95 touch-manipulation',
  hoverScale: 'transition-transform duration-200 hover:scale-105 active:scale-95',
  
  // Images
  imageContainer: 'relative w-full overflow-hidden',
  imageResponsive: 'w-full h-auto object-cover',
};

// Breakpoint utilities
export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

// Check if device is mobile
export function isMobileDevice(): boolean {
  if (typeof window === 'undefined') return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

// Get viewport dimensions
export function getViewport() {
  if (typeof window === 'undefined') {
    return { width: 0, height: 0 };
  }
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

// Prevent scroll (useful for mobile menus)
export function preventScroll(prevent: boolean) {
  if (typeof document === 'undefined') return;
  
  if (prevent) {
    document.body.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';
  } else {
    document.body.style.overflow = '';
    document.body.style.touchAction = '';
  }
}

// Safe area insets for notched devices
export const safeAreaClasses = {
  top: 'pt-safe',
  bottom: 'pb-safe',
  left: 'pl-safe',
  right: 'pr-safe',
  all: 'p-safe',
};
