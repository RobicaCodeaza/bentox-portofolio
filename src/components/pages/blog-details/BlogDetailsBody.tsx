import bannerImage from '@/../public/image/blog-details-banner.png';
import sliderBlog1 from '@/../public/image/slider-blog-1.png';
import sliderBlog2 from '@/../public/image/slider-blog-2.png';
import sliderBlog3 from '@/../public/image/slider-blog-3.png';
import Image from 'next/image';
import BlogSliderItem from '../blog/BlogSliderItem';
import ArrowButton from './ArrowButton';
import BlogDetailsLeft from './BlogDetailsLeft';
import CategoriesCard from './CategoriesCard';
import PopularTags from './PopularTags';
import RecentPosts from './RecentPosts';
import SearchBox from './SearchBox';

const BlogDetailsBody = () => {
  const blogSlider = [
    {
      image: sliderBlog1,
      date: 'December 25,2023',
      tag: 'Articles',
      title: "Digital Alchemy Aroha's Secrets",
      text: 'Regular analysis and reporting to track performance and guide future strategies.',
      link: '/',
    },
    {
      image: sliderBlog2,
      date: 'December12,2023',
      tag: 'No-Code',
      title: 'Aroha Unveiled Behind the Pixels',
      text: 'Showcase your video creation and editing skills, including promotional animations.',
      link: '/',
    },
    {
      image: sliderBlog3,
      date: 'December 17,2023',
      tag: 'Resources',
      title: "Aroha's Client Journey Chronicles",
      text: 'Display your artistic skills through digital or traditional illustrations and many more.',
      link: '/',
    },
  ];

  return (
    <div className='mt-xxl-10 mt-xl-8 mt-6 position-relative z-2'>
      <div className='blog-detail-style blog-details-body mb-40-optional'>
        <Image
          src={bannerImage}
          width={1232}
          height={592}
          alt='Blog Details Banner Image'
          className='img-fluid banner-image'
        />
        <div className='blog-details-container'>
          <BlogDetailsLeft />
          <div className='blog-details-container__right'>
            <SearchBox />
            <RecentPosts />
            <CategoriesCard />
            <PopularTags />
          </div>
        </div>
      </div>
      <div className='m-t-120px'>
        <div className='related-blog'>
          <div className='related-blog__heading'>
            <h3 className='heading-2'>Related Blog</h3>

            <ArrowButton link='/blog' text='See all blogs' />
          </div>
          <div className='m-t-60px blog-card-section'>
            {blogSlider.map(({ ...props }, index) => (
              <BlogSliderItem key={`related-blog${index}`} {...props} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsBody;
