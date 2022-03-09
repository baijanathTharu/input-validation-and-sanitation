import * as yup from "yup";

// boolean schema
export const booleanSchema = yup.object().shape({
  value: yup.boolean().required(),
});
