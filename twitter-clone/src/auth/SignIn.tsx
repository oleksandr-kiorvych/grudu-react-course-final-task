import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';

const SignIn = () => {
  return (
    <div className="h-full flex justify-center items-center">
      <form className="w-full max-w-lg bg-stone-600 p-4 mb-32 flex flex-col items-center gap-4 rounded-md">
        <h3 className="text-xl text-slate-200 mb-2">Sign In to Your Account</h3>
        <div className="flex flex-col gap-4 w-full">
          <Input id="password" name="password" type="password" />
          <Input id="username" name="username" type="text" />
          <div className="flex justify-between items-center">
            <Button primary>Submit</Button>
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
