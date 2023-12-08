import React, { SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';

import Input from '../components/Input';
import Button from '../components/Button';

const SignUp = () => {
  const [signUpData, setSignUpData] = useState({
    email: '',
    password: '',
    username: '',
    fullname: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpData({
      ...signUpData,
      [e.target?.name]: e.target?.value,
    });
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    const response = await fetch('http://localhost:3001/users', {
      method: 'POST',
      body: JSON.stringify(signUpData),
    });

    console.log(response);
  };

  return (
    <div className="h-full flex justify-center items-center">
      <form
        className="w-full max-w-lg bg-stone-600 p-4 mb-32 rounded-md flex flex-col items-center"
        onSubmit={handleSubmit}
      >
        <h3 className="text-xl text-slate-200 mb-2">Create an Account</h3>
        <div className="flex flex-col gap-4 w-full">
          <Input
            id="email"
            name="email"
            type="email"
            required
            onChange={handleChange}
          />
          <Input
            id="password"
            name="password"
            type="password"
            required
            onChange={handleChange}
          />
          <Input
            id="username"
            name="username"
            type="text"
            required
            onChange={handleChange}
          />
          <Input
            id="fullname"
            name="fullname"
            type="text"
            required
            onChange={handleChange}
          />
          <div className="flex justify-between items-center">
            <Button type="submit" primary>
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
