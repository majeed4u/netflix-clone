/* eslint-disable @next/next/no-img-element */
import MobileMenu from './MobileMenu';
import NavbarItem from './NavbarItem';
import { BsBell, BsChevronDown, BsSearch } from 'react-icons/bs';
import { useCallback, useEffect, useState } from 'react';
import AccountMenu from './AccountMenu';
const TOP_OFFSET = 66;
function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      }
      setShowBackground(false);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((cur) => !cur);
  }, []);
  const toggleAccountMenu = useCallback(() => {
    setShowAccountMenu((cur) => !cur);
  }, []);
  return (
    <nav className='fixed z-40 w-full '>
      <div
        className={`flex flex-row items-center px-4 py-6 transition duration-500 md:px-16${
          showBackground ? ' bg-zinc-900 bg-opacity-90 ' : ''
        }`}
      >
        <img src='/images/logo.png' alt='logo' className='h-4 lg:h-7 ' />
        <div className='flex-row hidden ml-8 gap-7 lg:flex'>
          <NavbarItem label='Home' />
          <NavbarItem label='Tv show' />
          <NavbarItem label='Movies' />
          <NavbarItem label='New & Popular' />
          <NavbarItem label='My List' />
          <NavbarItem label='Browse by languages' />
        </div>
        <div
          onClick={toggleMobileMenu}
          className='relative flex flex-row items-center gap-2 ml-8 cursor-pointer lg:hidden'
        >
          <p className='text-sm text-white '>Browse</p>
          <BsChevronDown
            className={`text-white transition ${
              showMobileMenu ? ' rotate-180' : ' rotate-0'
            } '`}
          />
          <MobileMenu visible={showMobileMenu} />
        </div>
        <div className='flex flex-row items-center ml-auto gap-7'>
          <div className='text-gray-200 cursor-pointer hover:text-gray-300'>
            <BsSearch />
          </div>
          <div className='text-gray-200 cursor-pointer hover:text-gray-300'>
            <BsBell />
          </div>
          <div
            className='relative flex flex-row items-center cursor-pointer menu'
            onClick={toggleAccountMenu}
          >
            <div className='w-6 h-6 overflow-hidden rounded-md lg:w-10'>
              <img
                src='/images/default-blue.png'
                alt='avatar'
                className='object-cover '
              />
            </div>
            <BsChevronDown
              className={`text-white transition ${
                showAccountMenu ? ' rotate-180' : ' rotate-0'
              }  `}
            />
            <AccountMenu visible={showAccountMenu} />
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
