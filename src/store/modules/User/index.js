const backUser = (state, payload) => {
  console.log('state', state)
  return state
}

const fetchData = async (info) => {
  let obj = {}
  // alert(1)
  // await setTimeout(_ => {
  //   alert(333)
  //   obj.info = info
  // }, 1000)
  obj.info = info
  return obj
}

const setUser = async (ctx, payload) => {
  let back = await fetchData(payload.info)
  console.log('ctx', ctx)
  ctx.commit('SET_USER', {
    info: back.info,
    list: {
      name: '舞台右在在'
    }
  })
}

const getUser = async ({ dispatch, commit }) => {
  const data = {
    info: 'yyyyy'
  }
  await dispatch('setUser', data)
  commit('GET_USER')
}

const state = {
  info: [],
  list: {
    name: 'gooo'
  }
}
const mutations = {
  'GET_USER' (state) {
    setTimeout(_ => {
      return state
    }, 1000)
  },
  'SET_USER' (state, obj) {
    Object.assign(state, obj)
  }
}

export default {
  state,
  mutations,
  getters: {
    backUser
  },
  actions: {
    getUser,
    setUser
  }
}
