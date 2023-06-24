import Image from 'next/image';
import logo from '../../../../../../../public/images/logo.jpg';
import { FigureFlex } from '@/components/containers/figure';

export const Logo = () => {
  return (
    <FigureFlex position="relative" height="7.5rem" width="24rem">
      <Image
        src={logo}
        alt="três  icones indicando de conversas ao lado da frase vou te contar"
        fill
        style={{ objectFit: 'cover', left: '-20%' }}
      />
    </FigureFlex>
  );
};
