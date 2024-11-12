import BackToTop from '@/components/back-to-top';
import Background from '@/components/background';
import Cards from '@/components/cards';
import Icons from '@/components/icons';

import { TechIconCloud } from '@/components/tech-cloud';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Skeleton } from '@/components/ui/skeleton';
import {
  DISCORD_URL,
  GITHUB_URL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  STEAM_URL,
} from '@/lib/constants';

const educations = [
  {
    school: 'Hong Kong Metropolitan University',
    degree: 'Bachelor of Science in Computer Science',
    year: '2021 - 2023',
  },
  {
    school: 'Hong Kong Institute of Vocational Education',
    degree: 'Higher Diploma in AI & Mobile Applications Development',
    year: '2019 - 2021',
  },
].map((item, index) => (
  <div key={index} className='flex items-center justify-between gap-[5px]'>
    <div>
      <h3 className='font-bold'>{item.degree}</h3>
      <p className='text-sm text-gray-500'>{item.school}</p>
    </div>
    <p className='text-nowrap text-sm text-gray-500'>{item.year}</p>
  </div>
));

const projects = [
  {
    name: 'Project 1',
    description: 'Description 1',
    year: '2021',
  },
  {
    name: 'Project 2',
    description: 'Description 2',
    year: '2021',
  },
].map((item, index) => (
  <div key={index} className='flex items-center justify-between gap-[5px]'>
    <div>
      <h3 className='font-bold'>{item.name}</h3>
      <p className='text-sm text-gray-500'>{item.description}</p>
    </div>
    <p className='text-nowrap text-sm text-gray-500'>{item.year}</p>
  </div>
));

const socials = [
  { name: 'GitHub', url: GITHUB_URL, icon: Icons.Github },
  { name: 'LinkedIn', url: LINKEDIN_URL, icon: Icons.LinkedIn },
  { name: 'Instagram', url: INSTAGRAM_URL, icon: Icons.Instagram },
  { name: 'Steam', url: STEAM_URL, icon: Icons.Steam },
  { name: 'Discord', url: DISCORD_URL, icon: Icons.Discord },
].map(({ name, url, ...rest }, index) => (
  <Button key={index} rel='noopener noreferrer' variant='ghost' asChild>
    <a href={url} target='_blank'>
      <rest.icon />
      {name}
    </a>
  </Button>
));

export default function Home() {
  return (
    <div className='relative'>
      <Background />
      <ScrollArea className='size-full'>
        <div className='mx-auto grid max-w-2xl gap-8 p-6 pb-24 font-[family-name:var(--font-geist-sans)] sm:p-8 sm:pb-24'>
          <IntroductionSection />
          <TechStackSection />
          <EducationSection />
          <ProjectSection />
          <SocialSection />
          <CardSection />
          <Footer />
        </div>
      </ScrollArea>
      <BackToTop />
    </div>
  );
}

function IntroductionSection() {
  return (
    <Card>
      <CardHeader>
        <div className='flex gap-4'>
          <Avatar className='size-20'>
            <AvatarImage src='/images/avatar.jpg' />
            <AvatarFallback>
              <Skeleton className='size-full' />
            </AvatarFallback>
          </Avatar>
          <div>
            <h1 className='text-2xl font-bold'>INEWSK &#40;YK&#41;</h1>
            <p className='text-gray-500'>Junkcode Developer</p>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}

function TechStackSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tech Stack</CardTitle>
      </CardHeader>

      <CardContent>
        <Card className='shadow'>
          <CardContent className='flex h-56 items-center justify-center overflow-hidden'>
            <TechIconCloud />
          </CardContent>
        </Card>
        <p className='mt-4 text-center text-sm text-gray-500'>
          Node.JS Full-stack Developer
        </p>
      </CardContent>
    </Card>
  );
}

function EducationSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Education</CardTitle>
      </CardHeader>

      <CardContent>
        <div className='space-y-4'>{educations}</div>
      </CardContent>
    </Card>
  );
}

function ProjectSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Projects</CardTitle>
      </CardHeader>

      <CardContent>
        <div className='space-y-4'>{projects}</div>
      </CardContent>
    </Card>
  );
}

function SocialSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Social</CardTitle>
      </CardHeader>

      <CardContent>
        <div className='flex flex-wrap justify-evenly gap-4'>{socials}</div>
      </CardContent>
    </Card>
  );
}

function CardSection() {
  return (
    <div>
      <h3 className='mb-4 text-xl font-bold'>Projects</h3>
      <Cards />
    </div>
  );
}

function Footer() {
  return (
    <footer className='p-4'>
      <div className='text-center'>
        <p className='text-sm text-gray-500'>
          &copy; 2024 INEWSK. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
