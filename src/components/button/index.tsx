import styles from './styles.module.css';

type Props = {
  label?: string;
  Icon?: React.FC;
  action: () => void;
}

export const Button: React.FC<Props> = ({
  label,
  Icon,
  action,
}) => {
  return (
    <button 
      onClick={action}
      className={styles.btnWrap}
    >
      {label}
      {Icon && <Icon />}
    </button>
  );
}