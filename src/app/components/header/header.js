
import Image from "next/image";
import styles from "./header.module.css";



export function Header() {
    return (

<header className={styles.header}>
        <div className={styles.logo}>
          <Image src="/unnamed.jpg" alt="Garden Shop Logo" width={120} height={80} />
          <span className={styles.brandName}>GÓC XANH LÀM VƯỜN</span>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li>Trang chủ</li>
            <li>Dụng cụ</li>
            <li>Hạt giống</li>
            <li>Blog làm vườn</li>
          </ul>
        </nav>
        <div className={styles.cartIcon}>🛒 Giỏ hàng (0)</div>
      </header>
    );
}

