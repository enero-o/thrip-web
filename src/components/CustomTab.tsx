import { type FC, type ReactNode, type Ref, forwardRef } from "react";

import { Button, useMultiStyleConfig, useTab } from "@chakra-ui/react";

interface CustomTabProps {
  children: ReactNode;
  fontSize?: number | string;
  fontWeight?: number | string;
  lineHeight?: number | string;
  px?: { base: number; md: number };
  onClick?: () => void;
}

export const CustomTab: FC<CustomTabProps> = forwardRef(
  (
    {
      onClick,
      children,
      fontSize = "lg",
      fontWeight = 700,
      px = { base: 4, md: 8 },
      lineHeight,
      ...props
    }: CustomTabProps,
    ref: Ref<HTMLElement>
  ) => {
    const tabProps = useTab({ ...props, ref });
    const isSelected = !!tabProps["aria-selected"];

    const styles = useMultiStyleConfig("Tabs", tabProps);

    return (
      <Button
        __css={styles.tab}
        {...tabProps}
        bg={isSelected ? "white" : "transparent"}
        fontWeight={fontWeight}
        onClick={onClick}
        fontSize={fontSize}
        borderBottom="none"
        borderRadius={3}
        lineHeight={lineHeight}
        px={px}
        color="#0F172A"
        whiteSpace="nowrap"
        w="100%"
      >
        {children}
      </Button>
    );
  }
);

// Set display name for CustomTab
CustomTab.displayName = "CustomTab";
