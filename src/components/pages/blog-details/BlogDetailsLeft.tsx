import quoteImage from "@/../public/image/quote-down.png";
import Image from "next/image";
import Link from "next/link";

const BlogDetailsLeft = () => {
  return (
    <div className="blog-details-container__left">
      {" "}
      <div className="date-tag">
        <span className="textL font-thin">December 17,2023</span>{" "}
        <span className="textL font-thin tag">No-Code</span>
      </div>
      <h2 className="heading-2 main-title">
        Aroha&apos;s Client Journey Chronicles
      </h2>
      <p className="textL font-thin main-title-text">
        Embark a captivating journey through Aroha Agency&apos;s Client
        Chronicles. Explore firsthand accounts of transformative digital
        experiences. From initial concepts to triumphant results discover the
        stories that illuminate our commitment to crafting tailored solutions
        and fostering lasting partnerships.
      </p>
      <div className="quote-box">
        {" "}
        <p className="textXL font-thin">
          Embark on a riveting exploration of Aroha Agency&apos;s Client Journey
          Chronicles. Navigate through diverse industries and witness the
          transformative impact of our tailored solutions.
        </p>{" "}
        <Image
          src={quoteImage}
          width={60}
          height={60}
          alt="Quote image"
          className="quote"
        />
      </div>
      <p className="textL font-thin text-after-quote">
        These stories unfold the essence of collaborative success, illustrating
        our commitment to turning visions into digital realities that resonate
        and endure.
      </p>
      <div className="m-t-60px secondary-blog-details">
        <h3 className="heading-3">Aroha&apos;s Approach to SEO Optimization</h3>
        <p className="textL font-thin secondary-blog-details__text">
          Learn how Aroha Agency navigates the complex world of SEO. We share
          insights into our enhancing online visibility and ensuring our clients
          stand out in the digital crowd.
        </p>
        <ol>
          <li className="textL font-thin">
            It is a long-established fact that a reader will.
          </li>
          <li className="textL font-thin">
            The standard chunk of Lorem Ipsum used since the 1500s.
          </li>
          <li className="textL font-thin">
            It is a long-established fact that a reader will.
          </li>
        </ol>
        <p className="textL font-thin secondary-blog-details__end-text">
          Dive into the world of branding with Aroha Agency. Discover how we
          create unique and memorable brand identities that resonate with
          audiences and stand the test of time.
        </p>
      </div>
      <div className="m-t-60px blog-detail-tags">
        <p className="textL tag-heading">Tags:</p>{" "}
        <div className="all-tags">
          <Link href={`#`}>Development</Link>
          <Link href={`#`}>Branding</Link>
          <Link href={`#`}>UIX/UI</Link>
        </div>
      </div>
      <div className="m-t-60px comment-section">
        <h5 className="heading-4">Leave A Comment</h5>
        <form className="comment-section__area">
          <div className="name-and-email">
            <input type="text" className="name" placeholder="Name" />
            <input type="email" className="name" placeholder="Email" />
          </div>
          <textarea
            name="txtname"
            rows={5}
            className="textarea"
            placeholder="Type a comment"
          />
          <button className="comment-submit">
            <span className="textM post-comment light-theme-white-text">
              Post Comment
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogDetailsLeft;
