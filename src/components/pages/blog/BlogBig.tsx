"use client";
import blogBig from "@/../public/image/big-blog.png";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import BlogLink from "./BlogLink";

const BlogBig = () => {
  return (
    <div className=" blog-body__up-left">
      <motion.div
        initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="card-style-two big-blog-padding"
      >
        <div className="image-container">
          <Image
            src={blogBig}
            width={596}
            height={554}
            alt="Blog image"
            className="img-fluid"
          />{" "}
        </div>
        <div className="up-left__content">
          <div className="up-left__content-date">
            <span className="textL font-thin">December 17,2023</span>{" "}
            <span className="textL font-thin articles-tag">Articles</span>
          </div>
          <div className="up-left__content-title">
            <Link href={"/blog-details"}>
              <h3 className="heading-3 font-semi-bold blog-title">
                Aroha Agency Portfolio Unveiled
              </h3>
            </Link>
            <p className="textL font-thin">
              We delve into the creative decisions that make our websites just
              functional but visually captivating.
            </p>
          </div>
          <BlogLink link="/" linkText="Read Now" className="blog-link-big" />
        </div>
      </motion.div>
    </div>
  );
};

export default BlogBig;
