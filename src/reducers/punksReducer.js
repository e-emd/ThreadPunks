const initialState = {
  isLoading: true,
};

const punksReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PUNKS':
      return {
        ...state,
        isLoading: false,
      };
    case 'LOADING_PUNKS':
      return {
        ...state,
        isLoading: true,
      };
    default:
      return { ...state };
  }
};

export default punksReducer;
