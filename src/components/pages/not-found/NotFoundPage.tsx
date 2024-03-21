import notFoundImage from "@/../public/image/not-found.png";

import Image from "next/image";
import Link from "next/link";
const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <Image
        src={notFoundImage}
        width={594}
        height={450}
        alt="Not found Image"
        className="img-fluid not-found-image"
      />
      <h4 className="m-t-60px heading-2 text-center">Page Not Found.</h4>
      <p className="textXL font-thin text-center not-found-text">
        The page you are looking for doesn&apos;t exist or has been moved
      </p>
      <div className="m-t-60px">
        <Link href={`/`} className=" back-to-home">
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
