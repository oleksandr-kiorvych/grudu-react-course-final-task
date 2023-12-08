import React, { ReactNode, forwardRef } from 'react';
import cn from '../utils/cn';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  type?: 'submit';
  primary?: boolean;
  secondary?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, type, primary, secondary, ...props }, ref) => {
    return (
      <button
        className={cn(
          'text-white focus:ring-1 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none',
          {
            ' bg-blue-700 hover:bg-blue-800 focus:ring-blue-300': primary,
            ' bg-gray-800 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-600':
              secondary,
          },
          className
        )}
        ref={ref}
        type={type}
        {...props}
      >
        {children}
      </button>
    );
  }
);

export default Button;
