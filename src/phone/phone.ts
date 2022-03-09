import * as yup from 'yup';


const phoneRegExp = /^(\+\d{0,4})\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/


// Nepal phone number schema
export const phoneNumberSchema = yup.object().shape({
  phone: yup.string().matches(phoneRegExp, 'Invalid phone number').required('Phone number is required')
});
