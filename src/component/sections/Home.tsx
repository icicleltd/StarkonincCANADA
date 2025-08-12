"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import React from "react";
import Image from "next/image";

const Home = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="w-screen min-h-screen flex items-center justify-center bg-background/80 backdrop-blur-md p-6 md:p-12">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center w-full max-w-[1200px]">
        {/* Left section */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 px-4 md:px-0">
          <h1
            className={`font-bold mb-8 ${isDark ? "text-white" : "text-slate-900"
              } text-4xl sm:text-5xl leading-tight`}
          >
            Empowering Legal Confidence in <br />
            <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-600 bg-clip-text text-transparent drop-shadow-md">
              Business, Property, and Finance.
            </span>
          </h1>

          <p
            className={`mb-12 max-w-xl ${isDark ? "text-gray-300" : "text-slate-600"
              } text-base sm:text-lg leading-relaxed`}
          >
            Starkon Legal empowers clients with smart legal solutions in
            business, property, and finance — built on trust, clarity, and
            results...
          </p>

          <div className="flex gap-4">
            <a href="#services-section" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-yellow-700 hover:to-orange-700 text-white px-6 py-3 rounded-lg font-medium text-lg">
                Service
              </Button>
            </a>
          </div>
        </div>

        {/* Right section - logo */}
        <div className="relative w-full md:w-1/2 h-[250px] sm:h-[300px] md:h-[400px] flex items-center justify-center mb-8 md:mb-0 px-4 md:px-0">
          <div className="absolute mt-6 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 rotate-12 w-[300px] sm:w-[400px] md:w-[600px]">
            <Image
              src="/ChatGPT.png"
              alt="Leaf Logo Foreground"
              width={1000}
              height={400}
              style={{ width: "100%", height: "auto" }}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
