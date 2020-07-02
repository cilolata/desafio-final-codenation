import React from "react";
import './style.css';
import { useSelector } from 'react-redux';

import { Link } from "react-router-dom";

function Main(props) {

const products = useSelector(state => state.products)
  
  return (
      <main>
         <div className="products">
          <div className="products__header">{products.length} items</div>
          <div className="products__container">
           {products.map(p => (
            <figure className="products__card" key={p.id} >
              <Link 
              to={`/produto/${p.name.split(' ').join('-')}`} 
              style={{textDecoration: 'none', color: ' #2c2b2b'
              }}>
              <div className="products_card--header" >
                {p.discount_percentage ?
                <span className="products__card--discount">
                 -{p.discount_percentage}
                </span>
                 : "" }
                 {p.image ? 
                <img className="products__card--img" src={p.image} alt={p.name} />
                : <img className="products__card--img" src= 'https://via.placeholder.com/470x594.png/ffffff?text=Imagem+Indisponível'
                 alt ='imagem indisponivel' />
               }
              </div>
              <div className="products__card--main">
                <h3 className="products__card--name">{p.name}</h3>
                {p.discount_percentage ?
                <div className="products__card--price"> 
                  <span className ="products__card--regularPrice">{p.regular_price}</span> 
                  <span className="products__card--actualPrice">{p.actual_price}</span>
                </div>
                : <span className="products__card--actualPrice">{p.actual_price}</span>
              }
             </div>
             </Link>
            </figure>
          ))}
          </div>
        </div> 
      </main>
  );
}

export default Main;
