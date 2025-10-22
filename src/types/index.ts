export interface Company {
  name: string;
  tagline: string;
  description: string;
  founded: string;
  location: string;
  email: string;
  phone: string;
  website: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  image: string;
  linkedin?: string;
  email?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
  status: 'completed' | 'ongoing' | 'planned';
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  publishedAt: string;
  author: string;
  category: string;
}

export interface Contact {
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  phone: string;
  email: string;
  workingHours: {
    weekdays: string;
    weekends: string;
  };
}