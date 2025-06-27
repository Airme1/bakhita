export default function Navbar() {
  return (
    <nav className='layout-pad py-4 flex justify-between items-center border-b-primary/20 border-1'>
      <h1 className='text-2xl font-bold'>Bakhita Pastoral Center</h1>
      <div className='flex gap-6 items-center'>
        <div>Home</div>
        <div>About</div>
        <div>Our Services</div>
        <button className='bg-[#0e0e0e] text-white px-4 py-2 rounded-full'>
          Book Now
        </button>
      </div>
    </nav>
  );
}
