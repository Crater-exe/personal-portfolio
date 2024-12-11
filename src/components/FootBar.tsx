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

export default function FootBar({bgColour}:{bgColour:string}) {

  return (
    <div className='flex justify-center items-center mt-12'>
        <div className={`bg-${bgColour} mb-6 flex justify-center w-40 h-16 rounded-lg gap-4 place-items-center text-button`}>
          <Link className='hover:opacity-80' target='_blank' href={'https://github.com/Crater-exe'}><FontAwesomeIcon className='h-12' icon={faSquareGithub} /></Link>
          <Link className='hover:opacity-80' target='_blank' href={'https://www.linkedin.com/in/carter-haner-45ba202ab/'}><FontAwesomeIcon className='h-12' icon={faLinkedin} /></Link>
        </div>
    </div>
  );
  
}