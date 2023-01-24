const INITIAL_STATE = {
  allProduct:[],
  isLoadingProduct: true,
  currentPageAPI:0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GETALLPRODUCT":
      let newData = [...state.allProduct,...action.allProduct]
      return { ...state, allProduct: newData};
    case "LOADINGPRODUCT":
      return { ...state, isLoadingProduct: true };
    case "ALLPRODUCTLOAD":
      return { ...state, isLoadingProduct: false };
    case "NEXTPAGE":
      return {
        ...state,currentPageAPI:state.currentPageAPI + 1
      }
    default:
      return state;
  }
};
