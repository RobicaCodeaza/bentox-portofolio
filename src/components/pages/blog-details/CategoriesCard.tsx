import Link from "next/link";

const CategoriesCard = () => {
  return (
    <div className="m-t-32px categories-card">
      <h5 className="heading-4">Categories:</h5>

      <div className="categories-card__categories">
        <Link href={`/blog`} className="textL category">
          Web Design
        </Link>
        <Link href={`/blog`} className="textL category">
          Graphic Design
        </Link>
        <Link href={`/blog`} className="textL category">
          E-commerce Solutions
        </Link>
        <Link href={`/blog`} className="textL category">
          Mobile App Development
        </Link>
        <Link href={`/blog`} className="textL category">
          Video Production
        </Link>
      </div>
    </div>
  );
};

export default CategoriesCard;
