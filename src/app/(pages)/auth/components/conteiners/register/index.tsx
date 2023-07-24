import { ConteinerFlex } from '@/components/containers';
import { RegisterForm } from '../../forms/register';
import { Logo } from '../../logo';
import { Button } from '@/components/buttons';
import * as styles from '../styles';

export const ConteinerRegister = ({
  show,
  handleClick
}: {
  show: boolean;
  handleClick: () => void;
}) => {
  return (
    <ConteinerFlex
      as="article"
      opacity={show ? '100%' : '0'}
      {...styles.Conteiners}
      breakpoints={[styles.conteinerBreakPoints]}
    >
      <RegisterForm />
      <ConteinerFlex
        as="section"
        {...styles.Sections}
        breakpoints={[styles.sectionRegisterBreakPoints]}
      >
        <Logo />
        <Button.wrap
          itemType="button"
          onClick={handleClick}
          {...styles.ButtonsWrap}
        >
          <Button.text {...styles.ButtonsText}> voltar ao login </Button.text>
        </Button.wrap>
      </ConteinerFlex>
    </ConteinerFlex>
  );
};
