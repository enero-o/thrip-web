/* eslint-disable no-unused-vars */

import type { FC } from "react";

import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Select,
  Text,
} from "@chakra-ui/react";
import { Field, type FieldProps } from "formik";

interface ComponentProps {
  name: string;
  label?: string;
  placeholder?: string;
  selectWidth?: string;
  children?: any;
  onChange?: (value: string) => void;
  value?: string;
  disabled?: boolean;
  border?: string;
  defaultValue?: string;
  isAsterisk?: boolean;
  hideLabel?: boolean;
}

const Dropdown: FC<ComponentProps> = ({
  name,
  label,
  placeholder,
  selectWidth,
  children,
  onChange,
  value,
  disabled,
  border,
  defaultValue,
  isAsterisk,
  hideLabel,
}) => {
  return (
    <Field name={name}>
      {({ field, form }: FieldProps) => (
        <FormControl
          isInvalid={!!(form.touched[name] && form.errors[name])}
          marginInline="auto"
          isDisabled={disabled}
        >
          <Flex direction="column" justifyContent="space-between">
            <FormLabel display={hideLabel ? "none" : "block"}>
              {label}
              {isAsterisk && (
                <Text as="span" color="red.700" mr="1">
                  *
                </Text>
              )}
            </FormLabel>

            <Select
              {...field}
              placeholder={placeholder}
              color="#263152"
              size="md"
              fontSize={{ base: "sm", md: "md" }}
              w={selectWidth}
              onChange={(e) => {
                field.onChange(e);
                form.setFieldValue(field.name, e.target.value);
                onChange && onChange(e.target.value);
              }}
              value={value}
              zIndex="1000"
              border={border}
              defaultValue={defaultValue}
              _placeholder={{ color: "#CBD5E1" }}
              _focusVisible={{
                borderColor: "none",
                zIndex: "auto",
                boxShadow: "none",
              }}
            >
              {children}
            </Select>
          </Flex>

          {form.errors[name] && form.touched[name] && (
            <FormErrorMessage>{form.errors[name] as any}</FormErrorMessage>
          )}
        </FormControl>
      )}
    </Field>
  );
};

export default Dropdown;
