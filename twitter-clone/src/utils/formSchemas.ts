import * as yup from 'yup';

export const signUpFormSchema = yup.object().shape({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('The field is required'),

  password: yup
    .string()
    .min(8, 'Should be at least 8 symbols')
    .max(256, 'Max 256 symbols')
    .required('The field is required'),

  name: yup.string().min(1).max(512).required('The field is required'),

  fullname: yup.string().min(1).max(512).required('The field is required'),
});

export const signInSchema = yup.object().shape({
  password: yup
    .string()
    .min(8, 'Should be at least 8 symbols')
    .max(256, 'Max 256 symbols')
    .required('The field is required'),

  name: yup.string().min(1).max(512).required('The field is required'),
});

export const tweetInputSchema = yup.object().shape({
  tweet: yup.string().required('').max(140, 'Should be max of 140 symbols'),
});
