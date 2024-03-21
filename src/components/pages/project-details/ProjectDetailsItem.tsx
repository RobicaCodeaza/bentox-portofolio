"use client";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

const ProjectDetailsItem = ({
  title,
  image,
  text,
  listContent,
  flexDirection,
}: {
  title: string;
  image: StaticImageData;
  text: string;
  listContent: string[];
  flexDirection?: string;
}) => {
  return (
    <div className={`project-details__item ${flexDirection}`}>
      <motion.div
        initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="product-details-image-div"
      >
        <Image
          src={image}
          width={604}
          height={360}
          alt="Image one"
          className="img-fluid project-details__item-image"
        />
      </motion.div>
      <motion.div
        initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="project-details__item-content"
      >
        <h5 className="heading-3">{title}</h5>
        <p className="textL project-details__item-content-text">{text}</p>
        <ol>
          {listContent?.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </motion.div>
    </div>
  );
};

export default ProjectDetailsItem;
