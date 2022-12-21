import clsx from 'clsx';
import React from 'react';

function TextInput({ className, ...rest }) {
  return (
    <div>
      <label htmlFor={rest.id} className="sr-only">
        {rest.placeholder}
      </label>
      <input
        className={clsx(
          'relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm',
          {
            [className]: !!className,
          }
        )}
        {...rest}
      />
    </div>
  );
}

export default TextInput;
