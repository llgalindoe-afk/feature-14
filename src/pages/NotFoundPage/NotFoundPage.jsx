import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="not-found-shell">
      <div className="not-found-layout">
        <div className="panel not-found-stage">
          <p className="eyebrow">Error 404</p>
          <h2>Página no encontrada</h2>
          <p className="lead">Lo sentimos, la página que buscas no existe o ha sido movida.</p>
          <div style={{ marginTop: '1rem' }}>
            <Link to="/" className="button-link">
              Volver al inicio
            </Link>
          </div>
        </div>
        
        <div className="panel not-found-note">
          <h3>¿Necesitas ayuda?</h3>
          <p className="support-text">
            Explora nuestro catálogo para encontrar lo que buscas o ponte en contacto con soporte.
          </p>
          <div style={{ marginTop: '1rem' }}>
            <Link to="/products" className="button-link secondary-link">
              Ir al Catálogo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
