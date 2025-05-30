import room1Img from "../assets/room1.jpg";
import room2Img from "../assets/room2.jpg";
import room3Img from "../assets/room3.jpg";
import room4Img from "../assets/room4.jpg";
import EmblaCarousel from './EmblaCarousel';


const OPTIONS = { loop: true };
const SLIDE_COUNT = 4;
const SLIDES = [room1Img, room2Img, room3Img, room4Img];

export default function Spaces({space}){
    return (
        <section className="spaces my-8">
            <h2 className='text-4xl font-bold'>{space}</h2>
            <EmblaCarousel slides={SLIDES}/>
        </section>
    )
}