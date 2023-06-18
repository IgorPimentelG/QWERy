import { BsArrowDown, BsArrowRight } from 'react-icons/bs';
import styles from './styles.module.css';

type Props = {
  type?: 'PRIMARY' | 'SECONDARY';          
  label: string;
  iconDirection?: 'TO RIGHT' | 'TO BOTTOM';
  action: () => void;
}

export const InlineButton: React.FC<Props> = ({
  label,
  iconDirection,
  type = 'PRIMARY',
  action,
}) => {
  return (
    <button 
      onClick={action}
      data-type={type} 
      className={styles.btnWrap}
    >
      {label}
      {iconDirection === 'TO RIGHT' && (
        <BsArrowRight />
      )}
      {iconDirection === 'TO BOTTOM' && (
        <BsArrowDown />
      )}
    </button>
  );
}