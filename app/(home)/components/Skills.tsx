'use client';

import React from 'react'
import Title from './Title'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { FaNodeJs, FaReact } from 'react-icons/fa'
import { BiLogoTailwindCss,BiLogoPython  } from "react-icons/bi";
import { text } from 'stream/consumers';
import { FaVuejs } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";

export default function Skills() {

   const Skills = [
        {
           text:'React',
           Icon: FaReact,
        },
        {
          text:'Node.js',
          Icon: FaNodeJs,
        },
        {
          text:'Tailwind CSS',
          Icon: BiLogoTailwindCss,
        },
        {
          text:'Vue.js',
          Icon: FaVuejs,
        },
        {
          text:'Python',
          Icon: BiLogoPython,
        },
        {
          text:'MongoDB',
          Icon: SiMongodb,
        },
   ];
  return (
    <div className='max-w-5xl mx-auto px-8'>
          <Title text='Skills 🛠'
          className='flex flex-col items-center justify-center -rotate-6' />

          <HoverEffect items={Skills} />
    </div>
  )
}
