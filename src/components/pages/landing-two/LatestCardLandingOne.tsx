"use client";
import starShape from "@/../public/image/star-shape.png";
import { motion } from "framer-motion";
import Image from "next/image";

const LatestCardLandingTwo = () => {
  return (
    <motion.div
      initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      className="card-style latest-card position-relative overflow-hidden"
    >
      <div className="marquee-wrapper latest-slider-two">
        <div className="marquee-inner to-left">
          <ul className="marqee-list d-flex">
            <li className="marquee-item">
              {Array.from({ length: 50 }).map((_, index) => (
                <span key={`latest-one${index}`}>
                  <span className="star-image">
                    <Image
                      src={starShape}
                      width={32}
                      height={32}
                      alt="Star Shape"
                    />
                  </span>
                  <span className="latest-work-slider-text textL">
                    <span className="latest-work-light-text">
                      LATEST WORKS AND
                    </span>{" "}
                    FEATURED
                  </span>
                </span>
              ))}
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default LatestCardLandingTwo;
