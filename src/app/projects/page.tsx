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
          <div className='flex-grow flex flex-col gap-16'>

            <div className='p-6 bg-white rounded-lg'>
              <div className='lg:flex lg:gap-14 xl:gap-24 place-items-center xl:text-xl'>
                <div className='flex flex-col gap-4'>
                  <div className={`text-4xl xl:text-5xl font-bold whitespace-nowrap text-heading flex justify-center lg:justify-start ${poppins.className}`}>Minecraft Mod</div>
                  <div className='lg:hidden'>
                    <div className='h-64 w-full sm:h-80 rounded-lg border-2 border-border bg-cover bg-no-repeat bg-center bg-[url("/images/minecraft-mod.png")]'></div>
                  </div>
                  <div className='max-w-xl 2xl:max-w-3xl leading-loose'>My friend and I developed a Minecraft Mod for our Project Management course. Although the project was less about the finished project and more about managing the project together we still put effort into creating something we are proud of. This project was a test for to see if we could put the Java skills we learned from first year into something practical with a game that we were playing at the time. The mod adds several new items to the game. I personally worked on adding a full armour set and a structure that is randomly generated through the world.</div>
                  <div className='max-w-56'>
                    <div className={`mb-2 text-2xl xl:text-3xl text-heading font-medium ${poppins.className}`}>Tech Stack</div>
                    <div className='grid grid-cols-2 grid-rows-2 gap-y-2'>
                      <div>&bull; Java</div>
                      <div>&bull; Forge</div>
                    </div>
                  </div>
                </div>

                <div className='hidden lg:block flex-grow'>
                  <div className='h-40 w-60 xl:h-56 xl:w-80 2xl:h-80 2xl:w-laptop-img-w justify-self-center rounded-lg border-2 border-border bg-cover bg-no-repeat bg-center bg-[url("/images/minecraft-mod.png")]'></div>
                </div>
              </div>
            </div>

            <div className='p-6 bg-white rounded-lg'>
              <div className='lg:flex lg:gap-14 xl:gap-24 place-items-center xl:text-xl'>
                <div className='flex flex-col gap-4'>
                  <div className={`text-4xl xl:text-5xl font-bold text-center text-heading flex justify-center lg:justify-start ${poppins.className}`}>ASP.net Quote Generator Admin</div>
                  <div className='lg:hidden'>
                    <div className='h-64 w-full sm:h-80 rounded-lg border-2 border-border bg-contain bg-no-repeat bg-center bg-[url("/images/asp-quote-admin.png")]'></div>
                  </div>
                  <div className='max-w-xl 2xl:max-w-3xl leading-loose'>I developed an Admin page for a Quote Generator API in ASP.net MVC. This was a project for my Web Application Programming I course. The web app has a database of quotes which can be added to or deleted from. The form included fields for an author, the quote, a link and uploading an image and when the api was hit it would send back quotes randomly picked from the database. This project helped me learn more about API&apos;s and how they are managed.</div>
                  <div className='max-w-56'>
                    <div className={`mb-2 text-2xl xl:text-3xl text-heading font-medium ${poppins.className}`}>Tech Stack</div>
                    <div className='grid grid-cols-2 grid-rows-2 gap-y-2'>
                      <div>&bull; ASP.net</div>
                      <div>&bull; C#</div>
                      <div>&bull; MySQL</div>
                      <div>&bull; Bootstrap</div>
                    </div>
                  </div>
                </div>

                <div className='hidden lg:block flex-grow'>
                  <div className='h-40 w-60 xl:h-56 xl:w-80 2xl:h-80 2xl:w-laptop-img-w justify-self-center rounded-lg border-2 border-border bg-contain bg-no-repeat bg-center bg-[url("/images/asp-quote-admin.png")]'></div>
                </div>
              </div>
            </div>

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
                      <div>&bull; Next.js</div>
                      <div>&bull; Tailwind</div>
                      <div>&bull; Figma</div>
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
                  <div className={`text-4xl xl:text-5xl font-bold text-center text-heading flex justify-center lg:justify-start ${poppins.className}`}>Tech Roster Admin</div>
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