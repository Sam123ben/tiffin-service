import React from 'react';
import '../assets/styles/LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">Food Business Site</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#social-media">Social Media</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#marketplace">Marketplace</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#grocery-delivery">Grocery Delivery</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <section className="welcome-section text-center">
        <div className="container">
          <h1 className="display-4">Welcome to Food Business Site</h1>
          <p className="lead">Explore our platform's unique offerings: a food-specific social media, a homemade food marketplace, and a grocery delivery service.</p>
        </div>
      </section>

      <section className="overview-section">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img src={require('../assets/images/social-media-image.jpg').default} className="card-img-top" alt="Social Media" />
                <div className="card-body">
                  <h5 className="card-title">Social Media</h5>
                  <p className="card-text">Connect with food enthusiasts, share recipes, and participate in online food competitions and festivals.</p>
                  <a href="#social-media" className="btn btn-primary">Explore Social Media</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src={require('../assets/images/marketplace-image.jpg').default} className="card-img-top" alt="Marketplace" />
                <div className="card-body">
                  <h5 className="card-title">Marketplace</h5>
                  <p className="card-text">Buy and sell homemade food. Support homemakers and enjoy delicious, quality meals.</p>
                  <a href="#marketplace" className="btn btn-primary">Visit Marketplace</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src={require('../assets/images/grocery-delivery-image.jpg').default} className="card-img-top" alt="Grocery Delivery" />
                <div className="card-body">
                  <h5 className="card-title">Grocery Delivery</h5>
                  <p className="card-text">Get groceries delivered to your door. Convenient, fast, and reliable service for our business owners and chefs.</p>
                  <a href="#grocery-delivery" className="btn btn-primary">Order Groceries</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;