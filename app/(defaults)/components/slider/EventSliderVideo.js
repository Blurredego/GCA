'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Navigation, Pagination } from 'swiper';

export default function TestimonialAboutSlider() {
    return (
        <>
            <Swiper
                modules={[ Pagination, Navigation]}
                slidesPerView={2}
                spaceBetween={30}

                
                
              
                pagination={{
                    clickable: true,
                    el: '.swiper-pagination-banner',
                }}
                navigation={{
                    prevEl: '.swiper-button-prev-customers',
                    nextEl: '.swiper-button-next-customers',
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        // spaceBetween: 30,
                    },
                    575: {
                        slidesPerView: 1,
                        // spaceBetween: 30,
                    },
                    767: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    991: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1199: {
                        slidesPerView: 2,
                        spaceBetween: 70,
                    },
                    1350: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                }}
                className="swiper-wrapper"
            >
                <SwiperSlide className="wow animate__animated animate__fadeIn">
                <div className="video-slider lg:w-[960px] w-full  lg:h-[402px] max-md:max-w-xl max-[570px]:w-[450px]   aspect-video bg-white shadow-lg overflow-hidden">
          {/* Placeholder for Whisper video player */}
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            <div className="w-16 h-16 rounded-full bg-gray-400 flex items-center justify-center">
              <span className="text-white text-4xl">▶</span>
            </div>
          </div>
        </div>
                </SwiperSlide>
              
                <SwiperSlide className="wow animate__animated animate__fadeIn">
                <div className="video-slider  lg:w-[960px]   lg:h-[402px] min-md:max-w-xl max-[570px]:w-[450px] aspect-video bg-white shadow-lg overflow-hidden">
          {/* Placeholder for Whisper video player */}
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            <div className="w-16 h-16 rounded-full bg-gray-400 flex items-center justify-center">
              <span className="text-white text-4xl">▶</span>
            </div>
          </div>
        </div>
                </SwiperSlide>
              
                <SwiperSlide className="wow animate__animated animate__fadeIn">
                <div className="video-slider  lg:w-[960px] w-full lg:h-[402px] max-md:max-w-xl max-[570px]:w-[450px]  aspect-video bg-white shadow-lg overflow-hidden">
          {/* Placeholder for Whisper video player */}
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            <div className="w-16 h-16 rounded-full bg-gray-400 flex items-center justify-center">
              <span className="text-white text-4xl">▶</span>
            </div>
          </div>
        </div>
                </SwiperSlide>
              
                <SwiperSlide className="wow animate__animated animate__fadeIn">
                <div className="video-slider  lg:w-[960px] w-full lg:h-[402px] max-md:max-w-xl max-[570px]:w-[450px]  aspect-video bg-white shadow-lg overflow-hidden">
          {/* Placeholder for Whisper video player */}
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            <div className="w-16 h-16 rounded-full bg-gray-400 flex items-center justify-center">
              <span className="text-white text-4xl">▶</span>
            </div>
          </div>
        </div>
                </SwiperSlide>
              
                <SwiperSlide className="wow animate__animated animate__fadeIn">
                <div className="video-slider  lg:w-[960px] w-full lg:h-[402px]  max-md:max-w-xl max-[570px]:w-[450px] aspect-video bg-white shadow-lg overflow-hidden">
          {/* Placeholder for Whisper video player */}
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            <div className="w-16 h-16 rounded-full bg-gray-400 flex items-center justify-center">
              <span className="text-white text-4xl">▶</span>
            </div>
          </div>
        </div>
                </SwiperSlide>
              
                <SwiperSlide className="wow animate__animated animate__fadeIn">
                <div className="video-slider  lg:w-[960px] w-full lg:h-[402px]  max-md:max-w-xl max-[570px]:w-[450px] aspect-video bg-white shadow-lg overflow-hidden">
          {/* Placeholder for Whisper video player */}
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            <div className="w-16 h-16 rounded-full bg-gray-400 flex items-center justify-center">
              <span className="text-white text-4xl">▶</span>
            </div>
          </div>
        </div>
                </SwiperSlide>
              
            </Swiper>
           
        </>
    );
}
