const state = {
    showDrawer: false,
};

const getters = {
    drawerstate: (state) =>state.showDrawer
};

const actions = {
    adjustDrawer({commit}, drawer) {
        commit('newDrawerstate', drawer)
    }
};

const mutations = {
    
    toggleShowDrawer: (state, value) => (state.showDrawer = value),

};

export default {
    state,
    getters,
    actions,
    mutations
};