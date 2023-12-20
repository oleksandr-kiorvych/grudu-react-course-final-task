import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

import Input from '../components/Input';
import Button from '../components/Button';
import { useFetchOnForms } from '../hooks/useFetchOnForms';
import { useUserStore } from '../zustand/UserStore';
import { IUser } from '../interfaces/User';
import { signUpFormSchema } from '../utils/formSchemas';

const SignUp = () => {
  const {
    values,
    errors,
    touched,
    isValid,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: '',
      password: '',
      name: '',
      fullname: '',
    },
    validationSchema: signUpFormSchema,
    onSubmit: async () => {
      if (!isValid) return;
      await fetchData();
    },
  });

  const { data, isLoading, error, fetchData } = useFetchOnForms<IUser>(
    `http://localhost:3001/users`,
    'POST',
    'Invalid Credentials',
    values as never
  );

  const setUser = useUserStore((state) => state.setUser);
  const navigate = useNavigate();

  if (data?.id) {
    setUser(data);
    localStorage.setItem('user', JSON.stringify(data));
    navigate('/home');
  }

  return (
    <div className="h-full flex justify-center items-center">
      <form
        className="w-full max-w-lg bg-stone-600 p-4 mb-32 rounded-md flex flex-col items-center"
        onSubmit={handleSubmit}
      >
        <h3 className="text-xl text-slate-200 mb-2">Create an Account</h3>
        <div className="flex flex-col gap-4 w-full">
          <Input
            name="email"
            type="email"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.email && errors.email ? (
            <span className="text-red-400 font-bold">{errors.email}</span>
          ) : null}
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
            type="text"
            placeholder="Username"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.name && errors.name ? (
            <span className="text-red-400 font-bold">{errors.name}</span>
          ) : null}
          <Input
            name="fullname"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.fullname && errors.fullname ? (
            <span className="text-red-400 font-bold">{errors.fullname}</span>
          ) : null}
          {error ?? <span className="text-red-400">{error}</span>}
          {isLoading ? (
            <span className="text-stone-200">Loading...</span>
          ) : null}
          <div className="flex justify-between items-center">
            <Button disabled={!isValid} type="submit" primary>
              Submit
            </Button>
            <Link
              to="../sign-in"
              className="text-white underline hover:text-stone-200"
            >
              Sign In Instead
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
