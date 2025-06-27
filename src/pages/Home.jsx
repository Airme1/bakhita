import HeroImage from '../assets/topViewHotel.png';

export default function Home() {
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
    </main>
  );
}
