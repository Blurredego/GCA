import Brand1Slider from "../slider/BrandSlider";

export default function Brands() {
    return (
        <>
            <div className="section bg-2 pt-16 pb-9">
                <div className="container cnt-center">
                    <div className="row flex flex-wrap items-center justify-between">
                        <div className="col-lg-3 pr-3 mb-8 max-md:text-center lg:text-left wow animate__animated animate__fadeIn max-md:px-10">
                            <p className="font-2xl-bold ">We are<span className="color-brand-1"> trusted</span> by major global brands</p>
                        </div>
                        <div className="col-lg-9 mb-8">
                            <div className="box-swiper">
                                <div className="swiper-container  swiper-group-6 pb-0">
                                    <Brand1Slider />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
