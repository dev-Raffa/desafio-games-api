import { wrapForm } from '../types/types';
import { StyledForm } from '../style/style';

export const FormWrap = ({ ...args }: wrapForm) => {
  return <StyledForm {...args}></StyledForm>;
};
