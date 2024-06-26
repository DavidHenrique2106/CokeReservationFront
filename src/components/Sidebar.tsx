import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css"; 

const Sidebar = () => {
  return (
    <div className={styles.Sidebar}>
      <div className={styles.logo}>Logo</div>
      <div className={styles.menu}>
        <h1>
          <Link to="/faturamento" className={styles.link}>Faturamento</Link>
        </h1>
        <h1>
          <Link to="/despesas" className={styles.link}>Despesas</Link>
        </h1>
      </div>
    </div>
  );
};

export default Sidebar;
