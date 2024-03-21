'use client';
import blogList1 from '@/../public/image/list-blog-1.png';
import blogList2 from '@/../public/image/list-blog-2.png';
import blogList3 from '@/../public/image/list-blog-3.png';

import BlogBig from './BlogBig';
import BlogList from './BlogList';
import BlogSlider from './BlogSlider';

const BlogBody = () => {
  return (
    <div className=' position-relative z-2 mt-xxl-10 mt-xl-8 mt-6 mb-6 mb-xxl-10 mb-xl-8'>
      <div className='blog-body mb-40-optional'>
        <div className='blog-body__up'>
          <BlogBig />
          <div className=' blog-body__up-right'>
            <BlogList
              image={blogList1}
              date='December 17,2023'
              link='/blog-details'
              linkText='Read Now'
              tag='Branding'
              text='Showcase design various print material such as brochures, posters,'
              title='Aroha Innovations in App Development'
            />
            <BlogList
              image={blogList2}
              date='December 17,2023'
              link='/blog-details'
              linkText='Read Now'
              tag='Branding'
              text='Showcase design various print material such as brochures, posters,'
              title='Aroha Innovations in App Development'
            />
            <BlogList
              image={blogList3}
              date='December 17,2023'
              link='/blog-details'
              linkText='Read Now'
              tag='Branding'
              text='Showcase design various print material such as brochures, posters,'
              title='Aroha Innovations in App Development'
            />
          </div>
        </div>
        <BlogSlider />
      </div>
    </div>
  );
};

export default BlogBody;
