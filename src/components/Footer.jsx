import React from 'react';
import { personalInfo } from '../data/content';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-8 px-6 text-center">
      <p className="text-zinc-600 text-xs">
        © 2025 {personalInfo.username}. All rights reserved.
      </p>
    </footer>
  );
}