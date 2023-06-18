import {
  MountainLargeImage,
  MountainSmallImage,
  PeopleImage,
  Templo1Image,
  Templo2Image,
} from '@assets';
import {
  Footer,
  ISlide,
  InlineButton,
  Menu,
  Slider,
  Social,
  Title
} from '@components';
import styles from '@global/styles/app.module.css';
import { useRef } from 'react';
import Fade from 'react-reveal/Fade';

const App: React.FC = () => {
  const wrapRef = useRef<HTMLDivElement>(null);

  const SLIDES: ISlide[] = [
    {
      title: 'bromo',
      subtitle: 'Steady your steps, we will climb together!',
      description: `
        Enjoying the vast expanse of the sea of ​​​​sand, witnessing the splendor of Mount Semeru that soars into the sky, 
        and gazing at the beauty of the sun moving out of its bed or otherwise enjoying the dim twilight from the Bromo 
        ridge is an unforgettable experience when visiting Bromo.
      `,
      image: MountainLargeImage,
    },
    {
      title: 'bromo',
      subtitle: 'Steady your steps, we will climb together!',
      description: `
        Enjoying the vast expanse of the sea of ​​​​sand, witnessing the splendor of Mount Semeru that soars into the sky, 
        and gazing at the beauty of the sun moving out of its bed or otherwise enjoying the dim twilight from the Bromo 
        ridge is an unforgettable experience when visiting Bromo.
      `,
      image: Templo1Image,
    },
    {
      title: 'bromo',
      subtitle: 'Steady your steps, we will climb together!',
      description: `
        Enjoying the vast expanse of the sea of ​​​​sand, witnessing the splendor of Mount Semeru that soars into the sky, 
        and gazing at the beauty of the sun moving out of its bed or otherwise enjoying the dim twilight from the Bromo 
        ridge is an unforgettable experience when visiting Bromo.
      `,
      image: Templo2Image,
    },
  ];

  function scrollDown() {
    const height = window.innerHeight;
    wrapRef.current?.scrollTo({
      top: height + 200,
      behavior: 'smooth',
    })
  }

  return (
    <main className={styles.mainWrap} ref={wrapRef}>
      <section className={styles.mainSection}>
        <header>
          <Menu />
        </header>

        <Fade bottom>
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
              action={scrollDown}
            />
          </div>
        </Fade>
      </section>

      <Fade bottom>
        <section
          className={`
            ${styles.contentSection} 
            ${styles.informationSection}
          `}
        >
          <div>
            <img src={MountainSmallImage} />
          </div>

          <div>
            <Title 
              decorationLeft
              title='east nusa tenggara' 
            />

            <h2>
              Have you <br/>
              enjoyed your <br/>
              holiday?
            </h2>
            <p>
              You will be amazed if you take part in this sailing Komodo island tour <br/>
              package. So it also mandatory for you, besides enjooying Komodo <br/>
              tourism on Komodo Island, you have to taste the marine tourism. <br/>
              The beautiful waters of Komodo will make you meet many travelers <br/>
              from other countries.
            </p>

            <InlineButton 
              type='SECONDARY'
              label='read more'
              iconDirection='TO RIGHT'
              action={() => {}}
            />
          </div>
        </section>
      </Fade>

      <Fade bottom>
        <section className={styles.slideSection}>
          <Slider slides={SLIDES} />
        </section>
      </Fade>

      <Fade bottom>
        <section className={styles.contentSection}>
          <div>
            <Title 
              decorationLeft
              title='indonesian culture' 
            />

            <h2>
              Our culture here <br/>
              is very friendly <br/>
              to people
            </h2>
            <p>
              known for this politeness, manners and gentleness. This becomes a<br/>
              characteristic when they mingle with other tribes and become basic trits <br/>
              that ere passed down by ancestors. <br/>
            </p>

            <InlineButton 
              type='SECONDARY'
              label='read more'
              iconDirection='TO RIGHT'
              action={() => {}}
            />
          </div>

          <div>
            <img src={PeopleImage} />
          </div>
        </section>
      </Fade>

      <Footer />
    </main>
  );
}

export default App;
