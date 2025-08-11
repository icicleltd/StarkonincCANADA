"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

const Home = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-background/80 backdrop-blur-md">
      <div className="flex-1 min-w-[800px] px-12 py-16 flex items-center">
        <div className="max-w-2xl mt-4">
          <h1
            className={`text-5xl font-bold leading-tight mb-8 ${isDark ? "text-white" : "text-slate-900"
              }`}
          >
            Empowering Legal Confidence in <br />
            <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-600 bg-clip-text text-transparent drop-shadow-md">
              Business, Property, and Finance.
            </span>
          </h1>

          <p
            className={`text-lg leading-relaxed mb-12 ${isDark ? "text-gray-300" : "text-slate-600"
              } max-w-xl`}
          >
            Starkon Legal empowers clients with smart legal solutions in
            business, property, and finance — built on trust, clarity, and
            results...
          </p>

          <div className="flex gap-4">

            <a href="#services-section">
              <Button className="bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-yellow-700 hover:to-orange-700 text-white px-8 py-3 rounded-lg font-medium text-lg">
                Service
              </Button>
            </a>


            {/* <Button
              variant="outline"
              className={`px-8 py-3 rounded-lg font-medium text-lg border-2 ${
                isDark
                  ? "border-gray-600 text-white hover:bg-white/10 bg-gray-600"
                  : "border-slate-300 text-slate-900 hover:bg-slate-50"
              }`}
            >
              Our Products
            </Button> */}
          </div>
        </div>

        {/* Animated Logo */}

        {/* Center logo */}
        <div className="relative w-[800px] h-[400px] flex items-center justify-center">
          {/* Larger & Rotated Leaf (transparent) */}
          {/* <div className="absolute -left-3/4 top-1/6 -translate-x-1/2 -translate-y-1/2 z-0 scale-125 rotate-45 opacity-60">
    <Image src="/leaf.svg" alt="Leaf Logo Background" width={1000} height={400} />
  </div> */}

          {/* Middle Leaf (fully visible) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 rotate-12">
            <Image src="/ChatGPT.png" alt="Leaf Logo Foreground" width={1000} height={400} />
          </div>

          {/* Other Leaf (transparent and rotated) */}
          {/* <div className="absolute left-1/6 top-2/6 -translate-x-1/2 -translate-y-1/2 z-10 rotate-12 opacity-25">
    <Image src="/leaf.svg" alt="Leaf Logo Small Transparent" width={1000} height={400} />
  </div> */}




          {/* Animated dots */}
          {/* {positions.map((pos, index) => (
        <motion.div
          key={index}
          initial={{ x: 0, y: 0, scale: 0 }}
          animate={{ x: pos.x, y: pos.y, scale: 1 }}
          transition={{ duration: 1 + index * 0.1, type: "spring" }}
          className="w-4 h-4 bg-red-500 rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      ))} */}
        </div>
      </div>
    </div>
  );
};

export default Home;
