import { string } from "yup";

export const validators = {
  email: string().email("Email must be valid.").required("Email is required"),
  text: string().required("Required"),
};
