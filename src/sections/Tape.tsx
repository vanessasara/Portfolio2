import StarIcon from '@/assets/icons/star.svg'
import { Fragment } from 'react'

const words = [
  'Performant',
  'Acessible',
  'Secure',
  'Interactive',
  'Scalable',
  'User Friendly',
  'Responsive',
  'Maintainable',
  'Search Optimized',
  'Usable',
  'Reliable',
]

const Tape = () => {
  return (
    <div className='py-16 lg:py-24 overflow-x-clip'>
      <div className=' -rotate-3 -mx-1 bg-gradient-to-r  from-emerald-300 to-sky-400'>
        <div className='flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>
          <div className='flex gap-4 py-3 animate-move-left [animation-duration:30s] pr-4 '
          style={{
            transform:'translateX(-750px)'
          }}>
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {words.map(word => (
                  <div key={word} className='inline-flex gap-4 items-center'>
                    <span className='text-gray-900 uppercase font-extrabold text-sm'>{word}</span>
                    <StarIcon className=' -rotate-12 size-6/ text-gray-900' />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tape