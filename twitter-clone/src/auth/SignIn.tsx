import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

import Button from '../components/Button';
import Input from '../components/Input';
import { useFetchOnForms } from '../hooks/useFetchOnForms';
import { IUser } from '../interfaces/User';
import { signInSchema } from '../utils/formSchemas';

const SignIn = () => {
  const {
    values,
    errors,
    touched,
    isValid,
    handleChange,
    handleSubmit,
    handleBlur,
  } = useFormik({
    initialValues: {
      password: '',
      name: '',
    },
    validationSchema: signInSchema,
    onSubmit: async () => {
      if (!isValid) return;
      await fetchData();
    },
  });

  const { data, isLoading, error, fetchData } = useFetchOnForms<IUser>(
    `http://localhost:3001/users/${values.name}`,
    'GET',
    'Invalid Credentials'
  );

  const navigate = useNavigate();

  if (data) {
    localStorage.setItem('user', JSON.stringify(data));
    navigate('/');
  }

  return (
    <div className="h-full flex justify-center items-center">
      <form
        className="w-full max-w-lg bg-stone-600 p-4 mb-32 flex flex-col items-center gap-4 rounded-md"
        onSubmit={handleSubmit}
      >
        <h3 className="text-xl text-slate-200 mb-2">Sign In to Your Account</h3>
        <div className="flex flex-col gap-4 w-full">
          <Input
            name="password"
            type="password"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.password && errors.password ? (
            <span className="text-red-400 font-bold">{errors.password}</span>
          ) : null}
          <Input
            name="name"
            placeholder="Username"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.name && errors.name ? (
            <span className="text-red-400 font-bold">{errors.name}</span>
          ) : null}
          {error ?? <span className="text-red-400">{error}</span>}
          {isLoading ? (
            <span className="text-stone-200">Loading...</span>
          ) : null}{' '}
          <div className="flex justify-between items-center">
            <Button disabled={!isValid} primary type="submit">
              Submit
            </Button>
            <Link
              to="../sign-up"
              className="text-white underline hover:text-stone-200"
            >
              Sign Up Instead
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
