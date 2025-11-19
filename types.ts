import React from 'react';

export interface NavLink {
  label: string;
  href: string;
}

export interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface StatProps {
  value: string;
  label: string;
}