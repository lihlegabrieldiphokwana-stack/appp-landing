"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  return (
    <HeroParallaxContainer>
      <HeroProductCard products={products} />
    </HeroParallaxContainer>
  );
};

export const HeroParallaxContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  );
};

export const HeroProductCard = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);

  return (
    <div className="flex flex-col items-center justify-center relative w-full mx-auto py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl px-6 text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          The Future of <br />
          <span className="text-emerald-400">Mobile Experience</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10">
          Discover a revolutionary app designed to transform how you connect,
          manage, and grow. Built for modern users.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold rounded-lg transition-colors">
            Download Now
          </button>
          <button className="px-8 py-4 border border-gray-700 hover:border-gray-500 text-white font-semibold rounded-lg transition-colors">
            Learn More
          </button>
        </div>
      </motion.div>

      <div className="flex flex-row gap-4 mt-20 w-full overflow-hidden">
        <div className="flex flex-row gap-4 flex-1 animate-scroll-left">
          {firstRow.map((product) => (
            <HeroImageCard key={product.title} product={product} />
          ))}
        </div>
      </div>

      <div className="flex flex-row gap-4 mt-4 w-full overflow-hidden">
        <div className="flex flex-row gap-4 flex-1 animate-scroll-right">
          {secondRow.map((product) => (
            <HeroImageCard key={product.title} product={product} />
          ))}
        </div>
      </div>

      <div className="flex flex-row gap-4 mt-4 w-full overflow-hidden">
        <div className="flex flex-row gap-4 flex-1 animate-scroll-left">
          {thirdRow.map((product) => (
            <HeroImageCard key={product.title} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

const HeroImageCard = ({
  product,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="w-[300px] h-[400px] rounded-xl overflow-hidden flex-shrink-0 relative"
    >
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
};
