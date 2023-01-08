const INITIAL_STATE = {
  allProduct: [],
  isLoadingProduct: true,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GETALLPRODUCT":
      return { ...state, allProduct: action.allProduct };
    case "LOADINGPRODUCT":
      return { ...state, isLoadingProduct: true };
    case "ALLPRODUCTLOAD":
      return { ...state, isLoadingProduct: false };
    default:
      return state;
  }
};
