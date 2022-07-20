import React from 'react'
import { RiQuestionAnswerLine } from "react-icons/ri"
import { FaRegCalendarAlt } from "react-icons/fa"
import { RiArrowRightSFill } from "react-icons/ri"
import { AiOutlineUnlock } from "react-icons/ai"
import { BsHourglass } from "react-icons/bs"
import { BsPerson } from "react-icons/bs"
import { BiMessageDetail } from "react-icons/bi"
import { FiSettings } from "react-icons/fi"
import { VscSymbolOperator } from "react-icons/vsc"

const index = () => {
  return (
    <div className='bg-slate-200 w-[75vw] h-[100vh]'>

      <div className=' h-32 w-4/5 ml-16 mt-16 flex justify-between'>
        <div className='flex'>
          <button className=' h-16 w-16 bg-green-600 rounded-full'><RiQuestionAnswerLine color='white' size={30} className='mt-0.5 ml-4' /></button> <span className='mt-5 ml-3 font-semibold text-gray-800'>Homework Help</span>
        </div>

        <div className='flex'>
          <div className=' h-16 w-16 bg-yellow-400 rounded-full'><FaRegCalendarAlt color='white' size={30} className='mt-4 ml-4' /></div> <span className='mt-5 ml-3 font-semibold text-gray-800'>My Lessons</span>
        </div>

        <div className='flex'>
          <div className=' h-16 w-16 bg-red-400 rounded-full'><RiArrowRightSFill color='white' size={40} className='mt-3 ml-3' /></div> <span className='mt-5 ml-3 font-semibold text-gray-800'>Video Library <button className=' bg-red-600 ml-1 rounded-md p-1'>
            <span className='text-sm text-white'>FREE</span>
          </button></span>
        </div>

        <div className='flex'>
          <div className=' h-16 w-16 bg-purple-600 rounded-full'><AiOutlineUnlock color='white' size={30} className='mt-3.5 ml-4' /></div> <span className='mt-5 ml-3 font-semibold text-gray-800'>Get a Learning Plan</span>
        </div>
      </div>


      <button className='h-6 w-4/5 ml-16 mt-5 flex justify-between'>
        <span className='font-semibold'>Join Lessons</span>
        <button className='bg-gray-800 rounded-md text-ms px-3 px-6 text-white'>SEE ALL</button>
      </button>



      <div className=' ml-16 mt-5 flex flex-row'>

        <div className='rounded-xl bg-white flex flex-col  h-70 w-60'>
          <video className='object-fill' src="./videos/one.mp4" type="video/mp4" controls></video>
          <span className='text-purple-600 text-sm p-1'>Junior English</span>
          <span className='font-semibold text-lg p-1'>Meet the Approximants - /w/, /y/, /r/
            and /l/</span>

          <div className='flex flex-row p-1'>
            <BsHourglass />
            <span className='text-gray-600 text-sm ml-1'>Available for 22 hours</span>
          </div>

          <div className='flex flex-row p-1'>
            <BsPerson />
            <span className='text-gray-600 text-sm ml-1'>Justina Kennjonnes</span>
          </div>
        </div>


        <div className='rounded-xl bg-white flex flex-col  h-70 w-60 ml-20'>
          <video className='object-fill' src="./videos/two.mp4" type="video/mp4" controls></video>
          <span className='text-purple-600 text-sm p-1'>Basic Science</span>
          <span className='font-semibold text-lg p-1'>About Metals</span>

          <div className='flex flex-row p-1'>
            <BsHourglass />
            <span className='text-gray-600 text-sm ml-1'>Available for 23 hours</span>
          </div>

          <div className='flex flex-row p-1'>
            <BsPerson />
            <span className='text-gray-600 text-sm ml-1'>Emmanuel Oji</span>
          </div>
        </div>

        <div className='rounded-xl bg-white flex flex-col  h-75 w-60 ml-20'>
          <video className='object-fill' src="./videos/three.mp4" type="video/mp4" controls></video>
          <span className='text-purple-600 text-sm p-1'>Basic Technology</span>
          <span className='font-semibold text-lg p-1'>Prevent, Correct or Predict?</span>

          <div className='flex flex-row p-1'>
            <BsHourglass />
            <span className='text-gray-600 text-sm ml-1'>Available for 2 days</span>
          </div>

          <div className='flex flex-row p-1'>
            <BsPerson />
            <span className='text-gray-600 text-sm ml-1'>Christianna Adebiyi</span>
          </div>
        </div>

      </div>

      <div className='ml-16 mt-8'>
        <span className='font-bold'>Video Library</span>
        <button className=' bg-red-600 ml-1 rounded-md p-1'>
          <span className='text-sm text-white'>FREE</span>
        </button>
      </div>


      <div className=' ml-16 mt-5 flex flex-row'>

        <button className='rounded-xl bg-blue-600 box-border h-25 w-60 '>
          <BiMessageDetail className='ml-1 left-0 top-0 h-8 w-8 mt-2' color='white' />
          <span className='ml-24 text-lg h-16 w-16 text-white'>JUNIOR ENGLISH</span>
        </button>


        <button className='rounded-xl bg-purple-600 box-border h-25 w-60 ml-20 '>
          <FiSettings className='ml-1 left-0 top-0 h-8 w-8 mt-2' color='white' />
          <span className='ml-16 text-lg h-16 w-16 text-white'>BASIC TECHNOLOGY</span>
        </button>

        <button className='rounded-xl bg-red-500 box-border h-25 w-60 ml-20 '>
          <VscSymbolOperator className='ml-1 left-0 top-0 h-8 w-8 mt-2' color='white' />
          <span className='ml-12 text-lg h-16 w-16 text-white'>JUNIOR MATHEMATICS</span>
        </button>

      </div>


    </div>
  )
}

export default index