import React, { useCallback, useContext , useEffect } from 'react'
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { BiShoppingBag } from "react-icons/bi";
import { dataContext } from '../context/UserContext';
import { food_items } from '../food';
import { useSelector } from 'react-redux';
import { ImSun } from "react-icons/im";
import { FaRegMoon } from "react-icons/fa";
import { ThemeContext } from '../context/ThemeProvider';

function Nav() {
  console.log('child components of Nav re-render')
  let {input,setInput,cate,setCate,showCart,setShowCard} = useContext(dataContext)
 const {themeMode,lightTheme,darkTheme} = useContext(ThemeContext)
  useEffect(() => {
  const newList = food_items.filter((item)=>item.food_name.toLowerCase().includes(input))
  setCate(newList) 
  },[input])
  let items = useSelector(state => state.cart)

  const handleCard = useCallback((e) => setInput(e.target.value))
  return (
    <div className='w-full h-25 flex justify-between px-2 py-5 md:px-8'>
      <div className='w-11 h-11 md:w-15 md:h-15 bg-[#ced4da] dark:bg-[#393a41] flex justify-center items-center rounded-md shadow-xl'>
        <MdFastfood className='w-7 h-7 md:w-8 md:h-8 text-[#eb5e28]  ' />
      </div>
      <form onSubmit={(e) => e.preventDefault()}
      className='w-3/5 bg-[#ced4da] dark:bg-[#393a41] h-11 md:h-15 rounded-md shadow-md flex items-center p-2 md:p-5 gap-2 md:gap-5'>
        <IoSearch className='text-[#eb5e28] w-5 h-5'/>
        <input 
        type="text" 
        placeholder='Search Item...'
        value={input}
        onChange={handleCard}
        className='w-full outline-none placeholder:text-[#212529] dark:text-white dark:placeholder:text-white text-sm md:text-xl' 
        />
      </form>
      <div className='flex gap-1 md:gap-5'>
       <button
       onClick={themeMode === "dark" ? lightTheme : darkTheme}
      className="w-9 h-9 md:w-12 md:h-12 flex justify-center items-center shadow-sm rounded-full bg-[#e9ecef] dark:bg-[#393a41] text-[#212529]  dark:text-gray-200  border-1 border-gray-300 text-xl"
    >
     {themeMode === "dark" ? <ImSun className='w-6 h-6' /> : <FaRegMoon className='w-6 h-6' />}
    </button>
      <div onClick={()=>setShowCard(true)}
      className='relative w-11 h-11 md:w-15 md:h-15 cursor-pointer bg-[#ced4da] dark:bg-[#393a41] flex justify-center items-center rounded-md shadow-xl' >
        <span className='absolute top-0 right-1 md:right-3 text-sm md:text-lg text-[#eb5e28] font-bold'>{items.length}</span>
        <BiShoppingBag className='w-7 h-7 md:w-8 md:h-8 text-[#eb5e28] ' />
      </div>
      </div>
    </div>
  )
}

export default React.memo(Nav)