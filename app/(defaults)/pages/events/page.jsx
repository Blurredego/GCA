import React from 'react';
import Layout from '../../components/layout/Layout';
import Image from 'next/image';
import Link from 'next/link';
import './events.css';
import SliderEvent from './eventSlider';
import EventVideoSlider from './EventVideoSlider';
const Events = () => {
    return (
   
        <Layout>
         <title>Events</title>
            <div className="section d-block">
                <div className="box-map-contact wow animate__animated animate__fadeIn relative  mx-auto w-full">
                    <Image  className="w-full h-full" src={'/assets/imgs/page/events/heroBgImg.png'} alt="Hero Image " width={4096} height={1492} />

                    <div className="box-red-content absolute top-20  h-fit  w-full min-[1360px]:py-10 max-lg:top-7 max-md:top-5   min-[1440px]:h-[250px]">
                        <h1 className="color-main container min-[1370px]:font-extrabold   font-bold max-md:text-2xl">
                            Global Freight Forwarders
                            <br  />
                            Conference
                        </h1>
                    </div>

                    <div className="box-events-container bottom-0 w-full    ">
                        <div className="box-card ">
                            <div className="flex w-full flex-wrap items-center justify-around gap-4">
                                <div className="card-event">
                                    <div className="box-card-left h-52">
                                        <p className="font-sm color-grey-900 ">
                                            <strong>The 18th</strong> Global Freight Forwarders Conference
                                        </p>
                                        <h3 className="color-primary-main font-extrabold">China</h3>
                                        <p className="font-sm color-grey-900 ">September 2021</p>
                                        <div className="box-button mt-40 flex">
                                            <Link className="btn btn-brand-2 wow  animate__animated animate__fadeIn mr-20 flex h-8 text-nowrap px-2" href="#">
                                                View More
                                                <svg className="icon-16 ml-5 h-6 w-6" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </Link>
                                            <Link className="btn btn-link-medium wow animate__animated animate__fadeIn h-8 text-nowrap border border-black px-2" href="#">
                                                buy Now
                                                <svg className="icon-16 ml-5 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-event">
                                    <div className="box-card-left h-52">
                                        <p className="font-sm color-grey-900 ">
                                            <strong>The 18th</strong> Global Freight Forwarders Conference
                                        </p>
                                        <h3 className="color-primary-main font-extrabold">Qatar</h3>
                                        <p className="font-sm color-grey-900 ">September 2021</p>
                                        <div className="box-button mt-40 flex">
                                            <Link className="btn btn-brand-2 wow  animate__animated animate__fadeIn mr-20 flex h-8 text-nowrap px-2" href="#">
                                                View More
                                                <svg className="icon-16 ml-5 h-6 w-6" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </Link>
                                            <Link className="btn btn-link-medium wow animate__animated animate__fadeIn h-8 text-nowrap border border-black px-2" href="#">
                                                buy Now
                                                <svg className="icon-16 ml-5 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-event">
                                    <div className="box-card-left h-52">
                                        <p className="font-sm color-grey-900 ">
                                            <strong>The 18th</strong> Global Freight Forwarders Conference
                                        </p>
                                        <h3 className="color-primary-main font-extrabold">Thailand</h3>
                                        <p className="font-sm color-grey-900 ">September 2021</p>
                                        <div className="box-button mt-40 flex ">
                                            <Link className="btn btn-link-medium wow animate__animated animate__fadeIn h-8 text-nowrap border border-black px-4" href="#">
                                                coming soon
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-event">
                                    <div className="box-card-left h-52">
                                        <p className="font-sm color-grey-900 ">
                                            <strong>The 18th</strong> Global Freight Forwarders Conference
                                        </p>
                                        <h3 className="color-primary-main font-extrabold">UAE</h3>
                                        <p className="font-sm color-grey-900 ">September 2021</p>
                                        <div className="box-button mt-40 flex ">
                                            <Link className="btn btn-link-medium wow animate__animated animate__fadeIn h-8 text-nowrap border border-black px-4" href="#">
                                                coming soon
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className="color-primary-main cnt-center mt-110  container text-2xl lg:text-xl font-extrabold  ">2024 & 2025 UPCOMING EVENTS</h2>

            <section className="section mt-20 max-md:mt-32  ">
                <div className="cnt-center position-relative container  max-lg:flex max-lg:flex-col-reverse  ">
                    <div className="event-info-box p-30  top-10  max-lg:mx-1 max-lg:-mt-10 lg:absolute lg:h-[488px]  lg:w-[552px]  ">
                        <h2 className="wow animate__animated animate__fadeIn mb-20 text-white">Guangzhou, China</h2>
                        <p className="font-sm color-gray-700 wow animate__animated animate__fadeIn">Lorem Ipsum is simply dummyLorem Ipsum </p>
                        <div className="flex items-center gap-1">
                            <Image className="inline-block" src="/assets/imgs/page/events/time.png" alt="event" width={24} height={24} />
                            25th-27th September 2024
                        </div>
                        <div className="mt-30 flex flex-grow gap-10 max-md:gap-2 max-[370px]:flex-col">
                            <div className="  flex flex-col  gap-1">
                                <span className="btn btn-tag wow animate__animated animate__fadeIn w-fit text-nowrap  text-white">Expected Attendance</span>
                                <p className="text-4xl font-extrabold max-md:text-3xl">2,000+</p>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="btn btn-tag wow animate__animated animate__fadeIn w-fit text-white ">Organizer</span>
                                <p className="text-4xl  font-extrabold max-md:text-3xl">GCA</p>
                            </div>
                        </div>
                        <p className="mt-40">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                            printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
                        </p>

                        <Link className="btn btn-link-medium wow animate__animated animate__fadeIn mt-5 h-8 w-fit text-nowrap border bg-white px-2 " href="/register">
                            Registration
                            <svg className="icon-16 ml-5 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                    </div>

                    <div className="event-Image-box  flex w-full justify-end">
                        <Image src="/assets/imgs/page/events/event1.png" alt="event" width={1008} height={552} />
                    </div>
                </div>
            </section>
            <section className="section  mt-110 max-md:mt-32">
                <div className="cnt-center position-relative container  max-lg:flex max-lg:flex-col  ">
                    <div className="event-Image-box   ">
                        <Image src="/assets/imgs/page/events/event2.png" alt="event" width={1008} height={552} />
                    </div>
                    <div className="event-info-box p-30 right-0  top-10  max-lg:mx-1 max-lg:-mt-10 lg:absolute lg:h-[488px]  lg:w-[552px]  ">
                        <h2 className="wow animate__animated animate__fadeIn mb-20 text-white">Guangzhou, China</h2>
                        <p className="font-sm color-gray-700 wow animate__animated animate__fadeIn">Lorem Ipsum is simply dummyLorem Ipsum </p>
                        <div className="flex items-center gap-1">
                            <Image className="inline-block" src="/assets/imgs/page/events/time.png" alt="event" width={24} height={24} />
                            25th-27th September 2024
                        </div>
                        <div className="mt-30 flex flex-grow gap-10 max-md:gap-2 max-[370px]:flex-col">
                            <div className="  flex flex-col  gap-1">
                                <span className="btn btn-tag wow animate__animated animate__fadeIn w-fit text-nowrap  text-white">Expected Attendance</span>
                                <p className="text-4xl font-extrabold max-md:text-3xl">2,000+</p>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="btn btn-tag wow animate__animated animate__fadeIn w-fit text-white ">Organizer</span>
                                <p className="text-4xl  font-extrabold max-md:text-3xl">GCA</p>
                            </div>
                        </div>
                        <p className="mt-40">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                            printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
                        </p>

                        <Link className="btn btn-link-medium wow animate__animated animate__fadeIn mt-5 h-8 w-fit text-nowrap border bg-white px-2 " href="#">
                            Registration
                            <svg className="icon-16 ml-5 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>
            <section className="section  mt-110 max-md:mt-32">
                <div className="cnt-center position-relative container  max-lg:flex max-lg:flex-col-reverse  ">
                    <div className="event-info-box p-30  top-10  max-lg:mx-1 max-lg:-mt-10 lg:absolute lg:h-[488px]  lg:w-[552px]  ">
                        <h2 className="wow animate__animated animate__fadeIn mb-20 text-white">Guangzhou, China</h2>
                        <p className="font-sm color-gray-700 wow animate__animated animate__fadeIn">Lorem Ipsum is simply dummyLorem Ipsum </p>
                        <div className="flex items-center gap-1">
                            <Image className="inline-block" src="/assets/imgs/page/events/time.png" alt="event" width={24} height={24} />
                            25th-27th September 2024
                        </div>
                        <div className="mt-30 flex flex-grow gap-10 max-md:gap-2 max-[370px]:flex-col">
                            <div className="  flex flex-col  gap-1">
                                <span className="btn btn-tag wow animate__animated animate__fadeIn w-fit text-nowrap  text-white">Expected Attendance</span>
                                <p className="text-4xl font-extrabold max-md:text-3xl">2,000+</p>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="btn btn-tag wow animate__animated animate__fadeIn w-fit text-white ">Organizer</span>
                                <p className="text-4xl  font-extrabold max-md:text-3xl">GCA</p>
                            </div>
                        </div>
                        <p className="mt-40">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                            printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
                        </p>

                        <Link className="btn btn-link-medium wow animate__animated animate__fadeIn mt-5 h-8 w-fit text-nowrap border bg-white px-2 " href="/register">
                            Registration
                            <svg className="icon-16 ml-5 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                    </div>

                    <div className="event-Image-box  flex w-full justify-end">
                        <Image src="/assets/imgs/page/events/event1.png" alt="event" width={1008} height={552} />
                    </div>
                </div>
            </section>
            <section className="section  mt-110 max-md:mt-32">
                <div className="cnt-center position-relative container  max-lg:flex max-lg:flex-col  ">
                    <div className="event-Image-box   ">
                        <Image src="/assets/imgs/page/events/event2.png" alt="event" width={1008} height={552} />
                    </div>
                    <div className="event-info-box p-30 right-0  top-10  max-lg:mx-1 max-lg:-mt-10 lg:absolute lg:h-[488px]  lg:w-[552px]  ">
                        <h2 className="wow animate__animated animate__fadeIn mb-20 text-white">Guangzhou, China</h2>
                        <p className="font-sm color-gray-700 wow animate__animated animate__fadeIn">Lorem Ipsum is simply dummyLorem Ipsum </p>
                        <div className="flex items-center gap-1">
                            <Image className="inline-block" src="/assets/imgs/page/events/time.png" alt="event" width={24} height={24} />
                            25th-27th September 2024
                        </div>
                        <div className="mt-30 flex flex-grow gap-10 max-md:gap-2 max-[370px]:flex-col">
                            <div className="  flex flex-col  gap-1">
                                <span className="btn btn-tag wow animate__animated animate__fadeIn w-fit text-nowrap  text-white">Expected Attendance</span>
                                <p className="text-4xl font-extrabold max-md:text-3xl">2,000+</p>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="btn btn-tag wow animate__animated animate__fadeIn w-fit text-white ">Organizer</span>
                                <p className="text-4xl  font-extrabold max-md:text-3xl">GCA</p>
                            </div>
                        </div>
                        <p className="mt-40">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                            printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
                        </p>

                        <Link className="btn btn-link-medium wow animate__animated animate__fadeIn mt-5 h-8 w-fit text-nowrap border bg-white px-2 " href="/register">
                            Registration
                            <svg className="icon-16 ml-5 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="section cnt-center mt-110 w-full bg-white p-48 max-md:mt-32 max-md:p-2 ">
                <div className=" container ">
                    <SliderEvent />
                </div>
            </section>

            {/*  here carouse of video */}
   <section className='overflow-clip'>
            <EventVideoSlider/>
   </section>





            <section className="section cnt-center mt-110 max-md:mt-32 mb-32">
            <div className="cnt-center container flex justify-center gap-10 max-md:flex-col ">
                <div className=" bg-white p-4   lg:w-1/3 h-[218px] shadow-md shadow-black-dark-light rounded-md  flex flex-col justify-between ">
                    <h3 className="text-bold text-lg color-primary-main mb-2">Do you want to participate
                    <br/>
                     in any events?</h3>
                    <Link className="btn btn-brand-2 wow  animate__animated animate__fadeIn mr-20 flex h-8 text-nowrap px-2 w-fit" href="#">
                        ATTEND
                        <svg className="icon-16  h-6 w-6" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </Link>
                </div>
                <div className=" bg-white p-4   lg:w-1/3 h-[218px] shadow-md shadow-black-dark-light rounded-md flex flex-col justify-between  ">
                    <h3 className="text-bold text-lg color-primary-main mb-2">Do you have any question?</h3>
                    <Link className="btn btn-brand-2 wow  animate__animated animate__fadeIn mr-20 flex h-8 text-nowrap px-2 w-fit" href="#">
                        CONTACT
                        <svg className="icon-16  h-6 w-6" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </Link>
                </div>
                </div>
            </section>
        </Layout>
     
    );
};

export default Events;
