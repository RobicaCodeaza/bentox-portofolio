import Link from "next/link";

const PopularTags = () => {
  return (
    <div className="popular-tag">
      <h5 className="heading-4">Popular Tag:</h5>
      <div className="popular-tag__tags">
        <Link href={`/blog`} className="tag textM font-thin">
          Development
        </Link>
        <Link href={`/blog`} className="tag">
          Branding
        </Link>
        <Link href={`/blog`} className="tag">
          Design System
        </Link>
        <Link href={`/blog`} className="tag">
          Framer
        </Link>
        <Link href={`/blog`} className="tag">
          Graphic Design
        </Link>
        <Link href={`/blog`} className="tag">
          UIX/UI
        </Link>
      </div>
    </div>
  );
};

export default PopularTags;
