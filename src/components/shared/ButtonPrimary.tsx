import { Send2 } from "iconsax-react";
import Link from "next/link";

const ButtonPrimary = () => {
  return (
    <div className="primary-button-container">
      <Link
        href="/about-us"
        className="button-primary text-center justify-content-center gap-2 d-inline-flex align-items-center py-3 px-6 px-5"
      >
        <span className="n0-color textM primary-button-text">
          I’m Gole Layla
        </span>
        <Send2 className="primary-button-icon" />
      </Link>
    </div>
  );
};

export default ButtonPrimary;
