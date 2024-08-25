"use client";
import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard';
import SectionTitle from '../_global_components/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/pagination';
import { allNews } from "@data/news/AllNews"

export default function News() {

  return (
    <section className='bg-secondary my-8 py-8'>
      <SectionTitle>Les news du web</SectionTitle>
      <div className='flex items-center max-w-screen-lg mx-auto mt-8 gap-6'>
        <Swiper
            // ref={swipersRef}
            pagination={true} 
            modules={[Autoplay, Pagination]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            slidesPerView={1}
            centeredSlides
            centeredSlidesBounds
            breakpoints={{
              728: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
        {allNews.map((news, idx) => (
          <SwiperSlide key={idx}>
            <NewsCard key={idx} title={news.title} shortDescription={news.shortDescription} link={news.link} img={news.img} />
          </SwiperSlide>
          
        ))}
        </Swiper>
      </div>
    </section>
  )
}