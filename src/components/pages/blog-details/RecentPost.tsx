import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  image: StaticImageData;
  title: string;
  date: string;
};

const RecentPost = ({ image, title, date }: Props) => {
  return (
    <div className="recent-post__card">
      <div>
        <Image
          src={image}
          width={100}
          height={100}
          alt="Recent Post one"
          className="img-fluid"
        />
      </div>
      <div className="recent-post__card-content">
        <Link
          href={`/blog-details`}
          className="textXL d-block recent-post-card-title"
        >
          {title}
        </Link>
        <span className="date">{date}</span>
      </div>
    </div>
  );
};

export default RecentPost;
