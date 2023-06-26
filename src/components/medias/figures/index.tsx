import { FigureFlex } from '@/components/containers/figure';
import type { FigureProps } from './types';

export const Figure = ({ img, caption, ...args }: FigureProps) => {
  return (
    <FigureFlex position="relative" overflow="hidden" {...args}>
      <img
        src={img.src}
        alt={img.alt}
        style={{
          width: '100%',
          height: '100%',
          objectFit: img.fit,
          borderRadius: img.borderradius,
          zIndex: 1
        }}
      />
      <figcaption
        style={{
          position: 'absolute',
          width: '100%',
          bottom: '1px',
          zIndex: 2,
          backgroundColor: '#00000061'
        }}
      >
        {caption}
      </figcaption>
    </FigureFlex>
  );
};
