"use client";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import sliderBlog1 from "@/../public/image/slider-blog-1.png";
import sliderBlog2 from "@/../public/image/slider-blog-2.png";
import sliderBlog3 from "@/../public/image/slider-blog-3.png";

import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import { useState } from "react";
import BlogSliderItem from "./BlogSliderItem";

const blogSlider = [
  {
    image: sliderBlog1,
    date: "December 25,2023",
    tag: "Articles",
    title: "Digital Alchemy Aroha's Secrets",
    text: "Regular analysis and reporting to track performance  and guide future strategies etc.",
    link: "/",
  },
  {
    image: sliderBlog2,
    date: "December12,2023",
    tag: "No-Code",
    title: "Aroha Unveiled Behind the Pixels",
    text: "Showcase your video creation and editing skills, including promotional animations.",
    link: "/",
  },
  {
    image: sliderBlog3,
    date: "December 17,2023",
    tag: "Resources",
    title: "Aroha's Client Journey Chronicles",
    text: "Display your artistic skills through digital or traditional illustrations and many more.",
    link: "/",
  },
  {
    image: sliderBlog1,
    date: "December 25,2023",
    tag: "News",
    title: "Digital Alchemy Aroha's Secrets",
    text: "Regular analysis and reporting to track performance and guide future strategies etc. ",
    link: "/",
  },
  {
    image: sliderBlog2,
    date: "December12,2023",
    tag: "Articles",
    title: "Aroha Unveiled Behind the Pixels",
    text: "Showcase your video creation and editing skills, including promotional animations.",
    link: "/",
  },
  {
    image: sliderBlog2,
    date: "December12,2023",
    tag: "Resources",
    title: "Aroha Unveiled Behind the Pixels",
    text: "Showcase your video creation and editing skills, including promotional animations.",
    link: "/",
  },
  {
    image: sliderBlog3,
    date: "December 17,2023",
    tag: "Resources",
    title: "Aroha's Client Journey Chronicles",
    text: "Display your artistic skills through digital or traditional illustrations and many more.",
    link: "/",
  },
  {
    image: sliderBlog1,
    date: "December 25,2023",
    tag: "Resources",
    title: "Digital Alchemy Aroha's Secrets",
    text: "Regular analysis and reporting to track performance and guide future strategies etc.",
    link: "/",
  },
  {
    image: sliderBlog2,
    date: "December12,2023",
    tag: "News",
    title: "Aroha Unveiled Behind the Pixels",
    text: "Showcase your video creation and editing skills, including promotional animations.",
    link: "/",
  },
  {
    image: sliderBlog3,
    date: "December 17,2023",
    tag: "News",
    title: "Aroha's Client Journey Chronicles",
    text: "Display your artistic skills through digital or traditional illustrations and many more.",
    link: "/",
  },
  {
    image: sliderBlog1,
    date: "December 25,2023",
    tag: "Articles",
    title: "Digital Alchemy Aroha's Secrets",
    text: "Regular analysis and reporting to track performance and guide future strategies etc.",
    link: "/",
  },
  {
    image: sliderBlog2,
    date: "December12,2023",
    tag: "Articles",
    title: "Aroha Unveiled Behind the Pixels",
    text: "Showcase your video creation and editing skills, including promotional animations.",
    link: "/",
  },
  {
    image: sliderBlog3,
    date: "December 17,2023",
    tag: "News",
    title: "Aroha's Client Journey Chronicles",
    text: "Display your artistic skills through digital or traditional illustrations and many more.",
    link: "/",
  },
];

const BlogSlider = () => {
  const [filterData, setFilterData] = useState(blogSlider);
  const [buttonActive, setButtonActive] = useState("");

  const handleFilterData = (e: React.MouseEvent<HTMLButtonElement>) => {
    const buttonText = e.target as HTMLButtonElement;
    setButtonActive(buttonText.innerText.toLocaleLowerCase());
    const filterItems = blogSlider.filter(
      (item) =>
        item.tag.toLocaleLowerCase() ===
        buttonText.innerText.toLocaleLowerCase()
    );
    setFilterData(filterItems);
  };

  return (
    <div className="m-t-60px blog-body__down">
      <h3 className="heading-3">Categories</h3>
      <div className="tab-area">
        <div className="tab-area__buttons">
          <button
            className={`textM tab-area__buttons-button ${
              buttonActive == "Resources".toLocaleLowerCase()
                ? "tab-active"
                : ""
            }`}
            onClick={(e) => handleFilterData(e)}
          >
            Resources
          </button>
          <button
            className={`textM tab-area__buttons-button ${
              buttonActive == "Articles".toLocaleLowerCase() ? "tab-active" : ""
            }`}
            onClick={(e) => handleFilterData(e)}
          >
            Articles
          </button>
          <button
            className={`textM tab-area__buttons-button ${
              buttonActive == "News".toLocaleLowerCase() ? "tab-active" : ""
            }`}
            onClick={(e) => handleFilterData(e)}
          >
            News
          </button>
        </div>
        <div className="slider-buttons">
          <button className="customerSliderNext blog-slider-button">
            <ArrowLeft2 />
          </button>
          <button className="customerSliderPrev blog-slider-button">
            <ArrowRight2 />
          </button>
        </div>
      </div>

      {/* slider area */}
      <div className="m-t-40px">
        <Swiper
          slidesPerView={1}
          spaceBetween={6}
          speed={1400}
          loop={true}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".customerSliderNext",
            prevEl: ".customerSliderPrev",
          }}
          breakpoints={{
            768: {
              spaceBetween: 12,
              slidesPerView: 2,
            },
            992: {
              spaceBetween: 12,
              slidesPerView: 3,
            },
            1200: {
              spaceBetween: 24,
              slidesPerView: 3,
            },
          }}
        >
          {filterData.map(({ ...props }, index) => (
            <SwiperSlide key={`blog-slider${index}`}>
              <BlogSliderItem {...props} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BlogSlider;
