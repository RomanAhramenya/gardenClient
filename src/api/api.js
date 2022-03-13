import  axios from 'axios'
const instance = axios.create({
    headers:{
        'Content-Type':'application/json'
    }
});

export const Api = {
    authLogin:(email,password)=>{
        return instance.post('/api/auth/login',JSON.stringify({email,password}))
    },
    reg: () => {
        return instance.post('/api/auth/register',JSON.stringify({ email:'romanahr@gmail.com',password:'6557878878'}))
    },
    getContent: (path) => instance.get(`/api/auth/${path}`),
    upload:(data)=> axios.post("/api/auth/upload", data, {
      headers: {
        "Content-Type": "mulpipart/form-data",
      },
      
    }),
    delete: (path,id) => instance.post(`/api/auth/${path}/delete`,{id})
    
    
}