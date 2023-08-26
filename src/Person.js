import React from 'react'
import p1 from './pimages/cambridge.jpg'
import p2 from './pimages/california.jpg'
import p3 from './pimages/edinburg.jpg'
import p4 from './pimages/havard.jpg'
import p5 from './pimages/hopkins.jpg'
import p6 from './pimages/humboldt.jpg'
import p7 from './pimages/planck.webp'
import p8 from './pimages/oxford.jpg'

import { BsArrowRight } from 'react-icons/bs';


export default function Person() {
    return (
        <div>
            <p className='text-2xl flex mt-6 justify-center items-center ml-8 p-4'>Meet your Professors</p>
            <div className='p-6 flex flex-wrap justify-center items-center'>

                <div className='p-2 m-4  h-[240px] w-[220px] shadow-2xl shadow-gray-400 hover:bg-slate-100 flex flex-col justify-center items-center'>
                    <img className=' h-[110px] w-[100px] rounded-full' src={p1} alt='/'/>
                    <p className='font-semibold '>James Biddulph</p>
                    <p>university of Cambridge,UK</p>
                    <p className='hover:text-blue-600 mt-4'>About</p>
                </div>
                <div className='p-2 m-4  ml-9 h-[240px] w-[220px] shadow-2xl shadow-gray-400 hover:bg-slate-100 flex-col justify-center items-center'>
                    <img className=' h-[110px] w-[100px] ml-12 mb-2 rounded-full' src={p2} alt='/'/>
                    <p className='font-semibold '>Michael W. Peterson, M.D.</p>
                    <p>university of California,US</p>
                    <p className='hover:text-blue-600 mt-4 ml-12'>About</p>
                </div>
                <div className='p-2 m-4  ml-9 h-[240px] w-[220px] shadow-2xl shadow-gray-400 hover:bg-slate-100 flex flex-col justify-center items-center'>
                    <img className=' h-[110px] w-[100px] rounded-full' src={p3} alt='/'/>
                    <p className='font-semibold '>Dr Maryam Almohammad</p>
                    <p>university of Edinburg,UK</p>
                    <p className='hover:text-blue-600 mt-4'>About</p>
                </div>
                <div className='p-2 m-4  ml-9  h-[240px] w-[220px] shadow-2xl shadow-gray-400 hover:bg-slate-100  flex flex-col justify-center items-center'>
                    <img className=' h-[110px] w-[100px] rounded-full' src={p4} alt='/'/>
                    <p className='font-semibold '>María Luisa Parra-Velasco</p>
                    <p>university of Havard,US</p>
                    <p className='hover:text-blue-600 mt-4'>About</p>
                </div>

            </div>
            <div className='p-2 flex flex-wrap justify-center items-center'>

                <div className='p-2 m-4  h-[240px] w-[220px] shadow-2xl shadow-gray-400 hover:bg-slate-100 flex flex-col justify-center items-center'>
                    <img className=' h-[110px] w-[100px] rounded-full' src={p5} alt='/'/>
                    <p className='font-semibold '>Leslie Adams, PhD</p>
                    <p>university of Hopkins,UK</p>
                    <p className='hover:text-blue-600 mt-4'>About</p>
                </div>
                <div className='p-2 m-4  ml-9 h-[240px] w-[220px] shadow-2xl shadow-gray-400 hover:bg-slate-100 flex flex-col justify-center items-center'>
                    <img className=' h-[110px] w-[100px] rounded-full' src={p6} alt='/'/>
                    <p className='font-semibold '>Prof. Jutta Allmendinger, PhD</p>
                    <p>university of Humboldt,UK</p>
                    <p className='hover:text-blue-600 mt-4'>About</p>
                </div>
                <div className='p-2 m-4  ml-9 h-[240px] w-[220px] shadow-2xl shadow-gray-400 hover:bg-slate-100 flex flex-col justify-center items-center'>
                    <img className=' h-[110px] w-[100px] rounded-full' src={p7} alt='/'/>
                    <p className='font-semibold '>Prof. Markus Antonietti</p>
                    <p>university of Max planck,   Germeny</p>
                    <p className='hover:text-blue-600 mt-4'>About</p>
                </div>
                <div className='p-2 m-4  ml-9  h-[240px] w-[220px] shadow-2xl shadow-gray-400 hover:bg-slate-100 flex flex-col justify-center items-center'>
                    <img className=' h-[110px] w-[100px] rounded-full' src={p8} alt='/'/>
                    <p className='font-semibold '>Luciano Floridi</p>
                    <p>university of Oxford,US</p>
                    <p className='hover:text-blue-600 mt-4'>About</p>
                </div>

            </div>
        </div>

    )
}
