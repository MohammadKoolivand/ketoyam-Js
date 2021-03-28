import {
  CHANGE_PASSWORD,
  CODE,
  FORGET_PASSWORD,
  SIGNIN,
  SIGNUP
} from '../constants/ActionTypes'

function reducer(state, action) {
  switch (action.type) {
    case SIGNIN:
      return {
        signin: true,
        signup: false,
        code: false,
        forgetPassword: false,
        changePassword: false
      }
    case SIGNUP:
      return {
        signin: false,
        signup: true,
        code: false,
        forgetPassword: false,
        changePassword: false
      }

    case CODE:
      return {
        signin: false,
        signup: false,
        code: true,
        forgetPassword: false,
        changePassword: false
      }

    case FORGET_PASSWORD:
      return {
        signin: false,
        signup: false,
        code: false,
        forgetPassword: true,
        changePassword: false
      }
    case CHANGE_PASSWORD:
      return {
        signin: false,
        signup: false,
        code: false,
        forgetPassword: false,
        changePassword: true
      }
    default:
      return {
        signin: false,
        signup: false,
        code: false,
        forgetPassword: false,
        changePassword: false
      }
  }
}
export default reducer
