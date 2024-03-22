import React, { useEffect, useState } from "react";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import BlogCard from "@/components/card/BlogCard";
import BlogForm from "@/components/form/Blogform";

const BlogPage = () => {
  // if props or states update then the component will rerender
  // example understanding of the useEffect concept

  // const [toggle, setToggle] = useState(false);

  // const myFunc = () => {
  //   setToggle(true);
  // };

  // useEffect(() => {
  //   myFunc();
  // }, []);

  // useEffect(() => {}, []); // its have two parameter one function and a dependency

  // []   ...... empty dependency , run the useeffect only once
  // [sate]  ... state dependency , run the useeffect when sate change
  // [props] ... ... props dependency , run the useeffect when props change

  // BLOG POST WORK START ................................................................

  const [posts, setPosts] = useState([]); // state , string , boolean , array , object , number

  const getFromlocalStorage = () => {
    const storedData: any = JSON.parse(
      localStorage.getItem("blogData") || "[]"
    );
    setPosts(storedData);
    console.log("==> getlocalstorage calling", storedData);
  };

  useEffect(() => {
    getFromlocalStorage();
  }, []); // parameter ( function , dependency)

  //we use here spread and rest operator.....................................................

  const saveBlog = (newPost: any) => {
    console.log("running......save-blog");
    const updatedPosts: any = [...posts, newPost];
    setPosts(updatedPosts);
    localStorage.setItem("blogData", JSON.stringify(updatedPosts));
  };

  console.log("==============>rendering");

  return (
    <>
      <Navbar />
      <section className="flex flex-col items-center justify-center h-[100%] bg-gray-900">
        <h1 className="text-4xl text-white font-bold mb-8">MY BLOG DETAILS</h1>
        <BlogForm saveBlog={saveBlog} />
        <div className="my-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7">
          {posts?.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </div>
        {/* {toggle ? (
          <p className="text-white bg-black p-2 rounded-md">TOGGLE SHOWING</p>
        ) : (
          ""
        )} */}
        {/* <button
          onClick={() => setToggle(!toggle)}
          className="px-4 py-2 rounded-md bg-slate-900 text-white my-10"
        >
          toggle me{" "}
        </button> */}
      </section>
      <Footer />
    </>
  );
};

export default BlogPage;
