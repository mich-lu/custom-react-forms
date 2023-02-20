import { InputHTMLAttributes, forwardRef } from 'react';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error? : string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, name, error, ...rest }, ref) => {
    return (
      <div className="checkbox-field">
        <label htmlFor={name}>
          <input
            {...rest}
            id={name}
            name={name}
            ref={ref}
            type="checkbox"
            className="input-checkbox"
          />
          {label}
        </label>
      {error && (
        <div className='input-field-label-error'>
          {error}
        </div>)}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
