import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockProducts } from '../../data/mockProducts';

function ProductDetailPage() {
  const { id } = useParams();
  
  const [selectedSize, setSelectedSize] = useState("40");
  const [quantity, setQuantity] = useState(1);
  
  // Find the product by ID
  const product = mockProducts.find(p => p.id === id);

  if (!product) {
    return (
      <div className="panel" style={{ textAlign: 'center', padding: '3rem' }}>
        <h2>Producto no encontrado</h2>
        <p className="lead">El producto que buscas no existe en nuestro catálogo actual.</p>
        <div style={{ marginTop: '1.5rem' }}>
          <Link to="/products" className="button-link">
            Volver al catálogo
          </Link>
        </div>
      </div>
    );
  }

  const reviews = product.reviews || [];

  return (
    <section className="stack-xl">
      <div className="detail-breadcrumb">
        <Link to="/products" className="text-link">Inicio / Catálogo</Link>
        <span> &gt; </span>
        <span>{product.name}</span>
      </div>

      <div className="detail-layout detail-editorial elegant-detail">
        <div className="panel image-panel detail-gallery">
          <img src={product.image} alt={product.name} className="detail-image" />
        </div>

        <div className="panel stack-lg detail-info">
          <div className="detail-header-block">
            <p className="eyebrow">{product.category}</p>
            <h2>{product.name}</h2>
            <p className="lead">{product.description}</p>
          </div>

          <div className="detail-meta">
            <span>{product.category}</span>
            <strong>{product.price.toFixed(2)} €</strong>
          </div>

          <div className="detail-section">
            <p className="detail-label">Talla</p>
            <div className="size-grid">
              {["40", "41", "42", "43"].map(size => (
                <button
                  key={size}
                  type="button"
                  className={`size-chip ${selectedSize === size ? 'active-size' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="detail-section">
            <p className="detail-label">Cantidad</p>
            <div className="quantity-row quantity-large">
              <button 
                type="button" 
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
              >
                -
              </button>
              <span>{quantity}</span>
              <button 
                type="button" 
                onClick={() => setQuantity(q => q + 1)}
              >
                +
              </button>
            </div>
          </div>

          <div className="detail-actions-column">
            <button 
              type="button" 
              className="button-link submit-button"
              onClick={() => alert(`Añadido al carrito: ${quantity} x ${product.name} (Talla ${selectedSize})`)}
            >
              Añadir al carrito
            </button>
            <button type="button" className="button-link secondary-link">
              Guardar en wishlist
            </button>
          </div>

          <div className="detail-description-block">
            <p className="detail-label">Descripción</p>
            <p className="detail-copy detail-copy-plain">
              {product.name} es una pieza pensada para acompañar el día a día con una silueta cuidada, materiales cómodos y una estética limpia. Su diseño encaja con looks relajados o más pulidos, manteniendo siempre una presencia actual y fácil de combinar.
            </p>
          </div>

          <div className="detail-copy-grid">
            <div className="fake-box">
              <p className="detail-label">Envío</p>
              <p className="detail-copy">Envío en 24/48h, cambios sencillos y recogida en tienda disponible.</p>
            </div>
            <div className="fake-box">
              <p className="detail-label">Cambios y devoluciones</p>
              <p className="detail-copy">Dispones de 14 días para cambios o devoluciones, con proceso rápido y asistencia durante todo el pedido.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="panel reviews-panel">
        <p className="eyebrow">Opiniones</p>
        <h3>Opiniones de clientes</h3>
        <div className="reviews-grid">
          {reviews.length > 0 ? (
            reviews.map((rev, index) => (
              <div key={index} className="fake-box">
                <div className="review-stars" aria-label={`${rev.rating} de 5 estrellas`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className={i < rev.rating ? 'star-filled' : 'star-empty'}>★</span>
                  ))}
                </div>
                <strong>{rev.title}</strong>
                <p className="detail-copy">{rev.comment}</p>
                <p className="review-author">{rev.author}</p>
              </div>
            ))
          ) : (
            <>
              <div className="fake-box">
                <div className="review-stars" aria-label="5 de 5 estrellas">
                  <span className="star-filled">★</span>
                  <span className="star-filled">★</span>
                  <span className="star-filled">★</span>
                  <span className="star-filled">★</span>
                  <span className="star-filled">★</span>
                </div>
                <strong>Diseño excelente</strong>
                <p className="detail-copy">Se adapta perfectamente al día a día. Estética súper limpia.</p>
                <p className="review-author">Cliente verificado</p>
              </div>
              <div className="fake-box">
                <div className="review-stars" aria-label="4 de 5 estrellas">
                  <span className="star-filled">★</span>
                  <span className="star-filled">★</span>
                  <span className="star-filled">★</span>
                  <span className="star-filled">★</span>
                  <span className="star-empty">★</span>
                </div>
                <strong>Muy recomendable</strong>
                <p className="detail-copy">Calidad excelente, aunque tardó un poco más en llegar.</p>
                <p className="review-author">Cliente verificado</p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default ProductDetailPage;
