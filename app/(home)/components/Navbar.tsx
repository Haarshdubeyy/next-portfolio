import Link from 'next/link';
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import { FaLinkedin } from "react-icons/fa";


function Navbar({className}:{className?:string}) {

    const Socials = [
        {
            name: 'Github',
            url: 'https://github.com/Haarshdubeyy',
            Icon :FaGithub,
        },
        {
            name: 'X',
            url: 'https://twitter.com/harsh_retwt',
            Icon: FaXTwitter,
            
        },
        {
          name:'LinkedIn',
          url:"https://www.linkedin.com/in/harsh-dubey-248227200/",
          Icon:FaLinkedin
        }
        
    ]


  return (
    <nav className={cn('py-10 flex justify-between items-center animate-move-down',className)}>
     <h1 className='text-2xl font-bold underline underline-offset-8 decoration-sky-800 -rotate-3 hover:scale-105 transition-all cursor-pointer'>
        Harsh Dubey 👨🏽‍💻
        </h1>

     <div className='flex items-center gap-5'>
        {Socials.map((social, index) => {
          const Icon = social.Icon;

          return (
            <Link href={social.url} key={index} aria-label={social.name}>
              <Icon className="w-5 h-5 hover:scale-125 transition-all" />
            </Link>
          );
        })}
     </div>
    </nav>
  )
}

export default Navbar
