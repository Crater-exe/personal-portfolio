import { Poppins, Roboto } from 'next/font/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
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

export default function Home() {

  return (
    <div className={roboto.className}>
      <div className='bg-bg px-8 pt-6 pb-12'>
        <div className={`mb-12 flex flex-col gap-2 place-items-center text-2xl text-center ${poppins.className}`}>
          <div className='py-2 font-semibold text-heading text-3xl bg-white rounded-md w-80 flex place-items-center justify-center gap-2'>
            <Image className='rounded-full' src='/images/square-me.JPEG' alt='profile picture' height={50} width={50}/> Carter Haner
          </div>
          <div className='font-medium bg-white rounded-md w-80'>Home</div>
          <div className='font-medium bg-white rounded-md w-80'>Projects</div>
          <div className='font-medium bg-white rounded-md w-80'>Resume</div>
          <div className='font-medium bg-white rounded-md w-80'>Contact</div>
        </div>

        <div>
          <div className={`mb-6 text-6xl font-semibold text-heading ${poppins.className}`}>About Me</div>
          <div className='mb-6'>I am a second year IT Web Programming student studying at Truro NSCC. I&apos;ve always been passionate about technology, and my goal is to leverage my skills to create impactful, user-friendly digital solutions. I&apos;m eager to connect and learn from industry professionals as I prepare to make a meaningful contribution to the tech field.</div>
          <div className='relative inline-block'>
            <div className={`px-10 py-3 text-xl tracking-widest font-bold text-white bg-button rounded-lg ${poppins.className}`}>PROJECTS</div>
            <div className='circle animate-bounce'></div>
          </div>
        </div>
      </div>

        <div className='px-8 my-12'>
          <div className={`mb-4 text-5xl font-semibold text-heading flex justify-center ${poppins.className}`}>Recent Work</div>
          <div className='flex flex-col gap-8'>
            <div className='flex flex-col place-items-center gap-2'>
              <div className='h-40 w-60 rounded-lg border-2 border-border bg-cover bg-center bg-[url("/images/minecraft-mod.png")]'></div>
              <div className={`text-xl font-semibold ${poppins.className}`}>Minecraft Mod</div>
              <div>I collaboratively developed a Minecraft mod using Java.</div>
              <div className={`py-3 px-4 text-xl font-semibold text-center text-white bg-button inline-block rounded-lg ${poppins.className}`}>Learn more</div>
            </div>

            <div className='flex flex-col place-items-center gap-2'>
              <div className='h-40 w-60 rounded-lg border-2 border-border bg-contain bg-no-repeat bg-center bg-[url("/images/asp-quote-admin.png")]'></div>
              <div className={`text-xl font-semibold ${poppins.className}`}>ASP.net Quote Admin</div>
              <div>I developed an admin web page for a quote generator API</div>
              <div className={`py-3 px-4 text-xl font-semibold text-center text-white bg-button inline-block rounded-lg ${poppins.className}`}>Learn more</div>
            </div>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <div className='bg-bg mb-6 flex justify-center w-40 h-16 rounded-lg gap-4 place-items-center text-button'>
            <FontAwesomeIcon className='h-12' icon={faSquareGithub} />
            <FontAwesomeIcon className='h-12' icon={faLinkedin} />
          </div>
        </div>
    </div>
  );
  
}