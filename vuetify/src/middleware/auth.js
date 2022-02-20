export default function auth({next}){
    if(!localStorage.getItem('token')){
        return next({name: 'login'});
    }
    // }else if(localStorage.getItem('token')){
    //     return next({name: 'admin'});
    // }
    return next();
}