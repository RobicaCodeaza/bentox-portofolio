import { IconChevronsRight } from "@tabler/icons-react";

const MyExperienceItem = ({
  time,
  title,
  company,
}: {
  time: string;
  title: string;
  company: string;
}) => {
  return (
    <div className="my-experience__content-item">
      <IconChevronsRight /> <p className="textM">{time}</p>{" "}
      <div className="dash"></div>
      <p className="textM">{title}</p> <div className="dash"></div>{" "}
      <p className="textM">{company}</p>
    </div>
  );
};

export default MyExperienceItem;
