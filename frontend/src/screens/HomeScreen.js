import React, { useEffect, useReducer, useState } from 'react';
//import { Link } from 'react-router-dom';
//import data from '../data';
import axios from 'axios';
import logger from 'use-reducer-logger';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from '../components/Product';
import { Helmet } from 'react-helmet-async';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { getError } from '../utils';





const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};


function HomeScreen() {
  
 // const [products, setProducts] = useState([]);   //After installing Axios in the home screen function, it's time to add the finest state to save the products
 const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
  products: [],
  loading: true,
  error: '',
});

  useEffect(() => {    

  
    const fetchData = async () => {
    dispatch({ type: 'FETCH_REQUEST '});
    try {
      const result = await axios.get('/api/products');
      dispatch({ type: 'FETCH_SUCCESS',payload: result.data });

    } catch (err) {
      dispatch({ type: 'FETCH_FAIL', payload: err.message});

    }
    };
    fetchData();
  }, []);
  return (
    <div>
      <Helmet>
      <title>Errandos
      </title>
      </Helmet>
     
              
      <h2 className='h1-position'>Featured Services
      </h2>
      
      
      <div className="products">
      {loading ? (
          <LoadingBox />
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <Row>
            {products.map((product) => (
              <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
                <Product product={product}></Product>
              </Col>
            ))}
          </Row>
        )}
      </div>
<div className="text-position">

      <h1 className='h1-position'>How does it work?</h1>
      <div className='text-align'>
      There aren't enough hours in the day! We get it. We’re here to help when you need a second set of hands or wheels to finish your to-do list and make the most of your day.<br />

<strong>1.</strong>Pick a service you want: pick up prescriptions, make a trip to the post office, or complete any other one-off on your list.<br />
<strong>2.</strong>Set you demands,time and location on the map.Trusted and timely service providers will take it from here.<br />
<strong>3.</strong> Enjoy rest of you day!
      </div>
      </div >
      <div className="text-position">
      <h1>Frequently asked questions</h1>
      <div className='align-nav'>
      <div className='nav-style'>
     
      <nav role="navigation">
  <ul>
   
    <li><a href="#">Can Service providers complete multi-stop errans?</a>
      <ul class="dropdown">
        <li><a href="#">Yup! Provide your Tasker with location details and consider things like distance between them and time spent at each location.</a></li>
        
      </ul>
    </li>
   
  </ul>
</nav>
</div>
</div>
<div className='align-nav'>
<div className='nav-style'>
  
      <nav role="navigation">
  <ul className="home-page">
   
    <li><a href="#">Are there errands that Errandos can’t do?</a>
      <ul class="dropdown">
        <li><a href="#">Service providers will not run errands that are illegal or prohibited by local regulations. In addition, Taskers are allowed to decline tasks that they may not feel comfortable with or capable of at their discretion..</a></li>
        
      </ul>
    </li>
   
  </ul>
</nav>

</div>
</div>
</div>
<div className="text-position">
      <h1>Get more done on the go</h1>
      <div className='text-align'>
      <strong>Find us soon on GooglePlay and Apple Store</strong>
      <img src="images/Googleplay.png"></img>
      </div>
      
      
      
      </div>
      <footer>
        <div className='text-center'>All rights reserved</div>
        <div class="gem-contacts-item gem-contacts-address">Corporate Office :<br />
        Doon House, B-275(A), First floor<br />
                    
                  </div>
                  <div class="gem-contacts-item gem-contacts-phone"><i class="fa fa-phone" aria-hidden="true"></i> Phone: <a href="">+91-9122588799</a>
                  </div>
      </footer>
      
    
    </div>
    
    
  );

}
export default HomeScreen;