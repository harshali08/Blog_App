


// import Link from 'next/link';
// import React from 'react';

// export const getStaticProps = async () => {
//   const resp = await fetch("http://localhost:3000/api/blog");
//   const data = await resp.json(); // Await the JSON parsing

//   return {
//     props: {
//       data,
//     },
//   };
// };

// const AllBlogs = ({ data }) => {
//   return (
//     <>
//       {data.map((curEle) => (
//         <div key={curEle.id} className='ssr-styles'>
//           <h3>{curEle.id}</h3>
//           <h2><Link href={`/blog/${curEle.id}`}>{curEle.title}</Link></h2>
//           <p>{curEle.body}</p>
//         </div>
//       ))}
//     </>
//   );
// };

// export default AllBlogs;

// import Link from 'next/link';
// import React from 'react';

// interface BlogData {
//   id: number;
//   title: string;
//   description: string;
//   date: Date;
// }

// interface Props {
//   data: BlogData[];
// }

// export const getStaticProps = async () => {
//   const resp = await fetch("http://localhost:3000/api/blog");
//   const data: BlogData[] = await resp.json();

//   return {
//     props: {
//       data,
//     },
//   };
// };

// const AllBlogs: React.FC<Props> = ({ data }) => {
//   return (
//     <>
//       {data.map((curEle: BlogData) => (
//         <div key={curEle.id} className='ssr-styles'>
//           <h3>{curEle.id}</h3>
//           <h2>
//             <Link href={`/blog/${curEle.id}`}>{curEle.title}</Link>
//           </h2>
//           <p>{curEle.description}</p>
//           <h1>{curEle.date.toLocaleDateString()}</h1>
//         </div>
//       ))}
//     </>
//   );
// };

// export default AllBlogs;


import Link from 'next/link';
import React from 'react';

interface BlogData {
  id: number;
  title: string;
  description: string;
  date: Date;
}

interface Props {
  data: BlogData[];
}

const AllBlogs: React.FC<Props> = ({ data }) => {
    console.log(data);
  if (!data || data.length === 0) {
    return <div>No data available</div>;

  }


  return (
    <>
    
      {data.map((curEle: BlogData) => (
        <div key={curEle.id} className='ssr-styles'>
          <h3>{curEle.id}</h3>
          <h2>
            <Link href={`/blog/${curEle.id}`}>{curEle.title}</Link>
          </h2>
          <p>{curEle.description}</p>
          <h1>{curEle.date.toLocaleDateString()}</h1>
        </div>
      ))}
    </>
  );
};

export default AllBlogs;
