import Link from 'next/link';

const ArrowButton = ({
  link,
  text = 'Let’s Talk',
}: {
  link: string;
  text?: string;
}) => {
  return (
    <Link href={`${link}`} className='kewta-btn d-flex align-items-center'>
      <span className='kew-text light-theme-white-text'>{text}</span>
    </Link>
  );
};

export default ArrowButton;
