import {usersAPI} from "../api/api";

const SETAUTH = 'SETAUTH'

let initstate = {
    userid: '',
    login: '',
    email: '',
    isAuth: false
}
const reducerAuth = (state = initstate, action) => {
    switch (action.type) {
        case SETAUTH:
           return {
               ...state,
               ...action.data

           }
        default:
            return state
    }
}
export const SetAuth = (id,login,email,isAuth) => ({type: SETAUTH,data:{id,login,email,isAuth }})
export const AuthThunk = (dispatch)=> {
    return (dispatch)=> {
        usersAPI.apiAuth().then(response => {
            console.log(response.data)
            if (response.data.resultCode === 0) {
                let {id,login,email} = response.data.data
                dispatch(SetAuth(id,login,email,true))
           }
    })
}
}
export const AuthThunkLogin = (email,password,rememberMe)=> {
    return (dispatch)=> {
        usersAPI.apiLogin(email,password,rememberMe).then(response => {
            if (response.data.resultCode === 0) {


                dispatch(AuthThunk())
           }
    })
}
}
export const AuthThunkDeleteLogin = ()=> {
    return (dispatch)=> {
        usersAPI.apiDeleteLogin().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(SetAuth(null,null,null,false))
           }
    })
}
}

export default reducerAuth