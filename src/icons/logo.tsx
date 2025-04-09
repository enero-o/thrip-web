import { Box, Image } from "@chakra-ui/react";

interface Props {
  width?: string;
  height?: string;
}

const Logo = ({ width = "135px", height = "32px" }: Props) => {
  return (
    <Box>
      <Image src="/beta-logo.png" width={width} height={height} />
    </Box>
  );
};

export { Logo };
