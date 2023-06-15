import styles from './styles.module.css';

type Props = {
  title: string;
  decorationLeft?: boolean;
  decorationRight?: boolean;
}

export const Title: React.FC<Props> = ({
  title,
  decorationLeft,
  decorationRight,
}) => {
  return (
    <div className={styles.titleWrap}>
      {decorationLeft && (
        <div className={styles.line} />
      )}
      
      <h4>{title}</h4>

      {decorationRight && (
        <div className={styles.line} />
      )}
    </div>
  );
}