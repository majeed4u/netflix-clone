import react from 'react';
import useBillboard from '@/hooks/useBillboard';
import { AiOutlineInfoCircle } from 'react-icons/ai';
interface IProps {}
const Billboard = () => {
  const { data } = useBillboard();

  return (
    <div className=' relative h-[56.25vh]'>
      <video
        className=' w-full h-[56.25vh] object-cover brightness-[60%] '
        muted
        loop
        poster={data?.thumbnailUrl}
        src={data?.videoUrl}
      ></video>
      <div className=' absolute top-[30%] md:top-[40%] ml-4 md:ml-16'>
        <p className='h-full text-xl text-white md:text-5xl md:h[50%] lg:text-6xl font-bold drop-shadow-xl'>
          {data?.title}
        </p>
        <p className='text-white  text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-md'>
          {data?.description}
        </p>
        <div className='flex flex-row items-center gap-3 mt-3 md:mt-4 '>
          <button className='flex flex-row items-center w-auto px-2 py-1 text-sm font-semibold text-white transition bg-white rounded bg-opacity-30 md:py-2 md:px-4 md:text-lg hover:bg-opacity-20 '>
            <AiOutlineInfoCircle className='mr-1 ' /> <span>More info</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Billboard;
