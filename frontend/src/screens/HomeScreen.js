import React , { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom';

import { Row, Col } from 'react-bootstrap'
import axios from 'axios'
import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listProducts } from '../actions/productActions'

function HomeScreen({ history }) {
  const dispatch = useDispatch()
  const productList = useSelector(state => state.productList)
  const { error, loading, products, page, pages } = productList
  console.log(products)

  const location = useLocation();
  let keyword = location.search;
  useEffect(() => {
      dispatch(listProducts(keyword))

  }, [dispatch, keyword])

  return (
      <div>
          {!keyword }

          <h1>Latest Products</h1>
          {loading ? 
          <Loader /> 
              : error ? 
               <Message variant='danger'>{error}</Message>
                  :
                  <div>

                      <Row>
                          {products &&  products.map(product => (
                              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                  <Product product={product} />
                              </Col>
                          ))}
                      </Row>
                      {/* <Paginate page={page} pages={pages} keyword={keyword} /> */}
                  </div>
          }
      </div>
  )
}

export default HomeScreen
