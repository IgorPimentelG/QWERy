import { AiFillCloseCircle } from 'react-icons/ai';
import styles from './styles.module.css';

type Props = {
  onClose: () => void;
}

export const MenuList: React.FC<Props> = ({ onClose }) => {
  return (
    <nav className={styles.menuWrap}>
      <div className={styles.links}>
        <hr />
        <a href="#information">Information</a>
        <hr />
        <a href="#about-us">About us</a>
        <hr />
        <a href="#culture">Culture</a>
        <hr />

        <div className={styles.btnCloseWrap}>
          <button onClick={onClose}>
            <AiFillCloseCircle />
          </button>
        </div>
      </div>
    </nav>
  );
}