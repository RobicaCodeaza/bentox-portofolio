import LinkPrimary from "@/components/shared/LinkPrimary";
import { Be, Instagram } from "iconsax-react";
import ProfileIcon from "./ProfileIcon";

const ProfileCard = () => {
  return (
    <div className="card-style profile-card">
      <div className="profile-icons">
        <ProfileIcon icon={<Be size="40" />} socialLink="/" />
        <ProfileIcon icon={<Instagram size="40" />} socialLink="/" />
      </div>
      <LinkPrimary link="/about-us" linkText="Profiles" />
    </div>
  );
};

export default ProfileCard;
