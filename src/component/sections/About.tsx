"use client";

import React from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { motion } from "framer-motion";

// const cardData = [
//   {
//     title: "Trusted Legal Expertise",
//     description: "Over a decade of experience in real estate law and legal consulting.",
//   },
//   {
//     title: "Secure Property Transactions",
//     description: "End-to-end guidance to make buying and selling property seamless and safe.",
//   },
//   {
//     title: "Client-Centered Solutions",
//     description: "Tailored legal strategies for individuals, families, and businesses.",
//   },
// ];

const About = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="w-screen min-h-screen flex items-center justify-center bg-background/80 backdrop-blur-md py-20 px-6 transition-colors duration-500 ">
      <div >
        {/* Top section with gradient background */}
        <div className="relative flex items-center p-4 md:p-8 lg:p-12">
          {/* Gradient overlay */}
          <div className="absolute inset-0 "></div>

          {/* Left section: About heading and description */}
          <div className="relative z-10 flex-1 w-1/3  lg:mx-0 lg:ml-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              About
            </h1>
            <p className="text-lg md:text-xl  text-gray-700 dark:text-gray-300">
              Get to know the creative minds behind Creato Digital Agency, and discover
              our commitment to pushing artistic boundaries and delivering exceptional
              design solutions.
            </p>
          </div>
        </div>

        {/* Bottom section: Image */}
        <div className="relative w-full h-[40vh] md:h-[50vh] lg:h-[60vh] overflow-hidden">
          <Image
            src="/p.jpg"
            alt="People working at a table"
            layout="fill"
            objectFit="cover"
            className="object-center"
          />
        </div>

        {/* Right section: Text box - positioned absolutely to overlap both sections */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute top-[42vh] right-12 md:right-16 lg:right-16 w-full max-w-sm lg:max-w-md bg-white/75 dark:bg-black/75 p-6 md:p-8 rounded-lg shadow-lg text-gray-800 dark:text-gray-200"
        >
          <p className="mb-4">
            <strong>Company Overview:</strong><br />
            Starkon Inc. is a service-oriented company based in Toronto, Canada, offering a wide range of operational and product-related services to a diverse client base. We are committed to delivering high-quality support tailored to each client’s unique needs.
          </p>
          <p>
            <strong>Mission:</strong><br />
            To build mutually beneficial relationships through both one-time deals and long-term partnerships that drive business growth and value.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
