import api from "@/service/api.js";

export default {
  state: {
    user: {},
  },
  getters: {
    getUser({ user }) {
      return user;
    },
  },
  mutations: {
    setUser(state, data) {
      state.user = data;
    },
  },
  actions: {
    async login(_, payload) {
      const accessToken = await api.post("auth", payload);
      localStorage.setItem("token", accessToken.data.token);
    },
    async fetchUser({ commit }) {
      const user = await api.get("auth/user");
      commit("setUser", user.data);
    },
  },
};
