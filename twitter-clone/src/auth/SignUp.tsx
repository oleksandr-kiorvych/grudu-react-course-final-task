import React from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <form className="w-full max-w-lg bg-stone-600 p-4 mb-32 flex flex-col gap-4 rounded-md">
        <Input id="email" name="email" type="email" />
        <Input id="password" name="password" type="password" />
        <Input id="username" name="username" type="text" />
        <Input id="fullname" name="fullname" type="text" />
        <div className="flex justify-between items-center">
          <Button primary>Submit</Button>
          <Link
            to="../sign-in"
            className="text-white underline hover:text-stone-200"
          >
            Sign In Instead
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
