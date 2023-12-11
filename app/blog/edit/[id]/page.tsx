"use client";

import { useRouter } from "next/navigation";
import { Fragment, useEffect, useRef, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
type UpdateBlogParams = {
  title: string;
  description: string;
  id: string;
};
const updateBlog = async (data: UpdateBlogParams) => {
  const res = fetch(`http://localhost:3000/api/blog/${data.id}`, {
    method: "PUT",
    body: JSON.stringify({ title: data.title, description: data.description }),
    //@ts-ignore
    "Content-Type": "application/json",
  });
  return (await res).json();
};

const deleteBlog = async (id: string) => {
  const res = fetch(`http://localhost:3000/api/blog/${id}`, {
    method: "DELETE",
    //@ts-ignore
    "Content-Type": "application/json",
  });
  return (await res).json();
};

const getBlogById = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/blog/${id}`);
  const data = await res.json();
  return data.post;
};

const EditBlog = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const titleRef = useRef<HTMLInputElement | null>(null);
  const descriptionRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    toast.loading("Fetching Blog Details ..", { id: "1" });
    getBlogById(params.id)
      .then((data) => {
        if (titleRef.current && descriptionRef.current) {
          titleRef.current.value = data.title;
          descriptionRef.current.value = data.description;
          toast.success("Fetching Complete", { id: "1" });
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error fetching blog", { id: "1" });
      });
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (titleRef.current && descriptionRef.current) {
      toast.loading("Sending Request ", { id: "1" });
      await updateBlog({
        title: titleRef.current?.value,
        description: descriptionRef.current?.value,
        id: params.id,
      });
      toast.success("Blog Posted Successfully....", { id: "1" });
      await router.push("/");
    }
  };
  const handleDelete = async () => {
    toast.loading("Deleting Blog", { id: "2" });
    await deleteBlog(params.id);
    toast.success("Blog Deleted", { id: "2" });
    router.push("/");
  };
  return (
    <Fragment>
      <Toaster />
      <div className="w-full m-auto flex my-4 sm:mt-36">
        <div className="flex flex-col justify-center items-center m-auto bg-white-100 p-10 rounded-md border-x-2"style={{boxShadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
          <p className="text-3xl text-slate-900 font-bold p-3 mb-2">
            Edit A Wonderful Blog 
          </p>
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
              className="rounded-md bg-gray-200 text-black px-4 w-full py-2 my-3"
            ></textarea>
            <div className="flex justify-between">
              <button className="font-semibold px-4 py-2 shadow-xl text-white bg-violet-950 rounded-lg m-auto hover:bg-slate-900">
                Update
              </button>
              <button
            onClick={handleDelete}
            className="font-semibold px-4 py-2 shadow-xl text-white bg-red-500 rounded-lg m-auto hover:bg-red-600"
          >
            Delete
          </button>
            </div>
          </form>
          
        </div>
      </div>
    </Fragment>
  );
};

export default EditBlog;