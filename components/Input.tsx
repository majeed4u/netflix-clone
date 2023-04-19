import React from 'react';
interface InputProps {
  id: string;
  label: string;
  onChange: any;
  value: string;
  type: string;
}

const Input: React.FC<InputProps> = ({ id, label, onChange, value, type }) => {
  return (
    <div className='relative form-control'>
      <input
        id={id}
        value={value}
        type={type}
        onChange={onChange}
        className='block w-full px-6 pt-6 pb-1 text-white rounded-md appearance-none bg-neutral-700 focus:outline-none focus:ring-0 peer'
        placeholder=' '
      />
      <label
        htmlFor={id}
        className='absolute duration-150 transform -translate-y-3 text-md text-zinc-400 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3'
      >
        {label}
      </label>
    </div>
  );
};
export default Input;
