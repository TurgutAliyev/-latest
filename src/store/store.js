import { createStore } from "vuex";
import axios from "axios";
import router from '../router'

const store = createStore({
    state: {
        token: ""
    },

    getters: {
        checkToken(state) {
            return state.token !== "";
        }
    },

    mutations: {
        checkLocal(state) {
            let lToken = localStorage.getItem('token');

            if (lToken) {
                state.token = lToken;
            } else {
                router.replace('/register')
            }
        },
        delete({state,commit}){
            localStorage.removeItem('token')
        }
    },

    actions: {
        userSend({ state, commit }, payload) {

            let link = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='

            if (payload.isLogin) {
                link = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='
            }

            axios.post(link + 'AIzaSyDfNnnMQ18ImBIWkx7IPut_t8Ib--Xjv3g',
                { email: payload.email, password: payload.password, returnSecureToken: true }
            )
                .then(({ data }) => {
                    router.replace('/');
                    state.token = data.idToken;
                    localStorage.setItem('token', data.idToken);
                })
        },



        tableAdd({ state, commit }, payload) {
            axios.post('https://vue-vuex-app-bbe12-default-rtdb.firebaseio.com/tables.json',
                payload
            ).then(response => {
                console.log(response);
            })
        }
    }
})

export default store;