import { Rating } from '@/components/utils/rating';
import { LuStar } from 'react-icons/lu';

interface ratingProps {
  id: number;
  value: number;
}

export function RatingStars({ value, id }: ratingProps) {
  return (
    <Rating
      idItem={id}
      name="star-rating"
      currentValue={value}
      maxValue={4}
      icon={{
        icon: <LuStar fill="currentColor" />,
        height: '1.5rem',
        width: '1.5rem'
      }}
      colorDefault="gray"
      colorSelect="yellow"
      wrap={{ width: '150px', gap: '0.5rem', bgcolor: 'trasparent' }}
    />
  );
}
