/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

import './movieSwiper.css';

import { MovieSlide } from './MovieSlide';

export const MovieSwiper = ({ movies }) => {
    
  return (
    <Swiper
        effect = {'coverflow'} // แสดงผล Swiper เป็น coverflow (ลักษณะการนำหน้ากระดานมาเรียงต่อกัน)
        grabCursor = {true} // เปิดใช้งาน grabCursor เปลี่ยนรูปแบบเนื่อหาเมาส์วางตัวเหนือ Swiper
        navigation = {true} // เปิดใช้งานปุ่ม (prev/next)
        loop = {true} // เปิดใช้วน Swiper เล่นถึงสไลด์สุดท้ายจะวนกลับไปที่สไลด์แรกอัตโนมัติ
        centeredSlides = {true} // กำหนดให้สไลด์อยู่ตรงกลางของ container
        slidesPerView = {'auto'} // กำหนดสไลด์แสดง auto คำนวณจำนวนสไลด์อัตโนมัติตามขนาด container
        coverflowEffect = {{ // กำหนดลักษณะ effect coverflow การหมุน, การยืน, ความลึก
            rotate: 35,
            stretch: 200,
            depth: 250,
            modifier: 1,
            slideShadows: true,
        }}
        autoplay = {{ // กำหนดให้ Swiper เล่นอัตโนมัติ กำหนดค่า delay ระยะเวลาในการแสดงสไลด์ถัดไป 
            delay: 2500,
            disableOnInteraction: false, // ใช้เพื่อทำให้การเลื่อนสไลด์แบบมือถือไม่มีปัญหา
        }}
        modules = {[EffectCoverflow, Navigation, Autoplay]} // นำเข้า modules ต่าง ๆของ Swiper เพื่อใช้งานฟีเจอร์เหล่านี้
        className = "movieSwiper">

            {movies.map(movie => (
            <SwiperSlide key={movie.id}>
                <MovieSlide 
                    movie={movie}
                />
            </SwiperSlide>
            ))}
    </Swiper>
  );
}
