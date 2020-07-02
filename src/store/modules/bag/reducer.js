export default function productBagSize(state=[] , action){
  const { type, payload, index } = action
        switch (type) {
          case "ADD_TO_BAG": 
          return [
            ...state,
            payload
          ]

          case "REMOVE_FROM_BAG":
             return state.filter((item, i) => i !== index)

      
            
          default:
            return state;

        }

}



