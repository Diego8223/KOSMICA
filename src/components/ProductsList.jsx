import useCartStore from "../store/cartStore";
import { BsCartPlus } from "react-icons/bs";
import { useState } from "react";

const ProductsList = ({ products }) => {
  const { addToCart } = useCartStore();
  const [showNotification, setShowNotification] = useState(false);
  const [notificationProduct, setNotificationProduct] = useState("");

  // Función para formatear precios en COP
  const formatPriceCOP = (price) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    setNotificationProduct(product.title);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };

  return (
    <div className="container my-5">
      {/* Notificación estilo KOSMICA */}
      {showNotification && (
        <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 11 }}>
          <div className="alert text-white d-flex align-items-center" style={{ backgroundColor: '#916ad9' }}>
            <div>
              <strong>{notificationProduct}</strong> añadido al carrito
            </div>
          </div>
        </div>
      )}

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {products.map((product) => (
          <div className="col" key={product.id}>
            <div className="card custom-card h-100 shadow-sm border-0">
              <div className="position-relative overflow-hidden" style={{ height: '220px' }}>
                <img
                  src={`/imgs-api/${product.id}.png`}
                  className="card-img-top h-100 object-fit-contain p-3"
                  alt={product.title}
                  onError={(e) => {
                    e.target.src = '/imgs-api/placeholder.png';
                    e.target.className = 'card-img-top h-100 object-fit-cover';
                  }}
                  style={{ 
                    objectPosition: 'center',
                    WebkitMaskImage: 'linear-gradient(black 80%, transparent)',
                    maskImage: 'linear-gradient(black 80%, transparent)'
                  }}
                />
                {product.isFreeShipping && (
                  <span className="badge custom-badge position-absolute top-0 end-0 m-2">
                    
                  </span>
                )}
                {product.discount > 0 && (
                  <span className="badge bg-danger position-absolute top-0 start-0 m-2">
                    -{product.discount}%
                  </span>
                )}
              </div>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title mb-3 title-product text-truncate">{product.title}</h5>
                
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div>
                    {product.originalPrice && (
                      <span className="text-muted text-decoration-line-through me-2 detalles-product">
                        {formatPriceCOP(product.originalPrice)}
                      </span>
                    )}
                    <span className="h5 precio fw-bold">
                      {formatPriceCOP(product.price)}
                    </span>
                  </div>
                  {product.installments > 0 && (
                    <small className="text-success fw-bold detalles-product">
                      {product.installments}x
                    </small>
                  )}
                </div>

                <div className="mb-3">
                  <p className="small mb-1 color-gris">Productos disponibles:</p>
                  <div className="d-flex flex-wrap gap-2">
                    {product.availableSizes.map((size, index) => (
                      <span
                        key={index}
                        className="tallas border rounded-circle text-center d-inline-flex justify-content-center align-items-center"
                        style={{
                          borderColor: '#916ad9'
                        }}
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  className="btn btn-cart w-100 mt-auto d-flex align-items-center justify-content-center py-2"
                  onClick={() => handleAddToCart(product)}
                >
                  <span>Agregar al carrito</span>
                  <BsCartPlus className="ms-2" size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;