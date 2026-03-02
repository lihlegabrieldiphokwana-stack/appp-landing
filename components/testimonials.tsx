"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "This app has completely transformed how I manage my daily tasks. The interface is intuitive and the features are exactly what I needed.",
      name: "Sarah Johnson",
      title: "Product Manager @ TechCorp",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    },
    {
      quote:
        "I've tried dozens of similar apps, but nothing comes close to this. The attention to detail and performance is unmatched.",
      name: "Michael Chen",
      title: "Founder @ StartupLab",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    },
    {
      quote:
        "The customer support is incredible. They actually listen to feedback and implement features users request.",
      name: "Emily Rodriguez",
      title: "Designer @ CreativeStudio",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    },
    {
      quote:
        "Best investment I've made for my productivity. The sync feature alone saves me hours every week.",
      name: "David Kim",
      title: "Developer @ CodeBase",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    },
    {
      quote:
        "Finally, an app that delivers on its promises. Clean, fast, and reliable. Highly recommend to anyone.",
      name: "Jessica Taylor",
      title: "Marketing Director @ BrandCo",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Loved by <span className="text-emerald-400">Thousands</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our users have to say.
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <div className="flex gap-6 animate-scroll-testimonials">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 w-[350px] p-6 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
