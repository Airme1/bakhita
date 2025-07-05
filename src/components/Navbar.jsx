import { Icon } from '@iconify/react';
import { useState } from 'react';
import { useLocation, NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isRoomPage = location.pathname.includes('/room');

  return (
    <nav
      className={`layout-pad py-4 flex justify-between items-center z-10 ${
        isRoomPage
          ? 'text-white border-b border-b-primary/80'
          : 'text-black border-b border-b-primary/20'
      }`}>
      <h1 className='text-2xl font-bold'>Bakhita Pastoral Center</h1>
      <div className='lg:flex gap-12 items-center hidden'>
        <NavLink
          to={'/'}
          className={({ isActive }) =>
            isActive ? 'font-semibold text-lg' : ''
          }>
          Home
        </NavLink>
        <div>About</div>
        <a
          href='#services'
          className='cursor-pointer hover:text-primary hover:font-semibold'>
          Our Services
        </a>
        <button
          className={` text-white px-4 py-2 rounded-full ${
            isRoomPage ? 'bg-primary' : 'bg-[#0e0e0e]'
          }`}>
          Book Now
        </button>
      </div>
      <div className='lg:hidden' onClick={() => setIsOpen(!isOpen)}>
        <Icon icon='mingcute:menu-line' className='text-3xl cursor-pointer' />
      </div>
    </nav>
  );
}
