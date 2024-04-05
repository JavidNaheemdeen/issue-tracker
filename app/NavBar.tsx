import Link from 'next/link'
import React from 'react'
import { AiFillBug } from "react-icons/ai";

const NavBar = () => {

   const link = [
      {label: "Dashboard", href: "/"},
      {label: "Issues", href: "/issue"}
   ]

   return (
      <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
         <Link href="/"><AiFillBug/></Link>
         <ul className='flex space-x-6'>
            {link.map(link => 
            <Link 
            key={link.href} 
            className='text-zinc-500 hover:text-zinc-800 transition-colors'
            href={link.href}>{link.label}</Link>)}
            
         </ul>
      </nav>
   )
}

export default NavBar