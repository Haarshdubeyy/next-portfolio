import { MovingBorderBtn } from '@/components/ui/moving-border';
import Link from 'next/link';
import React from 'react';
import Title from './Title';

export default function HeroSection() {
  return (
    <div className='min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between animate-move-up4'>
      <div className='space-y-10 text-center lg:text-left'>
        <h1 className='text-4xl lg:text-7xl font-bold text-gray-900 dark:text-gray-100'>Hey! 🖐️ <br/> <span className='underline underline-offset-8 decoration-violet-600'>{"I'm Harsh Dubey."}</span></h1>
        <p className='md:w-96 text-lg text-gray-600 dark:text-gray-400'>
          {"I'm a front-end developer passionate about making modern web applications"}
        </p>
        <Link href={"mailto:harshdubey1602@gmail.com"} className='inline-block group'>
          <Title text='Contact Me' />
        </Link>
      </div>
      <div className='relative'>
        <div className='w-72 h-72 space-y-3 -rotate-[30deg] relative'>
          <div className='flex gap-3 translate-x-8'>
            <div className='w-32 h-32 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 shadow-lg'></div>
            <div className='w-32 h-32 rounded-lg bg-gradient-to-tr from-green-500 to-yellow-500 shadow-lg'></div>
          </div>
          <div className='flex gap-3 -translate-x-8'>
            <div className='w-32 h-32 rounded-lg bg-gradient-to-tr from-pink-500 to-red-500 shadow-lg'></div>
            <div className='w-32 h-32 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-500 shadow-lg'></div>
          </div>
          <div className='glow absolute top-[40%] right-1/2 -z-10'></div>
        </div>
        <div className='absolute bottom-5 sm:bottom-14 left-0 sm:-left-10'>
          <a href="/Harsh Resume .pdf" download>
            <MovingBorderBtn borderRadius='0.5rem' className='p-3 font-semibold bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1'>
              <p>Download Resume ✅ </p>
            </MovingBorderBtn>
          </a>
        </div>
      </div>
    </div>
  );
}
