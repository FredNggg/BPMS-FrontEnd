// #ifndef VUE3
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let store = new Vuex.Store({
// #endif

// #ifdef VUE3
    import {createStore} from 'vuex'
    const store = createStore({
// #endif
        state: {
            wx_token: '',
            roleId: 0, // 用户角色：0 为营销人员，1 为管理人员
        },

        mutations: {
            // 设置用户角色 Id
            setRoleId(state, data) {
                state.roleId = data;
                uni.setStorageSync('roleId', data)
            }
        }

    })



    export default store;

