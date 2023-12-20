import React, { forwardRef, useId, useMemo } from 'react';
import cn from '../utils/cn';

interface InputProps extends React.HTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  name: string;
  required?: boolean;
  showLabel?: boolean;
}

const Textarea = forwardRef<HTMLTextAreaElement, InputProps>(
  ({ className, name, showLabel, ...props }, ref) => {
    const id = useId();
    const capitalizedName = useMemo(
      () => name?.charAt(0).toUpperCase() + name?.slice(1),
      [name]
    );

    return (
      <div className="flex flex-col">
        {showLabel ? (
          <label
            className={cn('block text-stone-300 text-sm font-bold mb-2')}
            htmlFor={id}
          >
            {capitalizedName}
          </label>
        ) : null}
        <textarea
          className={cn(
            'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
            className
          )}
          id={id}
          name={name}
          ref={ref}
          placeholder={capitalizedName}
          rows={5}
          cols={30}
          {...props}
        ></textarea>
      </div>
    );
  }
);

export default Textarea;
