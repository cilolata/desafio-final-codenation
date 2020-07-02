import React from 'react'
import Product from '../../containers/Product';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setProduct } from '../../store/modules/singleProduct/actions';

const ProductRoute = () => {
  const products = useSelector(state => state.products) 
  const dispatch = useDispatch()
  
  const { name } = useParams();
  
  const param = name.toUpperCase();

  const singleProductParam = products.filter(p => p.name.split(' ').join('-').includes(param))

    dispatch(setProduct(singleProductParam[0]))

 
    return (
            <Product/>
        );
};

export default ProductRoute;