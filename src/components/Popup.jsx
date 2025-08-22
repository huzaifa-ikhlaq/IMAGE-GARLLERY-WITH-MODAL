import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
    {
        url: "https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80",
        caption: "Mountain view",
        location: "Dolomites, Italy",
        author: "John Doe",
    },
    {
        url: "https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80",
        caption: "Night sky",
        location: "Swiss Alps",
        author: "Emily White",
    },
    {
        url: "https://images.unsplash.com/photo-1605973029521-8154da591bd7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80",
        caption: "Foggy peaks",
        location: "Yosemite, USA",
        author: "Alex Green",
    },

    {
        url: "https://images.unsplash.com/photo-1526281216101-e55f00f0db7a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80",
        caption: "Mushroom",
        location: "Bled, Slovenia",
        author: "Florian van Duyn",
    },
    {
        url: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80",
        caption: "Frozen lake",
        location: "Norway",
        author: "David Lee",
    },
    {
        url: "https://images.unsplash.com/photo-1505820013142-f86a3439c5b2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80",
        caption: "Frozen lake",
        location: "Norway",
        author: "David Lee",
    },
    {
        url: "https://images.unsplash.com/photo-1477322524744-0eece9e79640?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80",
        caption: "Frozen lake",
        location: "Norway",
        author: "David Lee",
    },
    {
        url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80",
        caption: "Frozen lake",
        location: "Norway",
        author: "David Lee",
    },
    {
        url: "https://images.unsplash.com/photo-1585338447937-7082f8fc763d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80",
        caption: "Frozen lake",
        location: "Norway",
        author: "David Lee",
    },
    {
        url: "https://images.unsplash.com/photo-1596370743446-6a7ef43a36f9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
        caption: "Frozen lake",
        location: "Norway",
        author: "David Lee",
    },
    {
        url: "https://images.unsplash.com/photo-1476842384041-a57a4f124e2e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80",
        caption: "Frozen lake",
        location: "Norway",
        author: "David Lee",
    },
    {
        url: "https://images.unsplash.com/photo-1465311530779-5241f5a29892?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80",
        caption: "Frozen lake",
        location: "Norway",
        author: "David Lee",
    },
    {
        url: "https://images.unsplash.com/photo-1461301214746-1e109215d6d3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80",
        caption: "Frozen lake",
        location: "Norway",
        author: "David Lee",
    },
    {
        url: "https://images.unsplash.com/photo-1610448721566-47369c768e70?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80",
        caption: "Frozen lake",
        location: " Pfeiffer Beach, United States",
        author: "Kace Rodriguez",
    },
    {
        url: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80",
        caption: "Frozen lake",
        location: "Norway",
        author: "David Lee",
    },
    {
        url: "https://images.unsplash.com/photo-1539678050869-2b97c7c359fd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80",
        caption: "Frozen lake",
        location: "Norway",
        author: "David Lee",
    },
    {
        url: "https://images.unsplash.com/photo-1446630073557-fca43d580fbe?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80",
        caption: "Frozen lake",
        location: "Norway",
        author: "David Lee",
    },
    {
        url: "https://images.unsplash.com/photo-1596370743446-6a7ef43a36f9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80",
        caption: "Frozen lake",
        location: "Norway",
        author: "David Lee",
    },
    {
        url: "https://images.unsplash.com/photo-1464852045489-bccb7d17fe39?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80",
        caption: "Frozen lake",
        location: "Norway",
        author: "David Lee",
    },
    {
        url: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80",
        caption: "Frozen lake",
        location: "Norway",
        author: "David Lee",
    },
    {
        url: "https://images.unsplash.com/photo-1510011560141-62c7e8fc7908?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80",
        caption: "Frozen lake",
        location: "Norway",
        author: "David Lee",
    },
];

