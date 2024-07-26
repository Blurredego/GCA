import Hero1Slider from "../slider/HeroSlider";

export default function Hero() {
    return (
        <>
            <section className="section d-block">
                <div className="box-swiper">
                    <div className="swiper-container swiper-group-1 swiper-banner-1 ">
                        <Hero1Slider/>
                    </div>
                </div>
            </section>
        </>
    )
}
