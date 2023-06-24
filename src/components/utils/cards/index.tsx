import { ArticleFlex } from '@/components/containers/article';
import { HeaderFlex } from '@/components/containers/header';
import { FooterFlex } from '@/components/containers/footer';
import type { cardProps } from './types';

export const Card = ({ body, footer, header, keyid, ...rest }: cardProps) => {
  return (
    <ArticleFlex id={keyid} key={keyid} {...rest}>
      {header && (
        <HeaderFlex
          key={`header-card-${keyid}`}
          height="7.5rem"
          width="100%"
          alignx={header.alignx}
          aligny="center"
          padding="0 5%"
        >
          {header.content}
        </HeaderFlex>
      )}

      {body}

      {footer && (
        <FooterFlex alignx="center" aligny="center" height="10px" width="100%">
          {footer}
        </FooterFlex>
      )}
    </ArticleFlex>
  );
};
