import { useState } from "react";

import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { Field, type FieldProps } from "formik";

interface Props {
  name: string;
  label?: string;
  subTitle?: string;
  type?: string;
  placeholder?: string;
  variant?: string;
  disabled?: boolean;
  pl?: string;
  w?: object;
  isAsterisk?: boolean;
  bgColor?: string;
}

const TextInput = (props: Props) => {
  const {
    bgColor,
    name,
    label,
    type,
    placeholder,
    variant,
    disabled,
    pl,
    w,
    subTitle,
    isAsterisk,
  } = props;
  const [show, setShow] = useState(false);

  return (
    <Field name={name}>
      {({ field, form }: FieldProps) => (
        <FormControl isInvalid={!!(form.touched[name] && form.errors[name])}>
          <FormLabel>
            {label}
            {isAsterisk && (
              <Text as="span" color="red.700" mr="1">
                *
              </Text>
            )}
          </FormLabel>

          {subTitle && (
            <Text pb="2" variant="sm" color="gray.300">
              {subTitle}
            </Text>
          )}

          <InputGroup>
            <Input
              {...field}
              placeholder={placeholder}
              variant={variant || "outline"}
              type={handleType(type, show)}
              disabled={disabled}
              pl={pl}
              bgColor={bgColor}
              min={new Date().toISOString().split("T")[0]}
              w={w}
              _disabled={{
                color: "black",
              }}
            />

            {type === "password" && (
              <InputRightElement width="3.5rem">
                <Button
                  variant="ghost"
                  background="none"
                  size="sm"
                  fontSize="sm"
                  fontWeight="500"
                  onClick={() => setShow(!show)}
                  color="brand.100"
                >
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            )}
          </InputGroup>

          {form.touched[name] && form.errors[name] && (
            <FormErrorMessage>{form.errors[name] as any}</FormErrorMessage>
          )}
        </FormControl>
      )}
    </Field>
  );
};

export default TextInput;

const handleType = (type = "text", show: boolean) => {
  if (type == "password") {
    if (show) {
      return "text";
    } else {
      return "password";
    }
  } else {
    return type;
  }
};
