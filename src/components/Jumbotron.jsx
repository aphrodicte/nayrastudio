import React, { useState } from 'react';

const Jumbotron = () => {
    const [explored, setExplored] = useState(false);
    const handleLearnMore = () => {
        setExplored(true);
    };
    return (
        <section className="bg-center bg-no-repeat bg-cover h-screen w-screen bg-[#081E44] flex items-center justify-center">
            <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                {!explored ? (
                    <>
                    <div className="w-full">
                        <h1 className="mb-8 text-3xl font-extrabold tracking-tight leading-none text-[#F5B441] md:text-5xl lg:text-6xl text-center">
                        Transforming Ideas into Stunning Visuals
                        </h1>
                        <p className="mb-8 text-lg font-normal text-[#ececef] lg:text-xl text-center max-w-4xl mx-auto">
                        Welcome to Nayra Studio – where creativity meets innovation. Discover my world of graphic design, from branding to illustration, and see how I can help bring your vision to life.
                        </p>
                        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-start sm:space-y-0 sm:items-center sm:justify-center h-full">
                            <button
                                type="button"
                                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-[#081E44] rounded-lg bg-[#F5B441] hover:bg-[#FDF7E1]"
                                onClick={handleLearnMore}
                            >
                                About Me
                                <svg
                                    className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 10"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M1 5h12m0 0L9 1m4 4L9 9"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </>                
                ) : (
                    <>
                    <div className="max-w-7xl mx-auto p-6">
                        <div className="flex flex-col items-center justify-center text-center">
                            <div className="mb-6">
                                <img src="public/navia.jpg" alt="Nayra" className="w-40 h-40 rounded-full object-cover border-4 border-gray-200 shadow-lg"/>
                            </div>
                            <h1 className="mb-5 text-3xl font-extrabold tracking-tight leading-none text-[#F5B441] md:text-5xl lg:text-6xl text-center">
                                Hello, I'm Nayra
                            </h1>
                            <p className="mb-8 text-lg font-normal text-[#ececef] lg:text-xl text-center max-w-4xl mx-auto">
                                I'm a professional Graphic Designer with more than 2 years of experience and having more professional skills like Web Development, Photo Editing, Video Editing, UI/UX Designing.
                            </p>
                            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-start sm:space-y-0 sm:items-center sm:justify-center h-full">
                            <button type="button" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-[#081E44] rounded-lg bg-[#F5B441] hover:bg-[#FDF7E1]" onClick={() => setExplored(false)}>
                                Back
                            </button>
                        </div>
                        </div>
                    </div>
                </>
                )}
            </div>
        </section>
    );
};

export default Jumbotron;
