import { constants } from '../Constants';

export const alert = (state = {}, action) => {
  switch (action.type) {
    case constants.SUCCES:
      return {
        type: 'alert-success',
        message: action.message
      };
    case constants.ERROR:
      return {
        type: 'alert-danger',
        message: action.message
      }
    case constants.CLEAR:
      return {};
    default:
      return state;
  }
}