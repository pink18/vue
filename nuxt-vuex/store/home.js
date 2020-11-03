export const state=()=>({
    err:1,
    data:{}
})

export const mutations = {
    updateHome(state,payload){
        state.err = payload.err;
        state.data = payload.data;
    }
}

export const actions = {
    
}