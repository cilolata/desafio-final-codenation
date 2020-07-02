import React, { useState } from "react";
import { useSelector } from 'react-redux';
import './style.css';

import MainBag from '../../components/MainBag';
import SearchModal from '../../components/SearchModal';
import Footer from '../../components/Footer';

import {  FaArrowLeft } from "react-icons/fa";

function Modal(props){
  const products = useSelector(state => state.products)
  const [search, setSearch] = useState([])
  const {IsParamVisible, handleCloseModal} = props

  const handleChange = event =>{
    const findProduct = products.filter(product => product.name.toLowerCase().includes(event.target.value.toLowerCase()))
    setSearch(findProduct)    
  }
 
  return (  
    <section>
      <>
          {IsParamVisible === 'search' ?
              <div className="modal">
              <div className="modal__container--search  modal__container--fadeIn">
                <div className="modal__header">
                <button className="modal__button" onClick={handleCloseModal}>
                  <FaArrowLeft />
                </button>
                <p className="modal__header--p">Buscar Produtos</p>
              </div>
              <div className="modal__main">
                <form className="form__search">
                <input 
                className="input__search" 
                type="text" 
                placeholder="Busca por produto..." 
                title="Busca por produto"
                onChange={handleChange}
                />
                </form>
                <SearchModal
                search={search}
                  />
              </div>
              </div>
            </div>
          : <div className="modal">
                <div className="modal__container--bag  modal__container--fadeIn">
                  <div className="modal__header">
                    <button className="modal__button" onClick={handleCloseModal}>
                      <FaArrowLeft />
                    </button>
                  <p className="modal__header--p">Buscar Produtos</p>
                </div>
                <MainBag />
               <Footer/>
              </div>
            </div>
          }
     </>
    </section>
  )
}

export default Modal;