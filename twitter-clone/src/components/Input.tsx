import React, { forwardRef, useMemo } from 'react';
import cn from '../utils/cn';

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  className?: string;
  type?: 'text' | 'number' | 'email' | 'password';
  name: string;
  id?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, name, id, type, ...props }, ref) => {
    const capitalizedName = useMemo(
      () => name?.charAt(0).toUpperCase() + name?.slice(1),
      [name]
    );

    return (
      <div className="w-full flex flex-col">
        <label
          className={cn('block text-stone-300 text-sm font-bold mb-2')}
          htmlFor={id}
        >
          {capitalizedName}
        </label>
        <input
          className={cn(
            'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
            className
          )}
          id={id}
          name={name}
          ref={ref}
          type={type}
          placeholder={capitalizedName}
          {...props}
        ></input>
      </div>
    );
  }
);

export default Input;
