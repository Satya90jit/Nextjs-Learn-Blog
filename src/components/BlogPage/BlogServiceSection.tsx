import React from "react";

const BlogServiceSection = () => {
  const weeklyData = [
    {
      id: 1,
      title: "My weekly popular one",
      desc: "0098 played well",
    },
    {
      id: 2,
      title: "My weekly popular two",
      desc: "4498 played well",
    },
    {
      id: 3,
      title: "My weekly popular three",
      desc: "3398 played well",
    },
    {
      id: 4,
      title: "My weekly popular four",
      desc: "000008 played well",
    },
  ];
  const blogCardData = [
    {
      id: 1,
      image: "",
      title: "",
      desc: "",
      duration: "",
    },
  ];

  return (
    <section className="flex justify-between gap-10 my-12  w-full">
      {/* left side  */}
      <div className="w-[70%] space-y-4">
        <h1 className="text-gray-800 font-semibold text-xl">Featured Melody</h1>
        <div className="grid grid-cols-3 gap-10">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
      {/* right side */}
      <div className="w-[30%]">
        <h1 className="text-gray-800 font-semibold text-xl mb-4">
          Weekly Popular
        </h1>
        <aside className="space-y-3">
          {weeklyData.map((item) => (
            <BlogWeeklyPopular item={item} />
          ))}
        </aside>
      </div>
    </section>
  );
};

const BlogWeeklyPopular = ({ item }: any) => {
  return (
    <div className="flex gap-3">
      <span className="rounded-full border border-red-400 h-10 w-10 flex justify-center items-center">
        {item?.id}
      </span>
      <div>
        <h1 className="text-gray-800">{item?.title}</h1>
        <p className="text-sm text-gray-500">{item?.desc}</p>
      </div>
    </div>
  );
};

export const BlogCard = () => {
  return (
    <section className="">
      <div className="relative mb-4">
        <img
          src="/images/service.jpg"
          className="w-full h-[10rem] rounded-2xl"
        />
        <span className="bg-white px-2 py-1 rounded-full absolute right-2 bottom-2 ">
          9 min
        </span>
      </div>
      <h1 className="text-gray-800">Moment of silence</h1>
      <p className="text-gray-500">Thomas wise</p>
    </section>
  );
};

export default BlogServiceSection;
