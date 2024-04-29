import AboutTopLeftElement from '@/components/pages/about-us/AboutTopLeftElement';
import ContactBody from '@/components/pages/contact/ContactBody';
import ServiceBottomRight from '@/components/pages/service/AboutTopLeftElement';
import Navbar from '@/components/shared/Navbar';

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
