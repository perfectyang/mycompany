import fnTool from '../fnTool.js'
const opt = {
  apiName: 'user',
  fnList: [
    'getUser',
    'addUser'
  ]
}
export default fnTool(opt)
