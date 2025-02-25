"use client"

import Image from 'next/image'
import React from 'react'
import { useState } from "react";

interface IImages {
  images: string[];
}


export const Carousel = ({images}:IImages) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [loading, setLoading] = useState(true);

    const prevSlide = () => {
      setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };
  
    const nextSlide = () => {
      setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const handleImageLoad = () => {
      setLoading(false);
    };
  
    return (
      <div className="relative w-full px-4">
        {/* Carousel wrapper */}
        <div className="relative h-56 md:h-96 overflow-hidden rounded-lg">
          
          {images.map((src, index) => (
            
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out flex justify-center items-center ${
                  index === activeIndex ? "opacity-100" : "opacity-0"
                }`}
              >

                  {
                    loading && index === activeIndex && (
                      <div className="z-10 animate-spin inline-block size-[80px] border-[5px] sm:size-[180px] sm:border-[15px] border-current border-t-transparent text-gray-600 rounded-full dark:text-gray-500" role="status" aria-label="loading">
                          <span className="sr-only">Loading...</span>
                      </div>
                    )
                  }
                  <Image
                    width={600}
                    height={300}
                    src={`/${src}`}
                    className={`absolute w-full h-full object-contain transition-opacity duration-700 ease-in-out ${ !loading ? "opacity-100" : "opacity-0" }`}
                    alt={`Slide ${index + 1}`}
                    onLoad={handleImageLoad}
                  />
                </div>

          ))}
        </div>
  
        {/* Slider indicators */}
        <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === activeIndex ? "bg-white" : "bg-gray-400"
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
  
        {/* Slider controls */}
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 z-30 bg-white/30 p-2 rounded-full hover:bg-white/50 transition"
          onClick={prevSlide}
        >
          <svg
            className="w-6 h-6 text-gray-800"
            viewBox="0 0 6 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5 1L1 5l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
  
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 z-30 bg-white/30 p-2 rounded-full hover:bg-white/50 transition"
          onClick={nextSlide}
        >
          <svg
            className="w-6 h-6 text-gray-800"
            viewBox="0 0 6 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 9l4-4-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    );
  }