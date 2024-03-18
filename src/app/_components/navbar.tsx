import Image from "next/image";
import logo from "../../../public/images/logo.png";

export function Navbar () {
    return (
        <div className="flex py-4 bg-gray-50">
            <div className="flex items-center gap-4 bg-gray-50">
                <Image 
                src={logo}
                width={100}
                height={100}
                alt="Logo"/>
                <span className="flex text-6xl font-normal items-center text-black font-allison">JP Equestrian</span>
                </div>
                    <div className="flex justify-between m-auto">
                        <div className="font-inter p-6 text-gray-400">Services</div>
                        <div className="font-inter p-6 text-gray-400">About</div>
                        <div className="font-inter p-6 text-gray-400">Contact</div>
                        <div className="font-inter p-6 text-gray-400">Blog</div>
                    </div>
                    <div>
                    <div className="flex text-center p-4 pr-24">
  <a href="book" className="mx-auto flex h-10 w-full max-w-4xl justify-center rounded-lg bg-black p-2 pl-6 pr-6 font-inter text-white shadow-lg hover:border-2 hover:border-gray-200">
    <button id="book">Book Now</button>
  </a>
</div>
                    </div>
            </div>

    )
}


