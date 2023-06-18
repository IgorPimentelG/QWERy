import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import styles from './styles.module.css';

type Props = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  onSubmit: () => void;
}

export const SingleInput: React.FC<Props> = ({
  onSubmit,
  ...props
}) => {
  return (
    <div className={styles.inputWrap}>
      <input {...props} />
      <button 
        className={styles.btnSubmit} 
        onClick={onSubmit}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
}