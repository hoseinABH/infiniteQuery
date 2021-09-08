import styles from 'styles/Home.module.css';
import Image from 'next/image';

/**
 * @component Offline
 */
function Offline({}) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Image
          src="/offline.png"
          layout="fixed"
          width={100}
          height={140}
          alt="you are offline"
        />
        <h1 className={styles.title}>You Are Offline</h1>
      </main>
    </div>
  );
}

export default Offline;
