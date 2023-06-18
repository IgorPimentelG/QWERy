import { Button, SingleInput, Social } from '@components';
import { ListMenu } from './list-menu';
import styles from './styles.module.css';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footerWrap}>
      <div className={styles.header}>
        <div>
          <h1>QWERy</h1>
        </div>

        <div>
          <span>Ready to explore?</span>
          <Button 
            label='Get started' 
            action={() => {}}
          />
        </div>
      </div>

      <div className={styles.content}>
        <div>
          <h5>
            Let's go on vacation, <br/>
            Make your day 
          </h5>

          <SingleInput
            placeholder='Email address'
            onSubmit={() => {}}
          />
        </div>

        <ListMenu />
      </div>

      <div className={styles.utils}>
        <div>
          <a href='#'>Terms & Conditions</a>
          <a href='#'>Privacy Policy</a>
        </div>
        <Social />
      </div>

      <div className={styles.copyright}>
        <span>Copyright 2023 QWERy</span>
      </div>
    </footer>
  );
}