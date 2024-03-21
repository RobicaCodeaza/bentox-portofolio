"use client";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import BlogLink from "./BlogLink";

type Props = {
  image: StaticImageData;
  date: string;
  tag: string;
  title: string;
  text: string;
  link: string;
};

const BlogSliderItem = ({ image, date, tag, title, text, link }: Props) => {
  return (
    <motion.div
      initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="card-style-two blog-slider"
    >
      <div className="image-container">
        <Image
          src={image}
          width={392}
          height={230}
          alt="Blog image"
          className="img-fluid"
        />{" "}
      </div>
      <div className="blog-slider__content">
        <div className="blog-slider__content-date">
          <span className="textS font-thin">{date}</span>{" "}
          <span className="textS font-thin articles-tag">{tag}</span>
        </div>
        <div className="blog-slider__content-title">
          <Link href={`/blog-details`}>
            <h3 className="heading-4 font-medium list-blog-title">{title}</h3>
          </Link>
          <p className="textM font-thin">{text}</p>
        </div>
        <BlogLink
          link={`/blog-details`}
          linkText="Read Now"
          className="slider-link"
        />
      </div>
    </motion.div>
  );
};

export default BlogSliderItem;
