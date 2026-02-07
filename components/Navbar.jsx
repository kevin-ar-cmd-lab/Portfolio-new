'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from '../context/ThemeContext';
import { useActivePath } from '../hooks/useActivePath';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import {
  HomeIcon,
  UserIcon,
  FolderIcon,
  DocumentTextIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';

const navItems = [
  { href: '/', label: 'Home', icon: HomeIcon },
  { href: '/about', label: 'About', icon: UserIcon },
  { href: '/portfolio', label: 'Portfolio', icon: FolderIcon },
  { href: '/blog', label: 'Blog', icon: DocumentTextIcon },
  { href: '/contact', label: 'Contact', icon: PhoneIcon },
];

export default function Navbar() {
  const { isExactActive, isSectionActive } = useActivePath();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-900 shadow-md">
      <div className="flex items-center space-x-4">
        <Image src="/logo.png" alt="Logo" width={40} height={40} />
        <span className="font-bold text-xl text-gray-900 dark:text-white">Kevin Juma</span>
      </div>

      <ul className="flex items-center space-x-6">
        {navItems.map(({ href, label, icon: Icon }) => {
          const active = href === '/' ? isExactActive(href) : isSectionActive(href);

          return (
            <li key={href}>
              <Link
                href={href}
                className={`
                  relative flex items-center space-x-1 px-3 py-2 rounded-md transition-colors duration-300
                  ${active ? 'text-white' : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'}
                `}
              >
                <Icon className="h-5 w-5" />
                <span>{label}</span>

                {/* Animated background highlight */}
                {active && (
                  <span
                    className="absolute inset-0 bg-blue-600 rounded-md -z-10 transition-all duration-300"
                  />
                )}
              </Link>
            </li>
          );
        })}
      </ul>

      <button
        onClick={toggleTheme}
        className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
      >
        {theme === 'light' ? (
          <MoonIcon className="h-5 w-5 text-gray-900" />
        ) : (
          <SunIcon className="h-5 w-5 text-yellow-400" />
        )}
      </button>
    </nav>
  );
}
