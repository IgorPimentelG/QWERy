import { BsInstagram, BsTwitter, } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import styles from './styles.module.css';

type Props = {
  alignment?: 'HORIZONTAL' | 'VERTICAL';
}

export const Social: React.FC<Props> = ({ alignment = 'HORIZONTAL' }) => {
  return (
    <div className={styles.socialWrap} data-alignment={alignment}>
      <span>Follow us</span>
      
      <a href="https://www.instagram.com/" target='_blank'>
        <BsInstagram />
      </a>
      <a href="https://twitter.com/" target='_blank'>
        <BsTwitter />
      </a>
      <a href="https://pt-br.facebook.com/" target='_blank'>
        <FaFacebookF />
      </a>
    </div>
  );
}