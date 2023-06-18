import styles from './styles.module.css';

type Option = {
  label: string;
  url: string;
}

export const ListMenu: React.FC = () => {

  const SERVICES: Option[] = [
    { label: 'Email Marketing', url: '#' },
    { label: 'Campaigns', url: '#' },
    { label: 'Branding', url: '#' },
    { label: 'Offline', url: '#' },
  ];

  const ABOUT: Option[] = [
    { label: 'Our Story', url: '#' },
    { label: 'Benefits', url: '#' },
    { label: 'Team', url: '#' },
    { label: 'Careers', url: '#' },
  ];

  const HELP: Option[] = [
    { label: 'FAQs', url: '#' },
    { label: 'Contact Us', url: '#' },
  ];

  return (
    <nav className={styles.menuWrap}>
      <div>
        <span>Services</span>
        <ul className={styles.list}>
          {SERVICES.map((item) => (
            <li key={item.label}>
              <a href={item.url}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <span>About</span>
        <ul className={styles.list}>
          {ABOUT.map((item) => (
            <li key={item.label}>
              <a href={item.url}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <span>Help</span>
        <ul className={styles.list}>
          {HELP.map((item) => (
            <li key={item.label}>
              <a href={item.url}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}