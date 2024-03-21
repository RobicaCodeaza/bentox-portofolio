import allBlogsStar from "@/../public/image/all-blog-card-star.png";
import LinkPrimary from "@/components/shared/LinkPrimary";
import Image from "next/image";
const AllBlogsCard = () => {
  return (
    <div className="card-style all-blog-card">
      <div className="all-blog-card__title-text">
        <p className="heading-4">Articles &</p>
        <p className="all-blog-card__title-text-two heading-4">Publications</p>
      </div>

      <LinkPrimary
        linkText="All Blogs"
        link="/blogs"
        className="all-blog-card__link"
      />
      <Image
        src={allBlogsStar}
        width={47}
        height={71}
        alt="Title Card Shape"
        className="all-blog-card__shapes-image light-mood-image-shape"
      />
    </div>
  );
};

export default AllBlogsCard;
