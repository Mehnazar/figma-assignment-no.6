import React from 'react';
import Image from "next/legacy/image";



const HeroSection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 bg-white">
      {/* Hero Section */}
      <div className="py-12 md:py-16 lg:py-0 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          {/* Text Section */}
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black">
              Learn new skills online with ease
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-lg">
              Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="text-sm sm:text-base px-2 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors">
                Start learning now
              </button>
              <button className="text-sm sm:text-base px-2 py-3 border border-gray-300 text-black rounded-md hover:bg-gray-50 transition-colors">
                Explore Courses
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative w-full h-auto">
            <div className="bg-white rounded-lg overflow-hidden">
              <Image
                src="/images/image2.svg"
                alt="Student with notebook"
                className="object-cover"
                layout="responsive"
                width={720}
                height={900}
                priority
              />
            </div>
          </div>
        </div>

        {/* Trusted By Section */}
        <div className="mt-16 flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
          <p className="text-2xl sm:text-3xl font-bold text-black text-center sm:text-left">
            Trusted by 2000+ companies worldwide.
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 items-center justify-center">
            <Image src={"/images/img4.svg"} alt="Logo 1" width={123} height={38} />
            <Image src={"/images/img5.svg"} alt="Logo 2" width={123} height={38} />
            <Image src={"/images/img6.svg"} alt="Logo 3" width={123} height={38} />
            <Image src={"/images/img7.svg"} alt="Logo 4" width={123} height={38} />
            <Image src={"/images/img8.svg"} alt="Logo 5" width={123} height={38} />
            <Image src={"/images/img9.svg"} alt="Logo 6" width={123} height={38} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;