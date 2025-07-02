import { Icon } from '@iconify/react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='layout-pad py-4 flex justify-between items-center border-b-primary/20 border-1'>
      <h1 className='text-2xl font-bold'>Bakhita Pastoral Center</h1>
      <div className='lg:flex gap-6 items-center hidden'>
        <div>Home</div>
        <div>About</div>
        <div>Our Services</div>
        <button className='bg-[#0e0e0e] text-white px-4 py-2 rounded-full'>
          Book Now
        </button>
      </div>
      <div className='lg:hidden' onClick={() => setIsOpen(!isOpen)}>
        <Icon icon='mingcute:menu-line' className='text-3xl cursor-pointer' />
      </div>
    </nav>
  );
}
