import {createStore} from "vuex";
import router from '@/index'
const store = createStore({
    state:{
        username:'admin',
        password:'admin',
        logedIn:false,
        errorMsg: false
    },
    getters:{

    },
    mutations:{
        login(state,payload){
            if(state.username == payload.username && state.password == payload.password){
                state.logedIn = true
                router.push({name:'Home'})
            }else{

                state.errorMsg = true

            }
        }
    },
    actions: {
    }
})

export default store