import NavBar from '../components/Navbar';
import { useParams } from 'react-router-dom';
import rooms from '../assets/data/rooms.json';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Icon } from '@iconify/react';

export default function Room() {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      // Find room by ID (convert id to number for comparison)
      const selectedRoom = rooms.find((item) => item.id === parseInt(id));
      if (!selectedRoom) {
        throw new Error('Room not found');
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
    <main>
      <header
        className='relative bg-cover bg-center text-white'
        style={{ backgroundImage: `url(${room.images[0]})` }}>
        {/* Overlay */}
        <div className='absolute inset-0 bg-black/70'></div>

        <div className='relative'>
          <NavBar />
        </div>

        <div className='relative z-10 text-center py-[30vh]'>
          <h1 className='text-5xl font-bold mb-2'>{room.name}</h1>
          <p>{room.price}</p>
        </div>
      </header>

      <section className='layout-pad mt-8'>
        <h2 className='font-semibold text-2xl mb-2'>{room.headline}</h2>
        <p>{room.details}</p>

        <div className='mt-4 flex flex-wrap gap-6'>
          {room.amenities.map((item, index) => {
            const [label, icon] = Object.entries(item)[0];
            return (
              <div
                key={index}
                className='flex gap-4 items-center border-primary/40 border rounded-xl px-4 py-3'>
                <Icon icon={icon} className='text-3xl text-primary' />
                <span>{label}</span>
              </div>
            );
          })}
        </div>
      </section>

      <section>
        <div className='layout-pad flex justify-between items-center mt-20'>
          <h2 className='text-4xl font-bold'>Gallery</h2>
          <div className='flex gap-4 items-center text-primary text-4xl'>
            <Icon
              icon='solar:round-arrow-left-line-duotone'
              className='cursor-pointer'
            />
            <Icon
              icon='solar:round-arrow-right-line-duotone'
              className='cursor-pointer'
            />
          </div>
        </div>
      </section>
    </main>
  );
}
