import React from "react";
import img from "../../image/20943391.jpg";
import { ColouredButton, PlainButton } from "./Button";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div
      className='container grid grid-cols-1 md:grid-cols-2 gap-4 p-4 my-6'
      id='home'
    >
      {/* Introduction div */}
      <div className='py-2 md:py-6 my-2 md:mt-20'>
        {/* Introductions */}
        <div className='my-2'>
          <h4 className='text-2xl'>
            Hi, my name is <span className='font-bold'>Rishav Agarwal</span>.
          </h4>
        </div>
        <div className='py-2 mb-6 mt-2'>
          <h2 className='text-3xl font-medium'>
            I'm a webdeveloper and a Computer Science undergraduate.{" "}
          </h2>
        </div>
        {/* buttons */}
        <div className='md:mt-35 mt-20'>
          <span>
            <Link to='work' spy={true} smooth={true}>
              <PlainButton />
            </Link>
          </span>
          <span>
            <Link to='contact' spy={true} smooth={true}>
              <ColouredButton />
            </Link>
          </span>
        </div>
      </div>
      {/* Dummy SVG */}
      <div className='min-w-full md:min-w-0'>
        <img src={img} alt='' />
      </div>
    </div>
  );
};

export default Header;
