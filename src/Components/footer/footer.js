import React from "react";

const Footer = () => {
  return (
    <div className='flex flex-col bg-gray-200   p-2'>
      <div className='my-2 mx-auto font-medium'>© 2021 Rishav Agarwal </div>
      <div className='mx-auto font-medium'>
        Made by{" "}
        <span className='font-bold underline '>
          <a href='https://www.instagram.com/theashishmaurya/'>Ashish Maurya</a>{" "}
        </span>
      </div>
    </div>
  );
};
export default Footer;
