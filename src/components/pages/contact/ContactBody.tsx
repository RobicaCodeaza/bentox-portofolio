import ContactLeft from './ContactLeft';
import ContactRight from './ContactRight';
import SocialIcons from './SocialIcons';

const ContactBody = () => {
  return (
    <div className=' position-relative z-2 mt-xxl-10 mt-xl-8 mt-6 mb-6 mb-xxl-10 mb-xl-8'>
      <div className='contact-section mb-40-optional'>
        <ContactLeft />
        <ContactRight />
      </div>
      <SocialIcons />
    </div>
  );
};

export default ContactBody;
