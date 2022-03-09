import { phoneNumberSchema } from "."

const phoneNumbersList = [
  // nepal phone numbers
  {
    phone: '9876543210',
    isValid: false
  },
  {
    phone: '+9779876543210',
    isValid: true
  },
  {
    phone: '+977-9876543210',
    isValid: true
  },
  {
    phone: '+977-9876543210',
    isValid: true
  },
  {
    phone: '00977-9876543210',
    isValid: false
  },
  {
    phone: 'ab977-9876543210',
    isValid: false
  },
  {
    // landline kathmandu
    phone: '+977112345678',
    isValid: true
  },
  {
    // landline butwal
    phone: '+977071543599',
    isValid: true
  },
  {
    // landline butwal
    phone: '+977-071-543599',
    isValid: false
  },

  // indian phone numbers
  {
    phone: '9876543210',
    isValid: false
  },
  {
    phone: '+91-9876543210',
    isValid: true
  },
  {
    phone: '+919876543210',
    isValid: true
  },
  {
    phone: '+919876543210123',
    isValid: false
  },

  // australian phone numbers
  {
    phone: '+61-0404999999',
    isValid: true
  },
  {
    phone: '+61-0999999999',
    isValid: true
  },
  {
    phone: '09 9999 9999',
    isValid: false
  },
]

describe('testing nepal phone number', () => { 
 phoneNumbersList.map(({phone, isValid}) => {
  it(`${phone} is ${isValid ? 'a valid': 'an invalid'} phone number`, async () => {
    const isValidSchema =  await phoneNumberSchema.isValid({ phone })
    expect(isValidSchema).toBe(isValid)
  })
 })
 })