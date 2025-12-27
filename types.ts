
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

/**
 * Interface representing a chat message for the Gemini Assistant
 */
export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