export default function Popup({ initialIndex, setIsOpen }) {
    const [currentIndex, setCurrentIndex] = useState(initialIndex + 1);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const sliderRef = useRef(null);
    const thumbsRef = useRef([]);

    // Clone last + first for infinite loop
    const extendedImages = [
        images[images.length - 1],
        ...images,
        images[0],
    ];

    const prevImage = () => {
        setIsTransitioning(true);
        setCurrentIndex((prev) => prev - 1);
    };

    const nextImage = () => {
        setIsTransitioning(true);
        setCurrentIndex((prev) => prev + 1);
    };

    // Reset when reaching cloned slides
    const handleTransitionEnd = () => {
        if (currentIndex === 0) {
            setIsTransitioning(false);
            setCurrentIndex(images.length);
        } else if (currentIndex === images.length + 1) {
            setIsTransitioning(false);
            setCurrentIndex(1);
        }
    };

    // Scroll active thumbnail into center
    useEffect(() => {
        const realIndex = (currentIndex - 1 + images.length) % images.length;
        if (thumbsRef.current[realIndex]) {
            thumbsRef.current[realIndex].scrollIntoView({
                behavior: "smooth",
                inline: "center",
                block: "nearest",
            });
        }
    }, [currentIndex]);

    useEffect(() => {
        document.body.classList.add("overflow-hidden");
        return () => document.body.classList.remove("overflow-hidden");
    }, []);




    return (
        <div className="w-full h-screen bg-black fixed top-0 left-0  z-40 flex flex-col justify-center items-center pt-10 ">
            <span className='absolute right-6 top-3 cursor-pointer' onClick={() => setIsOpen(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 15 15"><path fill="#fff" d="M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27" strokeWidth="0.5" stroke="#fff" /></svg>
            </span>
            {/* Main Slider */}
            <div className="relative flex justify-center items-center w-full max-w-full overflow-hidden">
                <div
                    ref={sliderRef}
                    className={`flex ${isTransitioning
                        ? "transition-transform duration-700 ease-in-out"
                        : ""
                        }`}
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                    }}
                    onTransitionEnd={handleTransitionEnd}
                >
                    {extendedImages.map((img, index) => (
                        <img
                            key={index}
                            src={img.url}
                            alt={img.caption}
                            className="max-h-[500px] w-full object-contain rounded-lg shadow-lg flex-shrink-0"
                        />
                    ))}
                </div>

                {/* Prev button */}
                <button
                    onClick={prevImage}
                    className="absolute left-4 text-white bg-black/50 p-3 rounded-full hover:bg-white hover:text-black transition-all duration-500 cursor-pointer"
                >
                    <ChevronLeft size={30} />
                </button>

                {/* Next button */}
                <button
                    onClick={nextImage}
                    className="absolute right-4 text-white bg-black/50 p-3 rounded-full hover:bg-white hover:text-black transition-all duration-500 cursor-pointer"
                >
                    <ChevronRight size={30} />
                </button>
            </div>

            {/* Caption */}
            <div className="text-center text-white mt-4">
                <p>
                    Photo by{" "}
                    <span className="font-semibold">
                        {images[(currentIndex - 1 + images.length) % images.length].author}
                    </span>
                </p>
                <p>
                    Location -{" "}
                    <span className="font-semibold">
                        {images[(currentIndex - 1 + images.length) % images.length].location}
                    </span>
                </p>
            </div>

            {/* Thumbnails */}
            <div className="mt-6 flex gap-2 overflow-x-auto h-[15%]  max-w-full scrollbar-hide">
                {images.map((img, index) => (
                    <img
                        key={index}
                        ref={(el) => (thumbsRef.current[index] = el)}
                        src={img.url}
                        alt={img.caption}
                        onClick={() => {
                            setIsTransitioning(true);
                            setCurrentIndex(index + 1); // +1 because of clone
                        }}
                        className={`min-w-30 h-20 object-cover rounded-md cursor-pointer border-2 hover:border-white ${index === (currentIndex - 1 + images.length) % images.length
                            ? "border-white scale-102"
                            : "border-transparent"
                            } transition-transform`}
                    />
                ))}
            </div>
        </div>
    );
}