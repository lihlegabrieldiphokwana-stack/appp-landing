"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto px-6",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 overflow-hidden",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-400 text-xs leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  );
};

export const FeatureSection = () => {
  const features = [
    {
      title: "Smart Analytics",
      description: "Real-time insights to track your progress and make data-driven decisions.",
      header: (
        <div className="h-32 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-lg mb-4 flex items-center justify-center">
          <svg className="w-16 h-16 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
      ),
      icon: <span className="text-2xl">📊</span>,
    },
    {
      title: "Seamless Sync",
      description: "Your data syncs across all devices instantly. Never lose your progress.",
      header: (
        <div className="h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg mb-4 flex items-center justify-center">
          <svg className="w-16 h-16 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </div>
      ),
      icon: <span className="text-2xl">🔄</span>,
    },
    {
      title: "Secure & Private",
      description: "End-to-end encryption keeps your data safe. Your privacy is our priority.",
      header: (
        <div className="h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg mb-4 flex items-center justify-center">
          <svg className="w-16 h-16 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
      ),
      icon: <span className="text-2xl">🔒</span>,
    },
    {
      title: "Lightning Fast",
      description: "Optimized performance ensures smooth experience even with large datasets.",
      header: (
        <div className="h-32 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg mb-4 flex items-center justify-center">
          <svg className="w-16 h-16 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
      ),
      icon: <span className="text-2xl">⚡</span>,
    },
    {
      title: "Custom Workflows",
      description: "Build automation that fits your unique needs. No coding required.",
      header: (
        <div className="h-32 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg mb-4 flex items-center justify-center">
          <svg className="w-16 h-16 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
      ),
      icon: <span className="text-2xl">⚙️</span>,
    },
    {
      title: "24/7 Support",
      description: "Our dedicated team is always ready to help you succeed.",
      header: (
        <div className="h-32 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg mb-4 flex items-center justify-center">
          <svg className="w-16 h-16 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </div>
      ),
      icon: <span className="text-2xl">💬</span>,
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Powerful <span className="text-emerald-400">Features</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need to succeed, all in one place.
          </p>
        </motion.div>

        <BentoGrid>
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <BentoGridItem
                title={feature.title}
                description={feature.description}
                header={feature.header}
                icon={feature.icon}
                className={index === 0 || index === 3 ? "md:col-span-2" : ""}
              />
            </motion.div>
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};
