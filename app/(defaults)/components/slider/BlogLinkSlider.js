'use client'
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function BlogLinkSLider() {
    return (
        <>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                slidesPerView={4}
                // spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    320: {
                        slidesPerView:3,
                        spaceBetween: 6,
                    },
                    575: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    767: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    991: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    1199: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    },
                    1350: {
                        slidesPerView: 6,
                        spaceBetween: 30,
                    },
                }}
                className="swiper-wrapper"
            >

                <SwiperSlide className="wow animate__animated animate__fadeIn">
                <Link className="btn btn-tags wow animate__animated animate__fadeIn text-nowrap" style={{width:'100%'}} href="#">
                                Logistics
                            </Link>
                          
                   
                </SwiperSlide>
                <SwiperSlide className="wow animate__animated animate__fadeIn">
                <Link className="btn btn-tags wow animate__animated animate__fadeIn text-nowrap" href="#">
                                Cargo services
                            </Link>

        </SwiperSlide>
                <SwiperSlide className="wow animate__animated animate__fadeIn">
                <Link className="btn btn-tags wow animate__animated animate__fadeIn  text-nowrap px-4" href="#" style={{width:'100%'}}>
                                Freight transportation
                            </Link>
                           

        </SwiperSlide>
                <SwiperSlide className="wow animate__animated animate__fadeIn">
                <Link className="btn btn-tags wow animate__animated animate__fadeIn text-nowrap" href="#">
                                Transport
                            </Link>
                         
        </SwiperSlide>
                <SwiperSlide className="wow animate__animated animate__fadeIn">
                <Link className="btn btn-tags wow animate__animated animate__fadeIn text-nowrap" href="#">
                                Ocean freight
                            </Link>
                          
        </SwiperSlide>
                <SwiperSlide className="wow animate__animated animate__fadeIn">
                <Link className="btn btn-tags wow animate__animated animate__fadeIn text-nowrap" href="#">
                                Reverse logistics
                            </Link>
                         
                          
        </SwiperSlide>
            </Swiper>

        </>
    )
}
