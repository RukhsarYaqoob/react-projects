import React, { useContext ,useMemo} from 'react'
import { useState } from 'react'
import Nav from '../components/Nav'
import Categories from '../Category'
import Card from '../components/Card'
import Card2 from '../components/Card2'
import { food_items } from '../food'
import { dataContext } from '../context/UserContext'
import { RxCross1 } from "react-icons/rx";
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

function Home() {
  let {cate,setCate,input,showCard,setShowCard} = useContext(dataContext)
  const memoizedCate = useMemo(() => cate, [cate]);

  function filter(category) {
    if (category ==='All') {
      setCate(food_items)
    }else {
    let newList =  food_items.filter((item) => item.food_category === category)
    setCate(newList)
    }
  }
  let items = useSelector(state => state.cart)
  let subtotal = items.reduce((acc , item) => acc + item.qty * item.price ,0)
  let deliveryFee = 20;
  let taxes = subtotal*0.5/100;
  let total = Math.floor(deliveryFee + taxes + subtotal)
  // console.log('showCart',showCard)
  return (
    <div className='bg-[#f8f9fa] dark:bg-[#131316] w-full min-h-screen '>
      <Nav />
      {!input? 
      <div className='w-full flex justify-center items-center flex-wrap gap-5 '>
        {Categories.map((item) => (
          <div key={item.id} 
          onClick={() =>filter(item.name)}
          className='w-35 h-35 text-lg font-semibold text-[#212529] dark:text-[#f8f9fa] flex flex-col items-start justify-start text-nowrap gap-5 p-5 bg-[#dee2e6] dark:bg-[#5b5c62] rounded-lg shadow-lg hover:bg-[#ced4da] dark:hover:bg-[#6a6b70]
          cursor-pointer transition-all duration-200' >
            {item.icon}
            {item.name}
            </div>
        ))}
      </div> : null}
      
      <div className='w-full flex flex-wrap justify-center items-center pb-8 pt-8 gap-5 px-5'>
        {memoizedCate.length>1?memoizedCate.map((item) => (
          <Card key={item.id} name={item.food_name} id={item.id} image={item.food_image} price={item.price} type={item.food_type} />
        )):<div className='text-center pt-5 text-2xl text-[#212529] dark:text-[#fffcf2] font-semibold'>No Dish Found</div>}
      </div>
      <div className={`
        ${showCard?'translate-x-0':'translate-x-full'}
        w-full md:w-[40vw] h-full flex flex-col items-center fixed top-0 right-0 bg-[#f8f9fa] dark:bg-[#393a41] shadow-xl overflow-auto p-6  transition-all duration-500 `}>
        <header className='w-full flex justify-between items-center text-[#212529] dark:text-[#f8f9fa]'>
          <span className='text-lg font-semibold'>Order Item</span>
          <RxCross1
          onClick={() => setShowCard(false)}
          className='w-5 h-5 text-lg font-semibold cursor-pointer'/>
        </header>
        {items.length>0?<>
        <div className='w-full mt-5 flex flex-col gap-5'>
          {items.map((item) =>(
            <Card2 key={item.id} name={item.name} price={item.price} image={item.image} id={item.id} qty={item.qty}/>
          ))}
        </div>
        <div className='w-full border-t-2 border-b-2 border-gray-600 mt-5 flex flex-col gap-2 p-4' >
          <div className='w-full flex justify-between items-center'>
            <span className='text-lg text-[#212529] dark:text-[#f8f9fa] font-semibold'>Subtotal</span>
            <span className='text-lg text-[#eb5e28] dark:text-[#f8f9fa] font-semibold'>Rs {subtotal} /-</span>
          </div>
          <div className='w-full flex justify-between items-center'>
            <span className='text-lg text-[#212529] dark:text-[#f8f9fa] font-semibold'>Delivary Fee</span>
            <span className='text-lg text-[#eb5e28] dark:text-[#f8f9fa] font-semibold'>Rs {deliveryFee} /-</span>
          </div>
          <div className='w-full flex justify-between items-center'>
            <span className='text-lg text-[#212529] dark:text-[#f8f9fa] font-semibold'>Taxes</span>
            <span className='text-lg text-[#eb5e28] dark:text-[#f8f9fa] font-semibold'>Rs {taxes} /-</span>
          </div>
        </div>
        <div className='w-full flex justify-between items-center p-4'>
            <span className='text-xl text-[#212529] dark:text-[#f8f9fa] font-semibold'>Total</span>
            <span className='text-xl text-[#eb5e28] dark:text-[#f8f9fa] font-semibold'>Rs {total} /-</span>
         </div>
        <button
        onClick={()=>toast.success("order place")}
        className='w-[80%] p-3 mt-4 text-[#212529] dark:text-[#f8f9fa] font-medium bg-[#adb5bd] dark:bg-[#5b5c62] hover:bg-[#6c757d] transition-all rounded-lg'>Place Order</button>
        </>: <div className='text-center pt-5 text-2xl text-[#212529] dark:text-[#f8f9fa] font-semibold'>Empty Cart</div>} 
      </div>
    </div>
  )
}

export default Home