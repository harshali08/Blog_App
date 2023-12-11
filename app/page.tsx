import AllBlogs from "@/components/AllBlogs";
import Header from "@/components/Header";
import Blog from "@/components/blog";
import AddButton from "@/components/AddButton";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import Link from "next/link";


async function fetchdata(){
  const res=await fetch("http://localhost:3000/api/blog",{
    next:{
      revalidate:10
    }
  });
  const data= await res.json();
  console.log(data)
  return data.posts;
}

export default async function Home() {
  const posts=await fetchdata();
  console.log(posts);
  return (
    <main>
     
    <Header />
    <AddButton />
    <div>
      {
        posts?.map((post:any)=>(
          <div  key={post.id} style={{margin:"0 auto",width:"75%"}}>
      <div className="mt-4 max-w-sm w-full lg:max-w-full lg:flex">
 
  <div className="  border-gray-400  bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal" style={{boxShadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
    <div className="mb-8">
   
      <div className="text-violet-800 font-bold text-xl mb-2">{post.title}</div>
      <div className="text-violet-950 text-base">{post.description}</div>
    </div>
    <div className="flex justify-between flex-wrap">
      {/* <img className="w-10 h-10 rounded-full mr-4" src="/img/jonathan.jpg" alt="Avatar of Jonathan Reinink"> */}
      <div className="text-sm ">
       
        <p className="text-sm text-violet-800 sm:text-xl my-2">Last Updated: {new Date(post.date).toLocaleDateString()}</p>
        
      </div>
      <div>
        <Link href={`/blog/edit/${post.id}`}><button className='mx-2 my-2'><FaEdit size={35} color='rgb(91 33 182)'/></button></Link>
        
        </div> 
    </div>
  </div>
</div>
    </div>
        ))
      }
    </div>
  </main>
  )
}

// import React from 'react';
// import Header from '@/components/Header';
// import Blog from '@/components/blog';
// import AddButton from '@/components/AddButton';
// import { FaEdit } from "react-icons/fa";
// import { RiDeleteBin6Fill } from "react-icons/ri";

// async function fetchdata() {
//   try {
//     const res = await fetch('http://localhost:3000/api/blog');
//     if (!res.ok) {
//       throw new Error('Failed to fetch');
//     }
//     const data = await res.json();
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     return [];
//   }
// }

// export default async function Home() {
//   // Perform data fetching directly in the server component function
//   const posts = await fetchdata();

//   return (
//     <main>
//       <Header />
//       <AddButton />
//       <div>
//         {
//           posts?.map((post:any)=>(
//             <h1 key={post.id}>{post.title}</h1>
//           ))
//         }
//       </div>
//     </main>
//   );
// }
