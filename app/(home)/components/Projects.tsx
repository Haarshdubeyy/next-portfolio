import React from 'react';
import Title from './Title';
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover.tsx';
import { cn } from '@/lib/utils';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import { BiLogoTailwindCss, BiLogoPython } from 'react-icons/bi';
import { FaVuejs } from 'react-icons/fa6';

export default function Projects() {
  const projects = [
    {
      title: 'Crypto Tracker',
      tech: [FaReact, BiLogoTailwindCss, FaNodeJs],
      cover: '/crypto-tracker.png',
      background: 'bg-blue-700',
      link: 'https://crypto-coins-ochre.vercel.app/',
    },
    {
      title: 'Random Gif Generator',
      tech: [FaReact, BiLogoTailwindCss, FaNodeJs],
      cover: '/Random-Gifs.png',
      background: 'bg-red-600',
      link: 'https://cheerful-semifreddo-217311.netlify.app/',
    },
    {
      title: 'Random Password Generator',
      tech: [FaReact, BiLogoTailwindCss, FaNodeJs],
      cover: '/Random-pass.png',
      background: 'bg-green-700',
      link: 'https://random-password-generator-using-react-js.vercel.app/',
    },
    {
      title: 'E-commerce Website',
      tech: [BiLogoTailwindCss, FaVuejs, FaNodeJs],
      cover: '/E-comm.png',
      background: 'bg-violet-600',
      link: 'https://e-comm-using-vue-js.vercel.app/',
    },
  ];

  return (
    <div className="py-10 p-5 sm:p-0">
      <Title text="Projects 🚀" className="flex flex-col items-center justify-center -rotate-6" />
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-10">
        {projects.map((project, index) => (
          <a
            href={project.link}
            key={index}
            className={cn(
              'p-3 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl',
              project.background
            )}
          >
            <DirectionAwareHover className="w-full space-y-5 cursor-pointer" imageUrl={project.cover}>
              <div className="space-y-5">
                <h1 className="font-mono font-bold text-2xl text-white">{project.title}</h1>
                <div className="flex items-center space-x-3">
                  {project.tech.map((Icon, index) => (
                    <Icon className="text-2xl w-8 h-8 text-white " key={index} />
                  ))}
                </div>
              </div>
            </DirectionAwareHover>
          </a>
        ))}
      </div>
    </div>
  );
}