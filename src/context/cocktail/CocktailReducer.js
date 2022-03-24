const cocktailReducer = (state, action) => {
   switch (action.type) {
      case "GET_COCKTAIL":
         return {
            ...state,
            cocktail: action.payload,
            isLoading: false,
         };
      case "SET_LOADING":
         return {
            ...state,
            isLoading: true,
         };

      default:
         return state;
   }
};

export default cocktailReducer;
