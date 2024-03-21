const AboutContentItem = ({
  year,
  title,
  university,
}: {
  year: string;
  title: string;
  university: string;
}) => {
  return (
    <div className="about-education__content-item">
      <p className="textM year">{year}</p>
      <p className="textXL title">{title}</p>
      <p className="textM university">{university}</p>
    </div>
  );
};

export default AboutContentItem;
