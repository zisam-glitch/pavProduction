import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { FiFilter, FiShoppingCart, FiHeart } from "react-icons/fi";
import "./Shop.css"; // We'll create this for custom styles

const Shop = () => {
  // Sample categories for the sidebar
  const categories = [
    'Electric Toothbrushes',
    'Manual Toothbrushes',
    'Toothpaste',
    'Dental Floss',
    'Mouthwash',
    'Teeth Whitening',
    'Denture Care',
    'Oral Care Kits',
    'Tongue Cleaners',
    'Interdental Brushes'
  ];

  // Sample price ranges
  const priceRanges = ['Under $10', '$10 - $25', '$25 - $50', 'Over $50'];

  // Sample products with realistic dental product names and random images
  const products = [
    {
      id: 1,
      name: 'Generation B - Soft Bamboo Toothbrush',
      category: 'Toothbrush',
      price: 2.95,
      originalPrice: 3.55,
      rating: Math.floor(Math.random() * 2) + 4, // 4-5 stars
      image: 'https://res.cloudinary.com/dv5noi9zl/image/upload/v1769770744/WhatsApp_Image_2026-01-30_at_4.58.45_PM_wj27jm.jpg'
    },
    {
      id: 2,
      name: 'Generation X Smart Electric Toothbrush',
      category: 'Toothbrush',
      price: 95,
      originalPrice: 120.00,
      rating: Math.floor(Math.random() * 2) + 4,
      image: 'https://res.cloudinary.com/dv5noi9zl/image/upload/v1769766833/WhatsApp_Image_2026-01-30_at_3.52.42_PM_ymmzw0.jpg'
    },
    {
      id: 3,
      name: 'Brushing for Life Baby & Toddler Training Toothbrush',
      category: 'Toothbrush',
      price: 2.95,
      originalPrice: 3.55,
      rating: Math.floor(Math.random() * 4) + 3, // 3-5 stars
      image: 'https://res.cloudinary.com/dv5noi9zl/image/upload/v1769766955/WhatsApp_Image_2026-01-30_at_3.55.28_PM_riq4te.jpg'
    },
    {
      id: 4,
      name: 'Mars Dental Kids’ Toothbrush (Ages 3–6 Years)',
      category: 'Toothbrush',
      price: 2.95,
      originalPrice: 3.55,
      rating: Math.floor(Math.random() * 2) + 4,
      image: 'https://res.cloudinary.com/dv5noi9zl/image/upload/v1769768024/WhatsApp_Image_2026-01-30_at_4.13.18_PM_odw9rd.jpg'
    },
    {
      id: 5,
      name: 'Mars Dental Baby Finger Brush (For Newborns & Infants)',
      category: 'Dental Floss',
      price: 2.99,
      originalPrice: 3.55,
      rating: Math.floor(Math.random() * 4) + 3,
      image: 'https://res.cloudinary.com/dv5noi9zl/image/upload/v1769770447/WhatsApp_Image_2026-01-30_at_4.53.24_PM_nitauf.jpg'
    },
    

   
  ];

  return (
    <>
      <div className="st-height-b125 st-height-lg-b80" id="home"></div>
      <div className="shop-page">
        {/* Coming Soon Banner */}
        <div className="coming-soon-banner">
          <div className="container">
            <h2>Our Online Shop is Coming Soon!</h2>
            <p>
              We're working hard to bring you the best dental care products.
              Stay tuned for our launch!
            </p>
          </div>
        </div>

        <Container className="py-5">
          <Row>
            {/* Sidebar */}
            <Col lg={3} className="mb-4">
              <div className="sidebar">
                <h5 className="mb-4">
                  <FiFilter className="me-2" /> Filters
                </h5>

                {/* Categories */}
                <div className="filter-section mb-4">
                  <h6>Categories</h6>
                  <div className="category-list">
                    {categories.map((category, index) => (
                      <Form.Check
                        key={index}
                        type="checkbox"
                        id={`category-${index}`}
                        label={category}
                        className="mb-2"
                      />
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="filter-section mb-4">
                  <h6>Price Range</h6>
                  <div className="price-list">
                    {priceRanges.map((range, index) => (
                      <Form.Check
                        key={index}
                        type="radio"
                        name="price-range"
                        id={`price-${index}`}
                        label={range}
                        className="mb-2"
                      />
                    ))}
                  </div>
                </div>

                {/* Rating */}
                <div className="filter-section">
                  <h6>Rating</h6>
                  {[4, 3, 2, 1].map((rating) => (
                    <Form.Check
                      key={rating}
                      type="checkbox"
                      id={`rating-${rating}`}
                      label={`${rating} Stars & Up`}
                      className="mb-2"
                    />
                  ))}
                </div>
              </div>
            </Col>

            {/* Products Grid */}
            <Col lg={9}>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h4>All Products</h4>
                <div className="sort-options">
                  <Form.Select size="sm" style={{ width: "200px" }}>
                    <option>Sort by: Featured</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest Arrivals</option>
                    <option>Best Sellers</option>
                  </Form.Select>
                </div>
              </div>

              <div className="products-grid">
                {products.map((product) => (
                  <Card key={product.id} className="product-card">
                    {/* <div className="product-badge">
                      {product.category.includes('Electric') ? '' : ''}
                    </div> */}
                    <div className="product-image">
                      <Card.Img
                        variant="top"
                        src={product.image}
                        alt={product.name}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = `https://via.placeholder.com/300x200?text=${encodeURIComponent(product.name)}`;
                        }}
                      />
                      <div className="product-actions">
                        <Button variant="light" className="action-btn" title="Add to cart">
                          <FiShoppingCart />
                        </Button>
                        <Button variant="light" className="action-btn" title="Add to wishlist">
                          <FiHeart />
                        </Button>
                      </div>
                    </div>
                    <Card.Body>
                      <Card.Title className="product-title">{product.name}</Card.Title>
                      <div className="product-category">{product.category}</div>
                      <div className="d-flex justify-content-between align-items-center mt-2">
                        <div className="price">
                          <span className="current-price">
                            £{product.price}
                          </span>
                          {product.originalPrice > product.price && (
                            <span className="original-price">
                              £{product.originalPrice}
                            </span>
                          )}
                        </div>
                        <div className="rating">
                          {[...Array(5)].map((_, i) => (
                            <span
                              key={i}
                              className={i < product.rating ? 'star filled' : 'star'}
                            >
                              ★
                            </span>
                          ))}
                          <span className="rating-count ms-1">
                            ({Math.floor(Math.random() * 100 + 10)})
                          </span>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Shop;
