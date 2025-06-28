import React, { useRef, useEffect } from 'react';
import HeroImage from '../assets/topViewHotel.png';
import { Icon } from '@iconify/react';
import rooms from '../assets/data/rooms.json';
import facilities from '../assets/data/facilities.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Home() {
  // Separate refs for Rooms
  const roomPrevRef = useRef(null);
  const roomNextRef = useRef(null);
  const roomSwiperRef = useRef(null);

  // Separate refs for Facilities
  const facilityPrevRef = useRef(null);
  const facilityNextRef = useRef(null);
  const facilitySwiperRef = useRef(null);

  // Attach navigation for Rooms
  useEffect(() => {
    const interval = setInterval(() => {
      const swiper = roomSwiperRef.current;
      if (
        swiper &&
        roomPrevRef.current &&
        roomNextRef.current &&
        swiper.params?.navigation
      ) {
        swiper.params.navigation.prevEl = roomPrevRef.current;
        swiper.params.navigation.nextEl = roomNextRef.current;
        swiper.navigation.destroy();
        swiper.navigation.init();
        swiper.navigation.update();
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Attach navigation for Facilities
  useEffect(() => {
    const interval = setInterval(() => {
      const swiper = facilitySwiperRef.current;
      if (
        swiper &&
        facilityPrevRef.current &&
        facilityNextRef.current &&
        swiper.params?.navigation
      ) {
        swiper.params.navigation.prevEl = facilityPrevRef.current;
        swiper.params.navigation.nextEl = facilityNextRef.current;
        swiper.navigation.destroy();
        swiper.navigation.init();
        swiper.navigation.update();
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
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

      {/* Rooms Section */}
      <section className='mt-16'>
        <div className='layout-pad flex justify-between items-center'>
          <h2 className='font-bold text-4xl'>Our Rooms</h2>
          <div className='flex gap-4 items-center text-primary text-4xl'>
            <Icon
              icon='solar:round-arrow-left-line-duotone'
              className='cursor-pointer'
              ref={roomPrevRef}
            />
            <Icon
              icon='solar:round-arrow-right-line-duotone'
              className='cursor-pointer'
              ref={roomNextRef}
            />
          </div>
        </div>

        <div className='mt-6 pl-[5%] xl:pl-[8%]'>
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={3}
            loop={false}
            onSwiper={(swiper) => (roomSwiperRef.current = swiper)}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
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
        </div>
      </section>

      {/* Facilities Section */}
      <section className='mt-32'>
        <div className='layout-pad flex justify-between items-center'>
          <h2 className='font-bold text-4xl'>Our Facilities</h2>
          <div className='flex gap-4 items-center text-primary text-4xl'>
            <Icon
              icon='solar:round-arrow-left-line-duotone'
              className='cursor-pointer'
              ref={facilityPrevRef}
            />
            <Icon
              icon='solar:round-arrow-right-line-duotone'
              className='cursor-pointer'
              ref={facilityNextRef}
            />
          </div>
        </div>

        <div className='mt-6 pl-[5%] xl:pl-[8%]'>
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={3}
            loop={false}
            onSwiper={(swiper) => (facilitySwiperRef.current = swiper)}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}>
            {facilities.map((facility, index) => (
              <SwiperSlide key={index}>
                <div className='p-4 bg-white shadow-md rounded-xl'>
                  <h3 className='text-xl font-semibold mb-2'>
                    {facility.name}
                  </h3>
                  <p className='text-sm text-gray-600'>{facility.price}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className='layout-pad mt-32'>
        <h2 className='font-bold text-4xl text-center'>
          Proven Track of Satisfied Clients
        </h2>
        <p className='text-center mt-2'>See what our clients are saying</p>

        <div className='flex flex-wrap gap-8 items-stretch mt-8'>
          <div className='bg-white border-primary/30 rounded-xl border flex flex-col justify-between py-6 px-4 flex-1 md:min-w-[350px] gap-4'>
            <Icon icon='el:quote-alt' className='text-accent text-3xl' />
            <div>
              <div className='font-semibold text-lg'>
                Perfect Spot for Events and Stay
              </div>
              <div className='font-light'>
                Our wedding reception was held at Bakhita and everything was
                perfect. Thank you for making our day magical!
              </div>
            </div>

            <div>
              <div className='font-medium'>- Grace and Musa</div>
              <div className='font-light text-sm'>Couple</div>
            </div>
          </div>

          <div className='bg-white border-primary/30 rounded-xl border flex flex-col justify-between py-6 px-4 flex-1 md:min-w-[350px] gap-4'>
            <Icon icon='el:quote-alt' className='text-accent text-3xl' />
            <div>
              <div className='font-semibold text-lg'>
                Felt Safe and Comfortable
              </div>
              <div className='font-light'>
                The peace I felt staying here was unmatched. From the
                cleanliness to the friendly staff — I’ll definitely return.
              </div>
            </div>

            <div>
              <div className='font-medium'>- Dr Sani M</div>
              <div className='font-light text-sm'>Business Man</div>
            </div>
          </div>

          <div className='bg-white border-primary/30 rounded-xl border flex flex-col justify-between py-6 px-4 flex-1 md:min-w-[350px] gap-4'>
            <Icon icon='el:quote-alt' className='text-accent text-3xl' />
            <div>
              <div className='font-semibold text-lg'>
                Perfect Spot for Events and Stay
              </div>
              <div className='font-light'>
                We hosted a birthday party at the event hall and booked a few
                rooms for our guests — everyone had a great time. Reliable
                amenities and responsive staff made a big difference. It’s rare
                to find a place that handles both events and lodging this well.
              </div>
            </div>

            <div>
              <div className='font-medium'>- Paulina</div>
              <div className='font-light text-sm'>Event Planner</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
