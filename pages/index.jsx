

import { useTheme } from '../context/ThemeContext';
import FitToScreenLayout from '../components/FitToScreenLayout';
import Image from 'next/image';

export default function Home() {
  const { darkMode } = useTheme();

  return (
    <div className="container mx-auto text-center space-y-8">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
        Welcome to Kevin's Digital Space!
      </h2>
      <p className="text-xl text-gray-700 dark:text-gray-300">
        I'm a professional website developer and designer, dedicated to creating high-quality, user-friendly digital experiences.
      </p>

      <div className="flex justify-center">
        <Image
          src="/kevinjuma.jpg" // must match the file name in public exactly
          alt="kevinjuma-photo"
          width={192}  // w-48
          height={192} // h-48
          className="rounded-full object-cover border-4 border-gray-800"
          priority={true} // optional: ensures this image loads immediately
        />
      </div>
    </div>
  );
}
