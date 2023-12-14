import { ServiceCardType } from "@/types/service";
import ServiceCard from "../card/ServiceCard";

const ServiceSection = () => {
  const SERVICE_ARRAY = [
    {
      color: "bg-violet-800",
      category: "Technology",
      image:
        "https://thumbs.dreamstime.com/b/technical-support-center-customer-service-internet-business-technology-concept-technical-support-center-customer-service-internet-119668737.jpg",
      title: "Web Development",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod ligula nec felis tincidunt, ut auctor libero lacinia. Quisque at fermentum nulla. Sed sit amet ipsum non tellus aliquam eleifend sit amet at elit.",
    },
    {
      color: "bg-teal-800",
      category: "Science",
      image:
        "https://thumbs.dreamstime.com/b/expert-advice-consulting-service-business-help-concept-101336442.jpg",
      title: "Graphic Design",
      desc: "Praesent vel dui nec orci bibendum luctus. Integer sed arcu ac turpis fermentum consectetur. Nullam auctor nisi nec felis ullamcorper, nec cursus orci hendrerit. Suspendisse potenti. Vivamus at ex eu justo bibendum suscipit.",
    },
    {
      color: "bg-gray-300",
      category: "Technology",
      image:
        "https://thumbs.dreamstime.com/b/digital-transformation-technology-strategy-ideas-adoption-business-age-enhancing-global-capabilities-215266548.jpg",
      title: "Mobile App Development",
      desc: "Fusce congue nunc nec justo aliquet, ac fermentum leo ultricies. Maecenas a nisi in justo tristique ultricies id ac dui. Ut non justo nec nulla tristique ullamcorper. Aliquam erat volutpat. Suspendisse id magna vel tellus cursus volutpat.",
    },
    {
      color: "bg-red-900",
      category: "Science",
      image:
        "https://media.istockphoto.com/id/1464628759/photo/fingerprint-scan-for-secure-access-and-service-unlock-design-concept.webp?b=1&s=170667a&w=0&k=20&c=o4zMDBEfLtOZTi0mQG3A_HmqcXqGWX_JvOxTrTmQ4ec=",
      title: "SEO Services",
      desc: "Curabitur ac turpis vel odio sollicitudin fermentum eget a dolor. In hac habitasse platea dictumst. Etiam id urna eu sapien varius auctor ut et eros. Nunc venenatis ex a sapien varius ultrices.",
    },
    {
      color: "bg-yellow-700",
      category: "Technology",
      image: "images/service.jpg",
      title: "Content Writing",
      desc: "Duis eu libero id tellus tristique efficitur. Vestibulum varius sapien a arcu tincidunt, non auctor libero dictum. Integer vel arcu eget augue tincidunt hendrerit. Vestibulum et purus vel odio malesuada gravida ac vel elit.",
    },
  ];
  return (
    <section className="my-16 mx-32">
      <div className="bg-blue-200/20 flex justify-center">
        <h1 className="text-3xl font-semibold text-gray-800 py-5 text-center">
          OUR SERVICES
        </h1>
      </div>
      <div className="grid grid-cols-4 gap-7 my-8">
        {SERVICE_ARRAY.map((singleCardItem: ServiceCardType) => (
          <ServiceCard singleCardItem={singleCardItem} />
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
