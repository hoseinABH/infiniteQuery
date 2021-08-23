import styles from 'styles/Person.module.css';

export type IPerson = {
  name: string;
  hair_color: string;
  eye_color: string;
};

function Person({ name, hair_color, eye_color }: IPerson) {
  return (
    <div className={styles.personWrapper}>
      <h4 className={styles.personName}>{name}</h4>
      <ol className={styles.personList}>
        <li className={styles.personListItem}>hair color: {hair_color}</li>
        <li className={styles.personListItem}>eye color: {eye_color}</li>
      </ol>
    </div>
  );
}

export default Person;
