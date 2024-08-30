import React from 'react';
import "./personalDevelopment.css";
import { Data } from "./Data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from 'swiper';

const personalDevelopment = () => {
  return (
    <section className="personalDevelopment container section">
        <h2 className="section__title">Personal Development</h2>
        <span className="section__subtitle">Things I've Learned since joining the company</span>
        <Swiper className="personalDevelopment__container"
            loop={true}
            grabCursor={true}
            spaceBetween={24}
            pagination={{
                clickable:true
            }}
            breakpoints={{
                576: {
                    slidesPerView: 2,
                    spaceBetween: 48,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 48,
                },
            }}
            modules={[Pagination]}
        >
            {Data.map(({id, image, title, description}) => {
                return (
                    <SwiperSlide className="personalDevelopment__card" key={id}>
                        <img src={image} alt="client" className="personalDevelopment__img" />
                        <h3 className="personalDevelopment__name">{title}</h3>
                        <p className="personalDevelopment__description">{description}</p>
                    </SwiperSlide>
                )
            })}
        </Swiper>    
    </section>
  );
}

export default personalDevelopment;