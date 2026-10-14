import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";

import hero1 from "../images/banner_Hero1.jpg";
import hero2 from "../images/banner_Hero2.jpg";
import hero3 from "../images/banner_Hero3.jpg";
import "./heroSlider.css";

function HeroSlider() {
    const slides = [
        {
            image: hero1,
            title: "Microsoft Xbox",
            btns: "Buy Now"
        },
        {
            image: hero2,
            title: "Air Conditioner",
            btns: "Buy Now"
        },
        {
            image: hero3,
            title: "MP3 Player",
            btns: "Buy Now"
        }
    ];








    return (
    <>
        <div className="hero">

            <div className="container"> 
                 <Swiper
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={true}
                    modules={[Autoplay, Pagination]}
                    className="hero-slider"
                >
                    {slides.map((slide,index)=>
                        <SwiperSlide key={index}>
                            <img src={slide.image} alt={slide.title} />
                            <div className="content">
                                <h4>introduction</h4>
                                <h1>{slide.title}</h1>
                                <Link to="/src/pages/cart" className="btn">{slide.btns}</Link>
                            </div>
                        </SwiperSlide>
                    )}
                </Swiper>



            </div>
        </div>
        
        </>
    );
}

export default HeroSlider;