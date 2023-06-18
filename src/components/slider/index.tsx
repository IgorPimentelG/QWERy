import { InlineButton, Title } from '@components';
import { useRef, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import styles from './styles.module.css';

export interface ISlide {
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

type Props = {
  slides: ISlide[]
}

export const Slider: React.FC<Props> = ({ slides }) => {
  const slidesRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(1);

  function nextSlide() {
    if (slidesRef.current) {
      const width = slidesRef.current.offsetWidth;
      const position = slidesRef.current.scrollLeft + width;
      
      if (currentSlide === slides.length) {
        scroll(0);
        setCurrentSlide(1);
      } else {
        scroll(position);
        setCurrentSlide(currentSlide + 1);
      }
    }
  }

  function prevSlide() {
    if (slidesRef.current) {
      const width = slidesRef.current.offsetWidth;
      const position = slidesRef.current.scrollLeft - width;

      if (position < 0) {
        scroll(width * slides.length);
        setCurrentSlide(slides.length);
      } else {
        scroll(position);
        setCurrentSlide(currentSlide - 1);
      }
    }
  }
  
  function scroll(position: number) {
    slidesRef.current?.scroll({ 
      left: position, 
      behavior: 'smooth', 
    });
  }

  return (
    <div className={styles.sliderWrap}>
      <div 
        className={styles.slides} 
        ref={slidesRef}
      >
        {slides.map((slide) => (
          <>
            <img src={slide.image} alt={slide.title} />

            <div className={styles.content}>
              <div>
                <Title 
                  decorationLeft
                  decorationRight
                  title={slide.title} 
                />
                
                <h3>{slide.subtitle}</h3>
                <p>{slide.description}</p>

                <InlineButton
                  label='read more'
                  iconDirection='TO RIGHT'
                  type='SECONDARY'
                  action={() => {}} 
                />  
              </div>
            </div>
          </>
        ))}
      </div>
     
      <div className={styles.actions}>
        <button 
          className={styles.action}
          onClick={prevSlide}
        >
          <IoIosArrowBack />
        </button>
        
        <button 
          className={styles.action}
          onClick={nextSlide}
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
}