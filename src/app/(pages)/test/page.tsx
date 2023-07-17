import { Rating } from '@/components/utils/rating';
import { LuStar } from 'react-icons/lu';
import { ButtonFavorite } from '../(home)/components/page/sectionCards/cards/isFavorite';

export default function TestPage() {
  return (
    <>
      <Rating
        idItem={0}
        name="star-rating"
        maxValue={4}
        icon={{
          icon: <LuStar fill="currentColor" />,
          height: '1.5rem',
          width: '1.5rem'
        }}
        colorDefault="gray"
        colorSelect="yellow"
        currentValue={0}
        wrap={{ width: '150px', gap: '0.5rem' }}
      />
      <ButtonFavorite idGame={0} favorite={false} />
    </>
  );
}
