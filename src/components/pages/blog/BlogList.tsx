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
  linkText: string;
};

const BlogList = ({ image, date, tag, title, text, link, linkText }: Props) => {
  return (
    <motion.div
      initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="card-style-two blog-body__up-right-list"
    >
      <div className="image-container">
        <Image
          src={image}
          width={294}
          height={243}
          alt="List blog one"
          className="img-fluid"
        />
      </div>
      <div className="list__content">
        <div className="list__content-date">
          <span className="textS font-thin">{date}</span>{" "}
          <span className="textS font-thin articles-tag">{tag}</span>
        </div>
        <div className="list__content-title">
          <Link href={`${link}`}>
            <h4 className="heading-4 font-medium list-blog-title">{title}</h4>
          </Link>
          <p className="textM font-thin">{text}</p>
        </div>
        <BlogLink link={link} linkText={linkText} className="list-blog" />
      </div>
    </motion.div>
  );
};

export default BlogList;
