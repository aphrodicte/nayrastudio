import React from "react";

const Contact = () => {
  return (
<section class="bg-[#FDF7E1] min-h-screen flex items-center">
    <div class="container px-6 py-12 mx-auto flex flex-col items-center">
        <div class="text-center">
            <h1 class="mt-2 text-2xl font-semibold text-[#081E44] md:text-3xl">Contact Us</h1>
            <p class="mt-3 text-gray-500">Reach Out! We Love a Good Conversation!.</p>
        </div>

        <div class="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
            <div class="flex flex-col items-center justify-center text-center">
                <span class="p-3 text-blue-500 rounded-full bg-blue-100/80">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#081E44" style={{ color: '#081E44' }} class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                </span>

                <h2 class="mt-4 text-lg font-medium text-gray-800">Email</h2>
                <p class="mt-2 text-gray-500">Send Us a Message, We’re All Ears!</p>
                <p class="mt-2 text-[#081E44]">hello@nayrastudio.com</p>
            </div>

            <div class="flex flex-col items-center justify-center text-center">
                <span class="p-3 text-blue-500 rounded-full bg-blue-100/80">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#081E44" style={{ color: '#081E44' }} class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                </span>
                
                <h2 class="mt-4 text-lg font-medium text-gray-800">Office</h2>
                <p class="mt-2 text-gray-500">The Place Where Creativity Runs Wild!</p>
                <p class="mt-2 text-[#081E44]">Jalan Imam Bonjol No.207, Semarang</p>
            </div>

            <div class="flex flex-col items-center justify-center text-center">
                <span class="p-3 text-blue-500 rounded-full bg-blue-100/80">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#081E44" style={{ color: '#081E44' }} class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                </span>
                
                <h2 class="mt-4 text-lg font-medium text-gray-800">WhatsApp</h2>
                <p class="mt-2 text-gray-500">Slide into Our DMs on WhatsApp!.</p>
                <p class="mt-2 text-[#081E44]">0811-2222-3333</p>
            </div>
        </div>
    </div>
</section>

  );
};

export default Contact;