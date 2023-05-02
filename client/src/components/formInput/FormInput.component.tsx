import { InputHTMLAttributes, FC } from 'react';

import './FormInput.styles.scss';

type FormInputProps = { label: string; } & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({ label, ...inputOptions }) => {
  return (
    <div className="group">
      <label className="form-input-label shrink">{label}</label>
      <input className="form-input" {...inputOptions} />
    </div>
  )
}

export default FormInput;