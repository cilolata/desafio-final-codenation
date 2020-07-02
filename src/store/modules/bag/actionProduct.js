export function addToBag(product){
  return {
    type: "ADD_TO_BAG",
    payload: product,
  }
}


export function removeFromBag(index){
  return {
    type:"REMOVE_FROM_BAG",
    index: index,
  }
}