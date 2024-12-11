import { Poppins, Roboto } from 'next/font/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import Image from 'next/image';
import FootBar from '@/components/FootBar';
import NavBar from '@/components/NavBar';

const poppins = Poppins({
  weight: ['400','500','600','700'],
  subsets: ['latin']
});
const roboto = Roboto({
  weight: ['400','700'],
  subsets: ['latin']
});

export default function Projects() {

  return (
    <div className={`${roboto.className}`}>

      <div className='px-8 lg:px-16 xl:px-24 pt-6'>

        <div className='mb-8 md:mb-12'>
          <NavBar />
        </div>

        <div className='flex flex-col md:flex-row'>
          <div className='flex justify-center mb-8'>
            <select className='text-2xl text-center w-full md:hidden h-12 rounded-lg'>
              <option>Next.js</option>
              <option>ASP.net</option>
              <option>Java</option>
              <option>Web Design</option>
            </select>
          </div>

          <div className='hidden md:block md:mr-16 2xl:mr-24'>
            <div className='hidden text-xl leading-5 md:flex md:flex-col md:gap-2 bg-white rounded-lg p-3'>
              <div className={`py-2 px-3 font-semibold text-center text-white bg-button hover:bg-opacity-80 inline-block rounded-lg ${poppins.className}`}>Next.js</div>
              <div className={`py-2 px-3 font-semibold text-center text-white bg-button hover:bg-opacity-80 inline-block rounded-lg ${poppins.className}`}>ASP.net</div>
              <div className={`py-2 px-3 font-semibold text-center text-white bg-button hover:bg-opacity-80 inline-block rounded-lg ${poppins.className}`}>Java</div>
              <div className={`py-2 px-3 font-semibold whitespace-nowrap text-center text-white bg-button hover:bg-opacity-80 inline-block rounded-lg ${poppins.className}`}>Web Design</div>
            </div>
          </div>

          <div className='flex-grow flex flex-col gap-16'>
            <div className='p-6 bg-white rounded-lg'>
              <div className='lg:flex lg:gap-14 xl:gap-24 place-items-center xl:text-xl'>
                <div className='flex flex-col gap-4'>
                  <div className={`text-4xl xl:text-5xl font-bold whitespace-nowrap text-heading flex justify-center lg:justify-start ${poppins.className}`}>Portfolio Website</div>
                  <div className='lg:hidden'>
                    <div className='h-64 w-full sm:h-80 rounded-lg border-2 border-border bg-cover bg-no-repeat bg-center bg-[url("/images/figma-portfolio.png")]'></div>
                  </div>
                  <div className='max-w-xl 2xl:max-w-3xl leading-loose'>I designed and developed this portfolio website for myself to explore and show off my skills to potential employers. The design was first created for my final project in my Web Design course for my second year but I&apos;ve continued to add features and improve it as time went on through the rest of my time at NSCC.</div>
                  <div className='max-w-56'>
                    <div className={`mb-2 text-2xl xl:text-3xl text-heading font-medium ${poppins.className}`}>Tech Stack</div>
                    <div className='grid grid-cols-2 grid-rows-2 gap-y-2'>
                      <div>&bull; Figma</div>
                      <div>&bull; Tailwind</div>
                      <div>&bull; Next.js</div>
                      <div>&bull; MongoDB</div>
                    </div>
                  </div>
                </div>

                <div className='hidden lg:block flex-grow'>
                  <div className='h-40 w-60 xl:h-56 xl:w-80 2xl:h-80 2xl:w-laptop-img-w justify-self-center rounded-lg border-2 border-border bg-cover bg-no-repeat bg-center bg-[url("/images/figma-portfolio.png")]'></div>
                </div>
              </div>
            </div>

            <div className='p-6 bg-white rounded-lg flex-grow'>
              <div className='lg:flex lg:gap-14 xl:gap-24 place-items-center xl:text-xl'>
                <div className='flex flex-col gap-4'>
                  <div className={`text-4xl xl:text-5xl font-bold whitespace-nowrap text-heading flex justify-center lg:justify-start ${poppins.className}`}>Tech Roster Admin</div>
                  <div className='lg:hidden'>
                    <div className='h-64 w-full sm:h-80 justify-self-center lg:justify-self-start rounded-lg border-2 border-border bg-contain bg-no-repeat bg-center bg-[url("/images/tech-roster-admin.png")]'></div>
                  </div>
                  <div className='max-w-xl 2xl:max-w-3xl leading-loose'>I developed a technology roster admin web app for my Full Stack Next.js course. This app brought together all our skills in the course for one final project of which I used MongoDB and TypeScript to create this app. This app also includes a RESTful design approach for all the data requests for best practices.</div>
                  <div className='max-w-56'>
                    <div className={`mb-2 text-2xl xl:text-3xl text-heading font-medium ${poppins.className}`}>Tech Stack</div>
                    <div className='grid grid-cols-2 grid-rows-2 gap-y-2'>
                      <div>&bull; Next.js</div>
                      <div>&bull; Tailwind</div>
                      <div>&bull; MongoDB</div>
                    </div>
                  </div>
                </div>

                <div className='hidden lg:block flex-grow'>
                  <div className='h-40 w-60 xl:h-56 xl:w-80 2xl:h-80 2xl:w-laptop-img-w justify-self-center rounded-lg border-2 border-border bg-contain bg-no-repeat bg-center bg-[url("/images/tech-roster-admin.png")]'></div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <FootBar bgColour='white' />
      </div>
    </div>
  );
  
}