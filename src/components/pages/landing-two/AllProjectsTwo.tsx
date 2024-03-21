import allProjectStars from "@/../public/image/all-project-stars.png";
import allProjectImage from "@/../public/image/landing-two-all-projects.png";
import LinkPrimaryTwo from "@/components/shared/LinkPrimaryTwo";
import Image from "next/image";

const AllProjectsTwo = () => {
  return (
    <div className="card-style-two all-projects-card-two p-32px">
      <div className="all-projects-card-two__title-text">
        <p className="heading-4">See My Latest Works</p>
      </div>

      <Image
        src={allProjectImage}
        width={294}
        height={168}
        alt="All Project Image"
        className="all-projects-card-two__image"
      />
      <LinkPrimaryTwo
        linkText="All Projects"
        link="/all-projects"
        className="all-projects-card-two__link"
      />
      <Image
        src={allProjectStars}
        width={68}
        height={60}
        alt="All Project Stars"
        className="all-projects-card-two__image-star scale-up-down light-mood-image-shape"
      />
    </div>
  );
};

export default AllProjectsTwo;
