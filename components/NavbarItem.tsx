import * as React from 'react';

interface INavbarItemProps {
  label: string;
}

const NavbarItem: React.FC<INavbarItemProps> = ({ label }) => {
  return (
    <div className='text-white transition cursor-pointer hover:text-gray-300'>
      {label}
    </div>
  );
};

export default NavbarItem;
