"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import React, { useState } from "react";
import { useTheme } from "next-themes";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faHandshake,
  faClipboardCheck,
  faTruck,
  faHouse,
  faKey,
  faMagnifyingGlass,
  faBuilding,
  faBook,
  faChartBar,
  faClipboardList,
  faMoneyBillWave,
  faPiggyBank,
  faMoneyBillTransfer,
  faBuildingColumns,
  faCircleQuestion,
  
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";

import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";


interface ServiceItem {
  name: string;
  dec: string;
  placeholderImageQuery: string;
}

interface ServiceCategory {
  id: string;
  name: string;
  heading: string;
  subheading: string;
  items: ServiceItem[];
}

const iconMap: Record<string, IconDefinition> = {
  "briefcase icon": faBriefcase,
  "handshake icon": faHandshake,
  "checklist icon": faClipboardCheck,
  "truck icon": faTruck,

  "house icon": faHouse,
  "key icon": faKey,
  "magnifying glass on house icon": faMagnifyingGlass,
  "building icon": faBuilding,

  "ledger book icon": faBook,
  "chart icon": faChartBar,
  "clipboard with checkmark icon": faClipboardList,
  "money bag icon": faMoneyBillWave,

  "piggy bank icon": faPiggyBank,
  "money exchange icon": faMoneyBillTransfer,
  "office building icon": faBuildingColumns,
  "person with question mark icon": faCircleQuestion,
};

const services: ServiceCategory[] = [
  {
    id: "corporate-services",
    name: "Corporate Services",
    heading: "Corporate Services",
    subheading: "Expert solutions for your business needs.",
    items: [
      {
        name: "Product Sourcing",
        dec: "Market analysis & supplier selection tailored to your needs.",
        placeholderImageQuery: "briefcase icon",
      },
      {
        name: "Negotiation",
        dec: "Securing competitive pricing and clear specifications.",
        placeholderImageQuery: "handshake icon",
      },
      {
        name: "Quality Assurance",
        dec: "Pre-production checks to ensure compliance and reduce risk.",
        placeholderImageQuery: "checklist icon",
      },
      {
        name: "Logistics",
        dec: "Affordable freight, shipping, and end-to-end delivery support.",
        placeholderImageQuery: "truck icon",
      },
    ],
  },
  {
    id: "real-estate",
    name: "Real Estate",
    heading: "Real Estate",
    subheading: "Your trusted partner in property ventures.",
    items: [
      {
        name: "Property Sales",
        dec: "Facilitating smooth transactions for buying and selling properties.",
        placeholderImageQuery: "house icon",
      },
      {
        name: "Leasing & Rentals",
        dec: "End-to-end support for residential and commercial leasing.",
        placeholderImageQuery: "key icon",
      },
      {
        name: "Valuation Services",
        dec: "Accurate property valuation to support informed investment decisions.",
        placeholderImageQuery: "magnifying glass on house icon",
      },
      {
        name: "Property Management",
        dec: "Professional oversight of your property operations and maintenance.",
        placeholderImageQuery: "building icon",
      },
    ],
  },
  {
    id: "accounting",
    name: "Accounting",
    heading: "Accounting",
    subheading: "Accurate financial management for growth.",
    items: [
      {
        name: "Bookkeeping",
        dec: "Maintain accurate financial records with ease.",
        placeholderImageQuery: "ledger book icon",
      },
      {
        name: "Financial Reporting",
        dec: "Clear, detailed reporting for confident business decisions.",
        placeholderImageQuery: "chart icon",
      },
      {
        name: "Audit & Assurance",
        dec: "Comprehensive audits to ensure transparency and trust.",
        placeholderImageQuery: "clipboard with checkmark icon",
      },
      {
        name: "Payroll Services",
        dec: "Timely and compliant payroll management.",
        placeholderImageQuery: "money bag icon",
      },
    ],
  },
  {
    id: "mortgages",
    name: "Mortgages",
    heading: "Mortgages",
    subheading: "Securing your future with flexible mortgage options.",
    items: [
      {
        name: "Home Loans",
        dec: "Flexible financing options to help you purchase your dream home.",
        placeholderImageQuery: "piggy bank icon",
      },
      {
        name: "Refinancing",
        dec: "Optimize your mortgage terms with our expert refinancing solutions.",
        placeholderImageQuery: "money exchange icon",
      },
      {
        name: "Commercial Mortgages",
        dec: "Tailored mortgage solutions for offices, retail, and industrial spaces.",
        placeholderImageQuery: "office building icon",
      },
      {
        name: "Mortgage Advisory",
        dec: "Personalized advice to guide you through complex mortgage decisions.",
        placeholderImageQuery: "person with question mark icon",
      },
    ],
  },
];

