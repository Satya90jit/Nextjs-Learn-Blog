// components/BlogForm.tsx

import React, { useState } from "react";

const BlogForm = ({ handleAddPost }: any) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleSubmitPostBtn = () => {
    if (title && description && image) {
      const newPost = { title, description, image };
      handleAddPost(newPost);
      setTitle("");
      setDescription("");
      setImage("");
    }
  };

  const handleImageChange = (e: any) => {
    const file = e?.target?.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <section className="flex justify-center  w-full">
        <form className="max-w-md mx-auto p-4 bg-white rounded shadow-md f">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Title
            <input
              type="text"
              placeholder="Enter title"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>

          <label className="block text-gray-700 text-sm font-bold mb-2">
            Description
            <textarea
              placeholder="Enter description"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>

          <label className="block text-gray-700 text-sm font-bold mb-2">
            Image
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </label>

          {image && (
            <img
              src={image}
              alt="Preview"
              className="w-32 h-32 object-cover mb-4"
            />
          )}

          <button
            type="button"
            onClick={handleSubmitPostBtn}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Post
          </button>
        </form>
      </section>
    </>
  );
};

export default BlogForm;
