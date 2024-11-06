import Image from 'next/image'
import MemoImage from '@/assets/images/memoji-computer.png'

const About = () => {
  return (
    <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row-reverse md:items-center md:space-x-12">
      <div className="hidden md:flex justify-center md:w-1/2">
        <Image src={MemoImage}
          alt="Memo Image"
          height={200}
          width={200} />
      </div>

      <div className="md:w-1/2 text-center md:text-left space-y-4">
        <p className="uppercase font-semibold text-sm tracking-wider bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
          About me
        </p>
        <h2 className="font-serif text-3xl md:text-4xl  text-gray-100 leading-tight">
          KNOW WHO AM I
        </h2>
        <p className="text-white  mt-2 md:text-lg lg:text-xl leading-relaxed max-w-lg mx-auto md:mx-0">
          My journey in a few words
        </p>
        <p className='text-gray-400 text-sm'>
          I have developed multiple websites using React and Next.js, crafting responsive, interactive user interfaces. My PostgreSQL expertise ensures efficient data management and backend support for seamless functionality.        </p>
        <a href="/about">
          <button
            className="border border-white h-12 max-w-auto rounded-xl md:w-auto px-4 font-semibold inline-flex items-center justify-center gap-2 mt-8"
          >
            <span>Learn More</span>
          </button>
        </a>
      </div>
    </div>
  )
}

export default About
