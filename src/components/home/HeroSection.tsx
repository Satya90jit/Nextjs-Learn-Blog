import { School, WifiCalling3 } from "@mui/icons-material";

const HeroSection = () => {
  return (
    <section className="flex flex-row gap-20 mx-32 items-center bg-green-200/10">
      {/* left side */}
      <div className="w-1/2 space-y-10">
        <h1 className="text-gray-800 text-5xl font-semibold">
          Lets build a Blog page
        </h1>
        <p className="text-gray-600 text-lg">
          Lets build a Blog pageLets build a Blog pageLets build a Blog pageLets
          build a Blog pageLets build a Blog pageLets build a Blog pageLets
          build a Blog pageLets build a Blog pageLets build a Blog page
        </p>
        <div className="flex flex-row gap-5">
          <button className="px-4 py-2 text-lg text-blue-500 shadow-2xl shadow-red-300 bg-slate-100 rounded-md">
            <span>
              <School />
            </span>{" "}
            Learn more
          </button>
          <button className="group hover:shadow-xl px-4 py-2 text-lg text-green-600 shadow-lg bg-slate-800 rounded-md">
            <span className="mr-2">
              <WifiCalling3 className="group-hover:scale-110 group-hover:text-white ease-in-out duration-900 transition-all" />
            </span>
            <span className="group-hover:text-white">Call now</span>
          </button>
        </div>
      </div>
      {/* right side  */}
      <div className="w-1/2 relative">
        <img
          src="https://www.wordstream.com/wp-content/uploads/2021/07/hero-image-grain.jpg"
          className=" h-[30rem] w-full object-cover rounded-xl border-4 border-yellow-500"
        />
        <img
          src="https://images.yourstory.com/cs/wordpress/2017/03/33-Hero-Image.jpg?w=1152&fm=auto&ar=2:1&mode=crop&crop=faces"
          className="absolute -top-20 -left-20 rounded-xl h-[15rem] w-[30rem] border-4 border-green-500"
        />
      </div>
    </section>
  );
};
export default HeroSection;
