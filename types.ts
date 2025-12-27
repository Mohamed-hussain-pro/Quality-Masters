
// Added React import to resolve the namespace error for React.ReactNode
import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
