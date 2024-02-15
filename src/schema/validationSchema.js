import * as yup from "yup";

export const validationSchema = yup.object().shape({
  gender: yup.string().required("Gender is required"),
  insurance: yup.string().required("Insurance is required"),
  dateOfBirth: yup
    .date()
    .max(new Date(), "Date of birth cannot be in the future")
    .required("Date of birth is required"),
});
