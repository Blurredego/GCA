'use client';
import Link from 'next/link';
import { useState } from 'react';
import Layout from '../../components/layout/Layout';
import Image from 'next/image';
export default function About() {
    const [isOpen, setOpen] = useState(false);
    return (

        <Layout >
            <title>About</title>
        <>
            <section className="section">
            {/* About Top Section */}
                <div className="container cnt-center">
                    <div className="box-pageheader-1 text-center flex flex-col justify-center items-center">
                        <span className="btn btn-tag wow animate__animated animate__fadeIn  ">Who We Are</span>
                        <h2 className="text-white mt-15 wow animate__animated animate__fadeIn mb-10 ">About Us</h2>
                        <p className="font-md color-white wow animate__animated animate__fadeIn px-1">
                        Connecting freight forwarders worldwide, our platform fosters networking,  
                            <br className="d-none d-lg-block" />
                            <span> collaboration, and business opportunities within the logistics industry. </span>
                        </p>
                    </div>
                </div>
            </section>
            {/* Simplifying complex shipping challenges Section */}
            <section className="section mt-100 ">
                <div className="container cnt-center">
                    <div className="row flex justify-between  items-center ">
                        <div className="lg:w-[45%]     mb-30">
                            <h2 className="color-primary-main mb-25 wow animate__animated animate__fadeIn">Who We Are</h2>
                            <p className="font-md color-grey-900 wow animate__animated animate__fadeIn mb-20">
                            GCA is a network of independent freight forwarders dedicated to excellence in logistics. Our alliance represents a powerful collective logistics expertise, resources, and innovation. Our members benefit from the strength of a global network while maintaining the agility and personalized service that independent forwarders are known for.
                            </p>
                           
                        </div>
                        <div className="col-lg-6 position-relative max-lg:mb-36 ">
                            <div className="row align-items-end lg:gap-4">
                                <div className="lg:w-[38%] col-md-5 col-sm-5 ">
                                <img className=' wow animate__animated animate__fadeIn mb-20' src="/assets/imgs/page/about/img-about-1-1.png" alt="GCA"  />
                                   <img className=' wow animate__animated animate__fadeIn' src="/assets/imgs/page/about/img-about-1-2.png" alt="GCA"  />
                                </div>
                                <div className="col-lg-7 col-md-7 col-sm-7">
                                <img className='w-fit h-fit wow animate__animated animate__fadeIn' src="/assets/imgs/page/about/img-about-1-3.png" alt="GCA"  />
                                </div>
                            </div>
                            <div className="quote-center shape-2" />
                        </div>
                    </div>
                </div>
            </section>
            {/* Globally Connected by Large Network Section */}
            <section className="section  mb-50">
                <div className="container cnt-center">
                    <div className="row align-items-center item-about-2">
                        <div className="col-lg-6 position-relative">
                        <Image className='w-fit h-fit wow animate__animated animate__fadeIn' src="/assets/imgs/page/about/img-about-2-1.png" alt="GCA" width={774} height={541} />
                            <div className="quote-center shape-2" />
                        </div>
                        <div className="col-lg-6">
                            <div className="box-info-aabout-2">
                                <span className="btn btn-tag-red wow animate__animated animate__fadeIn w-fit">Vision</span>
                                <h2 className="color-primary-main mt-15 mb-25 wow animate__animated animate__fadeIn">Our Vision</h2>
                                <p className="font-md color-grey-900 wow animate__animated animate__fadeIn mb-20">
                                To be the leading global network that transforms the logistics industry through innovation, collaboration, and exceptional service, enabling our members to achieve unparalleled success.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center item-about-2 item-about-2-revert ">
                        <div className="col-lg-6">
                            <div className="box-info-aabout-2">
                                <span className="btn btn-tag-red wow animate__animated animate__fadeIn w-fit">Mission</span>
                                <h2 className="color-primary-main mt-15 mb-25 wow animate__animated animate__fadeIn">Our Mission</h2>
                                <p className="font-md color-grey-900 wow animate__animated animate__fadeIn mb-20">
                                Our mission at GCA is to empower independent freight forwarders with global connections, robust financial protection, and growth-enhancing tools. We foster networking and collaboration, provide comprehensive support, and innovate with advanced logistics solutions and educational initiatives through the GCA Academy.
                                </p>
                                <div className="box-button mt-40 flex">
                                    <Link className="btn btn-brand-2 wow animate__animated animate__fadeIn mr-20" href="/pages/contact">
                                        Contact Us
                                    </Link>
                                   
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 position-relative">
                            <Image className='w-fit h-fit wow animate__animated animate__fadeIn' src="/assets/imgs/page/about/img-about-2-2.png" alt="GCA" width={774} height={541} />
                            <div className="quote-center shape-2" />
                        </div>
                    </div>
                    <div className="row align-items-center item-about-2">
                        <div className="col-lg-6 position-relative">
                        <Image className='w-fit h-fit wow animate__animated animate__fadeIn' src="/assets/imgs/page/about/img-about-2-3.png" alt="GCA" width={774} height={541} />
                            <div className="quote-center shape-2" />
                        </div>
                        <div className="col-lg-6">
                            <div className="box-info-aabout-2">
                                <span className="btn btn-tag-red wow animate__animated animate__fadeIn w-fit">Why GCA</span>
                                <h2 className="color-primary-main mt-15 mb-25 wow animate__animated animate__fadeIn">Why Choose GCA</h2>
                                <p className="font-md color-grey-900 wow animate__animated animate__fadeIn mb-20">
                                Join GCA to amplify your reach and capabilities through our powerful global network. Benefit from exclusive services designed to support and enhance your business. Be part of a community that values collaboration, integrity, and mutual success. Leverage the latest tools and technologies to stay ahead in the logistics industry.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Proud to Deliver Excellence Every Time Section */}
            {/* <section className="section mt-55 bg-1 position-relative pt-90 pb-90">
                <div className="container cnt-center">
                    <div className="row">
                        <div className="col-lg-6 color-main">
                            <span className="btn btn-tag wow animate__animated animate__fadeIn w-fit" style={{color:'black', fontWeight:'bold'}}>Get in touch</span>
                            <h3 className=" mt-15 color-main wow animate__animated animate__fadeIn mb-20">
                                Proud to Deliver
                                <br className="d-none d-lg-block" />
                                Excellence Every Time
                            </h3>
                            <p className="font-md  wow animate__animated animate__fadeIn mb-40">
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla. Interactively transform magnetic growth
                                strategies whereas prospective "outside the box" thinking.
                            </p>
                            <div className="row">
                                <div className="col-lg-6 mb-30 ">
                                    <h6 className="chart-title color-main font-md-bold  wow animate__animated animate__fadeIn">Boost your sale</h6>
                                    <p className="font-xs  wow animate__animated animate__fadeIn">The latest design trends meet hand-crafted templates.</p>
                                </div>
                                <div className="col-lg-6 mb-30">
                                    <h6 className="feature-title color-main font-md-bold  wow animate__animated animate__fadeIn">Introducing New Features</h6>
                                    <p className="font-xs  wow animate__animated animate__fadeIn">The latest design trends meet hand-crafted templates.</p>
                                </div>
                            </div>
                            <div className="mt-20 flex">
                                <Link className="btn btn-brand-2 wow animate__animated animate__fadeIn mr-20 " style={{backgroundColor:'white', color:'red', fontWeight:'bold'}} href="/pages/contact">
                                    Contact Us
                                </Link>
                                <Link className="btn btn-link-medium text-white wow animate__animated animate__fadeIn" href="#">
                                    Learn More
                                    <svg className="icon-16 ml-5 h-6 w-6  text-white" fill="white" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box-image-touch box-image-info-2-2" />
            </section>
           */}

        </>
        </Layout>
    );
}
