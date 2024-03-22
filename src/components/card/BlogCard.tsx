const BlogCard = ({ post }: any) => {
  return (
    <section className="">
      <div
        className={`relative rounded-lg h-[27rem] w-[20rem] hover:scale-105 duration-300 transition-all ease-in-out bg-cover bg-center bg-no-repeat shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]`}
        style={{
          backgroundImage: `url(${
            post && post.image
              ? post.image
              : "https://images.pexels.com/photos/236047/pexels-photo-236047.jpeg?cs=srgb&dl=clouds-cloudy-countryside-236047.jpg&fm=jpg"
          })`,
        }}
      >
        <div className="absolute top-0 right-0 bg-gradient-to-t hover:from-cyan-600 via-slate-200/5 to-slate-100/5 rounded-lg h-full w-full ease-in-out transition-all duration-500 cursor-pointer"></div>
        <h1 className="text-2xl text-white font-bold absolute bottom-10 left-2">
          {post?.title}
        </h1>
        <p className="text-gray-200 absolute bottom-2 left-2">{post?.desc}</p>
      </div>
    </section>
  );
};
export default BlogCard;
