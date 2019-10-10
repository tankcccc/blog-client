import axios from 'axios'
import { Message } from 'element-ui' 

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded' //请求Content-Type
axios.defaults.baseURL = 'http://blog-server.hunger-valley.com' //接口路径,后边不需要路径了
axios.defaults.withCredentials = true//前端和后端是在不同的服务器上边

export default function request(url, type = 'GET', data = {}) { 
  return new Promise((resolve, reject) => {
    let option = {//用promise封装，把用户的promise参数拿过来，放在option里边，根据你的type类型
      url,
      method: type
    }
    if(type.toLowerCase() === 'get') {
      option.params = data //如果是get就把data放在params里边，
    }else {
      option.data = data  //如果不是get就放在option.data
    }
    axios(option).then(res => {
      console.log(res.data)
      if(res.data.status === 'ok') {
        resolve(res.data)
      }else{
        Message.error(res.data.msg)
        reject(res.data)
      }
    }).catch(err => {
      Message.error('网络异常') //拒因
      reject({ msg: '网络异常' })
    })
  })
}


// request('/auth/login', 'POST', {username: 'hunger', password: '123456'})
//   .then(data=>{
//     console.log(data)
//   })