import Layout from '../../(defaults)/components/layout/Layout';
import Brand1Slider from '../../(defaults)/components/home/Brands';
import Link from 'next/link';
export default function Register() {
    return (
        <>
            <Layout>
                <section className="section box-login">
                    <div className="row align-items-center m-0">
                        <div className="col-lg-6">
                            <div className="box-login-left">
                                <h2 className="color-brand-2 wow animate__animated animate__fadeIn mb-10">Create an account</h2>
                                <p className="font-md color-grey-500 wow animate__animated animate__fadeIn">Describe yourself as clearly so that there are no mistakes</p>
                                <div className="box-form-login wow animate__animated animate__fadeIn">
                                    <form action="#">
                                        <div className="row  justify-between">
                                            <div className="col-md-5 ">
                                                <div className="form-group">
                                                    <input className="form-control" type="text" placeholder="Full name" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input className="form-control" name="" type="text" placeholder="Company Name" />
                                                </div>
                                            </div>

                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input className="form-control" type="email" placeholder="Phone Number *" />
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <input className="form-control" type="text" placeholder="Country" />
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <input className="form-control" type="text" placeholder="City" />
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="form-group">
                                                    <input className="form-control" type="text" placeholder="State" />
                                                </div>
                                            </div>

                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input className="form-control" type="text" placeholder="Website" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input className="form-control" type="password" placeholder="Enter Your Password" />
                                                </div>
                                            </div>

                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input className="form-control" type="password" placeholder="Confirm Password" />
                                                </div>
                                            </div>

                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <div className="box-remember">
                                                        <label className="font-xs color-grey-900" htmlFor="rememberme">
                                                            <input id="rememberme" type="checkbox" />
                                                            By clicking Register button, you agree our terms and policy,
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group mt-30">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="box-button-form-login">
                                                    <input className="btn btn-brand-1-big mr-20" type="submit" defaultValue="Create Account" />
                                                </div>
                                                <div className="box-text-form-login">
                                                    <span className="font-xs color-grey-500">Already have an account?</span>
                                                    <Link className="font-xs color-brand-2" href="/login">
                                                        Sign In
                                                    </Link>
                                                </div>
                                            </div>
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
    );
}
