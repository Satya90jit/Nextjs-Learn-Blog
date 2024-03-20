import { useState } from "react";

const BlogForm = ({ saveBlog }: any) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");

  console.log("image---->", image);

  const hanaleAddPost = () => {
    const newPost = { title, desc, image }; // new object of the blog created
    saveBlog(newPost);
  };

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  return (
    <section>
      <div className="bg-white text-black rounded-lg p-8 max-w-md w-full shadow-md">
        <input
          type="text"
          placeholder="Blog Title"
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Blog Description"
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          onChange={(e) => setDesc(e.target.value)}
        />
        <input
          type="file"
          accept="image/*"
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          onChange={handleImageChange}
        />
        {image && <img src={image} className="h-[8rem] w-[8rem] " />}

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={hanaleAddPost}
        >
          Add Blog
        </button>
      </div>
    </section>
  );
};

export default BlogForm;

// const Blog = [
//   {
//     title: "",
//     desc: "",
//     image: "",
//   },
//   {
//     title: "",
//     desc: "",
//     image: "",
//   },
//   {
//     title: "",
//     desc: "",
//     image: "",
//   },
//   {
//     title: "",
//     desc: "",
//     image: "",
//   },
// ];
