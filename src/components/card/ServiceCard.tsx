import { ServiceCardType } from "@/types/service";
import Link from "next/link";
import { useState } from "react";

const ServiceCard = ({
  singleCardItem,
}: {
  singleCardItem: ServiceCardType;
}) => {
  //hooks
  const [cart, setCart] = useState(false);

  const handleCartBtn = () => {
    setCart(!cart); //randomly change true false ( state change)
  };

  const [buy, setBuy] = useState("Buy Now");

  const handleBuyBtn = () => {
    setBuy("Purchased");
  };

  return (
    <>
      <section
        className={`h-full w-full space-y-3 shadow-lg p-3 rounded-lg border hover:border-gray-300 hover:scale-105 ease-in-out transition-all duration-300 cursor-pointer`}
      >
        <div className="relative">
          <img
            src={singleCardItem.image}
            className={`rounded-lg ${
              singleCardItem.color ? singleCardItem.color : ""
            } p-1 `}
          />
          <h1
            className={`absolute top-2 left-2 text-white ${
              singleCardItem?.category == "Science"
                ? "bg-red-800"
                : "bg-blue-800"
            } px-2 py-1 rounded-md text-sm inline-block`}
          >
            {singleCardItem?.category}
          </h1>
        </div>
        <p className="text-xl font-semibold text-blue-800">
          {singleCardItem.title}
        </p>
        <p className="text-gray-600  text-sm">{singleCardItem.desc}</p>
        <div className="flex justify-between items-center">
          <button
            onClick={handleCartBtn}
            className="text-white hover:underline hover:text-slate-100 bg-blue-800/60 px-4 py-2 rounded-lg"
          >
            {cart ? "Add To Cart" : "Go to Cart"}
          </button>

          <button
            onClick={handleBuyBtn}
            className="text-white hover:underline hover:text-slate-100 bg-teal-800/60 px-4 py-2 rounded-lg"
          >
            {buy}
          </button>
        </div>
      </section>
    </>
  );
};

export default ServiceCard;
