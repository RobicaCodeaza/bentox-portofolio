import getInTouchShape from "@/../public/image/get-in-touch-shape.png";
import LinkPrimary from "@/components/shared/LinkPrimary";
import Image from "next/image";

const GetInTouchCard = () => {
  return (
    <div className="card-style get-in-touch-card">
      <div className="get-in-touch-card__title-text">
        <p className="heading-4">Work with</p>
        <p className="get-in-touch-card__title-text-two heading-4">
          Gole Layla...!
        </p>
      </div>

      <LinkPrimary
        linkText="Get in Touch"
        link="/contact"
        className="get-in-touch-card__link"
      />
      <Image
        src={getInTouchShape}
        width={32}
        height={32}
        alt="Get In Touch Shape"
        className="get-in-touch-card__image-shape scale-up-down light-mood-image-shape"
      />
    </div>
  );
};

export default GetInTouchCard;
