'use client'
import { useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import img1 from '@/assets/images/img1.jpg';
import img2 from '@/assets/images/img2.jpg';
import img4 from '@/assets/images/img4.jpg';
import bookImage from '@/assets/images/book-cover.png';
import JavascriptIcon from '@/assets/icons/square-js.svg';
import HTMLIcon from '@/assets/icons/html5.svg';
import CssIcon from '@/assets/icons/css3.svg';
import ReactIcon from '@/assets/icons/react.svg';
import GithubIcon from '@/assets/icons/github-icon.svg';
import TypescriptIcon from '@/assets/icons/typescript.svg';
import Card from '@/components/Card';
import CardHeader from '@/components/CardHeader';
import ToolboxItems from '@/components/ToolboxItems';
import Tape from '@/sections/Tape';
import Contact from '@/sections/Contact';
import SunImage from '@/assets/icons/sun.png';

const toolboxItems = [
  { title: 'Typescript', iconType: TypescriptIcon },
  { title: 'Javascript', iconType: JavascriptIcon },
  { title: 'HTML5', iconType: HTMLIcon },
  { title: 'CSS3', iconType: CssIcon },
  { title: 'React', iconType: ReactIcon },
  { title: 'GitHub', iconType: GithubIcon },
];

const hobbies = [
  { title: 'Painting', emoji: '🎨', left: '5%', top: '5%' },
  { title: 'Traveling', emoji: '🚢', left: '50%', top: '5%' },
  { title: 'Gaming', emoji: '🎮', left: '45%', top: '35%' },
  { title: 'Movies', emoji: '🎥', left: '4%', top: '35%' },
  { title: 'Photography', emoji: '📷', left: '5%', top: '65%' },
  { title: 'Reading', emoji: '📖', left: '58%', top: '55%' },
  { title: 'Hiking', emoji: '🥾', left: '45%', top: '78%' },
];

const Page = () => {
  const constrainRef = useRef(null);

  return (
    <div className="py-20 overflow-x-hidden ">
      <div className="container mx-auto px-4">

        {/* Background Gradient */}
        <div className="absolute h-[400px] w-full max-w-[1600px] left-1/2 -translate-x-1/2 bg-emerald-300/30 -z-10 [mask-image:radial-gradient(50%_50%_at_left_center,black,transparent)]"></div>

        {/* Sun Image and Heading */}
        <div className="flex justify-center">
          <Image src={SunImage} alt="" />
        </div>
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center text-transparent bg-clip-text">
          My Persona
        </p>
        <h2 className="font-serif text-3xl text-center mt-6 md:text-5xl">
          Story of Being Me
        </h2>
        <p className="text-center text-white/60 mt-4 md:text-lg lg:text-xl max-w-md mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, corrupti. Culpa sint cumque dolor vero.
        </p>

        {/* Images Row */}
        <div className="hidden md:flex justify-center mt-8 space-x-2">
          <Image src={img1} alt="" className="rounded-full w-16 h-16" />
          <Image src={img2} alt="" className="rounded-full w-16 h-16" />
          <Image src={img4} alt="" className="rounded-full w-16 h-16" />
        </div>

        <div className="my-12 flex justify-center">
          <Tape />
        </div>

        {/* Cards Section */}
        <div className="mt-20 grid gap-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-12">

          {/* Intro Card */}
          <div className="col-span-12 md:col-span-4">
            <div className="rounded-3xl relative overflow-hidden p-3 sm:p-4">
              <p className="uppercase text-xs sm:text-sm font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center text-transparent bg-clip-text">
                Beyond Portfolio
              </p>
              <h2 className="font-serif text-lg sm:text-xl text-center mt-4 md:text-3xl">
                Let&apos;s Know more about me
              </h2>
            </div>
          </div>

          {/* Toolbox Card */}
          <div className="col-span-12 md:col-span-8">
            <Card className="w-full p-3 sm:p-4">
              <CardHeader
                title="My Toolbox"
                desc="Explore the technologies and tools I use to craft digital experiences."
                className="px-3 sm:px-6 pt-3 sm:pt-4"
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-3 sm:mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:15s]"
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-3 sm:mt-6"
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
            </Card>
          </div>

          {/* Beyond the Code Card */}
          <div className="col-span-12 md:col-span-8">
            <Card className="h-[280px] sm:h-[320px] p-3 sm:p-4 flex flex-col">
              <CardHeader
                title="Beyond the Code"
                desc="Explore my interests and hobbies beyond the digital realm."
                className="px-3 sm:px-6 py-3 sm:py-4"
              />
              <div className="relative flex-1" ref={constrainRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="absolute inline-flex items-center gap-1 sm:gap-2 px-4 sm:px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1 sm:py-1.5"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constrainRef}
                  >
                    <span className="text-xs sm:text-sm font-medium text-gray-950">{hobby.title}</span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </div>

          {/* My Reads Card */}
          <div className="col-span-12 md:col-span-4">
            <Card className="h-[280px] sm:h-[320px] p-3 sm:p-4">
              <CardHeader title="My Reads" desc="Explore the books shaping my perspectives" />
              <div className="w-32 sm:w-40 mx-auto mt-6 sm:mt-8">
                <Image src={bookImage} alt="Book cover" />
              </div>
            </Card>
          </div>

        </div>

      </div>

      <Contact />
    </div>
  );
};

export default Page;
