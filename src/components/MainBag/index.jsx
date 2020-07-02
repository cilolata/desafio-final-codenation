import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import './main.css';
import {  MdDelete } from 'react-icons/md';
import { removeFromBag } from '../../store/modules/bag/actionProduct';

function MainBag(props){
  const productBag = useSelector(state => state.bag)
  const dispatch = useDispatch()


  const handleDeleteProduct = (element) =>{
    dispatch(removeFromBag(element))

  }


    return(
      <section className="modal__main--bag">
          {productBag.map(p => (
            p.map(element => {
              return( 
              <div className="card__bag--container" key={element.id}>
                <div className="card__imagem">
                  {element.image ?
                  <img className="card__bag--image" src={element.image} alt={element.name}/>
                  : <img className="card__bag--image" src= 'https://via.placeholder.com/470x594.png/ffffff?text=Imagem+Indisponível'
                 alt ='imagem indisponivel' />
                  }
                </div>
                  <div className="card__bag--details">
                    <p><strong>{element.name}</strong></p>
                         <p>Tam: {element.size}</p>     
                  </div>
                  <div className="card__price">
                    <p><strong>{element.price}</strong></p>
                    <p className="card__paragraph--installments">{element.installments}</p>
                    <MdDelete
                    className="bag__delete"
                    onClick={()=>handleDeleteProduct(productBag.indexOf(p))}
                    />
                  </div>
                </div>
              )
            })
            ))}
      </section>    
    )
}



export default MainBag;