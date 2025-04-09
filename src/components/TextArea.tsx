import type { FC } from "react";

import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { Field, type FieldProps } from "formik";

interface ComponentProps {
  name: string;
  label?: string;
  maxLength?: number;
  textLength?: number;
  placeholder: string;
  disabled?: boolean;
  h?: string;
  fontSize?: any;
}

const TextArea: FC<ComponentProps> = (props) => {
  const {
    name,
    maxLength,
    textLength,
    placeholder,
    disabled,
    label,
    h,
    fontSize,
  } = props;

  return (
    <Field name={name}>
      {({ field, form }: FieldProps) => (
        <FormControl isInvalid={!!(form.touched[name] && form.errors[name])}>
          <FormLabel>{label}</FormLabel>

          <Textarea
            {...field}
            placeholder={placeholder}
            border="1px solid #E2E8F0"
            boxShadow="none"
            _placeholder={{ fontSize: "sm", color: "gray.300" }}
            _focus={{
              boxShadow: "none",
            }}
            _disabled={{
              color: "black",
            }}
            color="dark"
            __css={{ color: "black" }}
            isDisabled={disabled}
            maxLength={maxLength}
            fontSize={fontSize}
            h={h || 120}
            size="md"
          />

          {textLength && (
            <Text color="#64748b" size="sm">
              {textLength}/500
            </Text>
          )}

          {form.touched[name] && form.errors[name] && (
            <FormErrorMessage>{form.errors[name] as any}</FormErrorMessage>
          )}
        </FormControl>
      )}
    </Field>
  );
};

export default TextArea;
