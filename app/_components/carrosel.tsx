import Image from "next/image";

const Carrosel = () => {
    return ( 
        <div className="relative w-full max-w-2xl">
            <div className="overflow-hidden relative">
                <div id="carousel" className="flex transition-transform duration-700 ease-in-out">
                    <div className="w-full flex-shrink-0">
                        <Image
                            src='#'
                            fill
                            className="w-full"
                            alt="Slide 1"
                        />
                    </div>
                    <div className="w-full flex-shrink-0">
                        <Image
                            src='#'
                            fill
                            className="w-full"
                            alt="Slide 2"
                            />
                    </div>
                    <div className="w-full flex-shrink-0">
                        <Image
                            src='#'
                            fill
                            className="w-full"
                            alt="Slide 3"
                        />
                    </div>
                </div>
            </div>

            <button id="prev" className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
            &#10094;
            </button>
            <button id="next" className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
            &#10095;
            </button>
        </div>
     );
}
 
export default Carrosel;