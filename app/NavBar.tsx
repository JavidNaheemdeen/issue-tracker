'use client';

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation';
import { AiFillBug } from "react-icons/ai";
import classnames from 'classnames';
import { useSession } from 'next-auth/react';
import { Avatar, Box, Container, DropdownMenu, Flex, Text } from '@radix-ui/themes';
import { Skeleton } from '@/app/components';

const NavBar = () => {


   return (
      <nav className='border-b mb-5 px-5 py-3'>
         <Container>
            <Flex justify='between'>
               <Flex align='center' gap='3'>
                  <Link href="/">
                     <AiFillBug />
                  </Link>
                  <NavBarLinks />
               </Flex>
               <AuthStatus />
            </Flex>
         </Container>
      </nav>
   )
}

const AuthStatus = () => {

   const { status, data: session } = useSession();

   if (status === "loading") return <Skeleton width="3rem" />;

   if (status === "unauthenticated") return <Link className='nav-link' href='/api/auth/signin'>Log in</Link>

   return (
      <Box>
         <DropdownMenu.Root>
            <DropdownMenu.Trigger>
               <Avatar src={session!.user!.image!}
                  fallback='?'
                  size="2"
                  radius='full'
                  className='cursor-pointer'
               />
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
               <DropdownMenu.Label>
                  <Text size='2'>
                     {session!.user!.email}
                  </Text>
               </DropdownMenu.Label>
               <DropdownMenu.Item>
                  <Link
                     href='/api/auth/signout'
                  >
                     Sign Out
                  </Link>
               </DropdownMenu.Item>
            </DropdownMenu.Content>
         </DropdownMenu.Root>
      </Box>
   );
}

const NavBarLinks = () => {

   const currentPath = usePathname();

   const link = [
      { label: "Dashboard", href: "/" },
      { label: "Issues", href: "/issues/list" }
   ];

   return (
      <ul className='flex space-x-6'>
         {link.map(link => (
            <li key={link.href}>
               <Link
                  className={classnames({
                     "nav-link": true,
                     "!text-zinc-900": link.href === currentPath,
                  })}
                  href={link.href}
               >
                  {link.label}
               </Link>
            </li>
         ))}
      </ul>
   )
}

export default NavBar