import React from 'react'
import { useLocation } from 'react-router-dom'
import { Field,reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import {tokenThunk} from './../../redux/reducers/profileReducer'
function LoginRedux({handleSubmit,error}) {
   
    const location = useLocation();

    const fromRedux = location.state?.from?.pathname || '/';
  return (
    <div>
        <h1>Авторизация</h1>
        <form  onSubmit={handleSubmit}>
        <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Field name="password" component="input" type="password" />
      </div>
     
      <button type="submit">Войти</button>
        </form>
        {fromRedux}
    </div>
  )
}
const LoginWraper= reduxForm({
  form: 'login'
})(LoginRedux)

let LoginPage = (props) =>{

  const onSubmitLogin = (data) =>{
    props.tokenThunk(data.email,data.password)
    console.log(props)
  }
  return (
  <div>
    {props.token?<span>{props.token}</span>:''}
    <LoginWraper onSubmit={onSubmitLogin} {...props}/>
  </div>
  )
    
  
}

let mapStateToProps = (state) =>{
  return {
    token:state.profile.token
  
  }
}

export default connect(mapStateToProps,{tokenThunk})(LoginPage);
