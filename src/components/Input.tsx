import { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, label, name, ...rest }, ref) => {

    return (
      <div>
        <label htmlFor={name} aria-label={name} className="form-label">
          {label}
          <div className="mt-1">
            <input
              ref={ref}
              id={name}
              {...rest}
              name={name}
              autoComplete={name}
              className="input-field"
            />
          </div>
        </label>
        {error && (
          <div className="input-field-label-error">
            {error}
          </div>
        )}
      </div>
    );
  }
);
Input.displayName = 'Input';

export default Input;
