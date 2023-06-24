import { SectionFlex } from '@/components/containers/section';
import { Title } from '@/components/typography/exports';
import { Card } from '..';
import { cardGroup } from '../types';

export const CardGroup = ({ id, title, height, itens, ...args }: cardGroup) => {
  return (
    <SectionFlex
      direction="column"
      width="80vw"
      position="relative"
      padding="1rem 0"
    >
      {title && (
        <Title level="3" color="primary">
          {title}
        </Title>
      )}
      <SectionFlex height={height} {...args}>
        {itens.map((item, index) => {
          return <Card key={`group-card-${id}-item-${index}`} {...item} />;
        })}
      </SectionFlex>
    </SectionFlex>
  );
};
