import { Group, FormInput, FormLabel } from "./input.styles";

const Input = ({ label, ...props }) => {
  return (
    <Group>
      <FormInput {...props} />
      {label && <FormLabel shrink={props.value.length}>{label}</FormLabel>}
    </Group>
  );
};

export default Input;
