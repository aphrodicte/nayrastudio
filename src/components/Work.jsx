import React from 'react';

const Work = () => {
  const images = [
    { src: "/assets/work-1.jpg", alt: "Project 1" },
    { src: "/assets/work-2.jpg", alt: "Project 2" },
    { src: "/assets/work-3.jpg", alt: "Project 3" },
    { src: "/assets/work-4.jpg", alt: "Project 4" },
    { src: "/assets/work-5.jpg", alt: "Project 5" },
    { src: "/assets/work-6.jpg", alt: "Project 6" },
  ];

  return (
    <div className="w-screen mx-auto min-h-screen p-6 bg-[#081E44] flex flex-col items-center justify-center">
        <div className="flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FDF7E1" className="size-6" style={{ color: '#081E44' }}>
            <path 
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
        </svg>
        <h1 className="text-2xl font-bold text-center text-[#FDF7E1] ml-2">
            My Previous Work
        </h1>
        </div>
      <p className='mb-8 text-sm font-normal text-[#FDF7E1] lg:text-lg text-center'>
        These are some of my own portofolios I made recently. Have a look at them and let me know, if you like them.
      </p>
      
      <div className="ml-8 mr-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div key={index} className="group relative shadow-lg rounded-lg overflow-hidden">
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex items-center justify-center h-full">
                <p className="text-white text-lg font-semibold">{image.alt}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
