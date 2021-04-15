export const state=()=>({
    name:null,//当前登录的用户名
    token:null,//当前用户的token
    isLogin:false//当前用户是否登录，true登录，false未登录
})
export const mutations={
    setName(state,value){
        state.name=value
    },
    setToken(state,value){
        state.token=value
    },
    //改变登录状态
    changeLoginState(state){
        state.isLogin=!state.isLogin
    }
}