"use client";

import { Globe } from "lucide-react";

interface Link {
  name: string;
  url: string;
}

interface SocialLinksProps {
  links: Link[];
}

export const SocialLinks = ({ links }: SocialLinksProps) => {
  return (
    <section className="bg-white dark:bg-gray-800/50 rounded-lg shadow-lg p-8 mt-12">
      <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-6 text-center">
        Find Us Across The Web
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center p-3 bg-gray-100 dark:bg-gray-800 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/20 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 transition-all"
          >
            <Globe className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-3 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-800 dark:group-hover:text-blue-300 truncate">
              {link.name}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}; 