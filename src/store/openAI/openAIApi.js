import { axiosInstance } from '../../network/apis'
import { WebStorage } from '../../utils/webStorage'

export const completeOpenAI = (data) => {
  const userAuth = WebStorage.getLocalAuthInfo()
  const token = userAuth ? userAuth.accessToken : ''
  return axiosInstance.post('/v1/open-ai', data, {
    headers: { Authorization: 'Bearer ' + token }
  })
}
