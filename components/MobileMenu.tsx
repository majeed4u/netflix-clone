import * as React from 'react';

export interface IMobileMenuProps {
  visible: boolean;
}
const items = [
  'Home',
  'Tv show',
  'Movies',
  'New & Popular',
  'My List',
  'Browse by languages',
];

export default function MobileMenu({ visible }: IMobileMenuProps) {
  if (!visible) return null;
  return (
    <div className='absolute left-0 flex-col w-56 py-5 bg-black border-2 border-gray-500 top-8'>
      <div className='flex flex-col gap-4 '>
        {items?.map((item: any, i: any) => (
          <div key={i} className='px-3 text-center text-white hover:underline'>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
