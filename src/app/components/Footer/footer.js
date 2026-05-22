
import Image from "next/image";
import styles from "./footer.module.css";



export function Footer() {
    return (

        <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          
          {/* HÀNG 1: TÊN CỬA HÀNG VÀ STICKER */}
          <div className={styles.footerRow}>
            <div className={styles.footerInfoBox}>
              <div className={styles.footerLogo}>
                <Image src="/unnamed.jpg" alt="Garden Shop Logo" width={60} height={40} />
                <span className={styles.footerBrandName}>GARDEN PRO STORE</span>
              </div>
              <p className={styles.footerSlogan}>Chuyên giải pháp làm vườn toàn diện cho không gian xanh của bạn. 🌱</p>
            </div>
            
            <div className={styles.stickerBox}>
              <span className={styles.sticker}>🌻</span>
              <span className={styles.sticker}>🌿</span>
              <span className={styles.sticker}>🌳</span>
              <span className={styles.sticker}>👩‍🌾</span>
              <span className={styles.sticker}>🍋</span>
            </div>
          </div>

          <hr className={styles.footerLine} />

          {/* HÀNG 2: ĐỊA CHỈ/LIÊN HỆ VÀ ĐĂNG KÝ NHẬN TIN */}
          <div className={styles.footerRow}>
            <div className={styles.footerContact}>
              <h4>Thông Tin Liên Hệ</h4>
              <p>📍 <strong>Địa chỉ:</strong> 123 Đường Cây Xanh, Quận 1, TP. Hồ Chí Minh</p>
              <p>📞 <strong>Hotline:</strong> 0123.456.789</p>
              <p>📧 <strong>Gmail:</strong> contact@gardenpro.vn</p>
            </div>

            <div className={styles.footerSubscribe}>
              <h4>Đăng Ký Bản Tin</h4>
              <p>Để lại email để nhận mẹo chăm sóc cây và khuyến mãi mới nhất.</p>
              <div className={styles.inputGroup}>
                <input type="email" placeholder="Email của bạn..." />
                <button>Gửi ngay</button>
              </div>
            </div>
          </div>

        </div>
        <div className={styles.footerBottom}>
          <p>© 2026 Garden Pro - Chuyên gia công cụ làm vườn</p>
        </div>
      </footer>
    );
}

