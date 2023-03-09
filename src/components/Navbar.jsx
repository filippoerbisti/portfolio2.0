import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";

import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

import pdfUrl from '../ERBISTI_FILIPPO_CV_ITA.pdf';

const logo = 'https://res.cloudinary.com/dl38nyo08/image/upload/v1672330082/portfolio/log_n48s8x.png';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [shadow, setShadow] = useState(false);
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, [shadow, setShadow,]);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        shadow ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            Filippo &nbsp;
            <span className='sm:block hidden'> |&nbsp; FullStack Developer</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row items-center gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          <li>
            <a aria-label="dione">
              <div
                onClick={() => {
                  setNav(!nav)
                  window.open(pdfUrl);
                }}
                className='rounded-full text-secondary shadow shadow-white-100 p-3 cursor-pointer md:hover:text-white ease-in duration-300'
              >
                <BsFillPersonLinesFill />
              </div>
            </a>
          </li>
        </ul>

        {/* <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div> */}

        {/* Hamburger Icon */}
        <div
          style={{ color: '#fff' }}
          onClick={handleNav}
          className='md:hidden z-[111] cursor-pointer'
        >
          <AiOutlineMenu size={25} />
        </div>

        <div
          className={
            shadow
              ? 'fixed h-20 shadow-xl z-[100] ease-in-out duration-300'
              : 'fixed h-20 z-[100]'
          }
        >
          {/* Mobile Menu */}
          {/* Overlay */}
          <div
            className={
              nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
            }
          >
            {/* Side Drawer Menu */}
            <div
              className={
                nav
                  ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#000] p-10 ease-in duration-500'
                  : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
              }
            >
              <div>
                <div className='flex w-full items-center justify-between'>
                  <a 
                    onClick={() => {
                      setActive("");
                      setNav(false)
                      window.scrollTo(0, 0);
                    }}
                  >
                    <img
                      src={logo}
                      width={100}
                      height={75}
                      alt='/'
                    />
                  </a>
                  <div
                    onClick={handleNav}
                    className='rounded-full shadow shadow-white-100 p-3 cursor-pointer'
                  >
                    <AiOutlineClose />
                  </div>
                </div>
                <div className='my-4'>
                  <div className="border-b border-white-100">
                    <p className='text-white text-[18px] font-bold cursor-pointer flex'>
                      Filippo Erbisti
                    </p>
                  </div>
                  <p className='text-white text-[15px] italic cursor-pointer flex'>
                      FullStack Developer
                  </p>
                </div>
              </div>
              <div className='py-4 flex flex-col'>
                <ul className='uppercase'>
                  {navLinks.map((nav) => (
                    <li
                      key={nav.id}
                      className={`${
                        active === nav.title ? "text-white" : "text-secondary"
                      } py-4 text-[16px] font-bold cursor-pointer`}
                      onClick={() => {
                        setNav(false)
                        setActive(nav.title)
                      }}
                    >
                      <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                  ))}
                </ul>
                <div className='pt-4'>
                  <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                    <a
                      href='https://www.linkedin.com/in/filippo-erbisti-1783a9202/'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <div className='rounded-full shadow shadow-white-100 p-3 cursor-pointer md:hover:scale-105 ease-in duration-300'>
                        <FaLinkedinIn />
                      </div>
                    </a>
                    <a
                      href='https://github.com/filippoerbisti'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <div className='rounded-full shadow shadow-white-100 p-3 cursor-pointer md:hover:scale-105 ease-in duration-300'>
                        <FaGithub />
                      </div>
                    </a>
                    <a href='/#contact'>
                      <div
                        onClick={() => setNav(!nav)}
                        className='rounded-full shadow shadow-white-100 p-3 cursor-pointer md:hover:scale-105 ease-in duration-300'
                      >
                        <AiOutlineMail />
                      </div>
                    </a>
                    <a>
                      <div
                        onClick={() => {
                          setNav(!nav)
                          window.open(pdfUrl);
                        }}
                        className='rounded-full shadow shadow-white-100 p-3 cursor-pointer md:hover:scale-105 ease-in duration-300'
                      >
                        <BsFillPersonLinesFill />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
