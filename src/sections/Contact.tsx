import ArrowRightIcon from '@/assets/icons/arrow-up-right.svg'
import grainImage from '@/assets/images/grain.jpg'

const Contact = () => {
  return (
    <div className='py-16 pt-12 lg:py-24 lg:pt-20'>
      <div className='container'>
        <div className='text-gray-900 py-8 md:gap-16  px-10 z-10 md:text-left overflow-hidden rounded-3xl text-center relative bg-gradient-to-r from-emerald-300 to-sky-400'>
          <div className='absolute inset-0 opacity-5 -z-10'
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          
          <div className='flex flex-col gap-8 md:flex-row items-center'>
            <div className=''>

              <h2 className='font-serif text-2xl md:text-3xl'>Let&apos;s create something amazing together</h2>
              <p className='text-sm mt-2 md:text-base'>
                Ready to bring your next project to life? Let&apos;s connect and discuss how I can help you achieve your goals
              </p>
            </div>
            <div>

              <a href="/contact">
                <button className='text-white w-max border border-gray-900 gap-2 mt-8 bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl'>
                  <span className='font-semibold'>Contact Me</span>
                  <ArrowRightIcon className='size-4' />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Contact