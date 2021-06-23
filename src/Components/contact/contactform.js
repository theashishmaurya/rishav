import React from "react";

const ContactForm = () => {
  return (
    <div className=' mt-20 '>
      <form className=' flex flex-col justify-center '>
        <input
          className='p-4 my-6 pl-6 shadow-md rounded-xl placeholder-gray-500 border min-w-full min-h-full border-1 tracking-wide  focus:outline-none placeholder-opacity-75 text-xl focus:ring-2 focus:ring-indigo-600 focus:border-transparent ... '
          placeholder='first Name*'
        />
        <input
          className='p-4 my-6 pl-6 shadow-md rounded-xl placeholder-gray-500 border min-w-full min-h-full border-1 tracking-wide  focus:outline-none placeholder-opacity-75 text-xl focus:ring-2 focus:ring-indigo-600 focus:border-transparent ... '
          placeholder='Last Name*'
        />
        <input
          className='p-4 my-6 pl-6 shadow-md rounded-xl placeholder-gray-500 border min-w-full min-h-full border-1 tracking-wide  focus:outline-none placeholder-opacity-75 text-xl focus:ring-2 focus:ring-indigo-600 focus:border-transparent ... '
          placeholder='email :jonh@email.com*'
        />
        <input
          className='p-4 pb-20 my-6 pl-6 shadow-md rounded-xl placeholder-gray-500 border min-w-full min-h-full border-1 tracking-wide  focus:outline-none placeholder-opacity-75 text-xl focus:ring-2 focus:ring-indigo-600 focus:border-transparent ... '
          placeholder='How can i help you?*'
        />
      </form>
      <div className='flex justify-end'>
        <span className='p-2 '>
          <a href=''>
            <button className='border-2 p-3 px-4 rounded-md bg-indigo-600 text-white shadow-md'>
              Get in Touch
            </button>
          </a>
        </span>
      </div>
    </div>
  );
};
export default ContactForm;
