// import React, { useState } from "react";
// import Popup from "./components/Popup";

// const images = [
//   "https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80",
//   "https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80",
//   "https://images.unsplash.com/photo-1605973029521-8154da591bd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80",
//   "https://images.unsplash.com/photo-1526281216101-e55f00f0db7a?ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80",
//   "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80",
//   "https://images.unsplash.com/photo-1505820013142-f86a3439c5b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80",
//   "https://images.unsplash.com/photo-1477322524744-0eece9e79640?ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80",
//   "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80",
//   "https://images.unsplash.com/photo-1585338447937-7082f8fc763d?ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80",
//   "https://images.unsplash.com/photo-1596370743446-6a7ef43a36f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
//   "https://images.unsplash.com/photo-1476842384041-a57a4f124e2e?ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80",
//   "https://images.unsplash.com/photo-1465311530779-5241f5a29892?ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80",
//   "https://images.unsplash.com/photo-1461301214746-1e109215d6d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80",
//   "https://images.unsplash.com/photo-1610448721566-47369c768e70?ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80",
//   "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80",
//   "https://images.unsplash.com/photo-1539678050869-2b97c7c359fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80",
//   "https://images.unsplash.com/photo-1446630073557-fca43d580fbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80",
//   "https://images.unsplash.com/photo-1596370743446-6a7ef43a36f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80",
//   "https://images.unsplash.com/photo-1464852045489-bccb7d17fe39?ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80",
//   "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80",
//   "https://images.unsplash.com/photo-1510011560141-62c7e8fc7908?ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80",
// ];

// export default function App() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   return (
//     <div className="p-4">
//       <div className="layout-container">
//         {images.map((src, index) => (
//           <img
//             key={index}
//             onClick={() => {
//               setCurrentIndex(index);
//               setIsOpen(true);
//             }}
//             className="w-75 object-cover cursor-pointer rounded"
//             src={src}
//             alt={`Image ${index + 1}`}
//           />
//         ))}
//       </div>

//       {isOpen && (
//         <Popup
//           setIsOpen={setIsOpen}
//           initialIndex={currentIndex}
//           images={images} // pass all 19 URLs
//         />
//       )}
//     </div>
//   );
// }

import { useState } from "react"
import GallerySlider from "./components/GallerySlider";

export default function App() {

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

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="bgblack">
      <div className="layout-container">
        {images.map((src, index) => (
          <img
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              setIsOpen(true);
            }}
            className="w-75 object-cover cursor-pointer rounded"
            src={src.url}
            alt={src.caption}
          />
        ))}
      </div>

      {isOpen && (
        <GallerySlider
          setIsOpen={setIsOpen}
          initialIndex={currentIndex}
          images={images}
        />
      )}
    </div>
  )
}

