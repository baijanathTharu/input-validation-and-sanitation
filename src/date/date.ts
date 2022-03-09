import * as yup from "yup";

export const dateSchema = yup.object().shape({
  date: yup.date().required().min("1900-01-01").max("2022-03-09"),
});
