<template>
    <div>home
      <div v-for="(item, index) in list" :key="index">{{item.name}}---{{item.password}}</div>

      <div>账号 ：<input type="text" v-model="name" /></div>
      <div>密码：<input type="text" v-model="password" /></div>
      <div>昵称：<input type="text" v-model="nickName" /></div>
      <button @click='addUser'>添加</button>
      
       <button type="primary"  @click="$refs.file.click()">上传素材</button>
      <input type="file"  ref="file" multiple @change="selectFiles">
    
       <img :src="imgUrl" />

    </div>
</template>

<script>
import userApi from 'allApi/user'
import commonApi from 'allApi/common'
export default {
  data () {
    return {
      list: [],
      name: '',
      password: '',
      nickName: '',
      file: '',
      imgUrl: ''
    }
  },
  methods: {
    async getUser () {
      // console.log('userApi', userApi)
      let res = await userApi.getUser({
        name: 'gddd',
        pwd: '1212',
        question: {
          question_name: 'ssss'
        }
      })
      this.list = res.list
      console.log('res', res)
    },
    async addUser () {
      let res = await userApi.addUser({
        name: this.name,
        password: this.password,
        nick_name: this.nickName,
        question: {
          qeustion_name: 'ssss'
        }
      })
      if (!res.code) {
        this.getUser()
      }
    },
    selectFiles (e) {
      console.log('eee', e)
      let files = e.target.files[0]
      /* eslint-disable no-undef */
      let param = new FormData()
      param.append('file', files)
      param.append('token_id', 'asdfasdfasfas')
      commonApi.uploadStatic(param, {type: 'form'}).then(res => {
        console.log('oututut', res)
        this.imgUrl = res.imgUrl
      })
    }
  },
  created () {
    // this.getUser()
  }
}
</script>

<style lang="less" scoped>
</style>
