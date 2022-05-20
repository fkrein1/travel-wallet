const INITIAL_STATE = {
  trip: 'Las Vegas',
};

const tripReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'ADD_TRIP':
    return { ...state, trip: action.payload };
  default:
    return state;
  }
};

export default tripReducer;
