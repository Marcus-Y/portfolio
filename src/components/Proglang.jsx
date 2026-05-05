import './styles/Proglang.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

function Proglang(){
    return(
        <>
        <div className='LanguageBlock p-4'>
            <h1 className='p-[1rem_0] text-[3.5rem] text-center'>Languages</h1>
            <Swiper 
                modules={[Autoplay]}
                // spaceBetween={0}
                loop
                autoplay={{delay:0}}
                slidesPerView={3}
                speed={10000}
                // centeredSlides={true}
            >
                <SwiperSlide><img src='https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/community/logos/python-logo-only.png' alt='Python'></img></SwiperSlide>
                <SwiperSlide><img src='https://cdn-icons-png.flaticon.com/128/174/174854.png' alt='HTML'></img></SwiperSlide>
                <SwiperSlide><img src='https://cdn-icons-png.flaticon.com/128/732/732190.png' alt='CSS'></img></SwiperSlide>
                <SwiperSlide><img src='https://cdn-icons-png.flaticon.com/128/5968/5968292.png' alt='JavaScript'></img></SwiperSlide>
                <SwiperSlide><img src='https://cdn-icons-png.flaticon.com/128/1126/1126012.png' alt='React'></img></SwiperSlide>
            </Swiper>
        </div>
        </>
    );
}

export default Proglang;