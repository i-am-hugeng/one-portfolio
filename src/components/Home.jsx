import React from 'react'
import heroImage from '../assets/heroImage.png'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'

const Home = () => {
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-red-400 to-red-600'>
                    I'm a Full Stack Developer
                </h2>
                <p className='text-gray-500 py-4 max-w-md text-justify'>
                    I have 6 years of experience building and designing web-based app using <span className='text-blue-400'>Laravel</span> framework, <span className='text-blue-400'>Jquery</span> library, and <span className='text-blue-400'>Bootstrap</span> CSS. <br />
                    Currently, I'm excited to learn <span className='text-red-400'>React JS</span> and <span className='text-red-400'>Tailwind</span> CSS. 
                </p>
                <div>
                    <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointer'>
                        Portfolio
                        <span className='ml-2 group-hover:rotate-90 duration-300'>
                        <BsFillArrowRightCircleFill size={20} />
                        </span>
                    </button>
                </div>
            </div>
            <div>
                <img src={heroImage} alt="my profile" className='rounded-2xl mx-auto w-2/3 md:w-full' />
            </div>
        </div>
    </div>
  )
}

export default Home