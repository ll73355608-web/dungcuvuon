"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import Link from "next/link"; // Thêm dòng này

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openProductDetail = (product) => {
    setSelectedProduct(product);
  };

  const closeProductDetail = () => {
    setSelectedProduct(null);
  };

  const products = [
    {
      id: 1,
      name: "Chậu Gốm Sứ Cao Cấp",
      image: "/download (8).jpg", 
      price: "150.000₫",
      oldPrice: "200.000₫",
      discount: "-25%",
      remain: "10/10",
      category: "Chậu cây",
      description: "Chậu gốm sứ tráng men cao cấp, họa tiết tinh xảo, chịu nhiệt tốt, phù hợp cho cả cây trong nhà và ngoài trời."
    },
    {
      id: 2,
      name: "Cuốc Bàn Làm Vườn Thép",
      image: "/download (9).jpg", 
      price: "75.000₫",
      oldPrice: "110.000₫",
      discount: "-32%",
      remain: "5/20",
      category: "Dụng cụ đào",
      description: "Lưỡi thép tôi luyện sắc bén, cán gỗ cầm chắc chắn."
    },
    {
      id: 3,
      name: "Bình Tưới Áp Suất 2L",
      image: "/download (10).jpg", 
      price: "130.000₫",
      oldPrice: "180.000₫",
      discount: "-28%",
      remain: "12/30",
      category: "Hệ thống tưới",
      description: "Bình nhựa ABS bền bỉ, có chế độ phun sương và phun tia linh hoạt."
    },
    {
      id: 4,
      name: "Găng Tay Bảo Hộ Gai",
      image: "/download (11).jpg", 
      price: "30.000₫",
      oldPrice: "50.000₫",
      discount: "-40%",
      remain: "25/30",
      category: "Bảo hộ",
      description: "Bảo vệ đôi tay khỏi gai nhọn và trầy xước."
    },
    {
      id: 5,
      name: "Xẻng Vuông Cán Gỗ",
      image: "/1000mm-xeng-vuong-can-go-wadfow-wse1317.jpg", 
      price: "150.000₫",
      oldPrice: "190.000₫",
      discount: "-21%",
      remain: "8/15",
      category: "Dụng cụ đào",
      description: "Thiết kế vuông vắn giúp xúc đất và phân bón dễ dàng. Cán gỗ tự nhiên êm ái, bền bỉ. Chiều dài tổng thể: 1m."
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.topBar}>Miễn phí vận chuyển cho đơn hàng từ 500k!</div>
      <Header/>

      <main className={styles.item2}>
        <aside className={styles.sidebar}>
          <h3>Danh mục</h3>
          <ul>
            <li>Dụng cụ cầm tay</li>
            <li>Máy làm vườn</li>
            <li>Phân bón & Đất</li>
          </ul>
        </aside>

        <div className={styles.mainContent}>
          <div className={styles.filterBar}><h2>Dụng cụ làm vườn mới nhất</h2></div>
          <div className={styles.grid}>
            {products.map((item) => {
              const card = (
                <div className={styles.product} onClick={item.id !== 5 ? () => openProductDetail(item) : undefined}>
                  <div className={styles.productImage}>
                    <Image src={item.image} alt={item.name} width={180} height={160} className={styles.img} />
                    {item.discount && <span className={styles.badge}>{item.discount}</span>}
                  </div>
                  <div className={styles.productInfo}>
                    <p className={styles.categoryText}>{item.category}</p>
                    <h5 className={styles.productNameText}>{item.name}</h5>
                    <div className={styles.priceContainer}>
                      <span className={styles.currentPrice}>{item.price}</span>
                      <span className={styles.oldPriceText}>{item.oldPrice}</span>
                    </div>
                    <div className={styles.stockStatus}>
                      <div className={styles.progressBar}><div className={styles.progressFill} style={{width: '60%'}}></div></div>
                      <span>Còn {item.remain}</span>
                    </div>
                  </div>
                  <div className={styles.actionButtons}>
                    <span className={styles.btnBuy}>{item.id === 5 ? "Xem chi tiết" : "Xem nhanh"}</span>
                  </div>
                </div>
              );

              return item.id === 5 ? (
                <Link href="/chitietsanpham" key={item.id} style={{ textDecoration: 'none', color: 'inherit' }}>{card}</Link>
              ) : (
                <div key={item.id}>{card}</div>
              );
            })}
          </div>
        </div>
      </main>

      {selectedProduct && (
        <div className={styles.modalOverlay} onClick={closeProductDetail}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={closeProductDetail}>×</button>
            <div className={styles.modalBody}>
              <div className={styles.modalImage}>
                <Image src={selectedProduct.image} alt={selectedProduct.name} width={300} height={300} />
              </div>
              <div className={styles.modalInfo}>
                <span className={styles.categoryText}>{selectedProduct.category}</span>
                <h2>{selectedProduct.name}</h2>
                <div className={styles.priceContainerDetail}>
                  <span className={styles.currentPrice}>{selectedProduct.price}</span>
                  <span className={styles.oldPriceText}>{selectedProduct.oldPrice}</span>
                </div>
                <p className={styles.description}>{selectedProduct.description}</p>
                <div className={styles.stockStatusDetail}><span>Còn {selectedProduct.remain}</span></div>
                <div className={styles.modalActions}>
                  <button className={styles.btnAddToCart}>Thêm vào giỏ</button>
                  <button className={styles.btnCancel} onClick={closeProductDetail}>Hủy</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer/>
    </div>
  );
}