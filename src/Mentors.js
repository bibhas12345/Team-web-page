import React from 'react'
import img1 from './mimages/img1.png'
import img2 from './mimages/img2.jpeg'
import img3 from './mimages/img3.jpeg'
import img4 from './mimages/img4.jpeg'
import img5 from './mimages/img5.jpeg'

import { BiPhone } from 'react-icons/bi';
import { FcSms } from 'react-icons/fc';
import { HiOutlineMail } from 'react-icons/hi';
export default function Mentors() {
    return (
        <div>
            <p className='text-2xl flex justify-center items-center ml-6 p-3 mt-5'>Mentors and Adisor</p>
            <div className='p-6 flex flex-wrap justify-center items-center'>
            

                <div className='p-2 m-4  h-[290px] w-[220px] shadow-2xl shadow-gray-400 hover:bg-slate-100 flex flex-col justify-center items-center'>
                    <img className=' h-[110px] w-[100px] rounded-full' src={img1} />
                    <p className='font-semibold '> Dr. Dirk Brockmann</p>
                    <p>university of Cambridge,UK</p>
                    <p className='flex mt-1'><BiPhone className='mt-1'/> - 020-71173125</p>
                    <p className='flex mt-1'><HiOutlineMail className='mt-1'/> - drik8989@gmail.com</p>

                    <p className='hover:text-blue-600 bg-gray-400 p-1 rounded-lg mt-4 flex'>Massage<FcSms className='mt-1 h-[20px] w-[30px]'/></p>
                </div>
                <div className='p-2 m-4  h-[290px] w-[220px] shadow-2xl shadow-gray-400 hover:bg-slate-100 flex flex-col justify-center items-center'>
                    <img className=' h-[110px] w-[100px] rounded-full' src={img2} />
                    <p className='font-semibold '> Dr. h.c. Artemis Alexiadou </p>
                    <p>university of Cambridge,UK</p>
                    <p className='flex mt-1'><BiPhone className='mt-1'/> - 20-71171735</p>
                    <p className='flex mt-1'><HiOutlineMail className='mt-1'/> - hc009@gmail.com</p>

                    <p className='hover:text-blue-600 bg-gray-400 p-1 rounded-lg mt-4 flex'>Massage<FcSms className='mt-1 h-[20px] w-[30px]'/></p>
                </div>
                <div className='p-2 m-4  h-[290px] w-[220px] shadow-2xl shadow-gray-400 hover:bg-slate-100 flex flex-col justify-center items-center'>
                    <img className=' h-[110px] w-[100px] rounded-full' src={img3} />
                    <p className='font-semibold '>John Meyer </p>
                    <p>university of Cambridge,UK</p>
                    <p className='flex mt-1'><BiPhone className='mt-1'/> - 020-71171500</p>
                    <p className='flex mt-1'><HiOutlineMail className='mt-1'/> - john222@gmail.com</p>

                    <p className='hover:text-blue-600 bg-gray-400 p-1 rounded-lg mt-4 flex'>Massage<FcSms className='mt-1 h-[20px] w-[30px]'/></p>
                </div>
                <div className='p-2 m-4  h-[290px] w-[220px] shadow-2xl shadow-gray-400 hover:bg-slate-100 flex flex-col justify-center items-center'>
                    <img className=' h-[110px] w-[100px] rounded-full' src={img4} />
                    <p className='font-semibold '>Professor Plavnik</p>
                    <p>university of Cambridge,UK</p>
                    <p className='flex mt-1'><BiPhone className='mt-1'/> - 020-71173071</p>
                    <p className='flex mt-1'><HiOutlineMail className='mt-1'/> - planik3003@gmail.com</p>

                    <p className='hover:text-blue-600 bg-gray-400 p-1 rounded-lg mt-4 flex'>Massage<FcSms className='mt-1 h-[20px] w-[30px]'/></p>
                </div>


                <div className='p-2 m-4  h-[290px] w-[220px] shadow-2xl shadow-gray-400 hover:bg-slate-100 flex flex-col justify-center items-center'>
                    <img className=' h-[110px] w-[100px] rounded-full' src={img5} />
                    <p className='font-semibold '>Abdou Hussien</p>
                    <p>university of Cambridge,UK</p>
                    <p className='flex mt-1'><BiPhone className='mt-1'/> - 020-71179559</p>
                    <p className='flex mt-1'><HiOutlineMail className='mt-1'/> - hussen0505@gmail.com</p>

                    <p className='hover:text-blue-600 bg-gray-400 p-1 rounded-lg mt-4 flex'>Massage<FcSms className='mt-1 h-[20px] w-[30px]'/></p>
                </div>



            </div>
        </div>

    )
}
