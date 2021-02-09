import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        msg: 'Vuex desde cero',
        nombre: 'Luis',
        apellido: 'Arias',
        amigos: []
    },
    mutations: {
        addAmigo(state, amigo) {
            state.amigos = [amigo, ...state.amigos];
        },
        delAmigo(state, indice) {
            state.amigos.splice(indice, 1);
        }
    },
    actions: {
        addAmigoAction(context, amigo) {
            context.commit('addAmigo', amigo);
        },
        delAmigoAction(context, indice) {
            context.commit('delAmigo', indice);
        }
    },
    modules: {},
    getters: {
        mensaje(state) {
            return state.msg;
        },
        nombreCompleto(state) {
            return `${state.nombre} ${state.apellido}`
        }
    }
})