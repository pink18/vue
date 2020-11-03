//主模块

//state
export const state = () => ({
    count: 0,
    bNav:false
});

//mutations
export const mutations =  ({
    updateCount(state,pass){
        state.count = pass
    },
    updateBnav(state,pass){
        state.bNav = pass
    }
});

//actions
export const actions = {
    nuxtServerInit(store,context){
        //初始化东西到store当中
        // console.log('nuxtServerInit',store,context);
    }
}

//getters
export const getters = {
    getBnav(state){
        return state.bNav?'显示':'隐藏'
    },
    getCount(state){
        return state.count == 0 ?'为0':'不为0'
    }
}