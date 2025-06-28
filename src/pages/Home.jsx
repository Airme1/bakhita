import React, { useRef, useEffect, useState } from 'react';
import HeroImage from '../assets/topViewHotel.png';
import { Icon } from '@iconify/react';
import rooms from '../assets/data/rooms.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Home() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [navReady, setNavReady] = useState(false);

  useEffect(() => {
    // Trigger once refs are available in the DOM
    setNavReady(true);
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section>
        <div className='layout-pad mt-[5%] mb-16 text-center lg:max-w-[70%] xl:max-w-[65%] mx-auto'>
          <h1 className='font-bold text-6xl mb-4'>
            Welcome to Bakhita Pastoral Center
          </h1>
          <p>
            At Bakhita Pastoral Centre, hospitality isn’t just a service — it’s
            our calling. Nestled in the heart of Sokoto, our serene and secure
            environment offers more than just accommodation.
          </p>
          <button className='bg-[#0e0e0e] text-white px-8 py-2 rounded-full mt-4'>
            Book Now
          </button>
        </div>

        <div className='w-full'>
          <img src={HeroImage} alt='Hero Image' className='w-full h-auto' />
        </div>
      </section>

      {/* Our Rooms Section */}
      <section className='mt-16'>
        <div className='layout-pad flex justify-between items-center'>
          <h2 className='font-bold text-4xl'>Our Rooms</h2>
          <div className='flex gap-4 items-center text-primary text-4xl'>
            <Icon
              icon='solar:round-arrow-left-line-duotone'
              className='cursor-pointer'
              ref={prevRef}
            />
            <Icon
              icon='solar:round-arrow-right-line-duotone'
              className='cursor-pointer'
              ref={nextRef}
            />
          </div>
        </div>

        {/* Swiper */}
        <div className='mt-8 pl-[5%] xl:pl-[8%]'>
          {navReady && (
            <Swiper
              modules={[Navigation]}
              spaceBetween={30}
              slidesPerView={3}
              loop={true}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onSwiper={(swiper) => {
                // This makes sure swiper picks up the refs after they are mounted
                setTimeout(() => {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                  swiper.navigation.destroy();
                  swiper.navigation.init();
                  swiper.navigation.update();
                });
              }}>
              {rooms.map((room, index) => (
                <SwiperSlide key={index}>
                  <div className='p-4 bg-white shadow-md rounded-xl'>
                    <h3 className='text-xl font-semibold mb-2'>{room.name}</h3>
                    <p className='text-sm text-gray-600'>{room.price}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </section>
    </main>
  );
}
