import allServicesShape from "@/../public/image/all-service-shape.png";
import service1 from "@/../public/image/service-1.png";
import service2 from "@/../public/image/service-2.png";
import service3 from "@/../public/image/service-3.png";
import service4 from "@/../public/image/service-4.png";
import serviceThumb from "@/../public/image/service-thum.png";
import LinkPrimary from "@/components/shared/LinkPrimary";
import Image from "next/image";

const serviceData = [
  {
    image: service1,
    title: "UI/UX Design",
  },
  {
    image: service2,
    title: "Digital Marketing",
  },
  {
    image: service3,
    title: "Brand Identity",
  },
  {
    image: service4,
    title: "Web Development",
  },
];

const AllServicesCard = () => {
  return (
    <div className="card-style all-services-card">
      <span className="all-services-card__sub-title heading-4">
        Services Offering
      </span>
      <div className="all-services-card__services">
        {serviceData.map(({ image, title }) => (
          <div key={title} className="all-services-card__services-service">
            <Image src={image} width={52} height={52} alt="Service One" />
            <p>{title}</p>
          </div>
        ))}
      </div>
      <div className="all-services-card__title">
        <h2 className="heading-2">Things I’m good at</h2>
        <Image src={serviceThumb} width={63} height={56} alt="Service Thumbs" />
      </div>
      <LinkPrimary
        linkText="All Services"
        link="/services"
        className="all-services-card__link"
      />
      <Image
        src={allServicesShape}
        width={95}
        height={95}
        alt="Title Card Shape"
        className="all-services-card__shapes-image light-mood-image-shape"
      />
    </div>
  );
};

export default AllServicesCard;
