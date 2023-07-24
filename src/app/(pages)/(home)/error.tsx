'use client';

import { ConteinerFlex } from '@/components/containers';
import { Icon } from '@/components/medias/icons';
import { Text } from '@/components/typography/texts';
import { BiMessageSquareError } from 'react-icons/bi';

export default function Error({
  error
}: {
  error?: Error & { digest?: string };
  reset?: () => void;
}) {
  return (
    <ConteinerFlex
      as={'section'}
      gap="1rem"
      width="100%"
      aligny="center"
      alignx="center"
    >
      <Icon
        color="red"
        height="5rem"
        width="5rem"
        icon={<BiMessageSquareError />}
      />
      <Text size="l" color="primary">
        {error?.message}
      </Text>
    </ConteinerFlex>
  );
}
