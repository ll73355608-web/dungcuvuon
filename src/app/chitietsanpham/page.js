"use client";
import React, { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import './page.css'; 

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  if (!product) return null;

  const productImages = [
    { src: product.image, alt: product.name },
    { src: "/Cây xẻng bằng cán gỗ tay cầm 1020mm A0704S C-MART(1).jpg", alt: "Góc nhìn khác" },
    { src: "/images.jpg", alt: "Chi tiết lưỡi xẻng" },
    { src: "/ththw0102.jpg", alt: "Kích thước thực tế" },
  ];

  return (
    <div className="product-page-container">
      {/* Breadcrumb */}
      <nav className="breadcrumb">
        DỤNG CỤ CẦM TAY  &gt;  {product.category}
      </nav>

      <div className="product-card">
        {/* Cột trái: Hình ảnh */}
        <div className="image-section">
          <div className="main-image-wrapper">
            <div className="discount-tag">-{product.discount}%</div>
            <Carousel 
              showArrows={true} 
              showStatus={false} 
              showIndicators={true} 
              infiniteLoop={true} 
              className="custom-carousel"
            >
              {productImages.map((img, i) => (
                <div key={i} className="slide-img-container">
                  <img src={img.src} alt={img.alt} />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
        
        {/* Cột phải: Thông tin */}
        <div className="info-section">
          <h1 className="product-title">{product.name}</h1>
          
          <div className="price-wrapper">
            <span className="current-price">{product.price}₫</span>
            <span className="old-price">{product.oldPrice}₫</span>
          </div>

          <div className="stock-info">
            <div className="stock-bar-container">
              <div className="stock-bar-fill" style={{ width: '53%' }}></div>
            </div>
            <p className="stock-status-text">Còn 8/15 sản phẩm trong kho</p>
          </div>

          <div className="detail-block">
            <h3 className="detail-label">MÔ TẢ SẢN PHẨM</h3>
            <p className="description-content">{product.description}</p>
          </div>

          <div className="detail-block">
            <h3 className="detail-label">THÔNG SỐ KỸ THUẬT</h3>
            <table className="specs-table">
              <tbody>
                {product.specifications.map((spec, index) => (
                  <tr key={index}>
                    <td>{spec.label}</td>
                    <td>{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="purchase-section">
            <div className="quantity-selector">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
              <input type="number" value={quantity} readOnly />
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
            <div className="action-btns">
              <button className="buy-now">MUA NGAY</button>
              <button className="add-cart">THÊM VÀO GIỎ</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Page() {
  const mockProduct = {
    name: "Xẻng Vuông Cán Gỗ C-MART",
    price: "150.000",
    oldPrice: "190.000",
    discount: 21,
    category: "DỤNG CỤ ĐÀO",
    image: "/1000mm-xeng-vuong-can-go-wadfow-wse1317 (1).jpg",
    description: "Xẻng vuông chuyên dụng với lưỡi thép nhiệt luyện siêu bền. Cán gỗ sồi tự nhiên được xử lý chống ẩm, thiết kế tay cầm chữ D giúp trợ lực tối đa khi đào đất cứng hoặc xúc vật liệu.",
    specifications: [
      { label: "Thương hiệu", value: "C-MART (Đài Loan)" },
      { label: "Model", value: "A0704S" },
      { label: "Chất liệu", value: "Thép Carbon / Gỗ Sồi" },
      { label: "Chiều dài", value: "1020mm" },
      { label: "Trọng lượng", value: "1.3 kg" }
    ]
  };

  return (
    <main className="bg-light">
      <ProductCard product={mockProduct} />
    </main>
  );
}