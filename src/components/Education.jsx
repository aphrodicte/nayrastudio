import React from "react";

const Education = () => {
  return (
    <div className="min-h-screen bg-[#FDF7E1] flex items-center justify-center">
      <div className="p-10">
        <div className="flex items-center justify-center mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#081E44" className="size-6" style={{ color: '#081E44' }}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
          </svg>
          <h2 className="text-2xl font-bold text-center text-[#081E44] ml-2">
            Education
          </h2>
        </div>
        <div className="max-w-md mx-auto p-4 bg-gray-100 rounded-lg mt-10 shadow-lg bg-[#FFFCF1]">
          <ol className="relative border-s border-[#F5B441]">
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-[#F5B441] rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2021 - 2024</time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">MA Negeri 2 Kudus</h3>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">High School</p>
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-[#F5B441] rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2018-2021</time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">MTs Negeri 1 Kudus</h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">Middle School</p>
            </li>
            <li className="ms-4">
              <div className="absolute w-3 h-3 bg-[#F5B441] rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2012-2018</time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">SD Negeri Kedungwaru Lor</h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">Elementary School</p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Education;
