import Mock from 'mockjs'

export default Mock.mock('/fetchVersion','get',{
  success: true,
  message: 'success',
  'data': {
      "name": "create-react-app",
      "version": "3.1.1"
    }
})