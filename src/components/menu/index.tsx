import { MenuList } from 'components/menu-list';
import { useState } from 'react';
import { BsList } from 'react-icons/bs';
import { SearchInput } from '../search-input';
import styles from './styles.module.css';

export const Menu: React.FC = () => {
  const [showMenulist, setShowMenuList] = useState<boolean>(false);

  return (
    <nav className={styles.menuWrap}>
      {showMenulist && <MenuList onClose={() => {
        setShowMenuList(false);
      }} />}
      
      <div>
        <button 
          className={styles.btnMenu}
          onClick={() => {
            setShowMenuList(!showMenulist);
          }}
        >
          <BsList />
        </button>

        <h3 className={styles.logo}>
          QWERy
        </h3>
      </div>

      <div className={styles.links}>
        <a href="#information">Information</a>
        <a href="#about-us">About us</a>
        <a href="#culture">Culture</a>
      </div>

      <div>
        <SearchInput />
      </div>
    </nav>
  );
}