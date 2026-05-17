"use client";

import { useRef } from "react";
import Link from "next/link";
import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  url,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="group mb-6"
    >
      <section className="relative bg-gray-100 dark:bg-white/10 border border-black/5 dark:border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-gray-200 dark:hover:bg-white/20 transition-all duration-300 flex flex-col gap-4">
        {/* Header Row */}
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {title}
          </h3>

          {url && (
            <Link
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white border border-black/10 dark:border-white/20 rounded-full px-4 py-1.5 transition-all hover:border-black/30 dark:hover:border-white/40"
            >
              View
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 3h7m0 0v7m0-7L10 14M5 5H3a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2v-2"
                />
              </svg>
            </Link>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-600 dark:text-white/70 leading-relaxed text-sm sm:text-base">
          {description}
        </p>

        {/* Divider */}
        <div className="border-t border-black/5 dark:border-white/10" />

        {/* Tags */}
        <ul className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <li
              key={index}
              className="bg-black/[0.06] dark:bg-white/10 text-gray-700 dark:text-white/70 px-3 py-1 text-[0.7rem] uppercase tracking-wider rounded-full font-medium"
            >
              {tag}
            </li>
          ))}
        </ul>
      </section>
    </motion.div>
  );
}
