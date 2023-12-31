import { Button } from '@/components/buttons';
import { ConteinerFlex } from '@/components/containers';
import { Logo } from '../../logo';
import { LoginForm } from '../../forms/login';
import * as styles from '../styles';

export const ConteinerLogin = ({
  show,
  handleClick
}: {
  show: boolean;
  handleClick: () => void;
}) => {
  return (
    <ConteinerFlex
      as="article"
      opacity={show ? '0' : '100%'}
      {...styles.Conteiners}
      breakpoints={[styles.conteinerBreakPoints]}
    >
      <ConteinerFlex
        as="section"
        {...styles.Sections}
        breakpoints={[styles.sectionLoginBreakPoints]}
      >
        <Logo />
        <Button.wrap
          itemType="button"
          onClick={handleClick}
          {...styles.ButtonsWrap}
        >
          <Button.text {...styles.ButtonsText}>cadastre-se</Button.text>
        </Button.wrap>
      </ConteinerFlex>
      <LoginForm />
    </ConteinerFlex>
  );
};
