import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import Logo from "../../image/Logo.png";

const Mobnav = () => {
  const [mobtoggle, setMobtoggle] = useState({
    class: "hidden ",
    toggle: {
      hidden: "hidden",
      block: "block",
    },
  });
  // const [active, setActive] = useState(false);

  const handleonclick = () => {
    if (mobtoggle.class === "hidden") {
      setMobtoggle({ ...mobtoggle, class: mobtoggle.toggle.block });
      // setActive(true);
    } else {
      setMobtoggle({ ...mobtoggle, class: mobtoggle.toggle.hidden });
      // setActive(false);
    }
  };

  return (
    <div>
      <nav className='borderb-2 md:border-0 py-2 absolute max-w-full min-w-full bg-white overflow-hidden '>
        <div className=' px-3 mx-2'>
          <div className='grid '>
            <div>
              <span>
                <img className='w-10 m-auto' src={Logo} alt='' />
              </span>
              <span
                className='order-last cursor-pointer p-1 flex justify-end -mt-8	'
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
              </span>
            </div>
          </div>

          <div className={mobtoggle.class}>
            <ul className='flex flex-col h-screen'>
              <Link
                className='m-3  text-xl bold-text p-3 font-semibold text-center'
                onClick={handleonclick}
                to='home'
                activeClass='active'
                spy={true}
                smooth={true}
              >
                Home
              </Link>
              <Link
                className='m-3  text-xl bold-text p-3 font-semibold text-center'
                onClick={handleonclick}
                to='work'
                activeClass='active'
                spy={true}
                smooth={true}
              >
                Work
              </Link>

              <Link
                to='project'
                activeClass='active'
                spy={true}
                smooth={true}
                className='m-3 text-xl bold-text p-3 font-semibold text-center'
                onClick={handleonclick}
              >
                Projects
              </Link>
              <Link
                to='contact'
                activeClass='active'
                spy={true}
                smooth={true}
                className='m-3  text-xl bold-text p-3 font-semibold text-center'
                onClick={handleonclick}
              >
                Contact
              </Link>
            </ul>
          </div>
        </div>
      </nav>
      {/* {active ? (
        <div onClick={handleonclick}>
          <Overlay />
        </div>
      ) : null} */}
    </div>
  );
};

const DesktopNavbar = () => {
  return (
    <div>
      <nav className='border-2 md:border-0 py-8'>
        <div>
          <ul className='flex flex-row justify-end mr-10  '>
            <Link
              className=' cursor-pointer mx-6 text-lg text-gray-500 bold-text hover:text-indigo-600  font-bold text-center'
              to='home'
              activeClass='active'
              spy={true}
              smooth={true}
            >
              Home
            </Link>
            <Link
              className=' cursor-pointer mx-6 text-lg bold-text text-gray-500 hover:text-indigo-600  font-bold text-center'
              to='work'
              activeClass='active'
              spy={true}
              smooth={true}
            >
              Work
            </Link>

            <Link
              to='project'
              activeClass='active'
              spy={true}
              smooth={true}
              className='cursor-pointer mx-6 text-lg bold-text text-gray-500 hover:text-indigo-600 font-bold text-center'
            >
              Projects
            </Link>
            <Link
              to='contact'
              activeClass='active'
              spy={true}
              smooth={true}
              className='cursor-pointer mx-6 text-lg bold-text text-gray-500 hover:text-indigo-600  font-bold text-center'
            >
              Contact
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width:768px").matches
  );
  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(window.matchMedia("(max-width:768px").matches);
    });
  });
  // return (
  //   <div>
  //     <Mobnav />
  //   </div>
  // );
  return <div>{isMobile ? <Mobnav /> : <DesktopNavbar />}</div>;
};

export default Navbar;
