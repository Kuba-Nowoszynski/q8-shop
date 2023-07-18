import "./form-input.scss";

export default function FormInput({ label, ...attributes }) {
  return (
    <div className="group">
      <input className="form-input" {...attributes} />
      {label && (
        <label
          className={`${attributes.value.length && "shrink"} form-input-label`}
          htmlFor={attributes.id}
        >
          {label}
        </label>
      )}
    </div>
  );
}
