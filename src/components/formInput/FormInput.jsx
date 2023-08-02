import { FormInputLabel, Group, Input } from "./form-input-styles.jsx";

export default function FormInput({ label, ...attributes }) {
  return (
    <Group>
      <Input {...attributes} />
      {label && (
        <FormInputLabel
          shrink={attributes.value.length}
          htmlFor={attributes.id}
        >
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
}
