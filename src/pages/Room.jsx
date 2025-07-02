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
          <h2 className='text-5xl font-bold mb-2'>{room.name}</h2>
          <p>{room.price}</p>
        </div>
      </header>

      <section className='mt-16'>
        <div className='layout-pad flex justify-between items-center'>
          <h2 className='font-bold text-4xl'>Our Rooms</h2>
          <div className='flex gap-4 items-center text-primary text-4xl'></div>
        </div>
      </section>
      <p className='text-md text-gray-600'>Book your stay with us today!</p>
    </main>
  );
}
