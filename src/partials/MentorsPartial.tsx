import type { FC } from "react";

import { SimpleGrid, useMediaQuery } from "@chakra-ui/react";

import type { Mentor } from "@thrip/types";

import LoadingState from "@thrip/components/LoadingState";
import MobileProfileCard from "@thrip/components/MobileProfileCard";
import ProfileCard from "@thrip/components/ProfileCard";
import { getExpertiseWithMostYears } from "@thrip/utils";

interface MentorsComponentProps {
  data: Mentor[];
  loading?: boolean;
}

const MentorsPartial: FC<MentorsComponentProps> = ({ data, loading }) => {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  return (
    <>
      {loading ? (
        <LoadingState />
      ) : (
        <SimpleGrid columns={{ base: 2, xl: 4 }} spacing={4}>
          {data?.map(
            ({ imageUrl, firstName, lastName, userId, bio, expertise }) => {
              const name = `${firstName}  ${lastName}`;
              const link = `/mentor-profile/${userId}`;
              const expertiseWithMostYears =
                getExpertiseWithMostYears(expertise);

              if (isLargerThan800) {
                return (
                  <ProfileCard
                    key={userId}
                    description={bio}
                    name={name}
                    descriptionLength={40}
                    link={link}
                    image={imageUrl}
                    number={2}
                    expertise={expertiseWithMostYears}
                  />
                );
              } else {
                return (
                  <MobileProfileCard
                    name={name}
                    key={userId}
                    image={imageUrl}
                    link={link}
                    expertise={expertiseWithMostYears}
                  />
                );
              }
            }
          )}
        </SimpleGrid>
      )}
    </>
  );
};

export default MentorsPartial;
