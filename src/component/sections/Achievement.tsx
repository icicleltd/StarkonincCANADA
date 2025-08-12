'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const achievements = [
    {
        id: 1,
        tittle: "Toronto Mortgage Group",
        name: "Ethan Carter",
        feedback: "The automation platform revolutionized our client onboarding. Seamless and highly efficient!",
        date: "2025-03-12",
        description:
            "Partnered with Toronto Mortgage Group to build a smart mortgage approval system, reducing processing time by over 60% for Canadian homeowners.",
        image: "/1.png",
    },
    {
        id: 2,
        tittle: "Ontario Property Services Inc.",
        name: "Olivia Bennett",
        feedback: "We've seen remarkable improvements in service delivery and tenant satisfaction.",
        date: "2025-02-28",
        description:
            "Delivered a centralized property management solution for Ontario Property Services, enhancing scheduling, maintenance tracking, and client communication.",
        image: "/2.png",
    },
    {
        id: 3,
        tittle: "Montreal Realty Advisors",
        name: "Liam Thompson",
        feedback: "The market dashboard helped our agents close deals faster with real-time insights.",
        date: "2025-01-19",
        description:
            "Developed a data visualization tool for Montreal Realty Advisors, empowering brokers with live market trends, listings, and neighborhood insights across Québec.",
        image: "/3.png",
    },
    {
        id: 4,
        tittle: "Vancouver Tax & Accounting",
        name: "Sophia Mitchell",
        feedback: "Filing season went smoother than ever. Our clients were impressed!",
        date: "2025-04-05",
        description:
            "Built a bilingual (English/French) tax filing portal for Vancouver Tax & Accounting, supporting hundreds of clients with seamless digital tax submission.",
        image: "/4.png",
    }
];

const Achievement = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % achievements.length)
        }, 4000)
        return () => clearInterval(interval)
    }, [])

    const currentAchievement = achievements[currentIndex]

    const formatDate = (dateStr: string) => {
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(dateStr).toLocaleDateString(undefined, options)
    }

    return (
        <div className="w-screen min-h-screen flex items-center justify-center bg-background/80 backdrop-blur-md py-20 px-6 transition-colors duration-500">
            <div className="max-w-6xl w-full grid md:grid-cols-[1fr_2fr] gap-10 md:gap-16 items-center transition-all duration-700">

                {/* Left: Image */}
                <div className="flex justify-center">
                    <Image
                        src={currentAchievement.image}
                        alt={currentAchievement.tittle}
                        width={500}
                        height={350}
                        className="rounded-lg shadow-lg object-contain w-[400px] h-[300px]" // fixed size
                        priority
                    />
                </div>

                {/* Right: Text */}
                <div className="space-y-4 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
                        {currentAchievement.tittle}
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        {formatDate(currentAchievement.date)}
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-red-700 dark:text-red-700">
                        {currentAchievement.name}
                    </h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300">
                        {currentAchievement.description}
                    </p>
                    <blockquote className="text-md italic text-orange-600 dark:text-orange-300 mt-4">
                        “{currentAchievement.feedback}”
                    </blockquote>
                </div>

            </div>
        </div>
    )
}

export default Achievement
