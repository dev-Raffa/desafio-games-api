import Image from 'next/image';
import { FigureFlex } from '@/components/containers/figure';
import type { FigureProps } from './types';

export const Figure = ({ img, caption, ...args }: FigureProps) => {
  return (
    <FigureFlex position="relative" overflow="hidden" {...args}>
      <Image
        {...img}
        quality={img.quality ? img.quality : 75}
        style={{
          borderRadius: img.borderradius,
          objectFit: img.fit,
          zIndex: 1
        }}
      />

      <figcaption
        style={{
          position: 'absolute',
          width: '100%',
          bottom: '20px',
          margin: '0 2%',
          zIndex: 2,
          rowGap: '2px'
        }}
      >
        {caption}
      </figcaption>
    </FigureFlex>
  );
};
