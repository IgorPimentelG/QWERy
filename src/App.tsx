import { InlineButton, Menu, Social, Title } from '@components';
import styles from '@global/styles/app.module.css';

const App: React.FC = () => {
  return (
    <main>
      <section className={styles.mainSection}>
        <header>
          <Menu />
        </header>

        <div className={styles.socialWrap}>
          <Social alignment='VERTICAL' />
        </div>

        <div className={styles.content}>
          <div>
            <Title 
              decorationLeft
              title='explore the nature beauty' 
            />
            <h1>Discover</h1>
            <span>Wonderful Indonesia</span>
          </div>

          <InlineButton 
            label='Scroll down'
            iconDirection='TO BOTTOM'
            action={() => {}}
          />
        </div>
      </section>
    </main>
  );
}

export default App;
