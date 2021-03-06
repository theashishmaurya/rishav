import React from "react";
import instagram from "../../image/instagram.svg";
import github from "../../image/github.svg";
import resume from "../../Resume.pdf";
const Social = () => {
  return (
    <div>
      <div className='py-10 mt-20 mb-5 font-medium text-2xl'>
        I am always open to discuss your project, improve and contribute in
        challenging problem or just like to connect with you.
      </div>
      <div>
        <div className='text-gray-400'>Email me at</div>
        <div className='font-bold text-xl'>rishavrishu2001.ra@gmail.com</div>
      </div>
      <div className='mt-5 py-4 flex'>
        <span className='pr-4'>
          <a href='https://github.com/Rishavrishu-creator'>
            <img classname='' src={instagram} alt='' />
          </a>
        </span>
        <span className='pr-4'>
          <a href='https://github.com/Rishavrishu-creator'>
            <img src={github} alt='' />
          </a>
        </span>
      </div>
      <div className='mt-8'>
        <span className='py-2 pl-0  ml-0'>
          <a href={resume}>
            <button className='border-2 p-3 px-2 rounded-md font-medium text-indigo-900 shadow-md'>
              View Resume
            </button>
          </a>
        </span>
      </div>
    </div>
  );
};
export default Social;
