import React from "react";
import './style.css';
import {useSelector} from 'react-redux'
import { format } from '../../utils/format'

function Footer(){
  const productBagPrice = useSelector(state => state.bag.map(p =>{
    const reduce = p.map( t =>{
    const splitCifrão = t.price.split("R$").join().trim()
    const replace = splitCifrão.replace(',' , '').trim()
    const replaceValue = replace.replace(',' , '.')
    return  replaceValue
    })
    
    return reduce
  })
)

const totalBag = productBagPrice.reduce((acc, value)=>{ 
  return acc = parseFloat(acc) + parseFloat(value)
},0)

  return(
        <footer className="modal__footer">
        <span className="footer__total">TOTAL : {format(totalBag)}</span>
      </footer>
    )
}

export default Footer;