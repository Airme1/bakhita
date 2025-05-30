import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay';
import room1 from '../assets/room1.jpg'
import room2 from '../assets/room2.jpg'
import room3 from '../assets/room3.jpg'

export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  return (
    <div className="embla w-200 mx-auto" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide"><img src={room1} alt="" /></div>
        <div className="embla__slide"><img src={room2} alt="" /></div>
        <div className="embla__slide"><img src={room3} alt="" /></div>
      </div>
    </div>
  );
}
