"use client";
import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive';
import SectionTitle from '../_global_components/SectionTitle';
import ReviewsCard from './ReviewsCard';
import { allReviews } from "@data/reviews/allReviews"
import { cutReview } from '@utils/cutReview';

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % allReviews.length);
    }, 5000);
  
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const tabletReviews = allReviews.slice(0,4);
  const mobileReviews = allReviews.slice(0,2);
  const desktopReviews = allReviews.slice(0,8);

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth < 1024);
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <section className='max-w-screen-lg mx-auto'>
        <SectionTitle>Ce qu'ils en disent</SectionTitle>
        <div className='relative'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 opacity-10 bg-white dark:bg-primary'>
            {isMobile ? (
              mobileReviews.map((review, idx) => (
                <ReviewsCard key={idx} review={review} />
              ))
            ) : isTablet ? (
              tabletReviews.map((review, idx) => (
                <ReviewsCard key={idx} review={review} />
              ))
            ) : (
              desktopReviews.map((review, idx) => (
                <ReviewsCard key={idx} review={review} />
              ))
            )}
          </div>
          <div className='max-md:bg-primary max-md:dark:bg-white py-4 rounded-md md:bg-gradient-to-b md:from-primary dark:from-white md:to-transparent md:from-55% md:to-60% w-[350px] md:h-[500px] md:w-[500px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:-translate-y-1/4 md:rounded-full '>
            <div className='pt-6 h-full'>
              <img src={allReviews[0].img} className='w-16 h-16 rounded-full mx-auto bg-secondary'/>
              <p className='mt-6 px-8 text-center text-white dark:text-primary'>{cutReview(allReviews[currentIndex].review, 150)}</p>
              <p className='text-center bg-secondary w-fit mx-auto py-2 px-4 mt-8 rounded-lg'>{allReviews[currentIndex].author} - {allReviews[currentIndex].job}</p>
            </div>
          </div>
        </div>
    </section>
  )
}
