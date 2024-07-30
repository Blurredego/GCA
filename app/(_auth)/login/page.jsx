import Layout from "../../(defaults)/components/layout/Layout"
import Brand1Slider from "../../(defaults)/components/home/Brands"
import Link from "next/link"
export default function Login() {

    return (
        <>
            <Layout>
                <section className="cnt-center section box-login ">
                    <div className="row align-items-center m-0">
                        <div className="col-lg-6 lg:-mt-44  ">
                            <div className="box-login-left text-center space-y-5 ">
                                <h2 className="color-brand-2 mb-40 wow animate__animated animate__fadeIn">Login</h2>
                                <p className="font-md color-grey-500 wow animate__animated animate__fadeIn">Securely log in to manage your profile and access personalized features</p>
                                <div className="box-form-login wow animate__animated animate__fadeIn">
                                    <form action="#">
                                        <div className="form-group">
                                            <input className="form-control" type="text" placeholder="website" />
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control" type="password" placeholder="Enter Your Password" />
                                        </div>
                                        <div className="form-group">
                                            <div className="d-flex justify-content-lg-end">
                                               
                                                <div className="box-forgotpass"><Link className="font-xs color-brand-2" href="#">Forgot your password?</Link></div>
                                            </div>
                                        </div>
                                        <div className="form-group mt-24">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="box-button-form-login  w-full">
                                                    <button className="btn btn-brand-1-big mr-20 w-full text-lg" type="submit" defaultValue="Sign In">Login</button>
                                                </div>
                                            </div>
                                                <div className="box-text-form-login text-start my-2 font-normal"><span className="font-xs color-grey-500">Don't Have an Account?</span><Link className="font-xs color-brand-2" href="/register">Register Now</Link></div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="box-login-right">
                                {/* <div className="quote-shape shape-1" /> */}
                                <div className="box-info-bottom-img box-info-bottom-img-3 flex flex-col items-start" style={{ width: '291px' }}>
                                    <div>
                                        <h4 className="color-white mb-15">We have 25 years</h4>
                                        <p className="font-sm color-white">
                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour
                                        </p>
                                    </div>
                                    <div className="mt-30 wow animate__animated animate__fadeIn">
                                        <Link className="btn btn-link font-sm " href="#" style={{ color: 'white' }}>
                                            View Details
                                            <span className='bg-white '>
                                                <svg   style={{ color: 'black' }} className="icon-16 h-10 w-6 text-black " fill="black" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
               
                      
                <Brand1Slider />
            </Layout>
        </>
    )
}