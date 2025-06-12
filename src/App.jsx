import { Suspense, lazy, useEffect, useMemo, useState } from "react";
import useCartStore from "./store/cartStore";
import useOffcanvasStore from "./store/offcanvasStore";
import useTotalStore from "./store/totalProductStore";
import useBalanceStore from "./store/balanceStore";
import useSizeFilterStore from "./store/sizeFilterStore";

import Nav from "./components/Nav";
import TitleTypeWriter from "./components/TitleTypeWriter";
import useFetch from "./hooks/useFetch";

// 💤 Lazy load de componentes
const ProductsList = lazy(() => import("./components/ProductsList"));
const Footer = lazy(() => import("./components/Footer"));
const SidebarOffCanvas = lazy(() => import("./components/SidebarOffCanvas"));
const SizeFilter = lazy(() => import("./components/SizeFilter"));
const SizeFilterSkeleton = lazy(() => import("./components/SizeFilterSkeleton"));

const App = () => {
  const { cart } = useCartStore();
  const { getTotalProducts } = useTotalStore();
  const { toggleBalanceo } = useBalanceStore();
  const { isVisible, toggleOffcanvas } = useOffcanvasStore();
  const { selectedSizes } = useSizeFilterStore();

  const { data: products, loading, error } = useFetch("/json/products.json");
  const [isSimulatedLoading, setIsSimulatedLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsSimulatedLoading(false), 1000);

    if (cart.length > 0) {
      const totalProductsBalanceo = getTotalProducts(cart);
      if (!isVisible) toggleOffcanvas(true);
      if (totalProductsBalanceo > 0) toggleBalanceo(true);
    }

    return () => clearTimeout(timer);
  }, [cart, getTotalProducts, toggleBalanceo, toggleOffcanvas]);

  const filteredProducts = useMemo(() => {
    if (!selectedSizes.length) return products;
    return products.filter(product =>
      selectedSizes.some(size => product.availableSizes.includes(size))
    );
  }, [selectedSizes, products]);

  const totalFiltered = useMemo(() => {
    if (selectedSizes.length === 0) return products?.length || 0;
    return filteredProducts.length;
  }, [selectedSizes, filteredProducts, products]);

  return (
    <>
      <Nav />
      <div className="container mt-5 mb-5">
        <TitleTypeWriter />
        <div className="row">
          {loading || isSimulatedLoading ? (
            <Suspense fallback={<div>Cargando filtros...</div>}>
              <SizeFilterSkeleton />
            </Suspense>
          ) : error ? (
            <div className="col-12">
              <h2 className="text-center text-danger">
                Error cargando productos: {error.message}
              </h2>
            </div>
          ) : filteredProducts.length > 0 ? (
            <>
              <div className="col-md-2">
                <Suspense fallback={<div>Cargando filtro...</div>}>
                  <SizeFilter products={products} totalFiltered={totalFiltered} />
                </Suspense>
              </div>
              <div className="col-md-10">
                <Suspense fallback={<div>Cargando productos...</div>}>
                  <ProductsList products={filteredProducts} />
                </Suspense>
              </div>
            </>
          ) : (
            <div className="col-12">
              <p className="text-center">No hay productos disponibles.</p>
            </div>
          )}
        </div>
      </div>

      {/* Sidebar del carrito */}
      {isVisible && (
        <Suspense fallback={<div>Cargando carrito...</div>}>
          <SidebarOffCanvas />
        </Suspense>
      )}

      {/* Footer */}
      <Suspense fallback={<div>Cargando pie de página...</div>}>
        <Footer />
      </Suspense>
    </>
  );
};

export default App;
