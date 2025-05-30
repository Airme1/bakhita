export default function Navbar(){
    return (
        <nav className="flex justify-between items-center h-15 px-15 border-solid border-amber-50 border-1">
            <h3 className="text-2xl font-bold">Bakhita Pastoral Center</h3>
            <div className="w-1/2">
                <ul className="flex justify-around text-xl">
                    <li>Home</li>
                    <li>About</li>
                    <li>Our Services</li>
                    <li className="bg-black text-amber-50 py-1 px-5 rounded-4xl">Book Now</li>
                </ul>
            </div>
        </nav>
    )
}