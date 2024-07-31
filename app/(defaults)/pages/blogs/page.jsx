// import BrandSlider from '../../components/home/Brands';
// import Link from 'next/link';
import Layout from '../../components/layout/Layout';
// import BlogLinkSLider from '../../components/slider/BlogLinkSlider';
export default function Blog() {
    return (
        <Layout>
            <>
                <section className="section lg:h-[460px] position-relative" style={{ backgroundColor: 'rgba(243, 243, 243, 1)' }}>
                    <div className="cnt-center   position-relative container">
                        <div className="row  h-[460px] max-md:h-52 " >
                            <div className="col-lg-6 col-md-7 flex flex-col justify-center  max-md:py-10">
                                <h6 className="color-brand-2 mb-15 wow animate__animated animate__fadeIn">Don’t miss the trending</h6>
                                <h2 className="color-primary-main mb-25 wow animate__animated animate__fadeIn">Latest News &amp; Blog</h2>
                                <p className="font-md-color-grey-900 wow animate__animated animate__fadeIn">
                                    Share discoveries on the world of Logistic, find curiosities about cargo services,
                                    <br className="d-none d-lg-block" />
                                    <span> produce insights on how intelligent agents work.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-right-blog" />
                </section>
                {/* <section className="section mt-85">
                    <div className="cnt-center container ">
                        <div className="box-tags flex justify-center text-center ">
                         <BlogLinkSLider/>
                        </div>
                        <div className="row mt-50 flex justify-evenly">
                            <div className="col-xxl-6 col-xl-12 wow animate__animated animate__fadeIn lg:w-[47%]">
                                <div className="card-blog-grid card-blog-grid-2 hover-up">
                                    <div className="card-image">
                                        <Link href="/blog-sing">
                                            <img src="/assets/imgs/page/blog/img.png" alt="transp" />
                                        </Link>
                                        <Link className="btn btn-border-brand-1 mr-15" href="/blog">
                                            Shipping
                                        </Link>
                                    </div>
                                    <div className="card-info">
                                        <Link href="/blog-sing">
                                            <h5 className="color-primary-main">How to find reliable logistics company in China and Asia</h5>
                                        </Link>
                                        <p className="font-sm color-grey-500 mt-20">
                                            Fusce dictum ullamcorper dui, id dignissim arcu volutpat vitae. Aenean mattis vestibulum odio eu facilisis. Aenean quam arcu, blandit at aliquet sit amet,
                                            convallis nec risus.
                                        </p>
                                        <div className="line-border" />
                                        <div className="d-flex align-items-center justify-content-between mt-5 pt-0">
                                            <Link className="btn btn-link-brn font-sm " href="#">
                                                View Details
                                                <span>
                                                    <svg className="icon-16 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </span>
                                            </Link>
                                            <span className="date-post font-sm color-grey-700">29 May 2022</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-xl-12 wow animate__animated animate__fadeIn lg:w-[47%]">
                                <div className="card-blog-grid card-blog-grid-2 hover-up">
                                    <div className="card-image">
                                        <Link href="/blog-sing">
                                            <img src="/assets/imgs/page/blog/img2.png" alt="transp" />
                                        </Link>
                                        <Link className="btn btn-border-brand-1 mr-15" href="/blog">
                                            Shipping
                                        </Link>
                                    </div>
                                    <div className="card-info">
                                        <Link href="/blog-sing">
                                            <h5 className="color-primary-main">How to find reliable logistics company in China and Asia</h5>
                                        </Link>
                                        <p className="font-sm color-grey-500 mt-20">
                                            Fusce dictum ullamcorper dui, id dignissim arcu volutpat vitae. Aenean mattis vestibulum odio eu facilisis. Aenean quam arcu, blandit at aliquet sit amet,
                                            convallis nec risus.
                                        </p>
                                        <div className="line-border" />
                                        <div className="d-flex align-items-center justify-content-between mt-5 pt-0 ">
                                            <Link className="btn btn-link-brn  font-sm " href="#">
                                                View Details
                                                <span>
                                                    <svg className="icon-16 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </span>
                                            </Link>
                                            <span className="date-post font-sm color-grey-700">29 May 2022</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-50 position-relative">
                    <div className="cnt-center container">
                        <div className="banner-786">
                            <div className="box-banner-ads">
                                <div className="box-banner-left">
                                    <h6 className="color-primary-main wow animate__animated animate__fadeIn">
                                        Fast shipping with the
                                        <br className="d-none d-lg-block" />
                                        most modern technology
                                    </h6>
                                </div>
                                <div className="box-banner-right" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-70">
                    <div className="cnt-center container">
                        <div className="row flex justify-evenly">
                            <div className="wow animate__animated animate__fadeIn lg:w-[24%]">
                                <div className="card-blog-grid hover-up">
                                    <div className="card-image">
                                        <Link href="/blog-sing">
                                            <img src="/assets/imgs/page/blog/news1.png" alt="transp" />
                                        </Link>
                                        <Link className="btn btn-border-brand-1 mr-15" href="/blog">
                                            Shipping
                                        </Link>
                                    </div>
                                    <div className="card-info">
                                        <Link href="/blog-sing">
                                            <h5 className="color-primary-main">How to find reliable logistics company in China and Asia</h5>
                                        </Link>
                                        <p className="font-sm color-grey-500 mt-20">
                                            Fusce dictum ullamcorper dui, id dignissim arcu volutpat vitae. Aenean mattis vestibulum odio eu facilisis. Aenean quam arcu, blandit at aliquet sit amet,
                                            convallis nec risus.
                                        </p>
                                        <div className="line-border" />
                                        <div className="d-flex align-items-center justify-content-between mt-5 pt-0">
                                            <Link className="btn btn-link-brn font-sm " href="#">
                                                View Details
                                                <span>
                                                    <svg className="icon-16 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </span>
                                            </Link>
                                            <span className="date-post font-sm color-grey-700">29 May 2022</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="wow animate__animated animate__fadeIn lg:w-[24%]">
                                <div className="card-blog-grid hover-up">
                                    <div className="card-image">
                                        <Link href="/blog-sing">
                                            <img src="/assets/imgs/page/blog/news2.png" alt="transp" />
                                        </Link>
                                        <Link className="btn btn-border-brand-1 mr-15" href="/blog">
                                            Shipping
                                        </Link>
                                    </div>
                                    <div className="card-info">
                                        <Link href="/blog-sing">
                                            <h5 className="color-primary-main">How to find reliable logistics company in China and Asia</h5>
                                        </Link>
                                        <p className="font-sm color-grey-500 mt-20">
                                            Fusce dictum ullamcorper dui, id dignissim arcu volutpat vitae. Aenean mattis vestibulum odio eu facilisis. Aenean quam arcu, blandit at aliquet sit amet,
                                            convallis nec risus.
                                        </p>
                                        <div className="line-border" />
                                        <div className="d-flex align-items-center justify-content-between mt-5 pt-0">
                                            <Link className="btn btn-link-brn font-sm " href="#">
                                                View Details
                                                <span>
                                                    <svg className="icon-16 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </span>
                                            </Link>
                                            <span className="date-post font-sm color-grey-700">29 May 2022</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="wow animate__animated animate__fadeIn lg:w-[24%]">
                                <div className="card-blog-grid hover-up">
                                    <div className="card-image">
                                        <Link href="/blog-sing">
                                            <img src="/assets/imgs/page/blog/news3.png" alt="transp" />
                                        </Link>
                                        <Link className="btn btn-border-brand-1 mr-15" href="/blog">
                                            Shipping
                                        </Link>
                                    </div>
                                    <div className="card-info">
                                        <Link href="/blog-sing">
                                            <h5 className="color-primary-main">How to find reliable logistics company in China and Asia</h5>
                                        </Link>
                                        <p className="font-sm color-grey-500 mt-20">
                                            Fusce dictum ullamcorper dui, id dignissim arcu volutpat vitae. Aenean mattis vestibulum odio eu facilisis. Aenean quam arcu, blandit at aliquet sit amet,
                                            convallis nec risus.
                                        </p>
                                        <div className="line-border" />
                                        <div className="d-flex align-items-center justify-content-between mt-5 pt-0">
                                            <Link className="btn btn-link-brn font-sm " href="#">
                                                View Details
                                                <span>
                                                    <svg className="icon-16 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </span>
                                            </Link>
                                            <span className="date-post font-sm color-grey-700">29 May 2022</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="wow animate__animated animate__fadeIn lg:w-[24%]">
                                <div className="card-blog-grid hover-up">
                                    <div className="card-image">
                                        <Link href="/blog-sing">
                                            <img src="/assets/imgs/page/blog/news4.png" alt="transp" />
                                        </Link>
                                        <Link className="btn btn-border-brand-1 mr-15" href="/blog">
                                            Shipping
                                        </Link>
                                    </div>
                                    <div className="card-info">
                                        <Link href="/blog-sing">
                                            <h5 className="color-primary-main">How to find reliable logistics company in China and Asia</h5>
                                        </Link>
                                        <p className="font-sm color-grey-500 mt-20">
                                            Fusce dictum ullamcorper dui, id dignissim arcu volutpat vitae. Aenean mattis vestibulum odio eu facilisis. Aenean quam arcu, blandit at aliquet sit amet,
                                            convallis nec risus.
                                        </p>
                                        <div className="line-border" />
                                        <div className="d-flex align-items-center justify-content-between mt-5 pt-0">
                                            <Link className="btn btn-link-brn font-sm " href="#">
                                                View Details
                                                <span>
                                                    <svg className="icon-16 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </span>
                                            </Link>
                                            <span className="date-post font-sm color-grey-700">29 May 2022</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="wow animate__animated animate__fadeIn lg:w-[24%]">
                                <div className="card-blog-grid hover-up">
                                    <div className="card-image">
                                        <Link href="/blog-sing">
                                            <img src="/assets/imgs/page/blog/news5.png" alt="transp" />
                                        </Link>
                                        <Link className="btn btn-border-brand-1 mr-15" href="/blog">
                                            Shipping
                                        </Link>
                                    </div>
                                    <div className="card-info">
                                        <Link href="/blog-sing">
                                            <h5 className="color-primary-main">How to find reliable logistics company in China and Asia</h5>
                                        </Link>
                                        <p className="font-sm color-grey-500 mt-20">
                                            Fusce dictum ullamcorper dui, id dignissim arcu volutpat vitae. Aenean mattis vestibulum odio eu facilisis. Aenean quam arcu, blandit at aliquet sit amet,
                                            convallis nec risus.
                                        </p>
                                        <div className="line-border" />
                                        <div className="d-flex align-items-center justify-content-between mt-5 pt-0">
                                            <Link className="btn btn-link-brn font-sm " href="#">
                                                View Details
                                                <span>
                                                    <svg className="icon-16 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </span>
                                            </Link>
                                            <span className="date-post font-sm color-grey-700">29 May 2022</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="wow animate__animated animate__fadeIn lg:w-[24%]">
                                <div className="card-blog-grid hover-up">
                                    <div className="card-image">
                                        <Link href="/blog-sing">
                                            <img src="/assets/imgs/page/blog/news6.png" alt="transp" />
                                        </Link>
                                        <Link className="btn btn-border-brand-1 mr-15" href="/blog">
                                            Shipping
                                        </Link>
                                    </div>
                                    <div className="card-info">
                                        <Link href="/blog-sing">
                                            <h5 className="color-primary-main">How to find reliable logistics company in China and Asia</h5>
                                        </Link>
                                        <p className="font-sm color-grey-500 mt-20">
                                            Fusce dictum ullamcorper dui, id dignissim arcu volutpat vitae. Aenean mattis vestibulum odio eu facilisis. Aenean quam arcu, blandit at aliquet sit amet,
                                            convallis nec risus.
                                        </p>
                                        <div className="line-border" />
                                        <div className="d-flex align-items-center justify-content-between mt-5 pt-0">
                                            <Link className="btn btn-link-brn font-sm " href="#">
                                                View Details
                                                <span>
                                                    <svg className="icon-16 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </span>
                                            </Link>
                                            <span className="date-post font-sm color-grey-700">29 May 2022</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="wow animate__animated animate__fadeIn lg:w-[24%]">
                                <div className="card-blog-grid hover-up">
                                    <div className="card-image">
                                        <Link href="/blog-sing">
                                            <img src="/assets/imgs/page/blog/news7.png" alt="transp" />
                                        </Link>
                                        <Link className="btn btn-border-brand-1 mr-15" href="/blog">
                                            Shipping
                                        </Link>
                                    </div>
                                    <div className="card-info">
                                        <Link href="/blog-sing">
                                            <h5 className="color-primary-main">How to find reliable logistics company in China and Asia</h5>
                                        </Link>
                                        <p className="font-sm color-grey-500 mt-20">
                                            Fusce dictum ullamcorper dui, id dignissim arcu volutpat vitae. Aenean mattis vestibulum odio eu facilisis. Aenean quam arcu, blandit at aliquet sit amet,
                                            convallis nec risus.
                                        </p>
                                        <div className="line-border" />
                                        <div className="d-flex align-items-center justify-content-between mt-5 pt-0">
                                            <Link className="btn btn-link-brn font-sm " href="#">
                                                View Details
                                                <span>
                                                    <svg className="icon-16 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </span>
                                            </Link>
                                            <span className="date-post font-sm color-grey-700">29 May 2022</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="wow animate__animated animate__fadeIn lg:w-[24%]">
                                <div className="card-blog-grid hover-up">
                                    <div className="card-image">
                                        <Link href="/blog-sing">
                                            <img src="/assets/imgs/page/blog/news8.png" alt="transp" />
                                        </Link>
                                        <Link className="btn btn-border-brand-1 mr-15" href="/blog">
                                            Shipping
                                        </Link>
                                    </div>
                                    <div className="card-info">
                                        <Link href="/blog-sing">
                                            <h5 className="color-primary-main">How to find reliable logistics company in China and Asia</h5>
                                        </Link>
                                        <p className="font-sm color-grey-500 mt-20">
                                            Fusce dictum ullamcorper dui, id dignissim arcu volutpat vitae. Aenean mattis vestibulum odio eu facilisis. Aenean quam arcu, blandit at aliquet sit amet,
                                            convallis nec risus.
                                        </p>
                                        <div className="line-border" />
                                        <div className="d-flex align-items-center justify-content-between mt-5 pt-0">
                                            <Link className="btn btn-link-brn font-sm " href="#">
                                                View Details
                                                <span>
                                                    <svg className="icon-16 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </span>
                                            </Link>
                                            <span className="date-post font-sm color-grey-700">29 May 2022</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="wow animate__animated animate__fadeIn lg:w-[24%]">
                                <div className="card-blog-grid hover-up">
                                    <div className="card-image">
                                        <Link href="/blog-sing">
                                            <img src="/assets/imgs/page/blog/news9.png" alt="transp" />
                                        </Link>
                                        <Link className="btn btn-border-brand-1 mr-15" href="/blog">
                                            Shipping
                                        </Link>
                                    </div>
                                    <div className="card-info">
                                        <Link href="/blog-sing">
                                            <h5 className="color-primary-main">How to find reliable logistics company in China and Asia</h5>
                                        </Link>
                                        <p className="font-sm color-grey-500 mt-20">
                                            Fusce dictum ullamcorper dui, id dignissim arcu volutpat vitae. Aenean mattis vestibulum odio eu facilisis. Aenean quam arcu, blandit at aliquet sit amet,
                                            convallis nec risus.
                                        </p>
                                        <div className="line-border" />
                                        <div className="d-flex align-items-center justify-content-between mt-5 pt-0">
                                            <Link className="btn btn-link-brn font-sm " href="#">
                                                View Details
                                                <span>
                                                    <svg className="icon-16 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </span>
                                            </Link>
                                            <span className="date-post font-sm color-grey-700">29 May 2022</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wow animate__animated animate__fadeIn mt-40 text-center">
                            <nav className="box-pagination">
                                <ul className="pagination">
                                    <li className="page-item">
                                        <Link className="page-link page-prev" href="#" />
                                    </li>
                                    <li className="page-item">
                                        <Link className="page-link" href="#">
                                            1
                                        </Link>
                                    </li>
                                    <li className="page-item">
                                        <Link className="page-link active" href="#">
                                            2
                                        </Link>
                                    </li>
                                    <li className="page-item">
                                        <Link className="page-link" href="#">
                                            3
                                        </Link>
                                    </li>
                                    <li className="page-item">
                                        <Link className="page-link" href="#">
                                            4
                                        </Link>
                                    </li>
                                    <li className="page-item">
                                        <Link className="page-link" href="#">
                                            5
                                        </Link>
                                    </li>
                                    <li className="page-item">
                                        <Link className="page-link" href="#">
                                            6
                                        </Link>
                                    </li>
                                    <li className="page-item">
                                        <Link className="page-link page-next" href="#" />
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </section> */}
                <div className="mt-70" />

                {/* Brand section  */}
                {/* <section>
                    <BrandSlider />
                </section> */}
                <div className="mt-70" />
            </>
        </Layout>
    );
}
