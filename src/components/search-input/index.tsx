import { BiSearchAlt2 } from 'react-icons/bi';
import styles from './styles.module.css';

export const SearchInput: React.FC = () => {
  return (
    <div className={styles.inputWrap}>
      <button>
        <BiSearchAlt2 />
      </button>
      <div>
        <input placeholder='Search' />
        <span className={styles.outline} />
      </div>
    </div>
  );
}