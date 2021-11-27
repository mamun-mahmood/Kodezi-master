import { axiosInstance } from '../../network/apis'
import { WebStorage } from '../../utils/webStorage'

export const getPackages = () => {
  const userAuth = WebStorage.getLocalAuthInfo()
  const token = userAuth ? userAuth.accessToken : ''
  return axiosInstance.get('/v1/packages', {
    headers: { Authorization: 'Bearer ' + token }
  })
}
