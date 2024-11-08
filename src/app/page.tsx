import Background from '@/components/background';
import { TechIconCloud } from '@/components/tech-cloud';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

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

export default function Home() {
  return (
    <div className='relative'>
      <Background />
      <ScrollArea className='size-full'>
        <div className='mx-auto grid max-w-2xl gap-8 p-6 pb-24 font-[family-name:var(--font-geist-sans)] sm:p-8 sm:pb-24'>
          <IntroductionSection />
          <TechStackSection />
          <EducationSection />
        </div>
      </ScrollArea>
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
            <AvatarFallback>YK</AvatarFallback>
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
