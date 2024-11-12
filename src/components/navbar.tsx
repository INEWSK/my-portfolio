'use client';

import React from 'react';
import Link from 'next/link';
import { CalendarIcon, HomeIcon, MailIcon, PencilIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { ModeToggle } from '@/components/mode-toggle';
import { Dock, DockIcon } from './magicui/dock';
import { BLOG_URL } from '@/lib/constants';
import Github from './icons/github';

export type IconProps = React.HTMLAttributes<SVGElement>;

const Icons = {
  calendar: (props: IconProps) => <CalendarIcon {...props} />,
  email: (props: IconProps) => <MailIcon {...props} />,
  twitter: (props: IconProps) => (
    <svg
      role='img'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <title>X</title>
      <path d='M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z' />
    </svg>
  ),
  github: (props: IconProps) => <Github {...props} />,
};

const navbarItems = [
  { href: '/', icon: HomeIcon, label: 'Home' },
  { href: BLOG_URL, icon: PencilIcon, label: 'Blog' },
].map((item) => (
  <DockIcon key={item.label}>
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href={item.href}
          aria-label={item.label}
          className={cn(
            buttonVariants({ variant: 'ghost', size: 'icon' }),
            'size-12 rounded-full'
          )}
        >
          <item.icon className='size-4' />
        </Link>
      </TooltipTrigger>
      <TooltipContent>
        <p>{item.label}</p>
      </TooltipContent>
    </Tooltip>
  </DockIcon>
));

const contactItems = [
  { name: 'GitHub', url: 'https://github.com/INEWSK', icon: Icons.github },
  { name: 'Send Email', url: '#', icon: Icons.email },
].map((item) => (
  <DockIcon key={item.name}>
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href={item.url}
          aria-label={item.name}
          className={cn(
            buttonVariants({ variant: 'ghost', size: 'icon' }),
            'size-12 rounded-full'
          )}
        >
          <item.icon className='size-4' />
        </Link>
      </TooltipTrigger>
      <TooltipContent>
        <p>{item.name}</p>
      </TooltipContent>
    </Tooltip>
  </DockIcon>
));

export function Navbar() {
  return (
    <div className='fixed inset-x-0 bottom-4 z-30'>
      <TooltipProvider>
        <Dock direction='middle'>
          {navbarItems}
          <Separator orientation='vertical' className='h-full' />
          {contactItems}
          <Separator orientation='vertical' className='h-full py-2' />
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <ModeToggle className='rounded-full' />
              </TooltipTrigger>
              <TooltipContent>
                <p>Theme</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        </Dock>
      </TooltipProvider>
    </div>
  );
}
