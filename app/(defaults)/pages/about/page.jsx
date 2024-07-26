'use client';
import BrandSlider from '../../components/slider/BrandSlider';
import NewsAboutSlider from '../../components/slider/NewsAboutSlider';
import TestimonialAboutSlider from '../../components/slider/TestimonialAboutSlider';
import Link from 'next/link';
import { useState } from 'react';
import ModalVideo from 'react-modal-video';
import Layout from '../../components/layout/Layout';
export default function About() {
    const [isOpen, setOpen] = useState(false);
    return (
        <Layout >
        <>
            <section className="section">
            {/* About Top Section */}
                <div className="container cnt-center">
                    <div className="box-pageheader-1 text-center flex flex-col justify-center items-center">
                        <span className="btn btn-tag wow animate__animated animate__fadeIn  ">Who We Are</span>
                        <h2 className="text-white mt-15 wow animate__animated animate__fadeIn mb-10 ">About Us</h2>
                        <p className="font-md color-white wow animate__animated animate__fadeIn px-1">
                            We have been pioneering the industry in Europe for 20 years, and delivering value
                            <br className="d-none d-lg-block" />
                            products within given timeframe, every single time.
                        </p>
                    </div>
                </div>
            </section>
            {/* Simplifying complex shipping challenges Section */}
            <section className="section mt-100 mb-50">
                <div className="container cnt-center">
                    <div className="row flex justify-between  items-center ">
                        <div className="lg:w-[45%]     mb-30">
                            <h2 className="color-primary-main mb-25 wow animate__animated animate__fadeIn">Simplifying complex shipping challenges with innovative solutions</h2>
                            <p className="font-md color-grey-900 wow animate__animated animate__fadeIn mb-20">
                                Logistics companies are essential to the smooth functioning of global supply chains. They offer a range of services such as transportation, warehousing, inventory
                                management, and distribution to businesses across different industries. The role of logistics companies has become increasingly important in recent years due to the
                                growth of e-commerce and global trade.
                            </p>
                            <div className="box-button mt-40 flex h-12">
                                <Link className="btn btn-brand-1-big hover-up wow animate__animated animate__fadeIn mr-40" href="#">
                                    Calculate Package
                                </Link>
                                <a className="btn btn-play popup-youtube hover-up wow animate__animated animate__fadeIn" onClick={() => setOpen(true)}>
                                    <img src="/assets/imgs/template/icons/play.svg" alt="transp" />
                                </a>
                            </div>
                            <ModalVideo channel="youtube" autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
                        </div>
                        <div className="col-lg-6 position-relative mb-30">
                            <div className="row align-items-end lg:gap-4">
                                <div className="lg:w-[38%] col-md-5 col-sm-5">
                                    <img className="wow animate__animated animate__fadeIn mb-20" src="/assets/imgs/page/about/img-about-1-1.png" alt="transp" />
                                    <img className="wow animate__animated animate__fadeIn" src="/assets/imgs/page/about/img-about-1-2.png" alt="transp" />
                                </div>
                                <div className="col-lg-7 col-md-7 col-sm-7">
                                    <img className="wow animate__animated animate__fadeIn" src="/assets/imgs/page/about/img-about-1-3.png" alt="transp" />
                                </div>
                            </div>
                            <div className="quote-center shape-2" />
                        </div>
                    </div>
                </div>
            </section>
            {/* Globally Connected by Large Network Section */}
            <section className="section mt-50 mb-50">
                <div className="container cnt-center">
                    <div className="row align-items-center item-about-2">
                        <div className="col-lg-6 position-relative">
                            <img className="wow animate__animated animate__fadeIn" src="/assets/imgs/page/about/img-about-2-1.png" alt="transp" />\
                            <div className="quote-center shape-2" />
                        </div>
                        <div className="col-lg-6">
                            <div className="box-info-aabout-2">
                                <span className="btn btn-tag-red wow animate__animated animate__fadeIn w-fit">Mission</span>
                                <h2 className="color-primary-main mt-15 mb-25 wow animate__animated animate__fadeIn">Globally Connected by Large Network</h2>
                                <p className="font-md color-grey-900 wow animate__animated animate__fadeIn mb-20">
                                    At Logistic Transp, our mission is to provide our clients with exceptional transportation services that meet and exceed their expectations. We aim to be the most
                                    reliable, efficient, and cost-effective transportation provider in the industry.
                                </p>
                                <div className="box-button mt-40">
                                    <div className="row">
                                        <div className="col-lg-6 mb-30">
                                            <h6 className="chart-title font-md-bold color-grey-900 wow animate__animated animate__fadeIn">Affordable Cost</h6>
                                            <p className="font-xs color-grey-900 wow animate__animated animate__fadeIn">The latest design trends meet hand-crafted templates.</p>
                                        </div>
                                        <div className="col-lg-6 mb-30">
                                            <h6 className="feature-title font-md-bold color-grey-900 wow animate__animated animate__fadeIn">Shot Time Delivery</h6>
                                            <p className="font-xs color-grey-900 wow animate__animated animate__fadeIn">The latest design trends meet hand-crafted templates.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center item-about-2 item-about-2-revert">
                        <div className="col-lg-6">
                            <div className="box-info-aabout-2">
                                <span className="btn btn-tag-red wow animate__animated animate__fadeIn w-fit">History</span>
                                <h2 className="color-primary-main mt-15 mb-25 wow animate__animated animate__fadeIn">Globally Connected by Large Network</h2>
                                <p className="font-md color-grey-900 wow animate__animated animate__fadeIn mb-20">
                                    Logistic Transp was founded in 2005 by a group of transportation professionals who saw an opportunity to provide a better level of service to businesses. Since our
                                    founding, we have grown to become a leading transportation provider, with a presence in over 30 countries around the world.
                                </p>
                                <div className="box-button mt-40 flex">
                                    <Link className="btn btn-brand-2 wow animate__animated animate__fadeIn mr-20" href="/pages/contact">
                                        Contact Us
                                    </Link>
                                    <Link className="btn btn-link-medium wow animate__animated animate__fadeIn" href="#">
                                        Learn More
                                        <svg className="icon-16 ml-5 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 position-relative">
                            <img className="wow animate__animated animate__fadeIn" src="/assets/imgs/page/about/img-about-2-2.png" alt="transp" />
                            <div className="quote-center shape-2" />
                        </div>
                    </div>
                    <div className="row align-items-center item-about-2">
                        <div className="col-lg-6 position-relative">
                            <img className="wow animate__animated animate__fadeIn" src="/assets/imgs/page/about/img-about-2-3.png" alt="transp" />
                            <div className="quote-center shape-2" />
                        </div>
                        <div className="col-lg-6">
                            <div className="box-info-aabout-2">
                                <span className="btn btn-tag-red wow animate__animated animate__fadeIn w-fit">Our Partners</span>
                                <h2 className="color-primary-main mt-15 mb-25 wow animate__animated animate__fadeIn">We have established strong relationships with our partners</h2>
                                <p className="font-md color-grey-900 wow animate__animated animate__fadeIn mb-20">
                                    We strive to become pioneers in the field, providing first quality and cost-effective service, and smart solutions to the market. Our 30 years’ experience in the
                                    shipping, transport and logistics industry is our strength, which support us to deliver our promises to our customers.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Proud to Deliver Excellence Every Time Section */}
            <section className="section mt-55 bg-1 position-relative pt-90 pb-90">
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
            {/* Meet Our Team Section */}
            <section className="section pt-110 pb-100">
                <div className="container cnt-center">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <h2 className="title-favicon wow animate__animated animate__fadeIn mb-20">Meet Our Team</h2>
                            <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">
                                Welcome to our tranporation services agency. We are
                                <br className="d-none d-lg-block" />
                                the best at our trans-portation service ever.
                            </p>
                        </div>
                    </div>
                    <div className="row mt-50  flex justify-evenly ">
                        <div className="lg:w-[24%] col-sm-5 mb-50 wow animate__animated animate__fadeIn">
                            <div className="cardTeam">
                                <div className="cardImage">
                                    {' '}
                                    <img src="/assets/imgs/page/homepage2/team1.png" alt="transp" />
                                </div>
                                <div className="cardInfo">
                                    <h6 className="color-primary-main">Devon Lane</h6>
                                    <div className="info-bottom">
                                        <p className="color-grey-500">Founder / CEO</p>
                                        <p className="color-grey-500">
                                            <Link href="#">
                                                <svg className="bi bi-twitter" xmlns="http://www.w3.org/2000/svg" width={14} height={14} fill="#818692" viewBox="0 0 16 16">
                                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                                </svg>
                                            </Link>
                                            <Link href="#">
                                                <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M8.08433 14V7.61441H10.2268L10.5483 5.12509H8.08433V3.53603C8.08433 2.81554 8.28358 2.32453 9.31793 2.32453L10.635 2.32399V0.097461C10.4072 0.0678617 9.62539 0 8.71539 0C6.81517 0 5.51425 1.15988 5.51425 3.28949V5.12509H3.36523V7.61441H5.51425V14H8.08433Z"
                                                        fill="none"
                                                    />
                                                </svg>
                                            </Link>
                                            <Link href="#">
                                                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M14.0161 9.34418C14.9441 5.18418 11.2961 1.40818 7.0081 2.12818C4.6881 0.688181 1.6001 2.32018 1.6001 5.08818C1.6001 5.72818 1.7761 6.33618 2.0801 6.84818C1.2321 11.0242 4.8961 14.7522 9.1841 13.9682C12.2081 15.5682 15.5361 12.3842 14.0161 9.34418ZM9.9521 11.8562C8.8321 12.3202 6.9761 12.3202 5.8561 11.7282C4.2561 10.8802 3.9841 8.96018 5.3601 8.96018C6.4001 8.96018 6.0641 10.1762 7.1201 10.6562C7.6001 10.8802 8.6401 10.8962 9.2321 10.4962C9.8241 10.0962 9.7761 9.47218 9.4561 9.18418C8.6081 8.40018 6.1601 8.70418 5.0401 7.32818C4.5601 6.73618 4.4641 5.68018 5.0561 4.91218C6.0961 3.56818 9.1521 3.48818 10.4641 4.49618C11.6801 5.44018 11.3441 6.67218 10.3681 6.67218C9.2001 6.67218 9.8081 5.13618 7.9041 5.13618C6.5281 5.13618 5.9841 6.11218 6.9601 6.59218C8.2721 7.26418 11.6161 7.04018 11.6161 9.60018C11.6161 10.6562 10.9601 11.4402 9.9521 11.8562Z"
                                                        fill="none"
                                                    />
                                                </svg>
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-[24%] col-sm-5 mb-50 wow animate__animated animate__fadeIn">
                            <div className="cardTeam">
                                <div className="cardImage">
                                    {' '}
                                    <img src="/assets/imgs/page/homepage2/team2.png" alt="transp" />
                                </div>
                                <div className="cardInfo ">
                                    <h6 className="color-primary-main">Lori Stevens</h6>
                                    <div className="info-bottom">
                                        <p className="color-grey-500">Founder / CEO</p>
                                        <p className="color-grey-500">
                                            <Link href="#">
                                                <svg className="bi bi-twitter" xmlns="http://www.w3.org/2000/svg" width={14} height={14} fill="#818692" viewBox="0 0 16 16">
                                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                                </svg>
                                            </Link>
                                            <Link href="#">
                                                <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M8.08433 14V7.61441H10.2268L10.5483 5.12509H8.08433V3.53603C8.08433 2.81554 8.28358 2.32453 9.31793 2.32453L10.635 2.32399V0.097461C10.4072 0.0678617 9.62539 0 8.71539 0C6.81517 0 5.51425 1.15988 5.51425 3.28949V5.12509H3.36523V7.61441H5.51425V14H8.08433Z"
                                                        fill="none"
                                                    />
                                                </svg>
                                            </Link>
                                            <Link href="#">
                                                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M14.0161 9.34418C14.9441 5.18418 11.2961 1.40818 7.0081 2.12818C4.6881 0.688181 1.6001 2.32018 1.6001 5.08818C1.6001 5.72818 1.7761 6.33618 2.0801 6.84818C1.2321 11.0242 4.8961 14.7522 9.1841 13.9682C12.2081 15.5682 15.5361 12.3842 14.0161 9.34418ZM9.9521 11.8562C8.8321 12.3202 6.9761 12.3202 5.8561 11.7282C4.2561 10.8802 3.9841 8.96018 5.3601 8.96018C6.4001 8.96018 6.0641 10.1762 7.1201 10.6562C7.6001 10.8802 8.6401 10.8962 9.2321 10.4962C9.8241 10.0962 9.7761 9.47218 9.4561 9.18418C8.6081 8.40018 6.1601 8.70418 5.0401 7.32818C4.5601 6.73618 4.4641 5.68018 5.0561 4.91218C6.0961 3.56818 9.1521 3.48818 10.4641 4.49618C11.6801 5.44018 11.3441 6.67218 10.3681 6.67218C9.2001 6.67218 9.8081 5.13618 7.9041 5.13618C6.5281 5.13618 5.9841 6.11218 6.9601 6.59218C8.2721 7.26418 11.6161 7.04018 11.6161 9.60018C11.6161 10.6562 10.9601 11.4402 9.9521 11.8562Z"
                                                        fill="none"
                                                    />
                                                </svg>
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-[24%] col-sm-5 mb-50 wow animate__animated animate__fadeIn">
                            <div className="cardTeam">
                                <div className="cardImage">
                                    {' '}
                                    <img src="/assets/imgs/page/homepage2/team3.png" alt="transp" />
                                </div>
                                <div className="cardInfo">
                                    <h6 className="color-primary-main">Devon Lane</h6>
                                    <div className="info-bottom">
                                        <p className="color-grey-500">Founder / CEO</p>
                                        <p className="color-grey-500">
                                            <Link href="#">
                                                <svg className="bi bi-twitter" xmlns="http://www.w3.org/2000/svg" width={14} height={14} fill="#818692" viewBox="0 0 16 16">
                                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                                </svg>
                                            </Link>
                                            <Link href="#">
                                                <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M8.08433 14V7.61441H10.2268L10.5483 5.12509H8.08433V3.53603C8.08433 2.81554 8.28358 2.32453 9.31793 2.32453L10.635 2.32399V0.097461C10.4072 0.0678617 9.62539 0 8.71539 0C6.81517 0 5.51425 1.15988 5.51425 3.28949V5.12509H3.36523V7.61441H5.51425V14H8.08433Z"
                                                        fill="none"
                                                    />
                                                </svg>
                                            </Link>
                                            <Link href="#">
                                                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M14.0161 9.34418C14.9441 5.18418 11.2961 1.40818 7.0081 2.12818C4.6881 0.688181 1.6001 2.32018 1.6001 5.08818C1.6001 5.72818 1.7761 6.33618 2.0801 6.84818C1.2321 11.0242 4.8961 14.7522 9.1841 13.9682C12.2081 15.5682 15.5361 12.3842 14.0161 9.34418ZM9.9521 11.8562C8.8321 12.3202 6.9761 12.3202 5.8561 11.7282C4.2561 10.8802 3.9841 8.96018 5.3601 8.96018C6.4001 8.96018 6.0641 10.1762 7.1201 10.6562C7.6001 10.8802 8.6401 10.8962 9.2321 10.4962C9.8241 10.0962 9.7761 9.47218 9.4561 9.18418C8.6081 8.40018 6.1601 8.70418 5.0401 7.32818C4.5601 6.73618 4.4641 5.68018 5.0561 4.91218C6.0961 3.56818 9.1521 3.48818 10.4641 4.49618C11.6801 5.44018 11.3441 6.67218 10.3681 6.67218C9.2001 6.67218 9.8081 5.13618 7.9041 5.13618C6.5281 5.13618 5.9841 6.11218 6.9601 6.59218C8.2721 7.26418 11.6161 7.04018 11.6161 9.60018C11.6161 10.6562 10.9601 11.4402 9.9521 11.8562Z"
                                                        fill="none"
                                                    />
                                                </svg>
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-[24%] col-sm-5 mb-50 wow animate__animated animate__fadeIn">
                            <div className="cardTeam">
                                <div className="cardImage">
                                    {' '}
                                    <img src="/assets/imgs/page/homepage2/team4.png" alt="transp" />
                                </div>
                                <div className="cardInfo">
                                    <h6 className="color-primary-main">Devon Lane</h6>
                                    <div className="info-bottom">
                                        <p className="color-grey-500">Founder / CEO</p>
                                        <p className="color-grey-500">
                                            <Link href="#">
                                                <svg className="bi bi-twitter" xmlns="http://www.w3.org/2000/svg" width={14} height={14} fill="#818692" viewBox="0 0 16 16">
                                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                                </svg>
                                            </Link>
                                            <Link href="#">
                                                <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M8.08433 14V7.61441H10.2268L10.5483 5.12509H8.08433V3.53603C8.08433 2.81554 8.28358 2.32453 9.31793 2.32453L10.635 2.32399V0.097461C10.4072 0.0678617 9.62539 0 8.71539 0C6.81517 0 5.51425 1.15988 5.51425 3.28949V5.12509H3.36523V7.61441H5.51425V14H8.08433Z"
                                                        fill="none"
                                                    />
                                                </svg>
                                            </Link>
                                            <Link href="#">
                                                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M14.0161 9.34418C14.9441 5.18418 11.2961 1.40818 7.0081 2.12818C4.6881 0.688181 1.6001 2.32018 1.6001 5.08818C1.6001 5.72818 1.7761 6.33618 2.0801 6.84818C1.2321 11.0242 4.8961 14.7522 9.1841 13.9682C12.2081 15.5682 15.5361 12.3842 14.0161 9.34418ZM9.9521 11.8562C8.8321 12.3202 6.9761 12.3202 5.8561 11.7282C4.2561 10.8802 3.9841 8.96018 5.3601 8.96018C6.4001 8.96018 6.0641 10.1762 7.1201 10.6562C7.6001 10.8802 8.6401 10.8962 9.2321 10.4962C9.8241 10.0962 9.7761 9.47218 9.4561 9.18418C8.6081 8.40018 6.1601 8.70418 5.0401 7.32818C4.5601 6.73618 4.4641 5.68018 5.0561 4.91218C6.0961 3.56818 9.1521 3.48818 10.4641 4.49618C11.6801 5.44018 11.3441 6.67218 10.3681 6.67218C9.2001 6.67218 9.8081 5.13618 7.9041 5.13618C6.5281 5.13618 5.9841 6.11218 6.9601 6.59218C8.2721 7.26418 11.6161 7.04018 11.6161 9.60018C11.6161 10.6562 10.9601 11.4402 9.9521 11.8562Z"
                                                        fill="none"
                                                    />
                                                </svg>
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-[24%] col-sm-5 mb-50 wow animate__animated animate__fadeIn">
                            <div className="cardTeam">
                                <div className="cardImage">
                                    {' '}
                                    <img src="/assets/imgs/page/about/team5.png" alt="transp" />
                                </div>
                                <div className="cardInfo">
                                    <h6 className="color-primary-main">Devon Lane</h6>
                                    <div className="info-bottom">
                                        <p className="color-grey-500">Founder / CEO</p>
                                        <p className="color-grey-500">
                                            <Link href="#">
                                                <svg className="bi bi-twitter" xmlns="http://www.w3.org/2000/svg" width={14} height={14} fill="#818692" viewBox="0 0 16 16">
                                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                                </svg>
                                            </Link>
                                            <Link href="#">
                                                <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M8.08433 14V7.61441H10.2268L10.5483 5.12509H8.08433V3.53603C8.08433 2.81554 8.28358 2.32453 9.31793 2.32453L10.635 2.32399V0.097461C10.4072 0.0678617 9.62539 0 8.71539 0C6.81517 0 5.51425 1.15988 5.51425 3.28949V5.12509H3.36523V7.61441H5.51425V14H8.08433Z"
                                                        fill="none"
                                                    />
                                                </svg>
                                            </Link>
                                            <Link href="#">
                                                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M14.0161 9.34418C14.9441 5.18418 11.2961 1.40818 7.0081 2.12818C4.6881 0.688181 1.6001 2.32018 1.6001 5.08818C1.6001 5.72818 1.7761 6.33618 2.0801 6.84818C1.2321 11.0242 4.8961 14.7522 9.1841 13.9682C12.2081 15.5682 15.5361 12.3842 14.0161 9.34418ZM9.9521 11.8562C8.8321 12.3202 6.9761 12.3202 5.8561 11.7282C4.2561 10.8802 3.9841 8.96018 5.3601 8.96018C6.4001 8.96018 6.0641 10.1762 7.1201 10.6562C7.6001 10.8802 8.6401 10.8962 9.2321 10.4962C9.8241 10.0962 9.7761 9.47218 9.4561 9.18418C8.6081 8.40018 6.1601 8.70418 5.0401 7.32818C4.5601 6.73618 4.4641 5.68018 5.0561 4.91218C6.0961 3.56818 9.1521 3.48818 10.4641 4.49618C11.6801 5.44018 11.3441 6.67218 10.3681 6.67218C9.2001 6.67218 9.8081 5.13618 7.9041 5.13618C6.5281 5.13618 5.9841 6.11218 6.9601 6.59218C8.2721 7.26418 11.6161 7.04018 11.6161 9.60018C11.6161 10.6562 10.9601 11.4402 9.9521 11.8562Z"
                                                        fill="none"
                                                    />
                                                </svg>
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-[24%] col-sm-5 mb-50 wow animate__animated animate__fadeIn">
                            <div className="cardTeam">
                                <div className="cardImage">
                                    {' '}
                                    <img src="/assets/imgs/page/about/team6.png" alt="transp" />
                                </div>
                                <div className="cardInfo">
                                    <h6 className="color-primary-main">Lori Stevens</h6>
                                    <div className="info-bottom">
                                        <p className="color-grey-500">Founder / CEO</p>
                                        <p className="color-grey-500">
                                            <Link href="#">
                                                <svg className="bi bi-twitter" xmlns="http://www.w3.org/2000/svg" width={14} height={14} fill="#818692" viewBox="0 0 16 16">
                                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                                </svg>
                                            </Link>
                                            <Link href="#">
                                                <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M8.08433 14V7.61441H10.2268L10.5483 5.12509H8.08433V3.53603C8.08433 2.81554 8.28358 2.32453 9.31793 2.32453L10.635 2.32399V0.097461C10.4072 0.0678617 9.62539 0 8.71539 0C6.81517 0 5.51425 1.15988 5.51425 3.28949V5.12509H3.36523V7.61441H5.51425V14H8.08433Z"
                                                        fill="none"
                                                    />
                                                </svg>
                                            </Link>
                                            <Link href="#">
                                                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M14.0161 9.34418C14.9441 5.18418 11.2961 1.40818 7.0081 2.12818C4.6881 0.688181 1.6001 2.32018 1.6001 5.08818C1.6001 5.72818 1.7761 6.33618 2.0801 6.84818C1.2321 11.0242 4.8961 14.7522 9.1841 13.9682C12.2081 15.5682 15.5361 12.3842 14.0161 9.34418ZM9.9521 11.8562C8.8321 12.3202 6.9761 12.3202 5.8561 11.7282C4.2561 10.8802 3.9841 8.96018 5.3601 8.96018C6.4001 8.96018 6.0641 10.1762 7.1201 10.6562C7.6001 10.8802 8.6401 10.8962 9.2321 10.4962C9.8241 10.0962 9.7761 9.47218 9.4561 9.18418C8.6081 8.40018 6.1601 8.70418 5.0401 7.32818C4.5601 6.73618 4.4641 5.68018 5.0561 4.91218C6.0961 3.56818 9.1521 3.48818 10.4641 4.49618C11.6801 5.44018 11.3441 6.67218 10.3681 6.67218C9.2001 6.67218 9.8081 5.13618 7.9041 5.13618C6.5281 5.13618 5.9841 6.11218 6.9601 6.59218C8.2721 7.26418 11.6161 7.04018 11.6161 9.60018C11.6161 10.6562 10.9601 11.4402 9.9521 11.8562Z"
                                                        fill="none"
                                                    />
                                                </svg>
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-[24%] col-sm-5 mb-50 wow animate__animated animate__fadeIn">
                            <div className="cardTeam">
                                <div className="cardImage">
                                    {' '}
                                    <img src="/assets/imgs/page/about/team7.png" alt="transp" />
                                </div>
                                <div className="cardInfo">
                                    <h6 className="color-primary-main">Devon Lane</h6>
                                    <div className="info-bottom">
                                        <p className="color-grey-500">Founder / CEO</p>
                                        <p className="color-grey-500">
                                            <Link href="#">
                                                <svg className="bi bi-twitter" xmlns="http://www.w3.org/2000/svg" width={14} height={14} fill="#818692" viewBox="0 0 16 16">
                                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                                </svg>
                                            </Link>
                                            <Link href="#">
                                                <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M8.08433 14V7.61441H10.2268L10.5483 5.12509H8.08433V3.53603C8.08433 2.81554 8.28358 2.32453 9.31793 2.32453L10.635 2.32399V0.097461C10.4072 0.0678617 9.62539 0 8.71539 0C6.81517 0 5.51425 1.15988 5.51425 3.28949V5.12509H3.36523V7.61441H5.51425V14H8.08433Z"
                                                        fill="none"
                                                    />
                                                </svg>
                                            </Link>
                                            <Link href="#">
                                                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M14.0161 9.34418C14.9441 5.18418 11.2961 1.40818 7.0081 2.12818C4.6881 0.688181 1.6001 2.32018 1.6001 5.08818C1.6001 5.72818 1.7761 6.33618 2.0801 6.84818C1.2321 11.0242 4.8961 14.7522 9.1841 13.9682C12.2081 15.5682 15.5361 12.3842 14.0161 9.34418ZM9.9521 11.8562C8.8321 12.3202 6.9761 12.3202 5.8561 11.7282C4.2561 10.8802 3.9841 8.96018 5.3601 8.96018C6.4001 8.96018 6.0641 10.1762 7.1201 10.6562C7.6001 10.8802 8.6401 10.8962 9.2321 10.4962C9.8241 10.0962 9.7761 9.47218 9.4561 9.18418C8.6081 8.40018 6.1601 8.70418 5.0401 7.32818C4.5601 6.73618 4.4641 5.68018 5.0561 4.91218C6.0961 3.56818 9.1521 3.48818 10.4641 4.49618C11.6801 5.44018 11.3441 6.67218 10.3681 6.67218C9.2001 6.67218 9.8081 5.13618 7.9041 5.13618C6.5281 5.13618 5.9841 6.11218 6.9601 6.59218C8.2721 7.26418 11.6161 7.04018 11.6161 9.60018C11.6161 10.6562 10.9601 11.4402 9.9521 11.8562Z"
                                                        fill="none"
                                                    />
                                                </svg>
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-[24%] col-sm-5 mb-50 wow animate__animated animate__fadeIn">
                            <div className="cardTeam">
                                <div className="cardImage">
                                    {' '}
                                    <img src="/assets/imgs/page/about/team8.png" alt="transp" />
                                </div>
                                <div className="cardInfo">
                                    <h6 className="color-primary-main">Devon Lane</h6>
                                    <div className="info-bottom">
                                        <p className="color-grey-500">Founder / CEO</p>
                                        <p className="color-grey-500">
                                            <Link href="#">
                                                <svg className="bi bi-twitter" xmlns="http://www.w3.org/2000/svg" width={14} height={14} fill="#818692" viewBox="0 0 16 16">
                                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                                </svg>
                                            </Link>
                                            <Link href="#">
                                                <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M8.08433 14V7.61441H10.2268L10.5483 5.12509H8.08433V3.53603C8.08433 2.81554 8.28358 2.32453 9.31793 2.32453L10.635 2.32399V0.097461C10.4072 0.0678617 9.62539 0 8.71539 0C6.81517 0 5.51425 1.15988 5.51425 3.28949V5.12509H3.36523V7.61441H5.51425V14H8.08433Z"
                                                        fill="none"
                                                    />
                                                </svg>
                                            </Link>
                                            <Link href="#">
                                                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M14.0161 9.34418C14.9441 5.18418 11.2961 1.40818 7.0081 2.12818C4.6881 0.688181 1.6001 2.32018 1.6001 5.08818C1.6001 5.72818 1.7761 6.33618 2.0801 6.84818C1.2321 11.0242 4.8961 14.7522 9.1841 13.9682C12.2081 15.5682 15.5361 12.3842 14.0161 9.34418ZM9.9521 11.8562C8.8321 12.3202 6.9761 12.3202 5.8561 11.7282C4.2561 10.8802 3.9841 8.96018 5.3601 8.96018C6.4001 8.96018 6.0641 10.1762 7.1201 10.6562C7.6001 10.8802 8.6401 10.8962 9.2321 10.4962C9.8241 10.0962 9.7761 9.47218 9.4561 9.18418C8.6081 8.40018 6.1601 8.70418 5.0401 7.32818C4.5601 6.73618 4.4641 5.68018 5.0561 4.91218C6.0961 3.56818 9.1521 3.48818 10.4641 4.49618C11.6801 5.44018 11.3441 6.67218 10.3681 6.67218C9.2001 6.67218 9.8081 5.13618 7.9041 5.13618C6.5281 5.13618 5.9841 6.11218 6.9601 6.59218C8.2721 7.26418 11.6161 7.04018 11.6161 9.60018C11.6161 10.6562 10.9601 11.4402 9.9521 11.8562Z"
                                                        fill="none"
                                                    />
                                                </svg>
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
             {/* BrandSlider Section */}
             {/* <div className="section bg-2 pt-65 pb-35">
            <div className="container cnt-center">
                    <div className="row flex flex-wrap items-center justify-between">
                        <div className="col-lg-3 pr-3 mb-8 max-md:text-center lg:text-left wow animate__animated animate__fadeIn max-md:px-10">
                            <p className="font-2xl-bold color-brand-2">We are<span className="color-brand-1"> trusted</span> by major global brands</p>
                        </div>
                        <div className="col-lg-9 mb-8">
                            <div className="box-swiper">
                                <div className="swiper-container  swiper-group-6 pb-0">
                                    <BrandSlider />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-50" />
            {/*Testimonials Section  */}
            {/* <section className="section mt-50">
                <div className="container cnt-center">
                    <div className="row align-items-center">
                        <div className="col-lg-8 col-md-8">
                            <h2 className="title-favicon color-brand-2 title-padding-left wow animate__animated animate__fadeIn mb-20">Testimonials</h2>
                            <p className="font-lg color-brand-2 pl-55 wow animate__animated animate__fadeIn">
                                Hear from our users who have saved thousands on their
                                <br className="d-none d-lg-block" />
                                Startup and SaaS solution spend.
                            </p>
                        </div>
                        <div className="col-lg-4 col-md-4 text-end">
                            <div className="box-button-sliders w-36 max-md:hidden">
                                <div className="swiper-button-prev swiper-button-prev-style-1 swiper-button-prev-customers wow animate__animated animate__fadeIn">
                                    <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                                    </svg>
                                </div>
                                <div className="swiper-button-next swiper-button-next-style-1 swiper-button-next-customers wow animate__animated animate__fadeIn">
                                    <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box-slide-customers mt-50 overflow-hidden">
                    <div className="box-slide-customers-2 container cnt-center">
                        <div className="box-swiper">
                            <div className="swiper-container swiper-group-4-customers pb-50">
                                <TestimonialAboutSlider />
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* Have any ideas in your mind Section */}
            {/* <section className="section pt-70 pb-70 bg-get-quote">
                <div className="container cnt-center">
                    <div className="box-get-quote">
                        <div className="get-quote-left">
                            <p className="font-3xl color-white wow animate__animated animate__fadeIn mb-10">Have any ideas in your mind?</p>
                            <h2 className="color-brand-1 wow animate__animated animate__fadeIn">Create your next Project with Us</h2>
                        </div>
                        <div className="get-quote-right">
                            <Link className="btn btn-get-quote wow animate__animated animate__fadeIn" href="/request-a-quote">
                                <svg className="mr-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                                    />
                                </svg>
                                GET A QUOTE
                            </Link>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* <div className="mt-50" />
            {/* Our Blog & Insights Section */}
            {/* <section className="section mt-50">
                <div className="container cnt-center">
                    <div className="row align-items-center">
                        <div className="col-lg-8 col-md-8">
                            <h2 className="title-favicon wow animate__animated animate__fadeIn mb-20">Our Blog &amp; Insights</h2>
                            <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">The latest information about shipping services and our promotions</p>
                        </div>
                        <div className="col-lg-4 col-md-4 text-end">
                            <div className="box-button-sliders w-36">
                                <div className="swiper-button-prev swiper-button-prev-style-1 swiper-button-prev-customers wow animate__animated animate__fadeIn">
                                    <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                                    </svg>
                                </div>
                                <div className="swiper-button-next swiper-button-next-style-1 swiper-button-next-customers wow animate__animated animate__fadeIn">
                                    <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-60">
                        <div className="box-swiper">
                            <div className="swiper-container swiper-group-3-customers pb-50">
                                <NewsAboutSlider />
                            </div>
                        </div>
                    </div>
                </div>
            </section>  */}
        </>
        </Layout>
    );
}
