import AboutTopLeftElement from '@/components/pages/about-us/AboutTopLeftElement';
import ContactBody from '@/components/pages/contact/ContactBody';
import ServiceBottomRight from '@/components/pages/service/AboutTopLeftElement';
import Navbar from '@/components/shared/Navbar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - Grid System Unique Portfolio NextJs Template',
  description: 'NextJs Template',
};

const Contact = () => {
  return (
    <div className='position-relative overflow-hidden height-vh'>
      <div className='position-relative height-vh exact-position'>
        <Navbar />
        <div className='container '>
          <ContactBody />
        </div>
      </div>
      <AboutTopLeftElement />
      <ServiceBottomRight />
    </div>
  );
};

export default Contact;
