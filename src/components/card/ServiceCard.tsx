import { ServiceCardType } from "@/types/service";
import Link from "next/link";

const ServiceCard = ({
  singleCardItem,
}: {
  singleCardItem: ServiceCardType;
}) => {
  return (
    <>
      <Link href={"/blog"}>
        <section className="h-full w-full space-y-3 bg-slate-200/20 shadow-lg p-3 rounded-lg border hover:border-gray-300 hover:scale-105 ease-in-out transition-all duration-300 cursor-pointer">
          <div>
            <img src={singleCardItem.image} className="rounded-lg" />
          </div>
          <p className="text-xl font-semibold text-blue-800">
            {singleCardItem.title}
          </p>
          <p className="text-gray-600  text-sm">{singleCardItem.desc}</p>
        </section>
      </Link>
    </>
  );
};

export default ServiceCard;