const Service = () => {
  const [activeServiceId, setActiveServiceId] = useState(services[0].id);
  const activeService = services.find((service) => service.id === activeServiceId);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  if (!activeService) return null;

  const getGridCols = (length: number) => {
    if (length === 1) return "grid-cols-1";
    if (length === 2) return "grid-cols-2";
    if (length === 3) return "grid-cols-2 md:grid-cols-3";
    return "grid-cols-2 md:grid-cols-2 lg:grid-cols-4";
  };

  return (
    <div
      className={`w-screen min-h-screen flex items-center justify-center transition-colors duration-300 ${
        isDark ? "bg-background/80" : "bg-white"
      }`}
    >
      <div className="w-full py-12 px-4 md:px-8 lg:px-16 flex items-center justify-center">
        <div className="container mx-auto grid lg:grid-cols-[1fr_3fr] gap-12 items-center">
          {/* Left: Text */}
          <div className="space-y-4 text-center lg:text-left">
            <h2 className={`text-lg font-semibold ${isDark ? "from-orange-500" : "to-yellow-500"}`}>
              Our Services
            </h2>
            <h1
              className={`text-4xl md:text-5xl font-bold leading-tight ${
                isDark ? "text-white" : "text-black"
              }`}
            >
              {activeService.heading}
            </h1>
            <p className={`text-lg md:text-xl ${isDark ? "text-gray-300" : "text-slate-600"}`}>
              {activeService.subheading}
            </p>
          </div>

          {/* Right: Buttons and Cards */}
          <div className="flex flex-col items-center lg:items-end space-y-5 mr-8">
            {/* Buttons */}
            <div className="flex justify-center lg:justify-end gap-4 overflow-x-auto pb-2">
              {services.map((service) => (
           <Button
  key={service.id}
  onClick={() => setActiveServiceId(service.id)}
  className={`
    px-6 py-3 rounded-lg text-lg font-medium transition-all duration-200 flex items-center justify-center gap-2
    ${
      activeServiceId === service.id
        ? "bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-md"
        : `${
            isDark
              ? "border border-orange-500 text-white bg-black hover:bg-orange-500"
              : "border border-orange-500 text-black bg-white hover:bg-yellow-100"
          }`
    }
  `}
>
  {service.name}
  <FontAwesomeIcon
    icon={faArrowDown}
    className={`ml-2 transition-transform duration-300 ease-in-out ${
      activeServiceId === service.id ? "rotate-180" : "rotate-0"
    }`}
  />
</Button>



              ))}
            </div>

            {/* Cards */}
            <div
              className={`grid gap-6 w-full max-w-lg lg:max-w-none ${getGridCols(
                activeService.items.length
              )}`}
            >
              {activeService.items.map((item, index) => {
                const icon = iconMap[item.placeholderImageQuery] || faCircleQuestion;
                return (
                  <div
                    key={index}
                    className="relative p-[1px] rounded-xl overflow-hidden shadow-lg transition-transform duration-200 hover:scale-105"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-red-500 to-orange-500 rounded-xl z-0"></div>
                    <Card
  className={`relative z-10 ${
    isDark ? "bg-black" : "bg-white"
  } border-none rounded-xl flex flex-col items-center justify-start p-4 text-center h-[220px] max-h-[220px] overflow-hidden transition-all duration-300`}
>
  <CardContent className="p-0 flex flex-col items-center justify-start gap-3 overflow-y-auto">
    <FontAwesomeIcon
      icon={icon}
      className={`text-3xl ${isDark ? "text-white" : "text-black"}`}
    />
    <p
      className={`text-base font-semibold ${
        isDark ? "text-white" : "text-black"
      }`}
    >
      {item.name}
    </p>
    <p
      className={`text-sm ${
        isDark ? "text-gray-400" : "text-gray-600"
      } text-center`}
    >
      {item.dec}
    </p>
  </CardContent>
</Card>

                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
