import React from 'react';
import ProductGrid from '../../components/ProductGrid/ProductGrid';
import { mockProducts } from '../../data/mockProducts';

function ProductsPage() {
  return (
    <section>
      <ProductGrid products={mockProducts} />
    </section>
  );
}

export default ProductsPage;
