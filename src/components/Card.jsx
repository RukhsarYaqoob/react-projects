import React, { useCallback } from 'react'
import image1 from '../assets/image1.avif'
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import {useDispatch} from 'react-redux'
import { addItem } from '../redux/cartSlice';

const Card = React.memo(function Card({name,image,id,price,type}) {
  console.log('child components of card re-render')
  let dispatch = useDispatch()
  const handleAdd = useCallback(() => {
    dispatch(addItem({id,name,price,image,qty:1}))
  },[dispatch,id,name,price,image])
  return (
    <div className='w-75 h-90 bg-[#dee2e6] dark:bg-[#6a6b70] p-3 rounded-lg flex flex-col gap-4 shadow-lg hover:border-3 border-[#343a40] dark:border-[#f8f9fa]'>
      <div className='w-full h-3/5 overflow-hidden rounded-lg'>
        <img src={image} alt="cards" className='object-cover'/>
      </div>
      <div className='text-xl text-[#212529] dark:text-[#f8f9fa] font-semibold'>
        {name}
      </div>
      <div className='w-full flex justify-between items-center text-[#eb5e28] dark:text-[#f8f9fa] text-lg font-semibold'>
      <div className='text-lg font-semibold'>Rs {price}/-</div>
      <div className='flex justify-center items-center gap-2'>{type === 'veg' ? <LuLeafyGreen /> :<GiChickenOven />}<span>{type}</span></div>
      </div>
      <button className='w-full p-3 font-medium text-[#212529] dark:text-[#f8f9fa] bg-[#adb5bd] dark:bg-[#4b4c52]  hover:bg-[#6c757d] dark:hover:bg-[#2f3037] transition-all rounded-lg'onClick={handleAdd}>Add to Dish</button>
    </div>
  )
})

export default Card