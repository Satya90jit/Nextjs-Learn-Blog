import React from "react";

const BlogPost = ({ title, description, image }: any) => {
  return (
    <>
      <div className="border rounded-md p-4 m-4 bg-white h-[20rem] w-[15rem]">
        <img src={image} alt="Blog Image" className="mb-4" />
        <div>
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
