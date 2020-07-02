import React, { useState } from "react";
import './style.css';
import '../../css/global.css'
import { useSelector, useDispatch } from 'react-redux'
import { addToBag } from '../../store/modules/bag/actionProduct'


function Product(props){
  const [isSize, setIsSize] = useState(false);
  const [size, setSize ] = useState('');
  const dispatch = useDispatch();

  const singleProduct = useSelector(state => state.singleProduct)

  
  function handleAddProduct(singleProduct, size){
    const product = singleProduct.map(p => {
      return {
        id: p.id,
        name: p.name,
        installments: p.installments,
        price: p.actual_price,
        image: p.image,
        installmentes: p.installmentes,
        size: size,      
      }
    })
    dispatch(addToBag(product))
  }


  function handleSize(size){
    setIsSize(true)
    setSize(size)
  }

    return (
      <section>
        {singleProduct.map(p => (
        <div className="section__product" key={p.id}> 
              <div className="product__img--container">
                { p.image 
                  ? 
                  <img className="img__product" src={ p.image} alt={ p.name}/>
                  : <img className="img__product" src= 'https://via.placeholder.com/470x594.png/ffffff?text=Imagem+Indisponível'
                  alt ='imagem indisponivel' />
                }     
              </div> 
          <>
          <div className="product__details--form">
            <h3>{ p.name}</h3>
              <div className="product__container">                      
                { p.actual_price ===  p.regular_price ?
                  <p className="product__price product__price--actualPrice">{p.actual_price}</p>
                  :
                  <>
                  <p className="product__price product__price--regularPrice " >{p.regular_price}</p>
                  <p className="product__price product__price--actualPrice ">{p.actual_price}</p>
                  </>
                }
                <p className="product__price product__price--installmentes ">em até {p.installments}</p>
                  <div className="product__sizes">
                    <p className="product__sizes--paragraph">Escolha um tamanho</p>
                      <div className="product__sizes--container">
                        {p.sizes.map( s => (
                          s.available
                          ? <input 
                          key={s.sku}
                          type="button" 
                          className="product__size--button"  
                          name={s.size} 
                          value={s.size}  
                          title={s.size} 
                          onClick={() => handleSize(s.size)}
                          />
                          : null
                        ))}
                      </div> 
                    </div>
               </div>
               {isSize  ?
               <>
              <button 
              type="submit" 
              className="product__button--submit"
              onClick={()=>handleAddProduct(singleProduct, size)}
              >
                  Adicionar à sacola
                </button>
                </> 
              :    <>
              <button 
              type="submit" 
              className="product__button--submit product__button--erro" 
              disabled

              >
                  Adicionar à sacola
                </button>
                </> 
              }    
        </div>
        </>
      </div>
          ))}
    </section>
    )
};



export default Product;