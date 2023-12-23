import {
    SHOW_NAVBAR
} from '../types/UserTypes'

const INITIAL_STATE = {
    showNavbar: true,
  };

  const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case SHOW_NAVBAR:
        {
            const showNavbar = action.payload;
            return {...state, showNavbar:showNavbar};
        }
        default:
            return state;
    }
  };

  export default reducer;