import React from 'react'
import { menu_list } from '../../assets/assets'
const ExploreMenu = () => {
  return (
    <div className=' flex flex-col gap-5'>
      <h1 className=' text-Darkse font-semibold'>Explore our menu  </h1>
      <p className=' max-w-[60%]  text-gray-700'>Choose from a diverse menu featuring a array of dishes. Our mission is to satisfy your cravings elevate your dining experience,one delicious meal at a time</p>
      <div className=' explore  flex justify-between items-center gap-8 my-5 mx-auto overflow-scroll'>
        {
           menu_list.map((item,index)=>{
            return(
                <div key={index}>
                    <img 
                    className=' w-[7.5vw] min-w[80px] cursor-pointer rounded-full transition-all'
                    src={item.menu_image} alt="" />
                    <p 
                     className=' mt-2 text-DimGray '
                    >{item.menu_name}</p>
                </div>
            )
           })     
        }
      </div>
    </div>
  )
}

export default ExploreMenu
