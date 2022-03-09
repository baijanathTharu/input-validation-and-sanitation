import * as yup from 'yup'

// positive number
export const positiveNumberSchema =yup.object().shape({
  number: yup.number().positive()
})

// negative number
export const negativeNumberSchema =yup.object().shape({
  number: yup.number().negative()
})

// number in a range schema
export const numberInRangeSchema =yup.object().shape({
  number: yup.number().min(0).max(10)
})