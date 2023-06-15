import { SearchInput } from '../search-input';
import styles from './styles.module.css';

export const Menu: React.FC = () => {
  return (
    <nav className={styles.menuWrap}>
      <div>
        <h3 className={styles.logo}>
          QWERy
        </h3>
      </div>

      <div className={styles.links}>
        <a href="#">Information</a>
        <a href="#">About us</a>
        <a href="#">Culture</a>
      </div>

      <div>
        <SearchInput />
      </div>
    </nav>
  );
}