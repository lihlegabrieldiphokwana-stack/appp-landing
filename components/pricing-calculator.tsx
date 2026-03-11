"use client";
import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ServiceType {
  id: string;
  name: string;
  basePrice: number;
  duration: string;
  icon: string;
}

interface PricingCalculatorProps {
  category?: string;
  compact?: boolean;
}

const serviceTypes: Record<string, ServiceType[]> = {
  plumbing: [
    { id: "leak-repair", name: "Leak Repair", basePrice: 450, duration: "1-2 hrs", icon: "💧" },
    { id: "geyser-install", name: "Geyser Installation", basePrice: 2500, duration: "3-4 hrs", icon: "🔥" },
    { id: "pipe-repair", name: "Pipe Repair", basePrice: 650, duration: "2-3 hrs", icon: "🔧" },
    { id: "drain-cleaning", name: "Drain Cleaning", basePrice: 550, duration: "1-2 hrs", icon: "🚿" },
    { id: "toilet-repair", name: "Toilet Repair", basePrice: 400, duration: "1 hr", icon: "🚽" },
  ],
  electrical: [
    { id: "socket-install", name: "Socket Installation", basePrice: 350, duration: "1 hr", icon: "🔌" },
    { id: "lighting", name: "Lighting Installation", basePrice: 500, duration: "1-2 hrs", icon: "💡" },
    { id: "fault-finding", name: "Fault Finding", basePrice: 600, duration: "1-2 hrs", icon: "⚡" },
    { id: "db-upgrade", name: "DB Board Upgrade", basePrice: 1800, duration: "3-4 hrs", icon: "📊" },
    { id: "appliance-install", name: "Appliance Installation", basePrice: 450, duration: "1-2 hrs", icon: "🔧" },
  ],
  cleaning: [
    { id: "standard-clean", name: "Standard Clean", basePrice: 400, duration: "2-3 hrs", icon: "🧹" },
    { id: "deep-clean", name: "Deep Clean", basePrice: 800, duration: "4-5 hrs", icon: "✨" },
    { id: "move-clean", name: "Move-In/Out Clean", basePrice: 1200, duration: "5-6 hrs", icon: "📦" },
    { id: "office-clean", name: "Office Clean", basePrice: 600, duration: "2-3 hrs", icon: "🏢" },
    { id: "carpet-clean", name: "Carpet Cleaning", basePrice: 350, duration: "1-2 hrs", icon: "🟫" },
  ],
  beauty: [
    { id: "haircut", name: "Haircut & Style", basePrice: 250, duration: "1 hr", icon: "✂️" },
    { id: "manicure", name: "Manicure", basePrice: 200, duration: "1 hr", icon: "💅" },
    { id: "pedicure", name: "Pedicure", basePrice: 250, duration: "1 hr", icon: "🦶" },
    { id: "facial", name: "Facial Treatment", basePrice: 450, duration: "1-2 hrs", icon: "💆" },
    { id: "makeup", name: "Makeup Application", basePrice: 500, duration: "1-2 hrs", icon: "💄" },
  ],
};

const urgencyMultipliers = [
  { id: "standard", label: "Standard", multiplier: 1, description: "Book in advance", color: "emerald" },
  { id: "soon", label: "Within 24hrs", multiplier: 1.2, description: "+20% urgency fee", color: "yellow" },
  { id: "urgent", label: "Within 2hrs", multiplier: 1.5, description: "+50% urgent fee", color: "red" },
];

