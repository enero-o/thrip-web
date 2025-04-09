import { ImageType } from "@thrip/contentful/types";

export const nameInitials = (name: string) => {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("");
};

export const formatDate = (dateString: string) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const parts = dateString.split("-");
  const monthIndex = parseInt(parts[1], 10) - 1;
  const day = parseInt(parts[2], 10);
  const year = parseInt(parts[0], 10);

  return `${months[monthIndex]} ${day < 10 ? "0" + day : day}, ${year}`;
};

export const getImageUrl = (data: ImageType) => {
  return (
    (data?.fields as { image?: { fields?: { file?: { url: string } } } })?.image
      ?.fields?.file?.url ?? ""
  );
};
