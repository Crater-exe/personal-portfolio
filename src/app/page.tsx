import { Poppins, Roboto } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import NavBar from '@/components/NavBar';
import FootBar from '@/components/FootBar';

const poppins = Poppins({
  weight: ['400','500','600','700'],
  subsets: ['latin']
});
const roboto = Roboto({
  weight: ['400','700'],
  subsets: ['latin']
});

export default function Home() {

  return (
    <div className={`${roboto.className}`}>
      <div className='px-8 lg:px-16 xl:px-24 pt-6 pb-12 lg:pb-24'>

        <div className='mb-12 lg:mb-24'>
          <NavBar />
        </div>

        <div className='md:flex md:items-center 2xl:gap-48'>
          <div className='2xl:ml-auto'>
            <div className={`mb-6 text-6xl lg:text-7xl font-semibold text-heading ${poppins.className}`}>About Me</div>
            <div className='mb-8 md:mr-16 leading-loose lg:max-w-700 lg:text-lg lg:leading-loose'>I am a second year IT Web Programming student studying at Truro NSCC. I&apos;ve always been passionate about technology, and my goal is to leverage my skills to create impactful, user-friendly digital solutions. I&apos;m eager to connect and learn from industry professionals as I prepare to make a meaningful contribution to the tech field.</div>
            <div className='relative inline-block'>
              <Link href={'/projects'} className={`px-10 py-3 text-xl lg:text-2xl tracking-widest font-bold text-white bg-button hover:bg-opacity-80 rounded-lg ${poppins.className}`}>PROJECTS</Link>
              <div className='absolute rounded-full bg-red-600 circle animate-bounce'></div>
            </div>
          </div>
          <div className='hidden ml-auto 2xl:mr-auto 2xl:ml-0 md:block'><Image className='rounded-full max-w-64 lg:max-w-96 max-h-64 lg:max-h-96' src='/images/square-me.JPEG' alt='profile picture' height={500} width={500}/></div>
        </div>
      </div>

      <div className='px-8 pt-12 bg-white lg:pt-24'>
        <div className={`mb-6 text-5xl font-semibold text-heading flex justify-center ${poppins.className}`}>Recent Work</div>
        <div className='flex flex-col md:flex-row md:justify-center gap-8 md:gap-24'>
          <div className='flex flex-col place-items-center md:place-items-start gap-2'>
            <div className='h-40 w-60 md:h-48 md:w-72 lg:h-64 lg:w-96 rounded-lg border-2 border-border bg-cover bg-center bg-[url("/images/minecraft-mod.png")]'></div>
            <div className={`text-xl lg:text-2xl font-semibold ${poppins.className}`}>Minecraft Mod</div>
            <div className='text-center md:max-w-72 lg:max-w-96 lg:text-lg'>I collaboratively developed a Minecraft mod using Java.</div>
            <Link href={'/projects'} className={`py-3 px-4 text-xl lg:text-2xl font-semibold text-center text-white bg-button hover:bg-opacity-80 inline-block rounded-lg ${poppins.className}`}>Learn more</Link>
          </div>

          <div className='flex flex-col place-items-center md:place-items-start gap-2 lg:mb-12'>
            <div className='h-40 w-60 md:h-48 md:w-72 lg:h-64 lg:w-96 rounded-lg border-2 border-border bg-contain bg-no-repeat bg-center bg-[url("/images/asp-quote-admin.png")]'></div>
            <div className={`text-xl lg:text-2xl font-semibold ${poppins.className}`}>ASP.net Quote Admin</div>
            <div className='text-center md:max-w-72 lg:max-w-96 lg:text-lg'>I developed an admin web page for a quote generator API.</div>
            <Link href={'/projects'} className={`py-3 px-4 text-xl lg:text-2xl font-semibold text-center text-white bg-button hover:bg-opacity-80 inline-block rounded-lg ${poppins.className}`}>Learn more</Link>
          </div>
        </div>
        <FootBar bgColour='bg' />
      </div>
    </div>
  );
  
}