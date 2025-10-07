import React from 'react'
import image1 from '../assets/image1.avif'
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { decrementQty,incrementQty,removeItem } from '../redux/cartSlice';

function Card2({name,image,price,id,qty}) {
  console.log('child components of card2 re-render')
  let  dispatch = useDispatch()
  return (
    <div className='w-full h-30 dark:bg-[#6a6b70] shadow-lg p-2 flex justify-between'>
      <div className='w-3/5 h-full flex gap-5'>
        <div className='w-3/5 h-full overflow-hidden rounded-lg'>
          <img src={image} className='object-cover' />
        </div>
        <div className='w-2/5 h-full flex flex-col gap-3'>
          <div className='text-sm md:text-[16px] text-nowrap font-semibold text-[#212529] dark:text-[#f8f9fa]'>{name}</div>
          <div className='w-25 h-12 bg-gray-400 text-xl font-semibold border-2 border-[#eb5e28]
           text-[#212529] dark:text-[#f8f9fa]  flex rounded-lg overflow-hidden shadow-lg'>
            <button
            onClick={() =>{qty>1?dispatch(decrementQty(id)):1}}
            className='w-2/6 h-full bg-[#fffcf2] dark:bg-[#4b4c52] flex justify-center items-center'>-</button>
            <span className='w-2/5 h-full bg-slate-200 dark:bg-[#6a6b70] flex justify-center items-center'>{qty}</span>
            <button
            onClick={() => dispatch(incrementQty(id))}
            className='w-2/6 h-full bg-[#fffcf2] dark:bg-[#4b4c52] flex justify-center items-center'>+</button>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-start items-end gap-5'>
      <span className='text-sm md:text-xl font-semibold text-[#212529] dark:text-[#f8f9fa]'>Rs {price}/-</span>
      <RiDeleteBin6Line 
       onClick={() => dispatch(removeItem(id))}
      className='w-2/7 h-2/7 text-red-600 cursor-pointer' />
      </div>
    </div>
  )
}

export default Card2