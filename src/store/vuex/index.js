import { createStore } from "vuex"
import order_module from "@/store/vuex/modules/order"

const store = createStore({
  state() {
    return {
      username: "Naldo.duran",
    }
  },
  getters: {
    first_name(state, getters, rootState) {
      // rootstate.profile.username
      const f = state.username.split(".")
      return f[0]
    },
  },
  mutations: {
    update_user_name(state, username) {
      state.username = username
    },
  },
  actions: {
    update_user_info(_store, username) {
      const { state, commit } = _store
      commit("update_user_name", username)
    },
  },
  modules: {
    order: order_module,
  },
})

export default store
