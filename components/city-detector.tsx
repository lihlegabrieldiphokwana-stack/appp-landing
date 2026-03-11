"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

// List of supported cities
const SUPPORTED_CITIES = [
  { slug: "johannesburg", name: "Johannesburg", region: "Gauteng" },
  { slug: "sandton", name: "Sandton", region: "Gauteng" },
  { slug: "cape-town", name: "Cape Town", region: "Western Cape" },
  { slug: "durban", name: "Durban", region: "KwaZulu-Natal" },
  { slug: "pretoria", name: "Pretoria", region: "Gauteng" },
  { slug: "centurion", name: "Centurion", region: "Gauteng" },
  { slug: "midrand", name: "Midrand", region: "Gauteng" },
  { slug: "roodepoort", name: "Roodepoort", region: "Gauteng" },
  { slug: "boksburg", name: "Boksburg", region: "Gauteng" },
  { slug: "benoni", name: "Benoni", region: "Gauteng" },
  { slug: "randburg", name: "Randburg", region: "Gauteng" },
  { slug: "fourways", name: "Fourways", region: "Gauteng" },
];

interface CityDetectorProps {
  onCityChange?: (city: string) => void;
  compact?: boolean;
}

export const CityDetector: React.FC<CityDetectorProps> = ({ 
  onCityChange,
  compact = false 
}) => {
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [isDetecting, setIsDetecting] = useState(true);
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Load saved city from localStorage on mount
  useEffect(() => {
    const savedCity = localStorage.getItem("bouul_city");
    if (savedCity) {
      setSelectedCity(savedCity);
      setIsDetecting(false);
      onCityChange?.(savedCity);
    } else {
      // Auto-detect city
      detectCity();
    }
  }, []);

  // Auto-detect city using IP geolocation
  const detectCity = async () => {
    try {
      // Using a free IP geolocation API (in production, use your own backend)
      const response = await fetch("https://ipapi.co/json/");
      const data = await response.json();
      
      if (data.city) {
        // Try to match with supported cities
        const matchedCity = SUPPORTED_CITIES.find(
          city => city.name.toLowerCase().includes(data.city.toLowerCase())
        );
        
        if (matchedCity) {
          setCity(matchedCity.slug);
          return;
        }
      }
      
      // Default to Johannesburg if detection fails
      setCity("johannesburg");
    } catch (error) {
      console.error("City detection failed:", error);
      // Default to Johannesburg
      setCity("johannesburg");
    } finally {
      setIsDetecting(false);
    }
  };

  const setCity = (citySlug: string) => {
    setSelectedCity(citySlug);
    localStorage.setItem("bouul_city", citySlug);
    onCityChange?.(citySlug);
    setIsSelectorOpen(false);
  };

  const filteredCities = SUPPORTED_CITIES.filter(city =>
    city.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    city.region.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentCity = SUPPORTED_CITIES.find(c => c.slug === selectedCity);

  if (compact) {
    return (
      <div className="relative">
        <button
          onClick={() => setIsSelectorOpen(!isSelectorOpen)}
          className="flex items-center gap-2 px-3 py-1.5 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-full text-xs text-neutral-300 transition-colors"
        >
          <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {isDetecting ? (
            <span>Detecting...</span>
          ) : (
            <span>{currentCity?.name || "Select City"}</span>
          )}
          <svg className={cn("w-3 h-3 transition-transform", isSelectorOpen && "rotate-180")} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <AnimatePresence>
          {isSelectorOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute left-1/2 -translate-x-1/2 md:left-0 md:-translate-x-0 top-full mt-2 w-72 bg-neutral-900 border border-neutral-800 rounded-2xl shadow-xl z-50 overflow-hidden"
            >
              <div className="p-3 border-b border-neutral-800">
                <input
                  type="text"
                  placeholder="Search city or region..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500"
                  autoFocus
                />
              </div>
              <div className="max-h-64 overflow-y-auto">
                {filteredCities.map(city => (
                  <button
                    key={city.slug}
                    onClick={() => setCity(city.slug)}
                    className={cn(
                      "w-full px-4 py-3 text-left hover:bg-neutral-800 transition-colors flex items-center justify-between",
                      selectedCity === city.slug && "bg-emerald-500/10"
                    )}
                  >
                    <div>
                      <div className={cn(
                        "text-sm font-medium",
                        selectedCity === city.slug ? "text-emerald-400" : "text-white"
                      )}>
                        {city.name}
                      </div>
                      <div className="text-neutral-500 text-xs">{city.region}</div>
                    </div>
                    {selectedCity === city.slug && (
                      <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
          <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <div>
          <div className="text-white font-semibold">Your Location</div>
          <div className="text-neutral-500 text-xs">
            {isDetecting ? "Detecting your city..." : `Showing services in ${currentCity?.name}`}
          </div>
        </div>
      </div>

      <button
        onClick={() => setIsSelectorOpen(!isSelectorOpen)}
        className="w-full py-3 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-xl text-white font-medium transition-colors flex items-center justify-between px-4"
      >
        <span>{isDetecting ? "Detecting..." : currentCity?.name || "Select City"}</span>
        <svg className={cn("w-4 h-4 transition-transform", isSelectorOpen && "rotate-180")} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <AnimatePresence>
        {isSelectorOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="mt-4 space-y-3">
              <input
                type="text"
                placeholder="Search city or region..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500"
              />
              <div className="max-h-64 overflow-y-auto space-y-1">
                {filteredCities.map(city => (
                  <button
                    key={city.slug}
                    onClick={() => setCity(city.slug)}
                    className={cn(
                      "w-full px-3 py-2 text-left rounded-lg hover:bg-neutral-800 transition-colors flex items-center justify-between",
                      selectedCity === city.slug && "bg-emerald-500/10"
                    )}
                  >
                    <div>
                      <div className={cn(
                        "text-sm font-medium",
                        selectedCity === city.slug ? "text-emerald-400" : "text-white"
                      )}>
                        {city.name}
                      </div>
                      <div className="text-neutral-500 text-xs">{city.region}</div>
                    </div>
                    {selectedCity === city.slug && (
                      <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Hook to get current city
export const useCity = () => {
  const [city, setCity] = useState<string>("");

  useEffect(() => {
    const savedCity = localStorage.getItem("bouul_city");
    if (savedCity) {
      setCity(savedCity);
    }
  }, []);

  const updateCity = (newCity: string) => {
    setCity(newCity);
    localStorage.setItem("bouul_city", newCity);
  };

  return { city, updateCity };
};
