import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';


function SearchModal(props){
    const { search } = props

    return(
          <section className="modal__main">
                {search.map(element => (
                  <Link
                  to={`/produto/${element.name.split(' ').join('-')}`} 
                  style={{textDecoration: 'none', color: ' #2c2b2b'}}
                  >
              <div className="card__container" key={element.id}>
                <div className="card__main">
                  <div className="card__image">
                    {element.image ?
                    <img className="card__image" src={element.image} alt={element.name}/>
                    : <img className="card__image" src= 'https://via.placeholder.com/470x594.png/ffffff?text=Imagem+Indisponível'
                   alt ='imagem indisponivel' />
                    }
                  </div>
                    <div className="card__details">
                      <p><strong>{element.name}</strong></p>
                      <p className="card__paragraph--installments">{element.installments}</p>
                      {element.discount_percentage ?
                      <>
                       <p className ="products__card--regularPrice">{element.regular_price}</p> 
                       <p className="products__card--actualPrice">{element.actual_price}</p>
                       </>
                       : <p className="products__card--actualPrice">{element.actual_price}</p>
                      }
                    </div>
                    </div>
                  </div>
                  </Link>
                  ))}
        </section>    
    )
}

export default SearchModal;