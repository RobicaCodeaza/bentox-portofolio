import hoverIcon from "@/../public/image/hover-icon.png";
import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";

const ProfileIcon = ({
  icon,
  socialLink,
}: {
  icon: ReactElement;
  socialLink: string;
}) => {
  return (
    <Link
      href={`${socialLink}`}
      className="position-relative  icon-container profile-icon"
    >
      {icon}
      <Image src={hoverIcon} alt="Hover Icon" className="hover-icon" />
    </Link>
  );
};

export default ProfileIcon;
