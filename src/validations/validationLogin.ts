import * as Yup from 'yup'

const validationLoginSchema = Yup.object({
  username: Yup.string()
    .max(15, 'Username must be 15 characters or less.')
    .min(2, 'Username must be 2 characters or longer.')
    .matches(/^[a-zA-Z]+$/, 'Username can not contain numbers and special characters.')
    .required('Username is required.'),
  password: Yup.string()
    .max(20, 'Password must be 20 characters or less.')
    .min(3, 'Pasword must be 3 characters or longer.')
    .matches(/\w\d/, 'Password must contain at least one character and one number.')
    .required('Password is required.'),
})

export default validationLoginSchema