import { ExpertiseItem } from "@thrip/types";

export interface ProfileCardProps {
  trending?: boolean;
  description: string | undefined;
  name: string;
  descriptionLength: number;
  link: string;
  number?: number;
  image: string;
  expertise?: ExpertiseItem;
}
