import styles from "./Header.module.css";
import PsIke from "../../../public/images/psike_corporation.png";
import User from "../../../public/images/user.png";
import Menu from "../../../public/images/menu.png";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className={styles.header}>
            <div>
            <img src={Menu} className={styles.menu} />
            <img src={PsIke} />
            </div>
            <Link to="/signin">
                <img src={User} className={styles.user} />
            </Link>
        </header>
    );
}

export default Header;