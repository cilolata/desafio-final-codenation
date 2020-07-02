import React, {useState} from "react";
import { useSelector } from 'react-redux'
import './style.css';

import Modal from "../Modal/index";
import { FaSearch, FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";


function Header() {
  const productBag = useSelector(state => state.bag)

  const [IsModalVisible, setIsModalVisible] = useState(false)
  const [IsParamVisible, setIsParamVisible] = useState('')


  const handleShowModal = (event, param)=>{
    setIsModalVisible(true)
    setIsParamVisible(param)
  }

  const handleCloseModal = event =>{
    setIsModalVisible(false)
    
  }

  return (
    <>
      <header>
        <div className="header__container">
          <Link to="/" style={{ 
             width: "50%",
             cursor: "pointer",
             color:  "#2c2b2b",
             fontSize: "1.3rem",
             textDecoration: "none",
           }}>
             <p className="header__brand--name">FASHIONISTA</p>
           </Link>
          <div className="header__icons">
            <button type="button" className=" button__icons button__icons--search" 
            onClick={(event)=> handleShowModal(event, "search")}>
              <FaSearch />
            </button>
            <button type="button" className=" button__icons button__icons--cart" onClick={(event)=> handleShowModal(event, "bag")}>
              <FaShoppingBag />
              {productBag.length === 0
              ? null
               :  <span className="button__cart--productsSize">{productBag.length}</span>
              }
            
            </button>
            </div>
            {IsModalVisible &&
            <Modal
             handleCloseModal={handleCloseModal}
             IsParamVisible={IsParamVisible}
             />
            }
            </div>          
        </header>
    </>
  );
}

export default Header;
