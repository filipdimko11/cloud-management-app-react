import React from 'react'
import { CheckIcon } from '@heroicons/react/solid'

const Pricing = () => {
  return (
    <div className="w-full text-white my-24">
        <div className='w-full h-[800px] bg-slate-900 absolute mix-blend-overlay'>
            
        </div>
        <div className='max-w-[1240px] mx-auto py-12'>
            
        <div className="text-center py-8 text-slate-300">
        <h2 className="text-3xl uppercase">Pricing</h2>
        <h3 className='text-5xl font-bold text-white my-6'>The right price for your research</h3>
        <p className='text-2xl'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non totam optio dolorum, adipisci deleniti explicabo aliquid distinctio quos dolore voluptatem?
        </p>
            </div>
                <div className='grid md:grid-cols-2 sm:mx-10'>
                    <div className='bg-white mx-6 text-slate-900 rounded-xl shadow-2xl p-8 pb-10 relative'>

                    <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>
                        Standard
                    </span>
                    <div>
                        <p className='text-6xl font-bold'>
                            $49<span className='text-xl text-slate-500'>
                                /mo
                                </span>
                            </p>
                    </div>
                <div>
                    <p className='text-xl py-8 text-slate-900'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, consequuntur.
                    </p>
                    <div className='relative text-black'>
                        <p className='flex py-4 text-black'>
                            <CheckIcon className="w-8 text-green-600"/>Lorem ipsum dolor sit amet.
                        </p>
                        <p className='flex py-4 text-black'>
                            <CheckIcon className="w-8 text-green-600"/>Lorem ipsum dolor sit amet.
                        </p>
                        <p className='flex py-4 text-black'>
                            <CheckIcon className="w-8 text-green-600"/>Lorem ipsum dolor sit amet.
                        </p>
                        <p className='flex py-4 text-black'>
                            <CheckIcon className="w-8 text-green-600"/>Lorem ipsum dolor sit amet.
                        </p>
                        <p className='flex py-4 text-black'>
                            <CheckIcon className="w-8 text-green-600"/>
                            Lorem ipsum dolor sit amet.
                        </p>
                        <button className='w-full rounded-lg py-4 my-2 ease-in-out duration-300'>
                            Get started
                        </button>
                    </div>
                </div>
            </div>

            <div className='bg-white mx-6 mt-10 md:mt-0 text-slate-900 rounded-xl shadow-2xl p-8 pb-10 relative'>

                    <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>
                        Premium
                    </span>
                    <div>
                        <p className='text-6xl font-bold'>
                            $99<span className='text-xl text-slate-500'>
                                /mo
                                </span>
                            </p>
                    </div>
                <div>
                    <p className='text-xl py-8 text-slate-900'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, consequuntur.
                    </p>
                    <div className='relative text-black'>
                        <p className='flex py-4 text-black'>
                            <CheckIcon className="w-8 text-green-600"/>Lorem ipsum dolor sit amet.
                        </p>
                        <p className='flex py-4 text-black'>
                            <CheckIcon className="w-8 text-green-600"/>Lorem ipsum dolor sit amet.
                        </p>
                        <p className='flex py-4 text-black'>
                            <CheckIcon className="w-8 text-green-600"/>Lorem ipsum dolor sit amet.
                        </p>
                        <p className='flex py-4 text-black'>
                            <CheckIcon className="w-8 text-green-600"/>Lorem ipsum dolor sit amet.
                        </p>
                        <p className='flex py-4 text-black'>
                            <CheckIcon className="w-8 text-green-600"/>
                            Lorem ipsum dolor sit amet.
                        </p>
                        <button className='w-full rounded-lg py-4 my-2 ease-in-out duration-300'>
                            Get started
                        </button>
                    </div>
                </div>
            </div>


            </div>
        </div>
    </div>
  )
}

export default Pricing