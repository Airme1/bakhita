import { useParams } from "react-router-dom";
import rooms from "../assets/data/rooms.json";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Icon } from "@iconify/react";

export default function Room() {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const roomPrevRef = useRef(null);
  const roomNextRef = useRef(null);
  const roomSwiperRef = useRef(null);

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

  useEffect(() => {
    try {
      // Find room by ID (convert id to number for comparison)
      const selectedRoom = rooms.find((item) => item.id === parseInt(id));
      if (!selectedRoom) {
        throw new Error("Room not found");
      }
      setRoom(selectedRoom);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }, [id]); // Re-run when id changes

  // JSX rendering
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <img src={room.images[0]} alt="" />
      <h2 className="text-5xl font-bold mb-8">{room.headline}</h2>
      <p className="text-lg mb-4">{room.details}</p>

      <section className="mt-16">
        <div className="layout-pad flex justify-between items-center">
          <h2 className="font-bold text-4xl">Our Rooms</h2>
          <div className="flex gap-4 items-center text-primary text-4xl">
            <Icon
              icon="solar:round-arrow-left-line-duotone"
              className="cursor-pointer"
              ref={roomPrevRef}
            />
            <Icon
              icon="solar:round-arrow-right-line-duotone"
              className="cursor-pointer"
              ref={roomNextRef}
            />
          </div>
        </div>

        <div className="mt-6 pl-[5%] xl:pl-[8%]">
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
            }}
          >
            {room.images.map((roomImage, index) => (
              <SwiperSlide key={index}>
                <div>
                  <div className="w-full h-48 md:h-56 rounded-xl overflow-hidden mb-3 bg-gray-100 flex items-center justify-center">
                    <img
                      src={roomImage}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{room.name}</h3>
                  <p className="text-sm text-gray-600">{room.price}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <p className="text-md text-gray-600">Book your stay with us today!</p>
    </main>
  );
}
