// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"

// import required modules
import { Pagination } from "swiper";


import testimonials from './data'
import Testimonial from "./Testimonial";
import './testimonials.css'


const Testimonials = () => {
  return (
    <section id="achievement">
      <h2>Certifications & Achievements</h2>
      <p>
      Here are my certifications and achievements that highlight my skills and experience in different areas.
      </p>
      <div className="container">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          601: {slidesPerView: 2},
          1025: {slidesPerView: 3}
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        autoplay={true}
        className="mySwiper"
      >
        {
          testimonials.map(testimonial => (
            <SwiperSlide key={testimonial.id}>
              <Testimonial testimonial={testimonial}/>
            </SwiperSlide>
          ))
        }
      </Swiper>
      </div>
    </section>
  )
}

export default Testimonials