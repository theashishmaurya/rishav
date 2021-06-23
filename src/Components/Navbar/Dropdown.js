import { useState } from "react";

import Overlay from "./Overlay";

const Mobnav = () => {
  const [mobtoggle, setMobtoggle] = useState({
    class: "hidden",
    toggle: {
      hidden: "hidden",
      block: "block",
    },
  });
  const [active, setActive] = useState(false);

  const handleonclick = () => {
    if (mobtoggle.class === "hidden") {
      setMobtoggle({ ...mobtoggle, class: mobtoggle.toggle.block });
      setActive(true);
    } else {
      setMobtoggle({ ...mobtoggle, class: mobtoggle.toggle.hidden });
      setActive(false);
    }
  };

  return (
    <div>
      <nav className='border-2 md:border-0 py-2'>
        <div className=' px-3 mx-2'>
          <div className='flex flex-row justify-end'>
            <div
              className='order-last cursor-pointer p-1	'
              onClick={handleonclick}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </div>
          </div>
          <div className={mobtoggle.class}>
            <ul className='flex flex-col'>
              <li
                href='#skills'
                className='m-3  text-xl bold-text p-3 font-semibold text-center'
                onClick={handleonclick}
              >
                About
              </li>

              <li
                href='#'
                className='m-3 text-xl bold-text p-3 font-semibold text-center'
                onClick={handleonclick}
              >
                Services
              </li>
              <li
                href='#'
                className='m-3  text-xl bold-text p-3 font-semibold text-center'
                onClick={handleonclick}
              >
                Pricing
              </li>
              <li
                href='#'
                className='m-3  text-xl bold-text p-3 font-semibold text-center'
                onClick={handleonclick}
              >
                Contact
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {active ? (
        <div onClick={handleonclick}>
          <Overlay />
        </div>
      ) : null}
    </div>
  );
};

const Navbar = () => {
  return (
    <div>
      <Mobnav />
    </div>
  );
};

export default Navbar;
