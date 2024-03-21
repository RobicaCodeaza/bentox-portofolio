import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";

const LinkBackHome = () => {
  return (
    <div className="m-t-60px z-2">
      <Link href={`/`} className=" button-back-to-home light-theme-white-text">
        <IconArrowLeft /> <span>Back To Home</span>
      </Link>
    </div>
  );
};

export default LinkBackHome;
