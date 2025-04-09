import type React from "react";

import { Box, SimpleGrid } from "@chakra-ui/react";

import type { GetCourse } from "@thrip/types";
import LoadingState from "@thrip/components/LoadingState";
import CourseCard from "./CourseCard";

interface Props {
  data: GetCourse[];
  loading: boolean;
  courseType?: "Webinar" | "Masterclass" | "Virtual_Shadowing";
  columns?: object;
}

const CourseGrid: React.FC<Props> = ({
  data,
  loading,
  courseType,
  columns = { base: 1, sm: 2, xl: 3 },
}) => {
  return (
    <>
      {loading ? (
        <LoadingState />
      ) : (
        <Box>
          <SimpleGrid justifyContent="center" columns={columns} spacing={6}>
            {data.map((item: GetCourse) => {
              return (
                <CourseCard
                  key={item._id}
                  _id={item._id}
                  badgeText={item.deliveryType}
                  image={item.thumbnailUrl}
                  title={item.title}
                  description={item.description}
                  dateTime={item.dateTime}
                  price={item.payablePricing}
                  mentor={item.mentor}
                  courseType={courseType}
                />
              );
            })}
          </SimpleGrid>
        </Box>
      )}
    </>
  );
};

export default CourseGrid;
