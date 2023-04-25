import './FormInput.styles.scss';

export default function FormInput({ label, ...inputOptions }) {
  return (
    <div className="group">
      <label className="form-input-label shrink">{label}</label>
      <input className="form-input" {...inputOptions} />
    </div>
  )
}
