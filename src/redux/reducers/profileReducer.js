import { Api } from "../../api/api";

const TOKEN = 'TOKEN'
const initiallState = {
    token:null,
}

let profileReducer = (state=initiallState,action) => {
    switch (action.type) {
        case TOKEN:
            return {
                ...state,
                token:action.token
            }
        default:
            return state
    }
}

const tokenActionCreater = token => ({type:TOKEN,token});

export const tokenThunk = (email,password) => async (dispatch)=>{
    let res = await  Api.authLogin(email,password);
    dispatch(tokenActionCreater(res.data.token))
    localStorage.setItem('token',res.data.token)
}
export const authThunk = () => async (dispatch)=>{
    try {
         let res = await  Api.auth();
    dispatch(tokenActionCreater(res.data.token))
    localStorage.setItem('token',res.data.token)
    } catch (error) {
        
    }
   
}

export default profileReducer;