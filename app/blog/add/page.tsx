"use client";

import { useRouter } from "next/navigation";
import { Fragment, useRef } from "react";
import { Toaster, toast } from "react-hot-toast";
const postBlog = async ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const res = fetch("http://localhost:3000/api/blog", {
    method: "POST",
    body: JSON.stringify({ title, description }),
    //@ts-ignore
    "Content-Type": "application/json",
  });
  return (await res).json();
};

const AddBlog = () => {
  const router = useRouter();
  const titleRef = useRef<HTMLInputElement | null>(null);
  const descriptionRef = useRef<HTMLTextAreaElement | null>(null);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (titleRef.current && descriptionRef.current) {
      toast.loading("Sending Request..", { id: "1" });
      await postBlog({
        title: titleRef.current?.value,
        description: descriptionRef.current?.value,
      });
      toast.success("Blog Posted Successfully..!", { id: "1" });
      router.push("/");
    }
  };
  return (
    <Fragment>
      <Toaster />
      <div className="w-full sm:mt-36 flex sm:my-4 flex items-center">
        <div className="flex flex-col justify-center items-center m-auto bg-white-100 p-10 rounded-md border-x-2" style={{boxShadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
          <h2 className="text-3xl text-slate-900 font-bold p-3 mb-2">
            Add A New Blog 
          </h2>
          <form onSubmit={handleSubmit}>
            <input
              ref={titleRef}
              placeholder="Enter Title"
              type="text"
              className="rounded-md bg-gray-200 text-black px-4 w-full py-2 my-3 "
            />
            <textarea
              ref={descriptionRef}
              placeholder="Enter Description"
              rows={8}
              className="rounded-md bg-gray-200 px-4 py-2 w-full my-3"
            ></textarea>
            <button className="font-semibold px-4 py-2 shadow-xl text-white bg-violet-950 rounded-lg m-auto hover:bg-slate-900">
              Submit
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default AddBlog;