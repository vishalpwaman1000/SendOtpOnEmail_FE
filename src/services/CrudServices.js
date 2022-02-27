import Config from '../configuration/Config'
import AxiosServices from './AxiosServices'

const axiosService = new AxiosServices()

export default class CrudServices {
  SendOTPOnEmailId(data) {
    //console.log('SendOTP : ' + Config.SendOTP)
    return axiosService.post(Config.SendOTPOnEmailId, data, false)
  }

  GetEmailOtpDetail(data) {
    //console.log('GetMobileOtpDetail : ' + Config.GetMobileOtpDetail)
    return axiosService.post(Config.GetEmailOtpDetail, data, false)
  }

  OtpVarification(data) {
    console.log('OtpVarification : ' + Config.OtpVarification, 'Data : ', data)
    return axiosService.post(Config.OtpVarification, data, false)
  }
}
