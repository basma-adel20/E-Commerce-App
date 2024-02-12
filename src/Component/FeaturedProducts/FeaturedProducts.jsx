import React, { useEffect, useState } from 'react'
import style from './FeaturedProducts.module.css'
import axios from 'axios'
import { Link } from 'react-router-dom';


export default function FeaturedProducts() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  async function getProducts() {
    let {data} = await axios.get('https://ecommerce.routemisr.com/api/v1/products')
    setProducts(data.data);
    setLoading(false);
  }

  
  useEffect(()=>{
   getProducts()
  },[])

  return <>
    <h2 className='p-2 bg-body-secondary my-2 text-center'>Featured Products</h2>
    {loading ?
     <div className="row justify-content-center align-items-center vh-100 ">
         <div className='text-center'>
             <i className='fas fa-spinner fa-spin fa-3x'></i>
         </div>
     </div>
    : <div className="row gy-4">
      {products.map(product  =>
        <div key={product.id} className="col-lg-2">
          <Link to={`/productdetailes/${product.id}`}>
            <div className="product p-2">
              <img src={product.imageCover} alt={product.title} className='w-100' />
              <span className='font-sm text-main'>{product.category.name}</span>
              <h3 className='h5'>{product.title.split(' ').slice(0,2).join(' ')}</h3>
              <div className="d-flex py-3 justify-content-between align-items-center">
                <span className='font-sm'>{product.price} EGP</span> 
                <span className='font-sm'>
                  <i className='fas fa-star rating-color me-1'></i>
                  {product.ratingsAverage}  
                </span> 
              </div>
              <button className='btn bg-main text-main-light w-100 btn-sm'>Add To Cart</button>
            </div>
          </Link>
      </div>
      )}
    </div> }
  </>
}
