import { RiLoader3Line } from 'react-icons/ri';
import styles from './styles.module.css';

export const Loading = () => {
  return (
    <section className={styles.section}>
      <div className={styles.loader}>
        <RiLoader3Line className={styles.svg} />
      </div>
    </section>
  );
};
