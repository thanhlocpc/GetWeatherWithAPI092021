const fetchDefaut = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  cityName: null,
  temp:null
};

const fetchTempReducer = (state = fetchDefaut, action) => {
  console.log(action);
  if (action.type === 'FETCH_LOADING') {
    return {
      isLoading: true,
      isSuccess: false,
      isError: false,
      cityName: null,
      temp:null
    };
  }

  if (action.type === 'FETCH_SUCCESS') {
    return {
      isLoading: false,
      isSuccess: true,
      isError: false,
      cityName: action.cityName,
      temp:action.temp
    };
  }
  if (action.type === 'FETCH_ERROR') {
    return {
      isLoading: false,
      isSuccess: false,
      isError: true,
      cityName: null,
      temp:null
    };
  }
  return state;
};

export default fetchTempReducer;