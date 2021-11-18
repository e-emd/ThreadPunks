const initialState = {
  isLoading: true,
};

const punksDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DETAILS':
      return {
        ...state,
        isLoading: false,
      };
    case 'LOADING_DETAILS':
      return {
        ...state,
        isLoading: true,
      };
    default:
      return {
        ...state,
      };
  }
};

export default punksDetailsReducer;
