import { fromUnixTime } from "date-fns";
import { formatInTimeZone } from "date-fns-tz";

import { ExpertiseItem } from "@thrip/types";

export const toTitleCase = (str: string): string => {
  return str.replace(/\w\S*/g, function (txt: string): string {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

export const formatDate = (date: any) => {
  try {
    const timeZone = "UTC";

    if (!date) {
      return { formattedDate: "N/A", formattedTime: "N/A" };
    }

    let val;

    if (typeof date == "string") {
      val = new Date(date);
    } else {
      val = fromUnixTime(date);
    }

    const formattedDate = formatInTimeZone(val, timeZone, "MMM dd yyyy");
    const formattedTime = formatInTimeZone(val, timeZone, "h:mma");
    const gmtOffset = formatInTimeZone(new Date(), timeZone || "UTC", "zzz");

    return { formattedDate, formattedTime, tz: timeZone, gmtOffset };
  } catch (ex) {
    console.log("cound not format date", { ex, date });
    return { formattedTime: "", formattedDate: "" };
  }
};

export const formatter = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
  // minimumFractionDigits: 0,
});

export const hourAvailability = [
  {
    label: "30 minutes",
    value: 0.5,
  },
  {
    label: "1 hour",
    value: 1,
  },
  {
    label: "2 hours",
    value: 2,
  },
  {
    label: "3.5 hours",
    value: 3.5,
  },
  {
    label: "7 hours",
    value: 7,
  },
];

export const mentorFmt = (mentor: any) => {
  return {
    name: mentor ? `${mentor?.firstName} ${mentor?.lastName}` : "",
    bio: mentor?.bio ?? "N/A",
    image: mentor?.imageUrl ?? "",
  };
};

export const getExpertiseWithMostYears = (
  expertiseList: ExpertiseItem[]
): ExpertiseItem => {
  if (!expertiseList || expertiseList.length === 0) {
    return { id: "", name: "", years: 0 };
  }

  return expertiseList.reduce(
    (maxYearsItem: ExpertiseItem, currentItem: ExpertiseItem) => {
      return currentItem.years > maxYearsItem.years
        ? currentItem
        : maxYearsItem;
    },
    expertiseList[0] ?? { id: "", name: "", years: 0 }
  );
};
