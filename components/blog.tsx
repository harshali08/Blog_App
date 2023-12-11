import React from 'react'
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";

const Blog = () => {
  return (
    <div  style={{margin:"0 auto",width:"80%"}}>
      <div className="mt-4 max-w-sm w-full lg:max-w-full lg:flex">
 
  <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div className="mb-8">
   
      <div className="text-violet-800 font-bold text-xl mb-2">Can coffee make you a better developer?</div>
      <p className="text-violet-950 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. nulla! Maiores et perferendis eaque, exercitationem praesentium nihil Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
    </div>
    <div className="flex justify-between flex-wrap">
      {/* <img className="w-10 h-10 rounded-full mr-4" src="/img/jonathan.jpg" alt="Avatar of Jonathan Reinink"> */}
      <div className="text-sm ">
       
        <p className="text-violet-800 text-lg my-2">Last Updated: Aug 18</p>
        
      </div>
      <div><button className='mx-2 my-2'><FaEdit size={35} color='rgb(91 33 182)'/></button>
        <button className='mx-2 my-2'><RiDeleteBin6Fill size={35} color='rgb(91 33 182)' /></button>
        </div> 
    </div>
  </div>
</div>
    </div>
  )
}

export default Blog
