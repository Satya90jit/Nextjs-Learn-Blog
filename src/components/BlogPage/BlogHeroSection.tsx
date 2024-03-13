import React from "react";

const BlogHeroSection = () => {
  return (
    <section className="bg-gray-400/40 rounded-xl p-16 w-full flex justify-center">
      <aside className="flex justify-between items-center gap-20">
        {/* left side   */}
        <div className="w-[50%] space-y-8">
          <h1 className="text-6xl font-semibold text-gray-700">
            Melodies that helps you stay focus
          </h1>
          <p className="text-gray-600 text-sm">
            Java is one of the most popular programming languages today because
            of its simplicity. Java is one of the most popular programming
            languages today because of its simplicity.
          </p>
          <div className="bg-white p-3 rounded-full flex justify-between">
            <div className="px-6 py-1">
              <h4 className="text-gray-600 text-sm">your Email address</h4>
              <p className="text-gray-900 font-semibold text-sm">
                example@gmail.com
              </p>
            </div>
            <button className="bg-green-800 px-8 py-4 rounded-full text-sm text-white">
              Get Started
            </button>
          </div>
        </div>
        {/* right side  */}
        <div className="w-[50%] flex justify-end relative p-2">
          <img
            src="/images/heroImage.jpeg"
            className="w-[50rem] h-[50rem] object-cover border-2 border-green-900 rounded-xl"
          />
          <img
            src="/images/heroImage.jpeg"
            className="absolute left-0 top-0 w-[15rem] h-[15rem] object-cover border-2 border-yellow-500 rounded-b-3xl"
          />
        </div>
      </aside>
    </section>
  );
};

export default BlogHeroSection;
