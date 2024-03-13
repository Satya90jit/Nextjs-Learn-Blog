// Blog.tsx
import React, { useCallback, useEffect, useState } from "react";
import BlogForm from "@/components/form/Blogform";
import BlogPost from "@/components/card/BlogPost";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  // const savedPosts = JSON.parse(localStorage.getItem("blogPosts") || "[]");
  // setPosts(savedPosts);

  const saveAllPosts = () => {
    const savedPosts = JSON.parse(localStorage.getItem("blogPosts") || "[]");
    setPosts(savedPosts);
  };

  useEffect(() => {
    console.log("...................runnuffhdnnk");
    saveAllPosts();
  }, []); //empty dependency array ensures it runs only once after mount

  const handleAddPost = (newPost: any) => {
    const updatedPosts: any = [...posts, newPost];
    setPosts(updatedPosts);
    localStorage.setItem("blogPosts", JSON.stringify(updatedPosts));
  };

  console.log("wefjbejhfbw hw;p runnigg.....");

  const [count, setCount] = useState(0);

  const incrementCount = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  useEffect(() => {
    console.log("Effect ran!", count);
  }, [count]);

  return (
    <section className="flex space-x-8 mt-8 bg-green-200/10 min-h-screen">
      <div className="w-1/3">
        <BlogForm handleAddPost={handleAddPost} />
      </div>
      <div className="grid grid-cols-4 gap-5">
        {posts.map((post: any, index: any) => (
          <BlogPost key={index} {...post} />
        ))}
      </div>
      <div>
        // <p>Count: {count}</p>
        {/* // <button onClick={() => setCount(count + 1)}>Increment</button> */}
        // <button onClick={incrementCount}>Increment</button>
      </div>
    </section>
  );
};

export default Blog;

// import React, { useEffect, useState } from 'react';

// const ExampleComponent = () => {
//   // Incorrect: Creating a new state object on every render
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log('Effect ran!', count);
//   }, [count]);

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// };

// export default ExampleComponent;
