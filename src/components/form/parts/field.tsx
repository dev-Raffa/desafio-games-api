import { StyledFieldForm } from '../style/style';
import { fieldForm } from '../types/types';
import { Icon } from '@/components/medias/icons';
import { InputStyled } from '@/components/utils/input/style/style';

const Field = ({ children, title, ...args }: fieldForm) => {
  return (
    <StyledFieldForm {...args}>
      {title}
      {children}
    </StyledFieldForm>
  );
};

export const FieldForm = {
  label: Field,
  input: InputStyled,
  icon: Icon
};
