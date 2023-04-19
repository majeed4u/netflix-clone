/* eslint-disable @next/next/no-img-element */
import MobileMenu from './MobileMenu';
import NavbarItem from './NavbarItem';
import { BsChevronDown } from 'react-icons/bs';
import { useCallback, useState } from 'react';
function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((cur) => !cur);
  }, []);
  return (
    <nav className='fixed z-40 w-full '>
      <div className='flex flex-row items-center px-4 py-6 transition duration-500 md:px-16 bg-zinc-900 bg-opacity-90'>
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
          <BsChevronDown className='text-white transition ' />
          <MobileMenu visible={showMobileMenu} />
        </div>
        <div></div>
      </div>
    </nav>
  );
}
export default Navbar;
