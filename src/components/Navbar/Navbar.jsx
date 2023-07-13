import Link from "next/link";

import { BiChip, BiUserCircle, BiLogOut } from "react-icons/bi";

import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <p className={styles.Navbar__Logo}>
        <Link href="/" className={styles.Navbar__List__Item__Link}>
          <BiChip />
        </Link>
      </p>

      <ul className={styles.Navbar__List}>
        <li className={styles.Navbar__List__Item} key="home">
          <Link href="/" className={styles.Navbar__List__Item__Link}>
            Home
          </Link>
        </li>

        <li className={styles.Navbar__List__Item} key="about_us">
          <Link href="/about-us" className={styles.Navbar__List__Item__Link}>
            About Us
          </Link>
        </li>

        <li className={styles.Navbar__List__Item} key="contacts">
          <Link href="/contacts" className={styles.Navbar__List__Item__Link}>
            Contacts
          </Link>
        </li>

        <li className={styles.Navbar__List__Item} key="locations">
          <Link href="/locations" className={styles.Navbar__List__Item__Link}>
            Locations
          </Link>
        </li>
      </ul>

      <span className={styles.Navbar__Login} key="login">
        <Link href="/login" className={styles.Navbar__List__Item__Link}>
          <BiUserCircle />
        </Link>
      </span>
    </div>
  );
};

export default Navbar;
