import WebImage from '@/assets/images/sarah-web.png'
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckIcon from '@/assets/icons/check-circle.svg'
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'
import grainImage from '@/assets/images/grain.jpg'
import SectionHeader from '@/components/SectionHeader';

const portfolioProjects = [
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://saas-landing-page-nine-pi.vercel.app/",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "",
    image: aiStartupLandingPage,
  },
  {
    company: "Ecommerce Websol",
    year: "2023",
    title: "Startup Ecommerce Website",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://ecom-mocha.vercel.app",
    image: WebImage
    ,
  },
];

export const ProjectsSection = () => {
  return (
    <div className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow='Real-world Results'
          title='Featured Projects'
          desc='See how I transformed concepts into engaging digital experiences.'
        />
        <div className="flex flex-col mt-10 gap-20 md:mt-20">
          {portfolioProjects.map((project, index) => (
            <div
              key={project.title}
              className="bg-gray-800 px-8 pt-8 rounded-3xl overflow-hidden 
              md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky top-16 "
              style={{
                top: `calc(64px + ${index * 40}px`
              }}
            >
              <div
                className="absolute inset-0 -z-10 opacity-5 bg-cover"
                style={{
                  backgroundImage: `url(${grainImage.src})`,
                }}
              ></div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-5 text-sm text-white/50 md:text-base"
                      >
                        <CheckIcon className="w-5 h-5 md:w-6 md:h-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button
                      className="bg-white text-gray-950 h-12 w-full rounded-xl md:w-auto px-6 font-semibold inline-flex items-center justify-center gap-2 mt-8"
                    >
                      <span>Visit Live site</span>
                      <ArrowUpRightIcon className="w-5 h-5" />
                    </button>
                  </a>
                </div>

                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:w-auto lg:max-w-none lg:h-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <a href="/projects">
          <button
            className="border border-white h-12 max-w-auto rounded-xl md:w-auto px-4 font-semibold inline-flex items-center justify-center gap-2 mt-8"
          >
            <span>See all Projects</span>
            <ArrowUpRightIcon className="w-5 h-5" />
          </button>
        </a>
      </div>
    </div>
  );
};

