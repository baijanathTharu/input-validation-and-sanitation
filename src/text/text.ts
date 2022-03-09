import * as yup from "yup";

// name schema
export const personNameSchema = yup.object().shape({
  name: yup
    .string()
    .required()
    .min(2)
    .max(30)
    .matches(/^[a-zA-Z]{2,}\s[a-zA-Z]{2,}/),
});

// email
export const emailSchema = yup.object().shape({
  email: yup.string().required().email().min(10).max(50),
});

// company name schema
export const companyNameSchema = yup.object().shape({
  name: yup
    .string()
    .required()
    .min(5)
    .max(30)
    .matches(/^[a-zA-Z\\'?\s?&?]{2,}\s[a-zA-Z]{2,}/),
});

// url schema
export const urlSchema = yup.object().shape({
  url: yup.string().required().url().min(10).max(50),
});
