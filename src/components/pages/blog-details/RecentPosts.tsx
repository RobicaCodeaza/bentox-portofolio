import recentPost1 from "@/../public/image/recent-post-1.png";
import recentPost2 from "@/../public/image/recent-post-2.png";
import recentPost3 from "@/../public/image/recent-post-3.png";
import RecentPost from "./RecentPost";

const RecentPosts = () => {
  return (
    <div className="m-t-32px recent-post">
      <h5 className="heading-4 recent-post__title">Recent Posts</h5>
      <RecentPost
        image={recentPost1}
        title="Design Chronicles: Aroha's Odyssey"
        date="July 23, 2023"
      />
      <RecentPost
        image={recentPost2}
        title="E-Commerce Elevation Aroha's Triumphs"
        date="July 28, 2023"
      />
      <RecentPost
        image={recentPost3}
        title="Data-Driven Insights: Aroha's Analytics"
        date="July 02, 2023"
      />
    </div>
  );
};

export default RecentPosts;
