const cocktailReducer = (state, action) => {
   switch (action.type) {
      case "GET_COCKTAILS":
         return {
            ...state,
            cocktails: action.payload,
            isLoading: false,
         };

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

      case "CLEAR_COCKTAILS":
         return {
            ...state,
            cocktails: null,
         };

      default:
         return state;
   }
};

export default cocktailReducer;
