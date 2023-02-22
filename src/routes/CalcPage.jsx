import Calculator from '../components/Calculator';
import styles from '../styles/CalcPage.module.css';

const CalcPage = () => (
  <main>
    <div className={`${styles.grid} container padding`}>
      <div className={styles.text}>
        <h1 className={styles.title}>Lets do some Math!</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laboriosam qui maiores
          velit corrupti atque doloribus eum quibusdam dignissimos, officia facilis voluptatem
          delectus, quae enim.
        </p>
      </div>
      <Calculator />
    </div>
  </main>
);

export default CalcPage;
