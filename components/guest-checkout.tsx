"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface GuestCheckoutProps {
  serviceType?: string;
  proName?: string;
  price?: number;
  onComplete?: (data: GuestCheckoutData) => void;
}

export interface GuestCheckoutData {
  email: string;
  phone: string;
  name: string;
  address: string;
  notes: string;
}

export const GuestCheckout: React.FC<GuestCheckoutProps> = ({
  serviceType = "Plumbing Service",
  proName = "Marco T.",
  price = 450,
  onComplete,
}) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<GuestCheckoutData>({
    email: "",
    phone: "",
    name: "",
    address: "",
    notes: "",
  });
  const [errors, setErrors] = useState<Partial<GuestCheckoutData>>({});

  const updateField = (field: keyof GuestCheckoutData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validateStep = (currentStep: number): boolean => {
    const newErrors: Partial<GuestCheckoutData> = {};

    if (currentStep === 1) {
      if (!formData.email) newErrors.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format";
      if (!formData.phone) newErrors.phone = "Phone number is required";
    }

    if (currentStep === 2) {
      if (!formData.name) newErrors.name = "Name is required";
      if (!formData.address) newErrors.address = "Address is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = () => {
    if (validateStep(step)) {
      onComplete?.(formData);
    }
  };

  const steps = [
    { number: 1, label: "Contact" },
    { number: 2, label: "Details" },
    { number: 3, label: "Review" },
    { number: 4, label: "Confirm" },
  ];

  return (
    <div className="bg-neutral-950 border border-neutral-800 rounded-3xl p-8 max-w-2xl mx-auto">
      {/* Progress Steps */}
      <div className="flex items-center justify-between mb-8">
        {steps.map((s, i) => (
          <React.Fragment key={s.number}>
            <div className="flex flex-col items-center gap-2">
              <div className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors",
                step >= s.number
                  ? "bg-emerald-500 text-black"
                  : "bg-neutral-900 text-neutral-500"
              )}>
                {step > s.number ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  s.number
                )}
              </div>
              <span className={cn(
                "text-xs font-medium",
                step >= s.number ? "text-white" : "text-neutral-500"
              )}>
                {s.label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div className={cn(
                "flex-1 h-0.5 mx-4",
                step > s.number ? "bg-emerald-500" : "bg-neutral-800"
              )} />
            )}
          </React.Fragment>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {/* Step 1: Contact Information */}
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Contact Information</h3>
              <p className="text-neutral-500">We'll use this to send booking confirmations</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-white text-sm font-medium mb-2 block">Email Address *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  placeholder="your@email.com"
                  className={cn(
                    "w-full px-4 py-3 bg-neutral-900 border rounded-xl text-white placeholder-neutral-500 focus:outline-none transition-colors",
                    errors.email
                      ? "border-red-500"
                      : "border-neutral-800 focus:border-emerald-500"
                  )}
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="text-white text-sm font-medium mb-2 block">Phone Number *</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  placeholder="+27 12 345 6789"
                  className={cn(
                    "w-full px-4 py-3 bg-neutral-900 border rounded-xl text-white placeholder-neutral-500 focus:outline-none transition-colors",
                    errors.phone
                      ? "border-red-500"
                      : "border-neutral-800 focus:border-emerald-500"
                  )}
                />
                {errors.phone && (
                  <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
                )}
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <button
                onClick={handleNext}
                className="px-8 py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold rounded-full transition-colors"
              >
                Continue
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 2: Service Details */}
        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Service Details</h3>
              <p className="text-neutral-500">Where should the professional meet you?</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-white text-sm font-medium mb-2 block">Your Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  placeholder="John Doe"
                  className={cn(
                    "w-full px-4 py-3 bg-neutral-900 border rounded-xl text-white placeholder-neutral-500 focus:outline-none transition-colors",
                    errors.name
                      ? "border-red-500"
                      : "border-neutral-800 focus:border-emerald-500"
                  )}
                />
                {errors.name && (
                  <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="text-white text-sm font-medium mb-2 block">Service Address *</label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => updateField("address", e.target.value)}
                  placeholder="123 Street Name, Suburb, City"
                  className={cn(
                    "w-full px-4 py-3 bg-neutral-900 border rounded-xl text-white placeholder-neutral-500 focus:outline-none transition-colors",
                    errors.address
                      ? "border-red-500"
                      : "border-neutral-800 focus:border-emerald-500"
                  )}
                />
                {errors.address && (
                  <p className="text-red-400 text-xs mt-1">{errors.address}</p>
                )}
              </div>

              <div>
                <label className="text-white text-sm font-medium mb-2 block">
                  Additional Notes <span className="text-neutral-500">(optional)</span>
                </label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => updateField("notes", e.target.value)}
                  placeholder="Describe your issue or any special instructions..."
                  rows={3}
                  className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                />
              </div>
            </div>

            <div className="flex justify-between pt-4">
              <button
                onClick={handleBack}
                className="px-8 py-3 bg-neutral-900 hover:bg-neutral-800 text-white font-semibold rounded-full border border-neutral-800 transition-colors"
              >
                Back
              </button>
              <button
                onClick={handleNext}
                className="px-8 py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold rounded-full transition-colors"
              >
                Continue
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 3: Review */}
        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Review Your Booking</h3>
              <p className="text-neutral-500">Please verify all information is correct</p>
            </div>

            <div className="bg-neutral-900 rounded-2xl p-6 space-y-4">
              <div className="flex items-start gap-4 pb-4 border-b border-neutral-800">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-white font-semibold mb-1">Contact Information</div>
                  <div className="text-neutral-400 text-sm">{formData.name}</div>
                  <div className="text-neutral-400 text-sm">{formData.email}</div>
                  <div className="text-neutral-400 text-sm">{formData.phone}</div>
                </div>
              </div>

              <div className="flex items-start gap-4 pb-4 border-b border-neutral-800">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-white font-semibold mb-1">Service Address</div>
                  <div className="text-neutral-400 text-sm">{formData.address}</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-white font-semibold mb-1">Service Details</div>
                  <div className="text-neutral-400 text-sm">{serviceType} with {proName}</div>
                  <div className="text-emerald-400 font-semibold mt-1">R{price}</div>
                </div>
              </div>
            </div>

            {formData.notes && (
              <div className="bg-neutral-900 rounded-xl p-4">
                <div className="text-neutral-400 text-xs mb-1">Additional Notes</div>
                <div className="text-white text-sm">{formData.notes}</div>
              </div>
            )}

            <div className="flex justify-between pt-4">
              <button
                onClick={handleBack}
                className="px-8 py-3 bg-neutral-900 hover:bg-neutral-800 text-white font-semibold rounded-full border border-neutral-800 transition-colors"
              >
                Back
              </button>
              <button
                onClick={handleSubmit}
                className="px-8 py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold rounded-full transition-colors"
              >
                Confirm Booking
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 4: Confirmation */}
        {step === 4 && (
          <motion.div
            key="step4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <div className="w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-3xl font-semibold text-white mb-4">Booking Confirmed!</h3>
            <p className="text-neutral-500 text-lg mb-8 max-w-md mx-auto">
              Your booking with {proName} has been confirmed. We've sent a confirmation email to {formData.email}
            </p>
            <div className="bg-neutral-900 rounded-2xl p-6 max-w-sm mx-auto mb-8">
              <div className="text-neutral-400 text-sm mb-2">Booking Reference</div>
              <div className="text-white font-mono text-2xl font-bold">
                BOUUL-{Math.random().toString(36).substr(2, 8).toUpperCase()}
              </div>
            </div>
            <a
              href="/"
              className="inline-block px-10 py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold rounded-full transition-colors"
            >
              Back to Home
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
