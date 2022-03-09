import * as yup from "yup";

// array of numbers
export const numbersArraySchema = yup
  .array()
  .length(2)
  .of(yup.number().required().min(0).max(100));

// array of strings(only alphabets)
export const stringsArraySchema = yup.array().of(
  yup
    .string()
    .matches(/^[a-zA-Z]/, { message: "Only alphabets are allowed" })
    .required()
);
