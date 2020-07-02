export default function singleProduct(state = [] , action){
    const { type, payload } = action

    switch (type) {
        case "SET_PRODUCT": 
            return  [ payload ]

       
     
            default:
                return state;
                
            }
        }
