"use client"

import { Poppins, Roboto } from 'next/font/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import Image from 'next/image';
import FootBar from '@/components/FootBar';
import NavBar from '@/components/NavBar';
import ContactForm from '@/components/ContactForm';

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

        <ContactForm />

        <FootBar bgColour='white' />
      </div>
    </div>
  );
}