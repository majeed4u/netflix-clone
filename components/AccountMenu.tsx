/* eslint-disable @next/next/no-img-element */
import { signOut } from 'next-auth/react';

interface IAccountMenuProps {
  visible: boolean;
}
function AccountMenu({ visible }: IAccountMenuProps) {
  if (!visible) {
    return null;
  }
  return (
    <div className='absolute right-0 flex flex-col w-56 py-5 bg-black border-2 border-gray-800 top-14'>
      <div className='flex flex-col gap-3 '>
        <div className='flex flex-row items-center w-full gap-3 px-3 group/item'>
          <img
            src='/images/default-blue.png'
            alt='avatar'
            className='w-8 rounded-md '
          />
          <p className='text-sm text-white group-hover:item:underline'>
            username
          </p>
        </div>
        <hr className='h-px my-4 bg-gray-600 border-0' />
        <div
          className='px-3 text-sm text-center text-white hover:underline '
          onClick={() => signOut()}
        >
          Sign ou of Netflix
        </div>
      </div>
    </div>
  );
}
export default AccountMenu;
