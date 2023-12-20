import React, { ReactNode, forwardRef } from 'react';
import cn from '../utils/cn';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  type?: 'submit';
  primary?: boolean;
  secondary?: boolean;
  disabled?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, children, type, primary, secondary, disabled, ...props },
    ref
  ) => {
    return (
      <button
        className={cn(
          'text-white  focus:ring-1 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none cursor-pointer',
          {
            ' bg-blue-700 disabled:hover:bg-blue-700 disabled:cursor-default hover:bg-blue-800 focus:ring-blue-300':
              primary,
            ' bg-gray-800 text-white disabled:hover:bg-gray-800 disabled:cursor-default border-gray-600 hover:bg-gray-700 hover:border-gray-600':
              secondary,
          },
          className
        )}
        ref={ref}
        type={type}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);

export default Button;
