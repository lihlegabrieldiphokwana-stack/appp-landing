"use client";
import React from "react";
import { motion } from "framer-motion";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const testimonials = [
  {
    quote: "I booked a plumber in 90 seconds. He arrived on time, fixed the leak, and I tracked him the whole way. I've never felt so in control of a home repair.",
    name: "Amara N.",
    title: "Customer · Cape Town",
  },
  {
    quote: "The video feed showed me exactly how this electrician works. I could see his technique before he touched a wire in my house. That's the future of hiring.",
    name: "Themba K.",
    title: "Customer · Johannesburg",
  },
  {
    quote: "My bookings went from 8 a month to over 80. The dashboard shows me everything — revenue, ratings, repeat customers. Bouul changed my business.",
    name: "Sipho M.",
    title: "Plumber · Durban",
  },
  {
    quote: "I had a dispute with a client over scope of work. Bouul's resolution team handled it fairly within 24 hours. I kept the payment and the client was satisfied.",
    name: "Zanele D.",
    title: "Interior Designer · Pretoria",
  },
  {
    quote: "The Magic Remover cleaned up all my portfolio photos in minutes. My profile looks professional and my inquiry rate doubled the next week.",
    name: "Kagiso T.",
    title: "Photographer · Sandton",
  },
  {
    quote: "I follow three hair stylists on the video feed. Watching their work gave me confidence to book. Now I have a regular stylist for the first time in years.",
    name: "Lerato P.",
    title: "Customer · Soweto",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-black border-t border-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4">
            Thousands of people. One marketplace.
          </h2>
          <p className="text-neutral-500 text-lg">
            From first bookings to loyal regulars.
          </p>
        </motion.div>
      </div>

      <div className="flex flex-col gap-6">
        <InfiniteMovingCards
          items={testimonials.slice(0, 4)}
          direction="left"
          speed="slow"
        />
        <InfiniteMovingCards
          items={testimonials.slice(2, 6)}
          direction="right"
          speed="slow"
        />
      </div>
    </section>
  );
};
