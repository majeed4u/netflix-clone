/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import Input from '@/components/Input';
import { SetStateAction, useCallback, useState } from 'react';
import axios from 'axios';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
function auth() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [variant, setVariant] = useState('login');
  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === 'login' ? 'register' : 'login'
    );
  }, []);
  const login = useCallback(async () => {
    try {
      await signIn('credentials', {
        email,
        password,
        callbackUrl: '/profiles',
      });
    } catch (error: any) {
      throw new Error('there was an error', error);
    }
  }, [email, password]);

  const register = useCallback(async () => {
    try {
      await axios.post('/api/register', {
        email,
        name,
        password,
      });
      login();
    } catch (error: any) {
      throw new Error('there was an error', error);
    }
  }, [email, name, password, login]);

  return (
    <div className=' relative h-full w-full bg-[url("/images/hero.jpg")] bg-no-repeat bg-cover'>
      <div className='w-full h-full bg-black lg:bg-opacity-50'>
        <nav className='px-12 py-5 '>
          <img src='/images/logo.png' alt='logo' className='h-12 ' />
        </nav>
        <div className='flex justify-center '>
          <div className='self-center w-full px-16 py-16 mt-2 bg-black bg-opacity-70 lg:w-2/5 lg:max-w-md lg:rounded-md'>
            <h2 className='mb-8 text-4xl font-semibold text-white '>
              {variant === 'login' ? 'Sign in' : 'Register'}
            </h2>
            <div className='flex flex-col gap-4'>
              {variant === 'register' && (
                <Input
                  id={'name'}
                  label={'Username'}
                  onChange={(e: {
                    target: { value: SetStateAction<string> };
                  }) => setName(e.target.value)}
                  value={name}
                  type={'text'}
                />
              )}

              <Input
                id={'email'}
                label={'Email'}
                onChange={(e: { target: { value: SetStateAction<string> } }) =>
                  setEmail(e.target.value)
                }
                value={email}
                type={'email'}
              />
              <Input
                id={'password'}
                label={'password'}
                onChange={(e: { target: { value: SetStateAction<string> } }) =>
                  setPassword(e.target.value)
                }
                value={password}
                type={'password'}
              />
            </div>
            <button
              className='w-full py-3 mt-10 text-white transition bg-red-600 rounded-md btn hover:bg-red-700'
              onClick={variant === 'login' ? login : register}
            >
              {variant === 'login' ? 'Login' : 'Sign up'}
            </button>
            <div className='flex flex-row items-center justify-center gap-4 mt-8'>
              <div
                onClick={() => signIn('google', { callbackUrl: '/profiles' })}
                className='flex items-center justify-center w-10 h-10 transition bg-white rounded-full cursor-pointer hover:opacity-80 '
              >
                <FcGoogle size={30} />
              </div>
              <div
                className='flex items-center justify-center w-10 h-10 transition bg-white rounded-full cursor-pointer hover:opacity-80 '
                onClick={() => signIn('github', { callbackUrl: '/profiles' })}
              >
                <FaGithub size={30} />
              </div>
            </div>
            <p className='mt-12 text-neutral-500'>
              {variant === 'login'
                ? ' First time using Netflix'
                : 'Already have a netflix account'}
              <span
                onClick={toggleVariant}
                className='ml-2 text-white cursor-pointer hover:underline'
              >
                {variant === 'login' ? 'create an account' : 'login'}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default auth;
