import { Poppins, Roboto } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';

const poppins = Poppins({
  weight: ['400','500','600','700'],
  subsets: ['latin']
});
const roboto = Roboto({
  weight: ['400','700'],
  subsets: ['latin']
});

export default function NavBar() {

  return (
    <div className={roboto.className}>
        <div className={`flex flex-col md:block xl:flex xl:flex-row md:px-6 md:bg-white md:rounded-lg gap-2 place-items-center text-2xl text-center ${poppins.className}`}>
            <div className='2xl:absolute w-full md:w-auto'>
              <div className='py-2 2xl:py-0 font-semibold text-heading text-3xl bg-white rounded-md whitespace-nowrap flex place-items-center justify-center gap-2 md:justify-start lg:grow-0'>
              <Image className='rounded-full max-h-12 max-w-12' src='/images/square-me.JPEG' alt='profile picture' height={500} width={500}/> Carter Haner
              </div>
            </div>
                <div className='flex flex-col w-full gap-2 py-2 xl:h-16 md:items-center md:flex-row md:flex-grow md:justify-center md:gap-20 xl:gap-20'>
                <Link href={'/'} className='font-medium bg-white rounded-md md:w-fit'>Home</Link>
                <Link href={'/projects'} className='font-medium bg-white rounded-md md:w-fit'>Projects</Link>
                <div className='font-medium bg-white rounded-md md:w-fit'>Resume</div>
                <div className='font-medium bg-white rounded-md md:w-fit'>Contact</div>
            </div>
        </div>
    </div>
  );
  
}