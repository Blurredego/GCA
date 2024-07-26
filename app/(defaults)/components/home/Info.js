import Image from 'next/image';
import Link from 'next/link';

export default function Info() {
    return (
        <>
            <section className="section mt-85">
                <div className="cnt-center container">
                    <div className='flex flex-col items-center text-center' >
                        <Image className="mb-55 " src="/assets/imgs/template/logo.png" alt="transp" width={119.73} height={52} />
                        <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">Delivering Results for Industry Leaders</p>
                        <h2 className="color-primary-main mb-65 mt-15 wow animate__animated animate__fadeIn">
                        Enhancing Global Logistics and 
                            <br className="d-none d-lg-block" />
                            Freight Forwarding Networks
                        </h2>
                    </div>
                    <div className="row mt-50 align-items-center ">
                        <div className="col-xl-7 col-lg-6 mb-30">
                            <div className="box-images-pround">
                                <div className="box-images wow animate__animated animate__fadeIn">
                                    <img className="img-main" src="/assets/imgs/page/homepage1/img1.png" alt="transp" />
                                    <div className="image-2 shape-3">
                                        <img src="/assets/imgs/page/homepage1/vector.png" alt="transp" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 mb-30">
                            <div className="box-info-pround">
                                <h3 className="color-primary-main mb-15 wow animate__animated animate__fadeIn">Fast shipping with the most modern technology</h3>
                                <p className="font-md color-grey-500 wow animate__animated animate__fadeIn">
                                    Over the years, we have worked together to expand our network of partners to deliver reliability and consistency. We’ve also made significant strides to tightly
                                    integrate technology with our processes, giving our clients greater visibility into every engagement.
                                </p>
                                <div className="mt-30">
                                    <ul className="list-ticks">
                                        <li className="wow animate__animated animate__fadeIn">
                                            <svg className="icon-16 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Task tracking
                                        </li>
                                        <li className="wow animate__animated animate__fadeIn">
                                            <svg className="icon-16 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Create task dependencies
                                        </li>
                                        <li className="wow animate__animated animate__fadeIn">
                                            <svg className="icon-16 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Task visualization
                                        </li>
                                        <li className="wow animate__animated animate__fadeIn">
                                            <svg className="icon-16 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            hare files, discuss
                                        </li>
                                        <li className="wow animate__animated animate__fadeIn">
                                            <svg className="icon-16 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Meet deadlines faster
                                        </li>
                                        <li className="wow animate__animated animate__fadeIn">
                                            <svg className="icon-16 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Track time spent on each project
                                        </li>
                                    </ul>
                                </div>
                             
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
