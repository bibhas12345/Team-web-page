import React from 'react'
import img1 from './umages/cambridge.jpeg'
import img2 from './umages/california.jpeg'
import img3 from './umages/edinbruh.jpeg'
import img4 from './umages/havard.jpeg'
import img5 from './umages/hopkins.jpeg'
import img6 from './umages/humbolt.jpeg'
import img7 from './umages/max.jpeg'
import img8 from './umages/oxford.jpeg'
import { BsArrowRight } from 'react-icons/bs';


export default function School() {
    return (
        <div>
            <p className='h-[90px] w-[fullpx] bg-gray-300 flex p-6 text-2xl font-serif bg-gradient-to-r  m-3 justify-center items-center'>Learn form good scientist , research scoler from top universities in the world.</p>
            <div className='p-9 flex flex-wrap justify-center items-center '>

                <div className='m-4 h-[200px] w-[300px] bg-blue-100'>
                    <img className='h-full w-full hover:opacity-75' src={img1} alt='/'/>
                    <p className=''>cambridge university</p>
                </div>
                <div className='m-4 h-[200px] w-[300px] bg-blue-100'>
                    <img className='h-full w-full hover:opacity-75' src={img2} alt='/'/>
                    <p>california university</p>
                </div>
                <div className='m-4 h-[200px] w-[300px] bg-blue-100'>
                    <img className='h-full w-full hover:opacity-75' src={img3} alt='/'/>
                    <p>university of Edinburg</p>
                </div>
                <div className='m-4 h-[200px] w-[300px] bg-blue-100'>
                    <img className='h-full w-full hover:opacity-75' src={img4} alt='/'/>
                    <p>Havard university</p>
                </div>
                <div className=' m-4 h-[200px] w-[300px] bg-blue-100'>
                    <img className='h-full w-full hover:opacity-75' src={img5} alt='/'/>
                    <p>Hopkins university</p>
                </div>
                <div className='m-4 h-[200px] w-[300px] bg-blue-100'>
                    <img className='h-full w-full hover:opacity-75' src={img6} alt='/'/>
                    <p>Humboldt university</p>
                </div>
                <div className='m-4 h-[200px] w-[300px] bg-blue-100'>
                    <img className='h-full w-full hover:opacity-75' src={img7} alt='/'/>
                    <p>Max Planck university</p>
                </div>
                <div className='m-4 h-[200px] w-[300px] bg-blue-100'>
                    <img className='h-full w-full hover:opacity-75' src={img8} alt='/'/>
                    <p>oxford university</p>
                </div>

            </div>
            <a href='https://www.mastersportal.com/ranking-country/82/united-states.html'><div className=' hover:text-blue-700 flex flex-col cursor-pointer  font-semibold justify-end items-end mr-12'>view more<BsArrowRight className='text-2xl font-bold'/></div></a>
        </div>
    )
}
