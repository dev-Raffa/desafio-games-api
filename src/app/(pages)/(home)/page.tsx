import { HighlightPosts } from './components/carousel';
import { LastPosts } from './components/cardGroup';

export default function Home() {
  return (
    <>
      <HighlightPosts />
      <LastPosts />
    </>
  );
}
