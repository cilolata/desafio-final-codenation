 import React, { useEffect } from 'react';
 import { useDispatch } from 'react-redux'
 import { getProducts } from '../../store/modules/products/actions'
 import Main from "../../containers/Main";
 import api from "../../services/api.json";

const HomeRoute = () => {
   
    const dispatch = useDispatch()

    useEffect(() => {
       const products = api.map((p, index) =>{
         const product = {
            id: index,
            ...p     
         }
         return product
       })

       dispatch(getProducts(products))

    }, [dispatch]);

 return(
    <Main/>
 )

}

export default HomeRoute;