export const PricingCalculator: React.FC<PricingCalculatorProps> = ({ 
  category = "plumbing",
  compact = false 
}) => {
  const [selectedService, setSelectedService] = useState<string>("");
  const [urgency, setUrgency] = useState<string>("standard");
  const [quantity, setQuantity] = useState(1);

  const services = serviceTypes[category] || serviceTypes.plumbing;
  const selectedServiceData = services.find(s => s.id === selectedService);

  const pricing = useMemo(() => {
    if (!selectedServiceData) return null;
    
    const basePrice = selectedServiceData.basePrice;
    const urgencyMultiplier = urgencyMultipliers.find(u => u.id === urgency)?.multiplier || 1;
    const subtotal = basePrice * quantity;
    const urgencyFee = subtotal * (urgencyMultiplier - 1);
    const serviceFee = subtotal * 0.1; // 10% service fee
    const total = subtotal + urgencyFee + serviceFee;

    return {
      basePrice,
      subtotal,
      urgencyFee,
      serviceFee,
      total,
    };
  }, [selectedService, urgency, quantity, selectedServiceData]);

  if (compact) {
    return (
      <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6">
        <div className="text-white font-semibold mb-4">Quick Estimate</div>
        <div className="space-y-3">
          <select
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            className="w-full px-3 py-2 bg-neutral-900 border border-neutral-800 rounded-lg text-sm text-white focus:outline-none focus:border-emerald-500"
          >
            <option value="">Select a service</option>
            {services.map(service => (
              <option key={service.id} value={service.id}>
                {service.name}
              </option>
            ))}
          </select>
          
          {pricing && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="pt-3 border-t border-neutral-800"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-neutral-400 text-sm">Estimated Total</span>
                <span className="text-2xl font-bold text-emerald-400">
                  R{pricing.total.toFixed(0)}
                </span>
              </div>
              <div className="text-neutral-600 text-xs">
                Includes service fee. Final price may vary.
              </div>
            </motion.div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-neutral-950 border border-neutral-800 rounded-3xl p-8">
      <div className="mb-8">
        <div className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-2">
          PRICING CALCULATOR
        </div>
        <h2 className="text-3xl font-semibold text-white mb-2">
          Estimate your cost
        </h2>
        <p className="text-neutral-500 text-lg">
          Get an instant quote for your service needs
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: Selection */}
        <div className="space-y-6">
          {/* Service Type */}
          <div>
            <label className="text-white font-medium text-sm mb-3 block">
              Select Service
            </label>
            <div className="grid grid-cols-1 gap-2">
              {services.map(service => (
                <button
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  className={cn(
                    "flex items-center gap-4 p-4 rounded-xl border transition-all text-left",
                    selectedService === service.id
                      ? "bg-emerald-500/10 border-emerald-500/50"
                      : "bg-neutral-900 border-neutral-800 hover:border-neutral-700"
                  )}
                >
                  <div className="text-2xl">{service.icon}</div>
                  <div className="flex-1">
                    <div className="text-white font-medium">{service.name}</div>
                    <div className="text-neutral-500 text-xs">{service.duration}</div>
                  </div>
                  <div className="text-emerald-400 font-semibold">
                    R{service.basePrice}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Urgency */}
          <div>
            <label className="text-white font-medium text-sm mb-3 block">
              How soon do you need service?
            </label>
            <div className="grid grid-cols-3 gap-2">
              {urgencyMultipliers.map(option => (
                <button
                  key={option.id}
                  onClick={() => setUrgency(option.id)}
                  className={cn(
                    "p-3 rounded-xl border transition-all text-center",
                    urgency === option.id
                      ? `bg-${option.color}-500/10 border-${option.color}-500/50`
                      : "bg-neutral-900 border-neutral-800 hover:border-neutral-700"
                  )}
                >
                  <div className={cn(
                    "text-sm font-medium mb-1",
                    urgency === option.id ? "text-white" : "text-neutral-400"
                  )}>
                    {option.label}
                  </div>
                  <div className="text-neutral-600 text-xs">{option.description}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div>
            <label className="text-white font-medium text-sm mb-3 block">
              Quantity
            </label>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 flex items-center justify-center text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
              </button>
              <span className="text-white font-semibold text-xl w-12 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 flex items-center justify-center text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Right: Price Breakdown */}
        <div>
          {pricing ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 sticky top-24"
            >
              <div className="text-white font-semibold mb-6">Price Breakdown</div>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-400">
                    {selectedServiceData?.name} x{quantity}
                  </span>
                  <span className="text-white">R{pricing.subtotal.toFixed(2)}</span>
                </div>
                {pricing.urgencyFee > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-400">Urgency Fee</span>
                    <span className="text-yellow-400">+R{pricing.urgencyFee.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-400">Service Fee (10%)</span>
                  <span className="text-white">R{pricing.serviceFee.toFixed(2)}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-800 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-neutral-400">Total Estimate</span>
                  <span className="text-3xl font-bold text-emerald-400">
                    R{pricing.total.toFixed(0)}
                  </span>
                </div>
              </div>

              <button className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold rounded-full transition-colors mb-3">
                Book Now
              </button>
              <button className="w-full py-4 bg-neutral-800 hover:bg-neutral-700 text-white font-semibold rounded-full transition-colors">
                Compare Professionals
              </button>

              <div className="mt-4 pt-4 border-t border-neutral-800 text-center">
                <div className="text-neutral-500 text-xs">
                  🔒 Price guaranteed when you book
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">📊</div>
              <div className="text-neutral-400">
                Select a service to see pricing
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
