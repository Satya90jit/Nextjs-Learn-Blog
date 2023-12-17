import React, { useEffect, useState } from "react";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import BlogForm from "@/components/form/Blogform";
import BlogCard from "@/components/card/BlogCard";

const BlogPage = () => {
  const [posts, setPosts] = useState([]);

  const getFromlocalStorage = () => {
    const storedData: any = JSON.parse(localStorage.getItem('blogData') || "[]")
    setPosts(storedData)
    console.log("==> getlocalstorage calling", storedData)
  }

  useEffect(() => {
    getFromlocalStorage()
  }, []) // parameter ( function , deendency)


  // []   ...... empty dependency , run the useeffect only once 
  // [sate]  ... state dependency , run the useeffect when sate change 
  // [props] ... ... props dependency , run the useeffect when props change

  const saveBlog = (newPost: any) => {
    const updatedPosts: any = [...posts, newPost];
    setPosts(updatedPosts);
    localStorage.setItem('blogData', JSON.stringify(updatedPosts));
  };

  console.log("==============>rendering")

  return (
    <>
      <Navbar />
      <section className="flex flex-col items-center justify-center h-[100%] bg-blue-600/10">
        <div className="text-4xl font-bold mb-8">MY BLOG DETAILS</div>
        <BlogForm saveBlog={saveBlog} />
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {posts?.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </div>
      </section >
      <Footer />
    </>
  );
};

export default BlogPage;
